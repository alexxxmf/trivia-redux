import React from "react";

import { Result as Question } from "../service";
import {
  SQuestionText,
  SResultWrapperView,
  SOverallResultText,
  SOverallResultWrapper,
  SWrongAnswerText,
  SRightAnswerText,
  SMainWrapper,
  SAllResultsWrapperView,
  SOverallResultBox,
  SQuestionWrapperView,
  SAnswerRightOrWrongWrapperView
} from "./TriviaShowResults.style";

interface IProps {
  questions: Question[];
  answers: boolean[];
}

const computeOverallScore = (
  questions: Question[],
  answers: Boolean[]
): string => {
  let score = 0;

  questions.forEach((question: Question, index: number) => {
    const correctAnswer =
      question.correct_answer.toLocaleLowerCase() === "true" ? true : false;
    if (answers[index] === correctAnswer) {
      score += 1;
    }
  });

  return `${score}/${questions.length}`;
};

const TriviaShowResults = ({ questions, answers }: IProps) => {
  return (
    <SMainWrapper>
      <SOverallResultWrapper>
        <SOverallResultBox>
          <SOverallResultText>
            {computeOverallScore(questions, answers)}
          </SOverallResultText>
        </SOverallResultBox>
      </SOverallResultWrapper>
      <SAllResultsWrapperView>
        {questions.map(({ question, correct_answer }, index) => {
          const correctAnswerBoolean =
            correct_answer.toLowerCase() === "true" ? true : false;
          return (
            <SResultWrapperView key={question}>
              <SAnswerRightOrWrongWrapperView>
                {answers[index] === correctAnswerBoolean ? (
                  <SRightAnswerText>RIGHT</SRightAnswerText>
                ) : (
                  <SWrongAnswerText>WRONG</SWrongAnswerText>
                )}
              </SAnswerRightOrWrongWrapperView>

              <SQuestionWrapperView>
                <SQuestionText>{question}</SQuestionText>
              </SQuestionWrapperView>
            </SResultWrapperView>
          );
        })}
      </SAllResultsWrapperView>
    </SMainWrapper>
  );
};

export default TriviaShowResults;
