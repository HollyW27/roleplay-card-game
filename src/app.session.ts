import { Injectable } from '@nestjs/common';
import QuestionOrderRandomiser from './requestFunctions/randomQuestionOrderGenerator';

@Injectable()
export class AppSession {
  private questionNumber: number = 0;
  private questionOrder: Array<number> = [];
  constructor() {
    this.questionOrder = QuestionOrderRandomiser(10);
  }
  private questionArray: Array<string> = [
    'What does the monarch look like?',
    'What does the monarch like to do for fun?',
    'What does the monarch like hide from everyone except you?',
    'What does the monarch do when they are angry?',
    'What does the monarch do only for you?',
    'What does the monarch do that you disagree with?',
    'What do you wish the monarch would do?',
    "What is the monarch's favourite thing",
    'Who in the kingdom is the monarch suspicious of?',
    "Who is the monarch's favorite person?",
  ];
  getNextQuestion(): void {
    this.questionNumber++;
  }
  getCurrentNumber(): number {
    return this.questionNumber;
  }
  getPreviousQuestion(): void {
    this.questionNumber--;
  }
  getCurrentQuestion(): string {
    return this.questionArray[this.questionOrder[this.questionNumber] - 1];
  }
}
