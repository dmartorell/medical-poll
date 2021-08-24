/* eslint-disable react/no-children-prop */
import React, { FC, useState } from 'react';
import {
  VStack,
} from '@chakra-ui/react';
import Welcome from './components/Welcome';
import GoodBye from './components/GoodBye';
import AvatarGroup from './components/AvatarGroup';
import UserInfoInput from './components/UserInfoInput';
import professionals from './assets/mockData/professionals';

const App:FC = () => {
  const [userInfo, setUserInfo] = useState({ consent: 'true', code: '' });
  return (
    <VStack justifyContent="center" backgroundColor="twitter.50" height="100vh">
      {
        userInfo.consent === 'false'
          ? (
            <GoodBye>
              <AvatarGroup professionalsList={professionals} />
            </GoodBye>
          )
          : (
            <Welcome>
              <UserInfoInput setUserInfo={setUserInfo} />
            </Welcome>
          )
      }
    </VStack>
  );
};

export default App;
