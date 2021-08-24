import React, { FC } from 'react';
import Card from './Card';

type Props = {
    children: React.ReactNode,

  }

const GoodBye: FC<Props> = ({ children }) => (
  <>
    <Card
      title="¡Hasta Pronto!"
      content="Muchas gracias por tu respuesta.
      Si tienes alguna duda, quieres hacer un comentario, o a lo largo de este año quieres volver a contactar con nosotros no dudes en escribir a Sol Fernández (msfernandez@tauli.cat) o a Guillem Navarra (gnavarra@tauli.cat).
      Estamos aquí para acompañarte en tu proceso de recuperación."
      imageSrc="src/assets/icons/hug.png"
      imageAlt="hug icon"
    >
      {children}
    </Card>
  </>
);

export default GoodBye;
