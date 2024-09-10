/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_OVERRIDE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    theme: "light" | "black";
    token: string | undefined;
    username: string | undefined;
    userSlug: string | undefined;
    logged: boolean;
    game: {
      id: number;
      code: string;
      slug: string;
      domain: string;
      title: string;
      name: string;
      description: string;
      footerDescription: string;
      faviconUrl: string;
      shareImageUrl: string;
      logoLgImageUrl: string;
      logoMdImageUrl: string;
      logoSmImageUrl: string;
      logoFooterImageUrl: string;
      youtubeUrl: string;
      facebookUrl: string;
      xUrl: string;
      instagramUrl: string;
      discordUrl: string;
      adstxt: string;
      modLoaders: Array<{
        id: number;
        code: string;
        slug: string;
        name: string;
        description: string;
        gameId: number;
      }>;
      footerRelatedSitesCategory: Array<{
        id: number;
        title: string;
        gameId: number;
        gameRelatedSites: Array<{
          id: number;
          name: string;
          description: string;
          url: string;
        }>;
      }>;
    };

    callAPI: <T = any>(
      url: string,
      fetchOptions?: Partial<RequestInit> & { includeIp?: any }
    ) => Promise<[null, T] | [Error, null]>;
  }
}
