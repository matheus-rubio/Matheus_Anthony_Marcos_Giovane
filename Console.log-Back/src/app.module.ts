import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user.modules/user.controller';
import { UserService } from './user.modules/user.service';
import { UserModules } from './user.modules/user.module';
import { QuizModules } from './quiz.modules/quiz.module';
import { SubjectModules } from './subjects.module/subjects.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASSWORD}@${process.env.MONGOOSE_URL}`,
    ),
    UserModules,
    QuizModules,
    SubjectModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
