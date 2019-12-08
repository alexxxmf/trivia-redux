import React from "react";
//import styled from "styled-components/native";

import { SMainContainerSafeAreaView } from "../theme/styles";
import TriviaShowResults from "../containers/TriviaShowResults";
import ButtonToStartAgain from "../containers/ButtonToStartAgain";
//import { Colors } from '../theme';

const TriviaResultsScreen = () => (
  <SMainContainerSafeAreaView>
    <TriviaShowResults />
    <ButtonToStartAgain />
  </SMainContainerSafeAreaView>
);

export default TriviaResultsScreen;
