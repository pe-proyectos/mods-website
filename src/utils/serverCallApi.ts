export const generateServerCallAPI =
  (context: any) =>
  async <T = any>(
    url: string,
    fetchOptions?: Partial<RequestInit> & { includeIp?: any }
  ): Promise<[null, T] | [Error, null]> => {
    try {
      const API_URL = Bun.env["PUBLIC_API_URL"] || "";
      const response = await fetch(API_URL + url, {
        ...(fetchOptions || {}),
        headers: {
          domain: Bun.env["PUBLIC_OVERRIDE_DOMAIN"] || context.url.hostname,
          "Content-Type": "application/json",
          Authorization: context.locals.token ? `Bearer ${context.locals.token}` : "",
          ...(fetchOptions?.headers || {}),
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: T = await response.json();
      return [null, data];
    } catch (error) {
      return [error instanceof Error ? error : new Error("An unknown error occurred"), null];
    }
  };
