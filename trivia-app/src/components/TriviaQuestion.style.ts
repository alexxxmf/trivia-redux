import styled from "styled-components/native";

import { Metrics, Colors } from "../theme";

export const SCategoryWrapper = styled.View`
  flex: 4;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SQuestionWrapper = styled.View`
  flex: 12;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SQuestionText = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
  padding: 0 ${Metrics.padding.doublePadding}px;
`;

export const SCategoryText = styled.Text`
  color: ${Colors.white};
  font-size: 20px;
  font-weight: bold;
`;

export const SButtonWrapperView = styled.View`
  flex: 4
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SButtonText = styled.Text`
  color: ${Colors.blue};
`;

export const SAnswerButton = styled.TouchableHighlight`
  height: 45px;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: ${Metrics.margin.tripleBaseMargin}px;
  border-radius: ${Metrics.buttonRadius.large}px;
  background-color: ${Colors.white};
`;

export const MainWrapperView = styled.View`
  flex: 1;
  background-color: ${Colors.blue};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface Props {
  borderType: string;
}

export const SQuestionBorderView = styled.View`
  width: ${Metrics.screenWidth - 30}px;
  height: 20px;
  margin-bottom: ${({ borderType }: Props) =>
    borderType === "upper" ? Metrics.margin.tripleBaseMargin : 0}px;
  margin-top: ${({ borderType }: Props) =>
    borderType === "lower" ? Metrics.margin.tripleBaseMargin : 0}px;
  border-width: ${Metrics.borderWidth.thick}px;
  border-bottom-width: ${({ borderType }: Props) =>
    borderType === "lower" ? Metrics.borderWidth.thick : 0}px;
  border-top-width: ${({ borderType }: Props) =>
    borderType === "upper" ? Metrics.borderWidth.thick : 0}px;
  border-color: ${Colors.white};
`;
