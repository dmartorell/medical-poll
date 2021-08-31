import React, { FC } from 'react';
import Card from './Card';

type Props = {
    children: React.ReactNode,
    imgSrc: string,
    isVisible?: boolean

  };

const QuestionCard: FC<Props> = ({ children, imgSrc }) => (
  <>
    <Card
      title="Valoración Emocional Post-UCI Covid19"
      content="A continuación encontrarás unas preguntas sobre tu estado emocional. Lee cada pregunta y selecciona la respuesta que consideres que coincide con tu propio estado emocional durante la última semana. No es necesario que piense mucho tiempo cada respuesta; en este cuestionario las respuestas espontáneas tienen más valor que las que se piensan mucho."
      imageSrc={imgSrc}
      imageAlt="ab icon"
    >
      {children}
    </Card>
  </>
);

export default QuestionCard;
