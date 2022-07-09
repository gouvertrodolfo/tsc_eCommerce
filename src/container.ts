import express = require('express');
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";

export default (app: express.Application): void => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });
    
    app.use(scopePerRequest(container));
};