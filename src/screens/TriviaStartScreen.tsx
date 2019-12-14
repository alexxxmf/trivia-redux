import React from "react";
import styled from "styled-components/native";

import ButtonToStartQuiz from "../containers/ButtonToStartQuiz";
import { SMainContainerSafeAreaView } from "../theme/styles";
import { Colors, Metrics } from "../theme";

const SWrapperHeaderView = styled.View`
  flex: 3;
  justify-content: flex-end;
`;

const SMainText = styled.Text`
  color: ${Colors.white};
  font-size: 20px;
  font-weight: bold;
`;

const SWrapperMainSectionView = styled.View`
  flex: 4;
  justify-content: flex-end;
`;

const SSecondaryText = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
`;

const SButtonWrapper = styled.View`
  flex: 6;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${Metrics.margin.tripleBaseMargin};
`;

const TriviaStart = () => (
  <SMainContainerSafeAreaView>
    <SWrapperHeaderView>
      <SMainText>Welcome to the Trivia Challenge!</SMainText>
    </SWrapperHeaderView>
    <SWrapperMainSectionView>
      <SSecondaryText>
        {"You will be presented with 10 True or False questions \n"}
      </SSecondaryText>
      <SSecondaryText>Can you score 100%?</SSecondaryText>
    </SWrapperMainSectionView>
    <SButtonWrapper>
      <ButtonToStartQuiz
        text="Let's Start!"
        navigateTo="TriviaQuestionsScreen"
        testID="ButtonToStartQuiz"
      />
    </SButtonWrapper>
  </SMainContainerSafeAreaView>
);

export default TriviaStart;
