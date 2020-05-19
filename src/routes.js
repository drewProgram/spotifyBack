import { Router } from 'express';
import SongController from './app/controllers/SongController';
import FileController from './app/controllers/FileController';

const routes = new Router();

routes.get('/songs', SongController.index);
routes.post('/songs', SongController.store);

routes.get('/file', FileController.index);

export default routes;
