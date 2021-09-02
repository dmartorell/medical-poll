/* eslint-disable camelcase */
import React, { FC, useState } from 'react';
import {
 Radio, RadioGroup, Box, FormLabel, Stack, Text,
} from '@chakra-ui/react';
import getAnswerValue from '../helpers/getAnswerValue';

type Props = {
    question: string,
    choices: {
        choices1: string[],
        choices2: string[] | null
    }
};

const DobleChoiceInput: FC<Props> = ({ question, choices }) => {
  const { choices1, choices2 } = choices;

  return (
    <Box borderWidth="1px" boxShadow="sm" borderColor="grey.50" borderRadius="lg" p={5} w="100%" bg="rgba(123, 120, 120, 0.01)" alignSelf="flex-start">
      <FormLabel mb={6} w="100%" bg="blue.800" px={4} py={2} borderRadius="sm" color="white" fontSize={{ sm: 14, lg: 17 }}>
        {question}
      </FormLabel>
      <Stack direction="row" justifyContent="center" spacing="100px">
        <RadioGroup colorScheme="blue" size="md" onChange={(value:string) => console.log(value)}>
          <Text mb={3} color="gray.500" fontSize="md">FRECUENCIA</Text>
          <Stack direction="column" spacing={1}>
            {
              choices1?.map(
              (choice, index) => {
                  const questionValue: number = getAnswerValue(choices1, index);
                  return <Radio alignSelf="flex-start" key={choice} value={`${questionValue}`}>{choice}</Radio>;
              },
              )
          }
          </Stack>
        </RadioGroup>
        <RadioGroup colorScheme="blue" size="md" onChange={(value:string) => console.log(value)}>
          <Text mb={3} color="gray.500" fontSize="md">GRAVEDAD</Text>
          <Stack direction="column" spacing={1}>
            {
              choices2?.map(
              (choice, index) => {
                  const questionValue: number = getAnswerValue(choices2, index);
                  return <Radio alignSelf="flex-start" key={choice} value={`${questionValue}`}>{choice}</Radio>;
              },
              )
          }
          </Stack>
        </RadioGroup>
      </Stack>

    </Box>
  );
 };

export default DobleChoiceInput;
