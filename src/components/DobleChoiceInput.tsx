/* eslint-disable camelcase */
import React, { FC, useState, useEffect } from 'react';
import {
 Radio, RadioGroup, Box, FormControl, Stack, Text,
} from '@chakra-ui/react';

type Props = {
  question: string,
  questionId: number,
  choices: {
      choices1: string[],
      choices2: string[] | null,

    },
  rows: any[],
  setNewAnswers: any
  project: string | null,
  patientId: number | null
};

const DobleChoiceInput: FC<Props> = ({
 questionId, question, choices, setNewAnswers, rows, project, patientId,
}) => {
  const [frecuencia, setFrecuencia] = useState('');
    const [gravedad, setGravedad] = useState('');

  const { choices1, choices2 } = choices;

  const changeHandler = ({ target }: any) => {
    const { value } = target;
    const section = target.name;
    if (section === 'frecuencia') {
        setFrecuencia(value);
    } else {
        setGravedad(value);
    }
};

useEffect(() => {
  if (rows.some((entry) => entry.questionID === questionId)) {
    setNewAnswers([...rows.filter((entry) => entry.questionID !== questionId),
      {
      patientID: patientId, project, questionID: questionId, answer: [frecuencia, gravedad],
    },
  ]);
  } else {
    setNewAnswers([...rows, {
      patientID: patientId, project, questionID: questionId, answer: [frecuencia, gravedad],
    }]);
  }
}, [frecuencia, gravedad]);

  return (
    <Box borderWidth="1px" boxShadow="sm" borderColor="grey.50" borderRadius="lg" p={5} w="100%" bg="rgba(123, 120, 120, 0.01)" alignSelf="flex-start">
      <Text mb={6} w="100%" bg="blue.800" px={4} py={2} borderRadius="md" color="white" fontSize={{ sm: 14, lg: 17 }}>
        {question}
      </Text>
      <Stack direction="row" justifyContent="center" spacing="100px">
        <FormControl isRequired>
          <RadioGroup colorScheme="blue" size="md">
            <Text mb={3} color="gray.500" fontSize="md">FRECUENCIA</Text>
            <Stack direction="column" spacing={1}>
              {
              choices1?.map(
              (choice, index) => {
                  const questionValue: number = index;
                  return <Radio alignSelf="flex-start" key={choice} name="frecuencia" value={`${questionValue}`} onChange={changeHandler}>{choice}</Radio>;
              },
              )
          }
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <RadioGroup colorScheme="blue" size="md">
            <Text mb={3} color="gray.500" fontSize="md">GRAVEDAD</Text>
            <Stack direction="column" spacing={1}>
              {
              choices2?.map(
              (choice, index) => {
                  const questionValue: number = index;
                  return <Radio alignSelf="flex-start" key={choice} name="gravedad" value={`${questionValue}`} onChange={changeHandler}>{choice}</Radio>;
              },
              )
          }
            </Stack>
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
 };

export default DobleChoiceInput;
