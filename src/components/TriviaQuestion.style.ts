import styled from "styled-components/native";

import { Metrics, Colors } from "../theme";

export const SQuestionText = styled.Text``;

export const SCategoryText = styled.Text``;

export const SButtonWrapperView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SButtonText = styled.Text``;

export const SAnswerButton = styled.TouchableHighlight`
  height: 45px;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: ${Metrics.margin.tripleBaseMargin}px;
  border-radius: ${Metrics.buttonRadius.large}px;
  background-color: ${Colors.white};
`;
