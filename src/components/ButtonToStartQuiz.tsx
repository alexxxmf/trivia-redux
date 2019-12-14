import React from "react";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

import { STouchableHighlight, SText } from "./ButtonToStartQuiz.style";

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
  getTriviaQuestions
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
