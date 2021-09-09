/* eslint-disable camelcase */
import React, { FC, useState, useEffect } from 'react';
import {
 Radio, RadioGroup, Box, FormControl, VStack, Text, HStack,
} from '@chakra-ui/react';

type Props = {
  question: string,
  questionId: number,
  choices: {
      choices1: string[],
      choices2?: string[] | null,

    },
  answers: any[],
  setNewAnswers: any
  project: string | null,
  patientId: number | null
};

const DobleChoiceInput: FC<Props> = ({
 question, questionId, choices, setNewAnswers, answers, project, patientId,
}) => {
  const [frecuencia, setFrecuencia] = useState('');
  const [gravedad, setGravedad] = useState('');

  const { choices1, choices2 } = choices;

  const changeHandler = ({ target }: any) => {
    const { value } = target;
    const section = target.name;
    if (section.includes('frecuencia')) {
        setFrecuencia(value);
    } else {
        setGravedad(value);
    }
};

useEffect(() => {
  if (answers.some((entry) => entry.questionID === questionId)) {
    setNewAnswers([...answers.filter((entry) => entry.questionID !== questionId),
      {
      patientID: patientId, project, questionID: questionId, answer: [frecuencia, gravedad],
    },
  ]);
  } else {
    setNewAnswers([...answers, {
      patientID: patientId, project, questionID: questionId, answer: [frecuencia, gravedad],
    }]);
  }
}, [frecuencia, gravedad]);

return (
  <>
    <Box
      borderWidth="1px"
      boxShadow="sm"
      borderColor="grey.50"
      borderRadius="lg"
      p={5}
      w="100%"
      bg="rgba(123, 120, 120, 0.01)"
    >
      <Text
        mb={6}
        bg="blue.800"
        px={4}
        py={2}
        borderRadius="md"
        color="white"
        fontSize={{ sm: 14, lg: 17 }}
      >
        {question}
      </Text>
      <HStack justifyContent="center" spacing="100px">
        <HStack>
          <FormControl isRequired>
            <Text
              mb={3}
              color="blue.800"
              fontWeight="thin"
              fontSize={{ sm: 14, lg: 17 }}
            >
              FRECUENCIA
            </Text>
            <RadioGroup colorScheme="blue" size="md">
              <VStack spacing={1}>
                {choices1?.map((choice, index) => {
                const questionValue = index;
                return (
                  <Radio
                    alignSelf="flex-start"
                    key={choice}
                    value={`${questionValue}`}
                    onChange={changeHandler}
                    name={`${questionId}frecuencia`}
                  >
                    {choice}
                  </Radio>
                );
              })}
              </VStack>
            </RadioGroup>
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired>
            <Text
              mb={3}
              color="blue.800"
              fontWeight="thin"
              fontSize={{ sm: 14, lg: 17 }}
            >
              GRAVEDAD
            </Text>
            <RadioGroup colorScheme="blue" size="md">
              <VStack spacing={1}>
                {choices2?.map((choice, index) => {
                const questionValue = index;
                return (
                  <Radio
                    alignSelf="flex-start"
                    key={choice}
                    value={`${questionValue}`}
                    onChange={changeHandler}
                    name={`${questionId}gravedad`}

                  >
                    {choice}
                  </Radio>
                );
              })}
              </VStack>
            </RadioGroup>
          </FormControl>
        </HStack>
      </HStack>
    </Box>
  </>

);
 };

export default DobleChoiceInput;
