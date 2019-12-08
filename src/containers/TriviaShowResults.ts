import { connect } from "react-redux";

import TriviaShowResults from "../components/TriviaShowResults";
import { selectQuestions, IRootState, selectAnswersArray } from "../store";

const mapStateToProps = (state: IRootState) => {
  return {
    questions: selectQuestions(state),
    answers: selectAnswersArray(state),
  };
};

export default connect(mapStateToProps, undefined)(TriviaShowResults);
