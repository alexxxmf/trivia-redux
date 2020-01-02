import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository, CategoryRepository } from './question.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionRepository, CategoryRepository])],
  providers: [QuestionsService],
  controllers: [QuestionsController],
})
export class QuestionsModule {}
