declare const express: any;
declare const path: any;
declare const cors: any;
declare const productsRoutes: any;
declare const app: any;
declare const allowedOrigins: string[];
declare const corsOptions: {
    origin: (origin: any, callback: any) => any;
    credentials: boolean;
};
declare const dotenv: any;
declare const port = 3001;
