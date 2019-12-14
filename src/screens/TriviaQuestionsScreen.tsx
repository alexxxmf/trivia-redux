import React from "react";

import { SMainContainerSafeAreaView } from "../theme/styles";
import TriviaQuestions from "../containers/TriviaQuestions";

const TriviaQuestionsScreen = () => {
  return (
    <SMainContainerSafeAreaView>
      <TriviaQuestions />
    </SMainContainerSafeAreaView>
  );
};

export default TriviaQuestionsScreen;
