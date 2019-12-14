import styled from "styled-components/native";

import { Colors, Metrics } from "../theme";

export const STouchableHighlight = styled.TouchableHighlight`
  height: 45px;
  justify-content: center;
  align-items: center;
  width: 100px;
  background-color: ${Colors.white};
  margin: ${Metrics.buttonRadius.large}px;
  border-radius: ${Metrics.buttonRadius.large}px;
`;

export const SText = styled.Text`
  color: ${Colors.blue};
`;
