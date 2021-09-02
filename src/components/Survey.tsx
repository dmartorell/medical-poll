import React, { FC, useState, useEffect } from 'react';
import {
    Button, Box,
  } from '@chakra-ui/react';
  import { FaArrowAltCircleRight } from 'react-icons/fa';
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

    const handleClick = () => {};

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
        <Box p={5}>
          <Button
            w="auto"
            onClick={handleClick}
            size="md"
            colorScheme="blue"
            variant="solid"
            rightIcon={<FaArrowAltCircleRight />}
          >
            Siguiente
          </Button>
        </Box>
      </>
    );
};

export default Survey;
