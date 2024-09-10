import "cookie-store";

async function getIpFromCloudflare() {
  let f = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
  let data = await f.text();
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
  return data.match(ipRegex)?.[0];
}

export const callAPI = async <T = any>(
  url: string,
  fetchOptions?: Partial<RequestInit> & { includeIp?: any }
): Promise<[null, T] | [Error, null]> => {
  try {
    const API_URL = import.meta.env.PUBLIC_API_URL || "";
    // @ts-ignore
    const token = await cookieStore.get("token");
    const response = await fetch(API_URL + url, {
      ...(fetchOptions || {}),
      headers: {
        domain: import.meta.env.PUBLIC_OVERRIDE_DOMAIN || location.hostname,
        ...(!fetchOptions?.body || fetchOptions?.body instanceof FormData
          ? {}
          : { "Content-Type": "application/json" }),
        Authorization: token?.value ? `Bearer ${token?.value}` : "",
        ...(fetchOptions?.headers || {}),
        ...(fetchOptions?.includeIp ? { ip: await getIpFromCloudflare() } : {}),
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    return [null, data];
  } catch (error: any) {
    console.warn(
      `callAPI failed at ${url} with ${fetchOptions ? JSON.stringify(fetchOptions) : "{}"} error message: ${error?.message}`
    );
    console.error(error);
    return [error instanceof Error ? error : new Error("An unknown error occurred"), null];
  }
};
