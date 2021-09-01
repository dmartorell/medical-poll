import React, { FC } from 'react';

interface iQuestion {
    questionType: string,
    question: string,
    givenAnswer: {
        choices1: string[],
        choices2: string[] | null
    }
}
type Props = {
  questions: iQuestion[] | null
};
const QuestionContent: FC<Props> = ({ questions }) => (
  <p>Hello</p>
    );

export default QuestionContent;
