import React from "react";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import styled from "styled-components/native";
import { View, TouchableHighlight, Text } from "react-native";

import { Colors, Metrics } from "../theme";

const SAnswerButton = styled(TouchableHighlight)`
  height: 45px;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: ${Metrics.margin.tripleBaseMargin}px;
  border-radius: ${Metrics.buttonRadius.large}px;
  background-color: ${Colors.white};
`;

interface IProps extends NavigationInjectedProps {
  wipeOutAnswers: () => void;
}

const ButtonToStartAgain = ({ wipeOutAnswers, navigation }: IProps) => {
  const handlePress = () => {
    wipeOutAnswers();
    navigation.navigate("TriviaStartScreen");
  };
  return (
    <View>
      <SAnswerButton testID="StartAgainButton" onPress={handlePress}>
        <Text>True</Text>
      </SAnswerButton>
    </View>
  );
};

export default withNavigation(ButtonToStartAgain);
