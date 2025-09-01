/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string; // optional because we proxy in dev
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
