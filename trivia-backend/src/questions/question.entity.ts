import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';

export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export enum Type {
  BOOLEAN = 'BOOLEAN',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  MIXED = 'MIXED',
}

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  questionId: string;

  @Column()
  difficulty: Difficulty;

  @Column()
  correctAnswer: string;

  @ManyToOne(
    type => Category,
    category => category.question,
    { eager: false },
  )
  category: string;

  @Column()
  incorrectAnswers: string;

  @Column()
  question: string;

  @Column()
  type: Type;

  @Column({ nullable: true })
  hint: string;

  @Column()
  categoryId: number;

  constructor(incorrectAnswers: string[]) {
    super();

    if (!!incorrectAnswers && incorrectAnswers instanceof Array) {
      this.incorrectAnswers = JSON.stringify(incorrectAnswers);
    }
  }

  deserializeIncorrectAnswers(): string[] {
    return JSON.parse(this.incorrectAnswers);
  }
}

@Entity()
@Unique(['categorySlug'])
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  categoryId: string;

  @Column()
  category: string;

  @Column()
  categorySlug: string;

  @OneToMany(
    type => Question,
    question => question.category,
    { eager: true },
  )
  question: Question[];
}
