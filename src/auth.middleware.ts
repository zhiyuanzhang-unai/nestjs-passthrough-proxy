import { NestMiddleware, Injectable } from "@nestjs/common";
import { Request, Response } from 'express';
import  * as jwt  from "jsonwebtoken";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {        
        var jwtToken = req.header('Authorization').slice(7); // remove 'Bearer ' string from 'Authorization' value
        jwt.verify(jwtToken, 'hard!to-guess_secret', function(err){
            if(err){                
                res.end(err.message);
            }            
        });
        next();
    }
}