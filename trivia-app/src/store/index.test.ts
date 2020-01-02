import {
  selectAnswersArray,
  selectQuestions,
  saveQuestions,
  saveAnswer,
  questionsReducer,
  answersReducer,
  wipeOutQuestions,
  wipeOutAnswers
} from "../store";

describe("Tests for the store related stuff", () => {
  describe("Reducers", () => {
    describe("questionsReducer", () => {
      it("returns initial state", () => {
        // @ts-ignore
        expect(questionsReducer(undefined, { type: "" })).toEqual({});
      });
    });
    describe("answersReducer", () => {
      it("returns initial state", () => {
        // @ts-ignore
        expect(answersReducer(undefined, { type: "" })).toEqual({
          answersByIndex: {},
          nextIndex: 0
        });
      });
    });
  });
  describe("Actions", () => {
    const questionSample = {
      question: "This is a question",
      correct_answer: "This is the correct answer",
      incorrect_answers: ["incorrect answer"],
      category: "This is the category",
      type: "This is the type",
      difficulty: "This is the difficulty"
    };

    describe("saveChecklists", () => {
      expect(
        questionsReducer(undefined, saveQuestions([questionSample]))
      ).toEqual({ [questionSample.question]: questionSample });
    });

    describe("wipeOutQuestions", () => {
      it("wipes out questions from store", () => {
        expect(
          questionsReducer(
            { [questionSample.question]: questionSample },
            wipeOutQuestions()
          )
        ).toEqual({});
      });
    });

    describe("wipeOutAnswers", () => {
      it("wipes out questions from store", () => {
        expect(
          answersReducer(
            {
              answersByIndex: { "0": true, "1": false },
              nextIndex: 2
            },
            wipeOutAnswers()
          )
        ).toEqual({
          answersByIndex: {},
          nextIndex: 0
        });
      });
    });

    describe("saveAnswers", () => {
      expect(answersReducer(undefined, saveAnswer(true))).toEqual({
        answersByIndex: { "0": true },
        nextIndex: 1
      });
    });
  });

  describe("Selectors", () => {
    const state = {
      questions: {
        "random question": {
          category: "",
          type: "",
          difficulty: "",
          question: "random question",
          correct_answer: "true",
          incorrect_answers: []
        }
      },
      answers: {
        answersByIndex: {
          0: false,
          1: true
        },
        nextIndex: 2
      }
    };
    describe("selectQuestions", () => {
      it("selects questions array from root state", () => {
        expect(selectQuestions(state)).toEqual(Object.values(state.questions));
      });
      it("selects answers array from root state", () => {
        expect(selectAnswersArray(state)).toEqual(
          Object.values(state.answers.answersByIndex)
        );
      });
    });
  });
});
