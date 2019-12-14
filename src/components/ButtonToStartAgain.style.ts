import styled from "styled-components/native";

import { Colors, Metrics } from "../theme";

export const SAnswerButton = styled.TouchableHighlight`
  height: 45px;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: ${Metrics.margin.tripleBaseMargin}px;
  border-radius: ${Metrics.buttonRadius.large}px;
  background-color: ${Colors.white};
`;

export const SAnswerButtonText = styled.Text`
  font-size: 16px;
`;

export const SAnswerButtonWrapperView = styled.View``;
