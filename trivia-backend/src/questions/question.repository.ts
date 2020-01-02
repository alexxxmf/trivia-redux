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
    } = createQuestionDto;

    const questionInstance = new Question(incorrectAnswers);

    questionInstance.category = category;
    questionInstance.correctAnswer = correctAnswer;
    questionInstance.question = question;
    questionInstance.difficulty = difficulty;
    questionInstance.hint = hint;

    try {
      await this.create();
      return questionInstance;
    } catch (error) {
      console.log(error);
    }
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
    categoryInstance.categorySlug = this.createCategorySlug(category);

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

  private createCategorySlug(categoryName: string): string {
    return categoryName.replace(/\s/g, '-').toLowerCase();
  }
}
