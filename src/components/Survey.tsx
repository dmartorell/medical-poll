import React, { FC, useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import QuestionContent from './QuestionContent';

type Props = {
    patientId: number | null
};

interface iQuestion {
    questionType: string,
    question: string,
    givenAnswer: {
        choices1: string[],
        choices2: string[] | null
    }
}

interface iQuestionCard {

    [index: string] : {imgSrc: string, questions: iQuestion | null}
}

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
    useEffect(() => {
          try {
            fetch(`${apiUrl}/question?question_block=eq.${blockNumber}`, { headers: { apiKey } })
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
      </>
    );
};

export default Survey;
