/* eslint-disable camelcase */
import React, { FC, useState } from 'react';
import {
 Radio, RadioGroup, Box, FormLabel, VStack,
} from '@chakra-ui/react';
import getAnswerValue from '../helpers/getAnswerValue';

type Props = {
    question: string,
    choices: {
        choices1: string[],
    }
};

const MultipleChoiceInput: FC<Props> = ({ question, choices }) => {
    const { choices1 } = choices;

    return (
      <Box borderWidth="1px" boxShadow="sm" borderColor="grey.50" borderRadius="lg" p={5} w="100%" bg="rgba(123, 120, 120, 0.01)" alignSelf="flex-start">
        <FormLabel bg="blue.800" px={4} py={2} borderRadius="sm" color="white" fontSize={{ sm: 14, lg: 17 }}>
          {question}
        </FormLabel>
        <RadioGroup colorScheme="blue" size="md" onChange={(value:string) => console.log(value)}>
          <VStack spacing={1}>
            {
                choices1?.map(
                (choice, index) => {
                    const questionValue: number = getAnswerValue(choices1, index);
                    return <Radio alignSelf="flex-start" key={choice} value={`${questionValue}`}>{choice}</Radio>;
                },
                )
            }
          </VStack>
        </RadioGroup>
      </Box>
    );
 };

export default MultipleChoiceInput;
