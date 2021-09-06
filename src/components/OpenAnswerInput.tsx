import React, { FC, useState, useEffect } from 'react';
import {
    Text, Textarea, FormControl,
  } from '@chakra-ui/react';

type Props = {
    question: string,
    questionId: number,
    rows: any[],
    setNewAnswers: any
    project: string | null,
    patientId: number | null
};

const OpenAnswerInput : FC<Props> = ({
 questionId, question, setNewAnswers, rows, project, patientId,
}) => {
    const [userAnswer, setUserAnswer] = useState('');

    useEffect(() => {
      if (rows.some((entry) => entry.questionID === questionId)) {
        setNewAnswers([...rows.filter((entry) => entry.questionID !== questionId),
          {
          patientID: patientId, project, questionID: questionId, answer: [userAnswer],
        },
      ]);
      } else {
        setNewAnswers([...rows, {
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
        />
      </FormControl>
    );
};

export default OpenAnswerInput;
