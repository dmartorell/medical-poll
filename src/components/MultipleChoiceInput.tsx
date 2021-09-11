/* eslint-disable camelcase */
import React, { FC } from 'react';
import {
 Radio, RadioGroup, FormControl, Box, Text, VStack,
} from '@chakra-ui/react';
import getAnswerValue from '../helpers/getAnswerValue';

type Props = {
    question: string,
    questionId: number,
    choices: {
        choices1: string[],
    },
    answers: any[],
    setNewAnswers: any
    project: number,
    patientId: number | null
};

const MultipleChoiceInput: FC<Props> = ({
 questionId, question, choices, setNewAnswers, answers, project, patientId,
 }) => {
    const { choices1 } = choices;

    const handleAnswerChange = ({ target }: any) => {
      if (answers.some((entry) => entry.questionID === questionId)) {
        setNewAnswers([...answers.filter((entry) => entry.questionID !== questionId),
          {
          patientID: patientId, project, questionID: questionId, answer: [target.value],
        },
      ]);
      } else {
        setNewAnswers([...answers, {
          patientID: patientId, project, questionID: questionId, answer: [target.value],
        }]);
      }
    };

    return (
      <Box borderWidth="1px" boxShadow="sm" borderColor="grey.50" borderRadius="lg" p={5} w="100%" bg="rgba(123, 120, 120, 0.01)">
        <FormControl isRequired>
          <Text mb={6} bg="blue.800" px={4} py={2} borderRadius="md" color="white" fontSize={{ sm: 14, lg: 17 }}>
            {question}
          </Text>
          <RadioGroup colorScheme="blue" size="md">
            <VStack spacing={1}>
              {
                choices1?.map(
                (choice, index) => {
                    const questionValue: number = getAnswerValue(choices1, index);
                    return <Radio alignSelf="flex-start" key={choice} value={`${questionValue}`} onChange={handleAnswerChange}>{choice}</Radio>;
                },
                )
            }
            </VStack>
          </RadioGroup>
        </FormControl>
      </Box>
    );
 };

export default MultipleChoiceInput;
