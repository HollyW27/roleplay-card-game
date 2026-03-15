import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppSession } from './app.session';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appSession: AppSession,
  ) {}
  //Add arg to spec Question numbers
  @Get('currentQuestionNumber')
  getCurrentQuestionNumber(): number {
    return this.appSession.getCurrentNumber();
  }
  @Get('getNextQuestion')
  getNextQuestionNumber(): void {
    this.appSession.getNextQuestion();
  }
  @Get('getPreviousQuestion')
  getPreviousQuestionNumber(): void {
    this.appSession.getPreviousQuestion();
  }
  @Get('randomURL')
  getRandomURL(): string {
    return this.appService.getRandomURL();
  }
  @Get('currentQuestion')
  getCurrentQuestion(): string {
    return this.appSession.getCurrentQuestion();
  }
}
