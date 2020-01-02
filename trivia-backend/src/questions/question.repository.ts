import { Repository, EntityRepository } from 'typeorm';
import { Question, Category } from './question.entity';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
  getQuestions(): Promise<Question[]> {
    return this.find();
  }
}

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  getCategories(): Promise<Category[]> {
    return this.find();
  }
}
