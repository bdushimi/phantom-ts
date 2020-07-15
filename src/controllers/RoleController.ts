import { Request, Response } from 'express';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { Controller, Post, Get } from '@overnightjs/core';
import { dbConnection } from '../db-connection';
import { Role } from '../entity/Role';
import IRole from '../interfaces/Role';
import { Logger } from '@overnightjs/logger';

@Controller('api/')
export class RoleController {
  @Post('roles')
  addRole(req: Request, res: Response): any {
    dbConnection
      .then(async (connection) => {
        const roleBody: IRole = req.body as IRole;
        const { name } = roleBody;
        const role = new Role();
        role.name = name;
        await connection.manager.save(role);
        res
          .status(OK)
          .json({
            message: `New role ${role.name} have been successfully created.`,
          });
      })
      .catch((error) => {
        Logger.Err(error);
        res.status(INTERNAL_SERVER_ERROR).json(error);
      });
  }

  @Get('roles')
  getAllRoles(req: Request, res: Response): any {
    dbConnection
      .then(async (connection) => {
        const roles: Role[] = await connection.manager.find(Role);
        res.status(OK).json({ roles });
      })
      .catch((error) => {
        Logger.Err(error);
        res.status(INTERNAL_SERVER_ERROR).json(error);
      });
  }
}
