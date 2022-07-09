import { Request, Response } from 'express';
import { route, GET } from "awilix-express";

@route('/')
export class DefaultController {
    @GET()
    public index(req: Request, res: Response): void {
        console.log('por aca paso')
        res.send('Running ..');
    }
}