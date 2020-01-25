import { Difficulty, Type } from '../question.entity';

export interface UpdateQuestionDto {
  difficulty: Difficulty;
  correctAnswer: string;
  category: string;
  incorrectAnswers: string[];
  question: string;
  type: Type;
  hint?: string;
}