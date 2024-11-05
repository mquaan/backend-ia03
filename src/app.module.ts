import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
	controllers: [AppController],
	imports: [
		ConfigModule.forRoot(), // Load .env file
		MongooseModule.forRoot(process.env.DATABASE_URI), // Use the DATABASE_URI from .env
		UsersModule,
		AuthModule,
	],
})
export class AppModule { }