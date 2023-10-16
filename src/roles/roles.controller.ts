import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService){}

    @ApiOperation({summary: "Создание роли"})
    @ApiResponse({status: 200})
    @Post()
    create(@Body() dto:CreateRoleDto){
        return this.roleService.createRole(dto);
    }

    @Get("/:value")
    getByValue(@Param("value") value: string){
        return this.roleService.getRoleByValue(value)
    }


    @Get()
    getAll(){
        return this.roleService.getAll()
    }


   
}
