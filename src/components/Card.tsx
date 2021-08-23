import React, { FC } from 'react';
import {
  Heading, Box, Image, Text, VStack,
} from '@chakra-ui/react';

type Props = {
    title?: string,
    content?: string,
    imageSrc?: string,
    imageAlt?:string
  };
const Card: FC<Props> = ({
  title, content, imageSrc, imageAlt, children,
}) => (
  <Box m={2} p={10} backgroundColor="white" d="flex" flexDirection="column" alignItems="center" maxW="xl" borderWidth="1px" borderRadius="lg">
    <Image
      objectFit="cover"
      boxSize="180px"
      src={imageSrc}
      alt={imageAlt}
      mb={5}
    />
    <VStack spacing={10}>
      <Heading maxW="70%" as="h1" size="lg" textAlign="center">
        {title}
      </Heading>
      <Text fontSize="md">
        {content}
      </Text>
      {children}
    </VStack>
  </Box>
);

export default Card;
