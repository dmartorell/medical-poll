import React, { FC, useState } from 'react';
import {
    FormLabel, Textarea,
  } from '@chakra-ui/react';

  type Props = {
    question: string,
};

const OpenAnswerInput : FC<Props> = ({ question }) => {
    const [value, setValue] = useState('');

    return (
      <>
        <FormLabel bg="blue.800" px={4} py={4} borderRadius="sm" color="white" fontSize={{ sm: 14, lg: 17 }}>
          {question}
        </FormLabel>
        <Textarea
          value={value}
          onChange={({ target }) => { setValue(target.value); }}
          placeholder="Escriba aquí..."
          size="md"
        />
      </>
    );
};

export default OpenAnswerInput;
