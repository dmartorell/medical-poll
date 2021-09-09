/* eslint-disable camelcase */
import React, { FC } from 'react';
import {
  VStack,
 } from '@chakra-ui/react';
import { iQuestion } from '../interfaces/interfaces';
import MultipleChoiceInput from './MultipleChoiceInput';
import DobleChoiceInput from './DobleChoiceInput';
import OpenAnswerInput from './OpenAnswerInput';

type Props = {
  questions: iQuestion[] | null,
  answers: any[],
  setAnswers: any,
  project: string | null,
  patientId: number | null
};

const QuestionContent: FC<Props> = ({
 questions, answers, setAnswers, project, patientId,
}) => (
  <VStack spacing={{ sm: 3, lg: 5 }}>
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
              answers={answers}
              setNewAnswers={setAnswers}
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
              answers={answers}
              setNewAnswers={setAnswers}
              project={project}
              patientId={patientId}
            />
);
        } else {
          content = (
            <OpenAnswerInput
              key={question}
              question={question}
              questionId={questionId}
              answers={answers}
              setNewAnswers={setAnswers}
              project={project}
              patientId={patientId}
            />
);
        }
        return (
          content
        );
      })
    }
  </VStack>
  );
export default QuestionContent;
