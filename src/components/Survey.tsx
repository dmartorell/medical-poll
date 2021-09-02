import React, { FC, useState, useEffect } from 'react';
import {
    Button, HStack,
  } from '@chakra-ui/react';
  import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import QuestionCard from './QuestionCard';
import QuestionContent from './QuestionContent';
import { iQuestionCard } from '../interfaces/interfaces';

type Props = {
    patientId: number | null
};

const apiKey: any = import.meta.env.VITE_SUPABASE_ANON_KEY;
const apiUrl: any = import.meta.env.VITE_SUPABASE_URL;

const Survey: FC<Props> = ({ patientId }) => {
    const [blockNumber, setBlockNumber] = useState(1);
    const [questions, setQuestions] = useState(null);

    const questionCard: iQuestionCard = {
        1: { imgSrc: 'src/assets/icons/bipolar.png', questions },
        2: { imgSrc: 'src/assets/icons/problemSolving.png', questions },
        3: { imgSrc: 'src/assets/icons/mentalHealth.png', questions },
    };

    const lastBlock = Object.keys(questionCard).length;

    const handleNextBlock = () => { setBlockNumber((prev) => prev + 1); };
    const handlePrevBlock = () => { setBlockNumber((prev) => prev - 1); };

    useEffect(() => {
          try {
            fetch(`${apiUrl}/question?question_block=eq.${blockNumber}&select=question_type, question, given_answer(choices1, choices2)`, { headers: { apiKey } })
              .then((res) => res.json())
              .then((data) => {
                if (data.length) {
                 setQuestions(data);
                } else {
                  console.log('NO HAY QUESTIONS');
                }
              });
          } catch (error) {
            console.log(error.message);
          }
      }, [blockNumber]);

    return (
      <>
        <QuestionCard imgSrc={questionCard[blockNumber].imgSrc}>
          <QuestionContent questions={questions} />
        </QuestionCard>

        <HStack p={{ sm: 3, lg: 5 }} spacing="4em">
          {
              blockNumber > 1 ? (
                <Button
                  w="auto"
                  onClick={handlePrevBlock}
                  size="md"
                  colorScheme="blue"
                  variant="solid"
                  leftIcon={<FaArrowAltCircleLeft />}
                >
                  Anterior
                </Button>
                )
          : null
            }
          {
              blockNumber !== lastBlock
              ? (
                <Button
                  w="auto"
                  onClick={handleNextBlock}
                  size="md"
                  colorScheme="blue"
                  variant="solid"
                  rightIcon={<FaArrowAltCircleRight />}
                >
                  Siguiente
                </Button>
                )
          : null
            }
        </HStack>
      </>
    );
};

export default Survey;
