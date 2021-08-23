/* eslint-disable react/no-children-prop */
import React, { FC, useState } from 'react';
import {
  VStack,
} from '@chakra-ui/react';
import Welcome from './components/Welcome';
import GoodBye from './components/GoodBye';

import UserInfoInput from './components/UserInfoInput';

const App:FC = () => {
  const [userInfo, setUserInfo] = useState({ consent: 'true', code: '' });
  return (
    <VStack justifyContent="center" backgroundColor="twitter.50" height="100vh">
      {
        userInfo.consent === 'false'
          ? <GoodBye />
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
