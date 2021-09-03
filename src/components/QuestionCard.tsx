import React, { FC } from 'react';
import Card from './Card';

type Props = {
    children: React.ReactNode,
    imgSrc: string,
    textIntro: string
  };

const QuestionCard: FC<Props> = ({ children, imgSrc, textIntro }) => (
  <>
    <Card
      title="Valoración Emocional Post-UCI Covid19"
      textIntro={textIntro}
      imageSrc={imgSrc}
      imageAlt="ab icon"
    >
      {children}
    </Card>
  </>
);

export default QuestionCard;
