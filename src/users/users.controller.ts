// src/users/user.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post('register')
    async registerUser(@Body('email') email: string, @Body('username') username: string, @Body('password') password: string) {
        if (!email || !username || !password) {
            throw new BadRequestException('Email and password are required');
        }
        return this.userService.register(email, username, password);
    }
}
