import express from 'express';
import { controller } from './app.controller';

const router = express.Router();

router.get('/', controller.getActive);

export const appRouter = router;
