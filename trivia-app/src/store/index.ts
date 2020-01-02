import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Dispatch
} from "redux";
import thunk from "redux-thunk";
import { createActionCreator, createReducer } from "deox";
import service, { Result as Question } from "../service";
import { questionSetProcessor } from "../utils";

import { normaliseArray } from "../utils";

export const saveQuestions = createActionCreator(
  "SAVE_TRIVIA_QUESTIONS",
  resolve => (questions: Question[]) => resolve({ questions })
);

export const saveAnswer = createActionCreator(
  "SAVE_TRIVIA_ANSWER",
  resolve => (answer: boolean) => resolve({ answer })
);

export const wipeOutAnswers = createActionCreator("WIPE_OUT_ANSWERS");
export const wipeOutQuestions = createActionCreator("WIPE_OUT_QUESTIONS");

export const getAndSaveQuestions = () => async (dispatch: Dispatch) => {
  try {
    const response = await service.getTriviaQuestions();
    const processedQuestions = questionSetProcessor(response.results);
    if (processedQuestions) {
      dispatch(saveQuestions(processedQuestions));
    }
  } catch (error) {
    throw error;
  }
};

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

export const questionsReducer = createReducer({}, handleAction => [
  handleAction(saveQuestions, (state, { payload }) => {
    return { ...state, ...normaliseArray(payload.questions, "question") };
  }),
  handleAction(wipeOutQuestions, () => {
    return {};
  })
]);

export const answersReducer = createReducer(
  { answersByIndex: {}, nextIndex: 0 },
  handleAction => [
    handleAction(saveAnswer, (state, { payload }) => {
      return {
        ...state,
        answersByIndex: {
          ...state.answersByIndex,
          [state.nextIndex]: payload.answer
        },
        nextIndex: state.nextIndex + 1
      };
    }),
    handleAction(wipeOutAnswers, state => {
      return {
        ...state,
        answersByIndex: {},
        nextIndex: 0
      };
    })
  ]
);

const reducer = combineReducers({
  questions: questionsReducer,
  answers: answersReducer
});

export const selectQuestions = (state: IRootState): Question[] => {
  return Object.values(state.questions);
};

export const selectAnswersArray = (state: IRootState): boolean[] => {
  return Object.keys(state.answers.answersByIndex)
    .sort()
    .map(key => state.answers.answersByIndex[parseInt(key)]);
};

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
