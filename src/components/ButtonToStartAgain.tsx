import React from "react";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

import {
  SAnswerButtonWrapperView,
  SAnswerButton,
  SAnswerButtonText
} from "./ButtonToStartAgain.style";

interface IProps extends NavigationInjectedProps {
  wipeOutAnswers: () => void;
}

const ButtonToStartAgain = ({ wipeOutAnswers, navigation }: IProps) => {
  const handlePress = () => {
    wipeOutAnswers();
    navigation.navigate("TriviaStartScreen");
  };
  return (
    <SAnswerButtonWrapperView>
      <SAnswerButton testID="StartAgainButton" onPress={handlePress}>
        <SAnswerButtonText>True</SAnswerButtonText>
      </SAnswerButton>
    </SAnswerButtonWrapperView>
  );
};

export default withNavigation(ButtonToStartAgain);
