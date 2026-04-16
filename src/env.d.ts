/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SENDFOX_API_TOKEN: string;
  readonly SMTP_EMAIL: string;
  readonly SMTP_PASSWORD: string;
  readonly RECEIVER_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
