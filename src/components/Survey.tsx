/* eslint-disable no-debugger */
import React, { FC, useState, useEffect } from 'react';
import {
    Button, HStack,
  } from '@chakra-ui/react';
  import { FaArrowAltCircleRight } from 'react-icons/fa';
  import { FiSend } from 'react-icons/fi';

import QuestionCard from './QuestionCard';
import QuestionContent from './QuestionContent';
import { iQuestionCard } from '../interfaces/interfaces';

type Props = {
    patientId: number | null,
    setSurveyIsFinished: any;
};

const apiKey: any = import.meta.env.VITE_SUPABASE_ANON_KEY;
const apiUrl: any = import.meta.env.VITE_SUPABASE_URL;

const Survey: FC<Props> = ({ patientId, setSurveyIsFinished }) => {
    const [blockNumber, setBlockNumber] = useState(1);
    const [questions, setQuestions] = useState(null);
    const [project, setProject] = useState(null);
    const [rowsToInsertToDb, setRowsToInsertToDb] = useState([]);
    console.log(rowsToInsertToDb);

    const questionCard: iQuestionCard = {
        1: { imgSrc: 'src/assets/icons/bipolar.png', questions, textIntro: 'A continuación encontrarás unas preguntas sobre tu estado emocional. Lee cada pregunta y selecciona la respuesta que consideres que coincide con tu propio estado emocional durante la última semana. No es necesario que piense mucho tiempo cada respuesta; en este cuestionario las respuestas espontáneas tienen más valor que las que se piensan mucho.' },
        2: { imgSrc: 'src/assets/icons/problemSolving.png', questions, textIntro: 'Cada una de las siguientes preguntas se refiere a un síntoma específico. Considere, para cada pregunta, cuántas veces le ha molestado el síntoma y con qué intensidad, durante la última semana. Indique para cada pregunta cuál ha sido la frecuencia y la gravedad del síntoma.' },
        3: { imgSrc: 'src/assets/icons/mentalHealth.png', questions, textIntro: 'Para acabar esta sección, nos gustaría que respondiera estas dos preguntas abiertas.' },
    };

    const lastBlock = Object.keys(questionCard).length;

//     const submitAnswers = (event: any) => {
//       event.preventDefault();
//       console.log('ROWS TO INSERT TO DB = ', rowsToInsertToDb);
//       try {
//         console.log('POSTING ANSWERS');

//         fetch(`${apiUrl}/answer`, {
//           headers: { apiKey, 'Content-Type': 'application/json' },
//           body: JSON.stringify(rowsToInsertToDb),
//           method: 'POST',
// });
//       } catch ({ message }) {
//         console.log(message);
//       }
//     };

    const handleNextBlock = (event:any) => {
      event.preventDefault();
      if (blockNumber === lastBlock) {
        setSurveyIsFinished(true);
      } else {
      setBlockNumber((prev) => prev + 1);
      }
    };

    useEffect(() => {
          try {
            fetch(`${apiUrl}/question?question_block=eq.${blockNumber}&select=question_type, id, question, project, given_answer(choices1, choices2)`, { headers: { apiKey } })
              .then((res) => res.json())
              .then((data) => {
                if (data.length) {
                  setProject(data[0].project);
                  setQuestions(data);
                } else {
                  console.log('NO HAY QUESTIONS');
                }
              });
          } catch ({ message }) {
            console.log(message);
          }
      }, [blockNumber]);

    return (

      <QuestionCard
        imgSrc={questionCard[blockNumber].imgSrc}
        textIntro={questionCard[blockNumber].textIntro}
      >
        <form onSubmit={handleNextBlock}>
          <QuestionContent
            questions={questions}
            rows={rowsToInsertToDb}
            setRows={setRowsToInsertToDb}
            project={project}
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
      </QuestionCard>

    );
};

export default Survey;
