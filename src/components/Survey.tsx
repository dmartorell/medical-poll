/* eslint-disable no-debugger */
import React, { FC, useState, useEffect } from 'react';
import {
    Button, HStack, Spinner, useToast,
  } from '@chakra-ui/react';
  import { FaArrowAltCircleRight } from 'react-icons/fa';
  import { FiSend } from 'react-icons/fi';

import QuestionCard from './QuestionCard';
import QuestionContent from './QuestionContent';
import { iQuestionCard } from '../interfaces/interfaces';
import { fetchQuestions, postSurveyToDB } from '../helpers/fetchDB';

type Props = {
    patientId: number | null,
    setSurveyIsFinished: any;
};

const Survey: FC<Props> = ({ patientId, setSurveyIsFinished }) => {
    const [blockNumber, setBlockNumber] = useState(1);
    const [questions, setQuestions] = useState(null);
    const [answersToInsertToDb, setAnswersToInsertToDb] = useState([]);
    console.log(answersToInsertToDb);

    const toast = useToast();

    const questionCard: iQuestionCard = {
        1: { imgSrc: 'src/assets/icons/bipolar.png', questions, textIntro: 'A continuación encontrarás unas preguntas sobre tu estado emocional. Lee cada pregunta y selecciona la respuesta que consideres que coincide con tu propio estado emocional durante la última semana. No es necesario que piense mucho tiempo cada respuesta; en este cuestionario las respuestas espontáneas tienen más valor que las que se piensan mucho.' },
        2: { imgSrc: 'src/assets/icons/problemSolving.png', questions, textIntro: 'Cada una de las siguientes preguntas se refiere a un síntoma específico. Considere, para cada pregunta, cuántas veces le ha molestado el síntoma y con qué intensidad, durante la última semana. Indique para cada pregunta cuál ha sido la frecuencia y la gravedad del síntoma.' },
        3: { imgSrc: 'src/assets/icons/mentalHealth.png', questions, textIntro: 'Para acabar esta sección, nos gustaría que respondiera estas dos preguntas abiertas.' },
    };

    const lastBlock = Object.keys(questionCard).length;

    const handleNextBlock = (event:any) => {
      event.preventDefault();
      if (blockNumber === lastBlock) {
        try {
          console.log(answersToInsertToDb);
          postSurveyToDB(answersToInsertToDb);
          toast({
          title: 'Envío correcto',
          description: 'Su cuestionario ha sido almacenado.',
          status: 'success',
          position: 'bottom',
          duration: 4500,
          isClosable: false,
          });
        } catch {
          console.log('error');
        }
        setTimeout(() => {
          setSurveyIsFinished(true);
        }, 1800);
      } else {
      setBlockNumber((prev) => prev + 1);
      }
    };

    useEffect(() => {
      setQuestions(null);
      fetchQuestions(blockNumber)
      .then((res : any) => res.json())
      .then((data : any) => {
          if (data.length) {
            setQuestions(data);
          } else {
            setQuestions(null);
          }
        });
      }, [blockNumber]);

    return (

      <QuestionCard
        imgSrc={questionCard[blockNumber].imgSrc}
        textIntro={questionCard[blockNumber].textIntro}
      >
        { questions
        ? (
          <form onSubmit={handleNextBlock}>
            <QuestionContent
              questions={questions}
              answers={answersToInsertToDb}
              setAnswers={setAnswersToInsertToDb}
              patientId={patientId}
            />
            <HStack p={{ sm: 4, lg: 6 }} justifyContent="center">

              <Button
                type="submit"
                w="auto"
                size="md"
                colorScheme={blockNumber !== lastBlock ? 'blue' : 'pink'}
                variant="solid"
                rightIcon={blockNumber !== lastBlock ? <FaArrowAltCircleRight /> : <FiSend />}
              >
                {blockNumber !== lastBlock ? 'Siguiente' : 'Terminar'}
              </Button>
            </HStack>
          </form>
)
        : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.400"
            size="xl"
          />
)}
      </QuestionCard>

    );
};

export default Survey;
