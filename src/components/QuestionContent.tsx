/* eslint-disable camelcase */
import React, { FC } from 'react';
import { iQuestion } from '../interfaces/interfaces';
import MultipleChoiceInput from './MultipleChoiceInput';
import DobleChoiceInput from './DobleChoiceInput';
import OpenAnswerInput from './OpenAnswerInput';

type Props = {
  questions: iQuestion[] | null,
};

const QuestionContent: FC<Props> = ({ questions }) => (
  <>
    {
      questions?.map((q) => {
        const { question_type, question, given_answer } = q;
        let content;

        if (question_type === 'multipleChoice') {
          content = (
            <MultipleChoiceInput
              key={question}
              question={question}
              choices={given_answer}
            />
);
        } else if (question_type === 'dobleChoice') {
          content = (
            <DobleChoiceInput
              key={question}
              question={question}
              choices={given_answer}
            />
);
        } else {
          content = (
            <OpenAnswerInput
              key={question}
              question={question}
            />
);
        }
        return (
          content
        );
      })
    }
  </>
  );
export default QuestionContent;
