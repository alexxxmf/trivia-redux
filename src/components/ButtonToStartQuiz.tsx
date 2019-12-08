import React from "react";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import styled from "styled-components/native";

import { Colors, Metrics } from "../theme";

const STouchableHighlight = styled.TouchableHighlight`
  height: 45px;
  justify-content: center;
  align-items: center;
  width: 100px;
  background-color: ${Colors.white};
  margin: ${Metrics.buttonRadius.large}px;
  border-radius: ${Metrics.buttonRadius.large}px;
`;

const SText = styled.Text``;

interface IDispatchProps {
  getTriviaQuestions: () => Promise<any>;
}

type Props = {
  text: string;
  testID?: string;
  navigateTo: string; //key of screens in navigator TODO: how to approach this in TS??
} & NavigationInjectedProps &
  IDispatchProps;

const ButtonToStartQuiz = ({
  text,
  testID,
  navigation,
  navigateTo,
  getTriviaQuestions,
}: Props) => {
  return (
    <STouchableHighlight
      onPress={async () => {
        await getTriviaQuestions();
        navigation.navigate(navigateTo);
      }}
    >
      <SText testID={testID}>{text}</SText>
    </STouchableHighlight>
  );
};

export default withNavigation(ButtonToStartQuiz);
