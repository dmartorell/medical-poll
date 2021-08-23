import React, { FC, useState } from 'react';
import { FaUserCircle, FaArrowAltCircleRight } from 'react-icons/fa';
import {
  FormControl, Button,
  FormLabel, Stack, Box, Input, InputGroup,
  InputLeftElement, RadioGroup, Radio, VStack,
} from '@chakra-ui/react';

type Props = {
  setUserInfo: any
}
const UserInfoInput: FC<Props> = ({ setUserInfo }) => {
  const [consent, setConsent] = useState('true');
  const [code, setCode] = useState('');
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const handleClick = () => {
    if (code.trim() === '') {
      setIsInvalidInput(true);
      return;
    }
    setIsInvalidInput(false);
    setUserInfo({ code, consent });
  };

  return (
    <>
      <FormControl id="userInfo">
        <Stack spacing={8}>
          <Box>
            <FormLabel fontSize={17}>
              Código de participante:
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.5em"
              >
                <FaUserCircle color={isInvalidInput ? 'red' : ''} />
              </InputLeftElement>
              <Input
                onFocus={() => setIsInvalidInput(false)}
                isInvalid={isInvalidInput}
                errorBorderColor="red.500"
                type="text"
                onChange={({ target }) => setCode(target.value)}
                value={code}
                variant="outline"
                size="md"
              />
            </InputGroup>
          </Box>
          <Box>
            <FormLabel fontSize={17}>
              Confirmo mi participación voluntaria en este proyecto:
            </FormLabel>
            <RadioGroup defaultValue="true" onChange={(value:string) => setConsent(value)}>
              <VStack spacing={1} alignItems="start">
                <Radio colorScheme="blue" value="true">Sí, confirmo mi participación</Radio>
                <Radio value="false">No, no quiero participar</Radio>
              </VStack>
            </RadioGroup>
          </Box>
        </Stack>
      </FormControl>
      <Box p={5}>
        <Button
          onClick={handleClick}
          size="md"
          colorScheme="blue"
          variant="solid"
          rightIcon={<FaArrowAltCircleRight />}
        >
          Siguiente
        </Button>
      </Box>
    </>
  );
};

export default UserInfoInput;
