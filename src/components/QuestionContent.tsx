/* eslint-disable camelcase */
import React, { FC } from 'react';
import { iQuestion } from '../interfaces/interfaces';
import MultipleChoiceInput from './MultipleChoiceInput';
import DobleChoiceInput from './DobleChoiceInput';
import OpenAnswerInput from './OpenAnswerInput';

type Props = {
  questions: iQuestion[] | null,
  rows: any[],
  setRows: any,
  project: string | null,
  patientId: number | null
};

const QuestionContent: FC<Props> = ({
 questions, rows, setRows, project, patientId,
}) => (
  <>
    {
      questions?.map((q) => {
        const {
 question_type, question, given_answer, id: questionId,
} = q;
        let content;

        if (question_type === 'multipleChoice') {
          content = (
            <MultipleChoiceInput
              key={question}
              question={question}
              questionId={questionId}
              choices={given_answer}
              rows={rows}
              setNewAnswers={setRows}
              project={project}
              patientId={patientId}
            />
);
        } else if (question_type === 'dobleChoice') {
          content = (
            <DobleChoiceInput
              key={question}
              question={question}
              questionId={questionId}
              choices={given_answer}
              rows={rows}
              setNewAnswers={setRows}
              project={project}
              patientId={patientId}
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
