import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //Add arg to spec Question numbers
  @Get('questionOrder')
  getRandomQuestionOrderArray(): Array<number> {
    return this.appService.getRandomQuestionOrder();
  }

  @Get('randomURL')
  getRandomURL(): string {
    return this.appService.getRandomURL();
  }
}
