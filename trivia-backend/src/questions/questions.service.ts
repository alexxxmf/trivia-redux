import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
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

  async getCategoryById(id: string): Promise<Category> {
    const categoryFound = await this.categoryRepository.findOne({
      where: { id },
    });
    if (categoryFound) {
      return categoryFound;
    } else {
      throw new NotFoundException(`Category with id "${id}" not found`);
    }
  }

  async updateCategory(id: string, categoryTitle: string) {
    const categoryFound = await this.getCategoryById(id);
    categoryFound.category = categoryTitle;
    categoryFound.save();

    return categoryFound;
  }

  async deleteCategory(id: string): Promise<void> {
    try {
      await this.categoryRepository.delete({ id });
    } catch (error) {
      if (error.code === '23503') {
        throw new ConflictException(
          'To delete this category make sure there are no questions linked to this category',
        );
      } else {
        console.log(error);
      }
    }
  }
}
