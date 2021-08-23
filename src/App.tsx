/* eslint-disable react/no-children-prop */
import React, { FC } from 'react';
import { FaArrowAltCircleRight, FaUserCircle } from 'react-icons/fa';

import {
  Heading, Box, Image, Text, FormControl,
  FormLabel, Input, RadioGroup, InputGroup, Radio, VStack, Button, InputLeftElement,
} from '@chakra-ui/react';

const App:FC = () => {
  const handleSubmit = () => {
    console.log('submited');
  };

  return (
    <VStack justifyContent="center" backgroundColor="twitter.50" height="100vh">
      <Box m={2} p={10} backgroundColor="white" d="flex" flexDirection="column" alignItems="center" maxW="xl" borderWidth="1px" borderRadius="lg">
        <Image
          objectFit="cover"
          boxSize="180px"
          src="src/assets/icons/emotion.png"
          alt="main icon brain"
          mb={5}
        />
        <Box>
          <VStack spacing={10}>
            <Heading as="h1" size="lg" textAlign="center">
              Valoración Emocional
              {' '}
              <br />
              Post-UCI Covid19
            </Heading>
            <Text fontSize="md">
              ¡Hola! Bienvenid@ al programa de seguimiento y acompañamiento de las personas
              que han estado ingresadas en UCI por la enfermedad del COVID19.
              Para poder empezar, introduce tu código de participante
              y confirma tu aceptación a participar en este proyecto con nosotros.
            </Text>
          </VStack>
          <VStack spacing={10} mt={10}>
            <FormControl id="codigo">
              <FormLabel fontSize={17}>
                Código de participante:
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.5em"
                  children={<FaUserCircle />}
                />
                <Input type="text" variant="flushed" size="md" />
              </InputGroup>

            </FormControl>
            <FormControl id="consentimiento">
              <FormLabel fontSize={17}>
                Confirmo mi participación voluntaria en este proyecto:
              </FormLabel>
              <RadioGroup defaultValue="si">
                <VStack spacing={4} alignItems="start">
                  <Radio colorScheme="telegram" value="si">Sí, confirmo mi participación</Radio>
                  <Radio value="no">No, no quiero participar</Radio>
                </VStack>
              </RadioGroup>
            </FormControl>
          </VStack>
        </Box>
      </Box>
      <Box p={10}>
        <Button onClick={handleSubmit} size="md" colorScheme="blue" variant="solid" rightIcon={<FaArrowAltCircleRight />}>
          Siguiente
        </Button>
      </Box>
    </VStack>

  );
};

export default App;
