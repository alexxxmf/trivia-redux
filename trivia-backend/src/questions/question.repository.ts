import { Repository, EntityRepository } from 'typeorm';
import { Question, Category } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ConflictException } from '@nestjs/common';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
  getQuestions(): Promise<Question[]> {
    return this.find();
  }

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    const {
      question,
      correctAnswer,
      incorrectAnswers,
      category,
      difficulty,
      hint,
      type,
    } = createQuestionDto;

    const questionInstance = new Question();

    questionInstance.category = category;
    questionInstance.correctAnswer = correctAnswer;
    questionInstance.incorrectAnswers = this.serializeIncorrectAnswers(
      incorrectAnswers,
    );
    questionInstance.type = type;
    questionInstance.question = question;
    questionInstance.difficulty = difficulty;
    questionInstance.hint = hint;

    try {
      await questionInstance.save();
      return questionInstance;
    } catch (error) {
      console.log(error);
    }
  }

  private serializeIncorrectAnswers(incorrectAnswers: string[]) {
    return JSON.stringify(incorrectAnswers);
  }

  private deserializeIncorrectAnswers(serializedIncorrectAnswers): string {
    return JSON.parse(serializedIncorrectAnswers);
  }
}

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async getCategories(): Promise<Category[]> {
    return await this.find();
  }

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const categoryInstance = new Category();

    const { category } = createCategoryDto;
    categoryInstance.category = category;

    try {
      await categoryInstance.save();
      return categoryInstance;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Category already exists');
      } else {
        console.log(error);
      }
    }
  }
}
