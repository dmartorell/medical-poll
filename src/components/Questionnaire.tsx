import React, { FC } from 'react';
import Card from './Card';

type Props = {
    children: React.ReactNode,

  }

const Questionnaire: FC<Props> = ({ children }) => (
  <Card
    title="Questionnaire"
    content="¡Hola! Bienvenid@ al programa de seguimiento y acompañamiento de las personas que han estado ingresadas en UCI por la enfermedad del COVID19. Para poder empezar, introduce tu código de participante y confirma tu aceptación a participar en este proyecto con nosotros."
  >
    {children}
  </Card>
);

export default Questionnaire;
