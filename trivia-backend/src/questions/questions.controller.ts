import { Controller, Get, Inject } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  async getQuestions(): Promise<Question[]> {
    return await this.questionsService.getQuestions();
  }
}
