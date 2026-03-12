import { Injectable } from '@nestjs/common';
import QuestionOrderRandomiser from './requestFunctions/randomQuestionOrderGenerator';

@Injectable()
export class AppSession {
  private questionNumber: number = 0;
  getRandomQuestionOrder(): Array<number> {
    return QuestionOrderRandomiser(10);
  }
  getNextQuestion(): void {
    this.questionNumber++;
  }
  getCurrentNumber(): number {
    return this.questionNumber;
  }
  getPreviousQuestion(): void {
    this.questionNumber--;
  }
}
