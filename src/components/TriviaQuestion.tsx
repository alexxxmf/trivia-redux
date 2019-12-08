import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styled from "styled-components/native";

import { Metrics, Colors } from "../theme";

interface IProps {
  question: string;
  category: string;
  onQuestionAnswered: (answer: boolean) => void;
}

const SQuestionText = styled(Text)``;

const SCategoryText = styled(Text)``;

const SButtonWrapperView = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SAnswerButton = styled(TouchableHighlight)`
  height: 45px;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: ${Metrics.margin.tripleBaseMargin}px;
  border-radius: ${Metrics.buttonRadius.large}px;
  background-color: ${Colors.white};
`;

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
          <Text>False</Text>
        </SAnswerButton>
        <SAnswerButton
          testID="TrueButton"
          onPress={() => onQuestionAnswered(true)}
        >
          <Text>True</Text>
        </SAnswerButton>
      </SButtonWrapperView>
    </View>
  );
};

export default TriviaQuestion;
