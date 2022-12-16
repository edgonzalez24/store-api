import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

const API_KEY = '12345678';
const API_KEY_PROD = 'zxcvbnm';
@Module({
  imports: [UsersModule, ProductsModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        try {
          const { data } = await lastValueFrom(
            http.get('https://jsonplaceholder.typicode.com/todos'),
          );
          return data;
        } catch (error) {
          console.error(error);
        }
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
