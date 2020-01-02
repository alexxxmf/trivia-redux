import React from "react";

import {
  SAnswerButton,
  SButtonWrapperView,
  SCategoryText,
  SQuestionText,
  SButtonText,
  SCategoryWrapper,
  SQuestionWrapper,
  MainWrapperView,
  SQuestionBorderView
} from "./TriviaQuestion.style";

interface IProps {
  question: string;
  category: string;
  onQuestionAnswered: (answer: boolean) => void;
}

const TriviaQuestion = ({ question, category, onQuestionAnswered }: IProps) => {
  return (
    <MainWrapperView>
      <SCategoryWrapper>
        <SCategoryText>{category}</SCategoryText>
      </SCategoryWrapper>
      <SQuestionWrapper>
        <SQuestionBorderView borderType="upper" />
        <SQuestionText>{question}</SQuestionText>
        <SQuestionBorderView borderType="lower" />
      </SQuestionWrapper>
      <SButtonWrapperView>
        <SAnswerButton
          testID="FalseButton"
          onPress={() => onQuestionAnswered(false)}
        >
          <SButtonText>False</SButtonText>
        </SAnswerButton>
        <SAnswerButton
          testID="TrueButton"
          onPress={() => onQuestionAnswered(true)}
        >
          <SButtonText>True</SButtonText>
        </SAnswerButton>
      </SButtonWrapperView>
    </MainWrapperView>
  );
};

export default TriviaQuestion;
