import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private task: string,
  ) {}

  getHello(): string {
    console.log(this.task);
    return `Hello World! ${this.apiKey}`;
  }
}
