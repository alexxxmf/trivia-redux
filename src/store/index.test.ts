import { selectAnswersArray, selectQuestions } from "../store";

describe("Tests for the store related stuff", () => {
  describe("Selectors", () => {
    const state = {
      questions: {
        "random question": {
          category: "",
          type: "",
          difficulty: "",
          question: "random question",
          correct_answer: "true",
          incorrect_answers: [],
        },
      },
      answers: {
        answersByIndex: {
          0: false,
          1: true,
        },
        nextIndex: 2,
      },
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
