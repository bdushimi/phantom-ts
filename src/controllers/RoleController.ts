import { Request, Response } from 'express';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { Controller, Post, Get } from '@overnightjs/core';
import { getRepository } from 'typeorm';
import { Role } from '../entity/Role';
import IRole from '../interfaces/Role';
import { Logger } from '@overnightjs/logger';

@Controller('api/')
export class RoleController {
  @Post('roles')
  private addRole = async (req: Request, res: Response) => {
    const roleBody: IRole = req.body as IRole;
    const { name } = roleBody;
    const role = new Role();
    role.name = name;
    const roleRepository = getRepository(Role);
    const newRole = roleRepository.create(role);
    await roleRepository.save(newRole);
    res.status(OK).json({
      message: `New role ${role.name} have been successfully created.`,
    });
  };

  @Get('roles')
  private getAllRoles = async (req: Request, res: Response) => {
    const roleRepository = getRepository(Role);
    const roles = await roleRepository.find();
    res.status(OK).json({ roles });
  };
}
