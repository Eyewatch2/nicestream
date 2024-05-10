// env.d.ts
declare namespace NodeJS {
    export interface ProcessEnv {
      SMTP_EMAIL: string;
      SMTP_PASSWORD: string;
    }
  }
  