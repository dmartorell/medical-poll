import React, { FC, useState, useEffect } from 'react';
import {
    Text, Textarea, FormControl,
  } from '@chakra-ui/react';

type Props = {
    question: string,
    questionId: number,
    answers: any[],
    setNewAnswers: any
    project: string | null,
    patientId: number | null
};

const OpenAnswerInput : FC<Props> = ({
 questionId, question, setNewAnswers, answers, project, patientId,
}) => {
    const [userAnswer, setUserAnswer] = useState('');

    useEffect(() => {
      if (answers.some((entry) => entry.questionID === questionId)) {
        setNewAnswers([...answers.filter((entry) => entry.questionID !== questionId),
          {
          patientID: patientId, project, questionID: questionId, answer: [userAnswer],
        },
      ]);
      } else {
        setNewAnswers([...answers, {
          patientID: patientId, project, questionID: questionId, answer: [userAnswer],
        }]);
      }
    }, [userAnswer]);

    return (
      <FormControl isRequired>
        <Text bg="blue.800" px={4} py={4} borderTopRadius="md" color="white" fontSize={{ sm: 14, lg: 17 }}>
          {question}
        </Text>
        <Textarea
          value={userAnswer}
          onChange={({ target }) => { setUserAnswer(target.value); }}
          placeholder="Escriba aquí..."
          size="md"
          borderRadius={0}
          mb={5}
        />
      </FormControl>
    );
};

export default OpenAnswerInput;
