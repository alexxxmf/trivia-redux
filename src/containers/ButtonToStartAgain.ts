import { connect } from "react-redux";
import { Dispatch } from "redux";

import { wipeOutAnswers, wipeOutQuestions } from "../store";
import ButtonToStartAgain from "../components/ButtonToStartAgain";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  wipeOutAnswers: () => {
    dispatch(wipeOutAnswers());
    dispatch(wipeOutQuestions());
  },
});

export default connect(undefined, mapDispatchToProps)(ButtonToStartAgain);
