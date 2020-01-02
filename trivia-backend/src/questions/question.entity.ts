import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
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

  @OneToMany(
    type => Category,
    category => category.question,
    { eager: true },
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

  constructor({ incorrectAnswers }: CreateQuestionDto) {
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
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  categoryId: string;

  @Column()
  category: string;

  @ManyToOne(
    type => Question,
    question => question.category,
    { eager: false },
  )
  question: string;
}
