import {
  Injectable,
  NotFoundException,
  ConflictException,
  Param,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository, CategoryRepository } from './question.repository';
import { Question, Category } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

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

  async getQuestionById(@Param('id') id: string): Promise<Question> {
    const found = await this.questionRepository.findOne({ where: { id } });
    if (found) {
      return found;
    } else {
      throw new NotFoundException(`Question with id "${id}" not found`);
    }
  }

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    return await this.questionRepository.createQuestion(createQuestionDto);
  }

  async updateQuestionById(
    id: string,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<Question> {
    const questionInstance = await this.getQuestionById(id);

    const {
      type,
      hint,
      question,
      correctAnswer,
      incorrectAnswers,
      difficulty,
    } = updateQuestionDto;

    questionInstance.type = type;
    questionInstance.hint = hint;
    questionInstance.question = question;
    questionInstance.correctAnswer = correctAnswer;
    // TODO: this is garbage, move this login into entity so we have a central place for serializing
    questionInstance.incorrectAnswers = JSON.stringify(incorrectAnswers);
    questionInstance.difficulty = difficulty;

    questionInstance.save();

    return questionInstance;
  }

  async deleteQuestionById(id: string): Promise<void> {
    const result = await this.questionRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
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
      const result = await this.categoryRepository.delete({ id });

      if (result.affected === 0) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
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
