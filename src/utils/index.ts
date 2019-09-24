import { Result as Question } from '../service';

// To decode HTML entities
// https://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript
function htmlDecode(input: string): string | null {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
}

function questionSetProcessor(questions: Question[]): Question[] {
  return questions.map(question => {
    const decodedQuestion = htmlDecode(question.question);
    question.question = decodedQuestion ? decodedQuestion : '';
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
