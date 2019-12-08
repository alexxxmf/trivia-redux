import { Result as Question } from "../service";
import { AllHtmlEntities } from "html-entities";

function htmlDecode(input: string): string | null {
  const entities = new AllHtmlEntities();
  return entities.decode(input);
}

function questionSetProcessor(questions: Question[]): Question[] {
  return questions.map(question => {
    const decodedQuestion = htmlDecode(question.question);
    question.question = decodedQuestion ? decodedQuestion : "";
    return question;
  });
}

const normaliseArray = <T>(array: Array<T>, indexKey: keyof T) => {
  const normalizedObject: any = {};
  for (let i = 0; i < array.length; i++) {
    const key = array[i][indexKey];
    normalizedObject[key] = array[i];
  }
  return normalizedObject;
};

export default normaliseArray;

export { htmlDecode, questionSetProcessor, normaliseArray };
