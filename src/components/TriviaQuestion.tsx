import React from "react";
import { View } from "react-native";

import {
  SAnswerButton,
  SButtonWrapperView,
  SCategoryText,
  SQuestionText,
  SButtonText
} from "./TriviaQuestion.style";

interface IProps {
  question: string;
  category: string;
  onQuestionAnswered: (answer: boolean) => void;
}

const TriviaQuestion = ({ question, category, onQuestionAnswered }: IProps) => {
  return (
    <View>
      <View>
        <SQuestionText>{question}</SQuestionText>
        <SCategoryText>{category}</SCategoryText>
      </View>
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
    </View>
  );
};

export default TriviaQuestion;
