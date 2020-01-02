import { connect } from "react-redux";
import ButtonToStartQuiz from "../components/ButtonToStartQuiz";
import { getAndSaveQuestions } from "../store";

const mapDispatchToProps = (dispatch: any) => ({
  getTriviaQuestions: async () => dispatch(getAndSaveQuestions())
});

export default connect(undefined, mapDispatchToProps)(ButtonToStartQuiz);
