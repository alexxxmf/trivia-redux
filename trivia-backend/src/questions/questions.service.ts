import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository, CategoryRepository } from './question.repository';
import { Question, Category } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  async getQuestions(): Promise<Question[]> {
    return await this.questionRepository.getQuestions();
  }

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    return await this.questionRepository.createQuestion(createQuestionDto);
  }

  async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.getCategories();
  }

  async createCategory(createCategory: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.createCategory(createCategory);
  }
}
