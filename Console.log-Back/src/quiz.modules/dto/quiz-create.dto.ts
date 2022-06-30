import { ApiProperty } from '@nestjs/swagger';
import { IQuestions } from './questions.interface';

export class QuizCreateDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  questions: IQuestions[];
}
