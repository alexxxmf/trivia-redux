import React from "react";
import { View, Text } from "react-native";

import { Result as Question } from "../service";

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
          <View key={question}>
            <Text>{question}</Text>
            <Text>
              {answers[index] === correctAnswerBoolean ? "Right" : "Wrong"}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default TriviaShowResults;
