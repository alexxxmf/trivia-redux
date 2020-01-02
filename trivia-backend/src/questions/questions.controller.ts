import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question, Category } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  async getQuestions(): Promise<Question[]> {
    return await this.questionsService.getQuestions();
  }

  @Post()
  async createQuestion(
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    console.log('===============');
    console.log(createQuestionDto);
    console.log('===============');
    return this.questionsService.createQuestion(createQuestionDto);
  }

  @Get('/categories')
  async getCategories(): Promise<Category[]> {
    return this.questionsService.getCategories();
  }

  @Post('/categories')
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.questionsService.createCategory(createCategoryDto);
  }
}
