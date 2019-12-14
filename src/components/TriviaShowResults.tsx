import React from "react";
import { View, Text } from "react-native";

import { Result as Question } from "../service";
import {
  SAnswerResultText,
  SQuestionText,
  SResultWrapperView
} from "./TriviaShowResults.style";

interface IProps {
  questions: Question[];
  answers: boolean[];
}

const TriviaShowResults = ({ questions, answers }: IProps) => {
  return (
    <View>
      {questions.map(({ question, correct_answer }, index) => {
        const correctAnswerBoolean =
          correct_answer.toLowerCase() === "true" ? true : false;
        return (
          <SResultWrapperView key={question}>
            <SQuestionText>{question}</SQuestionText>
            <SAnswerResultText>
              {answers[index] === correctAnswerBoolean ? "Right" : "Wrong"}
            </SAnswerResultText>
          </SResultWrapperView>
        );
      })}
    </View>
  );
};

export default TriviaShowResults;
