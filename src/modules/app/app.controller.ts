import { Request, Response, NextFunction } from 'express';
import { AppService } from './app.service';

class AppController {
  private appService: AppService;

  constructor() {
    this.appService = new AppService();
  }

  public getActive = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const response = await this.appService.getActive();
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}

export const controller = new AppController();
