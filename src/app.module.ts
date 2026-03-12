import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppSession } from './app.session';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppSession],
})
export class AppModule {}
