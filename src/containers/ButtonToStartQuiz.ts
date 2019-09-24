import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ButtonToStartQuiz from '../components/ButtonToStartQuiz';
import service from '../service';
import { questionSetProcessor } from '../utils';
import { saveChecklists } from '../store';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTriviaQuestions: async () => {
    // TODO: add actions for handling start, success and error
    const response = await service.getTriviaQuestions();
    const processedQuestions = questionSetProcessor(response.results);
    dispatch(saveChecklists(processedQuestions));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(ButtonToStartQuiz);
