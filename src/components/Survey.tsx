import React, { FC } from 'react';
import QuestionCard from './QuestionCard';
import QuestionContent from './QuestionContent';

type Props = {
    patientId: number
};

const Survey: FC<Props> = ({ patientId }) => {
    const data = null;
    const questionCard = {
        1: { imgSrc: 'src/assets/icons/bipolar.png', questions: data },
        2: { imgSrc: 'src/assets/icons/problemSolving.png', questions: data },
        3: { imgSrc: 'src/assets/icons/mentalHealth.png', questions: data },
    };
    const number = 3;
    return (
      <>
        <QuestionCard imgSrc={questionCard[number].imgSrc}>
          <QuestionContent questions={questionCard[number].questions} />
        </QuestionCard>
      </>
    );
};

export default Survey;
