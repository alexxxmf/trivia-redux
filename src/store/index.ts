import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { createActionCreator, createReducer } from "deox";
import { Result as Question } from "../service";

import { normaliseArray } from "../utils";

export const saveChecklists = createActionCreator(
  "SAVE_TRIVIA_QUESTIONS",
  resolve => (questions: Question[]) => resolve({ questions })
);

export const saveAnswer = createActionCreator(
  "SAVE_TRIVIA_ANSWER",
  resolve => (answer: boolean) => resolve({ answer })
);

export const wipeOutAnswers = createActionCreator("WIPE_OUT_ANSWERS");
export const wipeOutQuestions = createActionCreator("WIPE_OUT_QUESTIONS");

export interface IStateQuestions {
  [key: string]: Question;
}

export interface IAnswersByIndex {
  [key: number]: boolean;
}

export interface IStateAnswers {
  nextIndex: number;
  answersByIndex: IAnswersByIndex;
}

export interface IRootState {
  questions: IStateQuestions;
  answers: IStateAnswers;
}

const questions = createReducer({}, handleAction => [
  handleAction(saveChecklists, (state, { payload }) => {
    return { ...state, ...normaliseArray(payload.questions, "question") };
  }),
  handleAction(wipeOutQuestions, () => {
    return {};
  }),
]);

const answers = createReducer(
  { answersByIndex: {}, nextIndex: 0 },
  handleAction => [
    handleAction(saveAnswer, (state, { payload }) => {
      return {
        ...state,
        answersByIndex: {
          ...state.answersByIndex,
          [state.nextIndex]: payload.answer,
        },
        nextIndex: state.nextIndex + 1,
      };
    }),
    handleAction(wipeOutAnswers, state => {
      return {
        ...state,
        answersByIndex: {},
        nextIndex: 0,
      };
    }),
  ]
);

const reducer = combineReducers({
  questions,
  answers,
});

// TODO: create more selectors and test them
export const selectQuestions = (state: IRootState): Question[] => {
  return Object.values(state.questions);
};

// TODO: How to turn this solution into something more elegant???

// TODO: create more selectors and test them
export const selectAnswersArray = (state: IRootState): boolean[] => {
  return Object.keys(state.answers.answersByIndex)
    .sort()
    .map(key => state.answers.answersByIndex[parseInt(key)]);
};

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
