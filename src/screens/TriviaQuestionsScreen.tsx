import React from "react";
import { SafeAreaView } from "react-native";
//import styled from 'styled-components/native';

import TriviaQuestions from "../containers/TriviaQuestions";

const TriviaQuestionsScreen = () => {
  return (
    <SafeAreaView>
      <TriviaQuestions />
    </SafeAreaView>
  );
};

export default TriviaQuestionsScreen;
