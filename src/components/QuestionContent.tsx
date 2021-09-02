/* eslint-disable camelcase */
import React, { FC } from 'react';
import { iQuestion } from '../interfaces/interfaces';
import MultipleChoiceInput from './MultipleChoiceInput';

type Props = {
  questions?: iQuestion[] | null,
};

const QuestionContent: FC<Props> = ({ questions }) => (
  <>
    {
      questions?.map((q) => {
        const { question_type, question, given_answer } = q;
        return (
          question_type === 'multipleChoice'
            ? <MultipleChoiceInput key={question} question={question} choices={given_answer} />
          : null
        );
      })
    }
  </>
  );
export default QuestionContent;
