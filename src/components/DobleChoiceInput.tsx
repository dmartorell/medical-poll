/* eslint-disable camelcase */
import React, { FC, useState } from 'react';
import {
 Radio, RadioGroup, Box, FormLabel, VStack,
} from '@chakra-ui/react';

type Props = {
    question: string,
    choices: {
        choices1: string[],
        choices2: string[] | null
    }
};

const DobleChoiceInput: FC<Props> = ({ question, choices }) => {
    const choices1 = choices.choices1.reverse();

    return (
      <Box alignSelf="flex-start">
        <FormLabel fontSize={{ sm: 14, lg: 18 }}>
          {question}
        </FormLabel>
        <RadioGroup colorScheme="blue" size="md">
          <VStack spacing={1}>
            {
                choices1?.map(
                (choice, index) => <Radio alignSelf="flex-start" key={choice} value={`${index}`}>{choice}</Radio>,
                )
            }
          </VStack>
        </RadioGroup>
      </Box>
    );
 };

export default DobleChoiceInput;
