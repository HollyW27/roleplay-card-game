import { Injectable } from '@nestjs/common';
import QuestionOrderRandomiser from './requestFunctions/randomQuestionOrderGenerator';
import randomURLGenerator from './requestFunctions/randomURLGenerator';

@Injectable()
export class AppService {
  //Add argument to have it generate the correct number of questions
  getRandomQuestionOrder(): Array<number> {
    const questionOrder: Array<number> = QuestionOrderRandomiser(10);
    return questionOrder;
  }
  getRandomURL(): string {
    const randomURL: string = randomURLGenerator();
    return randomURL;
  }
}
