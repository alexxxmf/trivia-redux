import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createActionCreator, createReducer } from 'deox';
import { Result as Question } from '../service';

import { normaliseArray } from '../utils';

export const saveChecklists = createActionCreator(
  'SAVE_TRIVIA_QUESTIONS',
  resolve => (questions: Question[]) => resolve({ questions })
);

interface IStateQuestions {
  [key: string]: Question;
}

interface IRootState {
  questions: IStateQuestions;
}

const questions = createReducer({}, handleAction => [
  handleAction(saveChecklists, (state, { payload }) => {
    return { ...state, ...normaliseArray(payload.questions, 'question') };
  })
]);

const reducer = combineReducers({
  questions
});

export const selectQuestions = (state: IRootState) => Object.values(state.questions);

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
