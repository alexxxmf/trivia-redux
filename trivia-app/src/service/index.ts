export type Result = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type TriviaDbResponse = {
  response_code: number;
  results: Result[] | [];
};

class Service {
  getTriviaQuestions = async (): Promise<TriviaDbResponse> => {
    try {
      // TODO: Move hardcoded string into env
      const response = await fetch(
        'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean'
      );
      const jsonData: TriviaDbResponse = await response.json();
      if (jsonData.response_code !== 0) {
        throw Error('Bad request');
      }
      return jsonData;
    } catch (error) {
      throw error;
    }
  };
}

const service = new Service();

export default service;
