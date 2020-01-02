import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(QuestionRepository)
    private taskRepository: QuestionRepository,
  ) {}

  async getQuestions(): Promise<Question[]> {
    return await this.taskRepository.getQuestions();
  }
}
