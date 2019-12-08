import { connect } from "react-redux";
import { Dispatch } from "redux";

import TriviaQuestions from "../components/TriviaQuestions";
import { selectQuestions, IRootState, saveAnswer } from "../store";

const mapStateToProps = (state: IRootState) => {
  return {
    questions: selectQuestions(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveAnswer: (answer: boolean) => dispatch(saveAnswer(answer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TriviaQuestions);
