export interface WindowInterface {
  production: boolean;
  authUrl: any;
  dbUrl: any;
  fileUrl: any;
}

declare global {
  interface Window {
    __env: any;
  }
}

export const environment = {
  production: true,
  authUrl: window.__env.authUrl,
  dbUrl: window.__env.dbUrl,
  fileUrl: window.__env.fileUrl,
};
