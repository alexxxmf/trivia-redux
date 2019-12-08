import React from "react";
import styled from "styled-components/native";

import ButtonToStartQuiz from "../containers/ButtonToStartQuiz";
import { SMainContainerSafeAreaView } from "../theme/styles";
//import { Colors } from '../theme';

const SWrapperHeaderView = styled.View`
  flex: 3;
  justify-content: flex-end;
`;

const SMainText = styled.Text``;

const SWrapperMainSectionView = styled.View`
  flex: 4;
  justify-content: flex-end;
`;

const SSecondaryText = styled.Text``;

const SButtonWrapper = styled.View`
  flex: 6;
  justify-content: flex-start;
  align-items: center;
`;

const TriviaStart = () => (
  <SMainContainerSafeAreaView>
    <SWrapperHeaderView>
      <SMainText>Question</SMainText>
    </SWrapperHeaderView>
    <SWrapperMainSectionView>
      <SSecondaryText>
        {"You will be presented with 10 True or False questionsss \n"}
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
