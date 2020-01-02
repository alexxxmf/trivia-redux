import React from "react";
import { ScrollView } from "react-native";

import { SMainContainerSafeAreaView } from "../theme/styles";
import TriviaShowResults from "../containers/TriviaShowResults";
import ButtonToStartAgain from "../containers/ButtonToStartAgain";

const TriviaResultsScreen = () => (
  <SMainContainerSafeAreaView>
    <ScrollView>
      <TriviaShowResults />
      <ButtonToStartAgain />
    </ScrollView>
  </SMainContainerSafeAreaView>
);

export default TriviaResultsScreen;
