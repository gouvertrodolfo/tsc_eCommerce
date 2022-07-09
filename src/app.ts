import express from 'express';
import { loadControllers } from 'awilix-express';
import loadContainer from './container';

export const app: express.Application = express();

loadContainer(app);

app.use(loadControllers('controllers/*.ts', { cwd: __dirname }));

app.use('/', (req,res)=>{res.send('descarte')});
