import express, { Express } from 'express';
import { appRouter } from '../modules/app/app.routes';

const router = express.Router();

const getApiRoutes = () => {
  router.use('/app', appRouter);

  return router;
};

export const setupApiRoutes = (app: Express): void => {
  app.use('/api/v1', getApiRoutes());
};
