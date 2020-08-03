import { NestMiddleware, Injectable } from "@nestjs/common";
import { createProxyMiddleware } from 'http-proxy-middleware';
import { Request, Response } from 'express';

@Injectable()
export class ProxyMiddleware implements NestMiddleware{   
    constructor() {
    }
    private proxy = createProxyMiddleware({
        target: 'http://localhost:3000',
        secure: false,
        logLevel: "debug"
    });

    use(req: Request, res: Response, next: () => void) {
        this.proxy(req, res, next);
    }
}