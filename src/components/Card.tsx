import React, { FC } from 'react';
import {
  Heading, Box, Image, Text, VStack,
} from '@chakra-ui/react';

type Props = {
    title?: string,
    imageSrc?: string,
    imageAlt?:string,
    textIntro?:string
  };
const Card: FC<Props> = ({
  title, textIntro, imageSrc, imageAlt, children,
}) => (
  <Box
    boxShadow="sm"
    m={2}
    py={8}
    px={{ sm: '2em', lg: '4em' }}
    backgroundColor="white"
    d="flex"
    flexDirection="column"
    alignItems="center"
    maxW={{ sm: '2xl', lg: '3xl' }}
    borderWidth="1px"
    borderRadius="lg"
  >
    {imageSrc && (
    <Image
      objectFit="cover"
      boxSize={{ sm: '130px', lg: '180px' }}
      src={imageSrc}
      alt={imageAlt}
      mb={8}
    />
    )}
    <VStack spacing={{ sm: '2em', lg: '3em' }}>
      <Heading maxW="90%" as="h1" fontSize={{ sm: '1.2em', lg: '1.8em' }} textAlign="center">
        {title}
      </Heading>
      <Text fontSize={{ sm: '0.9em', lg: '1em' }}>
        {textIntro}
      </Text>
      {children}
    </VStack>
  </Box>
);

export default Card;
