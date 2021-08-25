/* eslint-disable react/no-children-prop */
import React, { FC, ReactElement, useState } from 'react';
import {
  VStack, Button, Box,
} from '@chakra-ui/react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Welcome from './components/Welcome';
import GoodBye from './components/GoodBye';
import AvatarGroup from './components/AvatarGroup';
import UserInfoInput from './components/UserInfoInput';
import professionals from './assets/mockData/professionals';
import QuestionCard from './components/QuestionCard';

const App:FC = () => {
  const [userInfo, setUserInfo] = useState({ consent: 'true', code: '' });
  let content: ReactElement = <Welcome><UserInfoInput setUserInfo={setUserInfo} /></Welcome>;

  if (userInfo.consent === 'false') {
    content = (
      <>
        <GoodBye>
          <AvatarGroup professionalsList={professionals} />
        </GoodBye>
        <Box p={5}>
          <Button
            w="auto"
            onClick={() => setUserInfo({ consent: 'true', code: '' })}
            size="md"
            colorScheme="blue"
            variant="solid"
            leftIcon={<FaArrowAltCircleLeft />}
          >
            Volver
          </Button>
        </Box>
      </>
    );
  }

  if (userInfo.consent === 'true' && userInfo.code) {
    content = <QuestionCard imageSrc="src/assets/icons/bipolar.png" />;
  }
  return (
    <VStack justifyContent="center" backgroundColor="twitter.50" height="100vh">
      {content}
    </VStack>
  );
};

export default App;
