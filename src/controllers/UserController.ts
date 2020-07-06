import { Request, Response } from 'express';
import { OK } from 'http-status-codes';
import { Controller, Get } from '@overnightjs/core';

@Controller('api/')
export class UserController {
  @Get()
  getUser(req: Request, res: Response): any {
    return res.status(OK).json({ response: 'Welcome to Phantom' });
  }
}
