import { defineMiddleware } from "astro:middleware";
import { generateServerCallAPI } from "../utils/serverCallApi";

export const onRequest = defineMiddleware(async (context, next) => {
  context.locals.callAPI = generateServerCallAPI(context);

  try {
    context.locals.token = context.cookies.get("token")?.value;
    context.locals.username = context.cookies.get("username")?.value;
    context.locals.userSlug = context.cookies.get("userSlug")?.value;

    const [[authCheckError, authCheck], [gameInfoError, gameInfo]] = await Promise.all([
      context.locals.token
        ? context.locals.callAPI("/api/auth/check")
        : Promise.resolve([true, null]),
      context.locals.callAPI(
        `/api/game?domain=${Bun.env["PUBLIC_OVERRIDE_DOMAIN"] || context.url.hostname}`
      ),
    ]);

    if (context.url.pathname === "/ads.txt") {
      const adstxt = gameInfo?.adstxt || "";
      return new Response(adstxt, {
        headers: { "Content-Type": "text/plain" },
      });
    }

    if (gameInfoError) {
        throw new Error("Not found");
    }
        
    context.locals.game = gameInfo;

    if (authCheckError) {
      context.locals.token = undefined;
      context.locals.username = undefined;
      context.locals.userSlug = undefined;
      context.cookies.set("token", "", { maxAge: 0 });
      context.cookies.set("username", "", { maxAge: 0 });
      context.cookies.set("userSlug", "", { maxAge: 0 });
    } else {
      context.locals.token = authCheck.data.token;
      context.locals.username = authCheck.data.username;
      context.locals.userSlug = authCheck.data.userSlug;
      context.cookies.set("token", authCheck.data.token, { maxAge: 60 * 60 * 24 * 7 });
      context.cookies.set("username", authCheck.data.username, { maxAge: 60 * 60 * 24 * 7 });
      context.cookies.set("userSlug", authCheck.data.userSlug, { maxAge: 60 * 60 * 24 * 7 });
    }

    return await next();
  } catch (error) {
    // @ts-ignore
    if (error?.message === "Not found") {
      console.warn("Ocurrió un error not_found en " + context.request.url);
      return context.redirect("/404");
    }
    console.error(error);
    console.warn("Ocurrió un error 500 en " + context.request.url);
    return context.redirect("/500");
  }
});
