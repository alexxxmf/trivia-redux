import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';

import ButtonToStartQuiz from '../containers/ButtonToStartQuiz';

const SWrapperHeaderView = styled.View`
  flex: 3
  justify-content: "flex-end"
`;

const SMainText = styled.Text``;

const SWrapperMainSectionView = styled.View`
  flex: 4,
  justify-content: "flex-end",
`;

const SSecondaryText = styled.Text``;

const SButtonWrapper = styled.View`
  flex: 6
  justify-content: "flex-start"
  align-items: "center"
`;

const TriviaQuestion = () => (
  <SafeAreaView>
    <SWrapperHeaderView>
      <SMainText>Question</SMainText>
    </SWrapperHeaderView>
    <SWrapperMainSectionView>
      <SSecondaryText>{'You will be presented with 10 True or False questions \n'}</SSecondaryText>
      <SSecondaryText>Can you score 100%?</SSecondaryText>
    </SWrapperMainSectionView>
    <SButtonWrapper>
      <ButtonToStartQuiz text="Let's Start!" navigateTo='a' testID='ButtonToStartQuiz' />
    </SButtonWrapper>
  </SafeAreaView>
);

export const TriviaQuestionWithoutHocs = TriviaQuestion;

export default withNavigation(TriviaQuestion);
