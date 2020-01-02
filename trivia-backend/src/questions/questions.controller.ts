import {
  Controller,
  Get,
  Inject,
  Post,
  Body,
  Patch,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question, Category } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { get } from 'https';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  async getQuestions(): Promise<Question[]> {
    return await this.questionsService.getQuestions();
  }

  @Get()
  async getQuestionById(@Param('id') id: string): Promise<Question> {
    return this.getQuestionById(id);
  }

  @Delete()
  async deleteQuestionById(@Param('id') id: string): Promise<void> {
    return this.deleteQuestionById(id);
  }

  @Post()
  async createQuestion(
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    return this.questionsService.createQuestion(createQuestionDto);
  }

  @Patch()
  async updateQuestion(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ): Promise<Question> {
    return this.questionsService.updateQuestionById(id, updateQuestionDto);
  }

  @Get('/categories')
  async getCategories(): Promise<Category[]> {
    return this.questionsService.getCategories();
  }

  @Get('/categories/:id')
  async getCategoryById(@Param('id') id: string): Promise<Category> {
    return this.questionsService.getCategoryById(id);
  }

  @Post('/categories')
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.questionsService.createCategory(createCategoryDto);
  }

  @Patch('/categories/:id')
  async updateCategoryTitle(
    @Param('id') id: string,
    @Body('category') categoryTitle: string,
  ): Promise<Category> {
    return this.questionsService.updateCategory(id, categoryTitle);
  }

  @Delete('/categories/:id')
  async deleteCategory(@Param('id') id: string): Promise<void> {
    return await this.questionsService.deleteCategory(id);
  }
}
