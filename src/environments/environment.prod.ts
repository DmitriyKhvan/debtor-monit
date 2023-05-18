export interface WindowInterface {
  production: boolean;
  authUrl: any;
  dbUrl: any;
  dbUrl2: any;
  wsUrl: any;
  fileUrl: any;
}

declare global {
  interface Window {
    __env: any;
  }
}

export const environment: WindowInterface = {
  production: true,
  authUrl: window.__env.authUrl,
  dbUrl: window.__env.dbUrl,
  dbUrl2: window.__env.dbUrl2,
  wsUrl: window.__env.wsUrl,
  fileUrl: window.__env.fileUrl,
};
