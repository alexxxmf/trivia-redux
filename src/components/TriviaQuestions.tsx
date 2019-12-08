import React, { useState } from "react";
import { View } from "react-native";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

import { Result as Question } from "../service";
import TriviaQuestion from "../containers/TriviaQuestion";

interface IProps extends NavigationInjectedProps {
  questions: Question[];
  saveAnswer: (answer: boolean) => void;
}

const TriviaQuestions = ({ questions, navigation, saveAnswer }: IProps) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { question, category } = questions[questionNumber];

  const handleQuestionAnswered = (answer: boolean) => {
    console.log("answer");
    saveAnswer(answer);
    setQuestionNumber(questionNumber + 1);
    if (questions.length - 1 <= questionNumber) {
      console.log("Navigate to next screen and dispatch results");
      navigation.navigate("TriviaResultsScreen");
    }
  };

  return (
    <View>
      <TriviaQuestion
        question={question}
        category={category}
        key={question}
        onQuestionAnswered={handleQuestionAnswered}
      />
    </View>
  );
};

export default withNavigation(TriviaQuestions);
