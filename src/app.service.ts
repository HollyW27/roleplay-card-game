import { Injectable } from '@nestjs/common';
import randomURLGenerator from './requestFunctions/randomURLGenerator';

@Injectable()
export class AppService {
  getRandomURL(): string {
    return randomURLGenerator();
  }
}
