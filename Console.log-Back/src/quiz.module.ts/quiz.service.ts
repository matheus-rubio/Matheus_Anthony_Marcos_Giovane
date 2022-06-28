import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Quiz, QuizDocument } from './quiz.schema';
import { QuizCreateDto } from './dto/quiz-create.dto';
@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz.name)
    private quizModel: Model<QuizDocument>,
  ) {}

  async store(quizDto: QuizCreateDto): Promise<Quiz | Error> {
    try {
      const createdQuiz = new this.quizModel(quizDto);
      return createdQuiz.save();
    } catch (error) {
      return error;
    }
  }
}
