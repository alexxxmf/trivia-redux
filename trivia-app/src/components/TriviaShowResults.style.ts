import styled from "styled-components/native";

import { Metrics, Colors } from "../theme";

export const SOverallResultText = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
  font-size: 16px;
`;

export const SAnswerResultText = styled.Text``;

export const SAllResultsWrapperView = styled.View`
  width: ${Metrics.screenWidth};
  padding: ${Metrics.padding.triplePadding}px ${Metrics.padding.basePadding}px;
`;

export const SMainWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SOverallResultWrapper = styled.View`
  flex: 2;
`;

export const SOverallResultBox = styled.View`
  width: 80px;
  height: 40px;
  border-radius: ${Metrics.buttonRadius.small};
  border-width: ${Metrics.borderWidth.small};
  border-color: ${Colors.white};
  justify-content: center;
  align-items: center;
`;

export const SResultWrapperView = styled.View`
  flex-direction: row;
  padding: ${Metrics.padding.smallPadding}px 0;
`;

export const SAnswerRightOrWrongWrapperView = styled.View`
  flex: 2;
`;

export const SQuestionWrapperView = styled.View`
  flex: 8;
`;

export const SRightAnswerText = styled.Text`
  color: ${Colors.success};
`;

export const SWrongAnswerText = styled.Text`
  color: ${Colors.error};
`;

export const SQuestionText = styled.Text`
  color: ${Colors.white};
`;
