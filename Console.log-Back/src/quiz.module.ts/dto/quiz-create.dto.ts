import { IQuestions } from './questions.interface';

export class QuizCreateDto {
  title: string;
  questions: IQuestions[];
}
