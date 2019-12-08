import { connect } from "react-redux";

import TriviaQuestion from "../components/TriviaQuestion";

interface IOwnProps {
  question: string;
  category: string;
}

const mapStateToProps = (_: any, { question, category }: IOwnProps) => {
  return {
    question,
    category,
  };
};

export default connect(mapStateToProps, undefined)(TriviaQuestion);
