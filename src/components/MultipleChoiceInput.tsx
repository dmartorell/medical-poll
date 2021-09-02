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
        choices2: string[] | null
    }
};

const MultipleChoiceInput: FC<Props> = ({ question, choices }) => {
    const { choices1 } = choices;

    return (
      <Box alignSelf="flex-start">
        <FormLabel fontSize={{ sm: 14, lg: 18 }}>
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
