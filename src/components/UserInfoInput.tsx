import React, {
  FC, useState, MutableRefObject, useRef, useEffect,
} from 'react';
import { FaUserCircle } from 'react-icons/fa';
// FaArrowAltCircleRight
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
  const textInput = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    if (code.trim() === '') {
      setIsInvalidInput(true);
      return;
    }
    setIsInvalidInput(false);
    setUserInfo({ code, consent });
  };

  const focusTextInput = () => textInput.current.focus();

  useEffect(() => {
    focusTextInput();
  }, []);

  return (
    <>
      <FormControl id="userInfo">
        <Stack spacing={8}>
          <Box>
            <FormLabel fontSize={{ sm: 14, lg: 17 }}>
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
                errorBorderColor="red.500"
                placeholder={isInvalidInput ? 'Introduce código' : ''}
                _placeholder={{ color: 'red.500' }}
                isInvalid={isInvalidInput}
                ref={textInput}
                onFocus={() => setIsInvalidInput(false)}
                fontSize="sm"
                type="text"
                w="60%"
                minW="300px"
                onChange={({ target }) => setCode(target.value)}
                value={code}
                variant="outline"
                size="md"
              />
            </InputGroup>
          </Box>
          <Box>
            <FormLabel fontSize={{ sm: 14, lg: 17 }}>
              Confirmo mi participación voluntaria en este proyecto:
            </FormLabel>
            <RadioGroup colorScheme="blue" size="sm" defaultValue="true" onChange={(value:string) => setConsent(value)}>
              <VStack spacing={1} alignItems="start">
                <Radio value="true">Sí, confirmo mi participación</Radio>
                <Radio value="false">No, no quiero participar</Radio>
              </VStack>
            </RadioGroup>
          </Box>
        </Stack>
      </FormControl>
      <Box p={5}>
        <Button
          w="auto"
          onClick={handleClick}
          size="md"
          colorScheme="blue"
          variant="solid"
          // rightIcon={<FaArrowAltCircleRight />}
        >
          Empezar
        </Button>
      </Box>
    </>
  );
};

export default UserInfoInput;
