/* eslint-disable react/no-children-prop */
import React, {
 FC, ReactElement, useState, useEffect,
} from 'react';
import {
  VStack, Button, Box,
} from '@chakra-ui/react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies

import Welcome from './components/Welcome';
import GoodBye from './components/GoodBye';
import AvatarGroup from './components/AvatarGroup';
import UserInfoInput from './components/UserInfoInput';
import professionals from './assets/mockData/professionals';
import Survey from './components/Survey';
import getPatientId from './helpers/getPatientId';

const apiKey: any = import.meta.env.VITE_SUPABASE_ANON_KEY;
const apiUrl: any = import.meta.env.VITE_SUPABASE_URL;

const App:FC = () => {
  const [userInfo, setUserInfo] = useState({ consent: 'true', code: '' });
  const [patientId, setPatientId] = useState(null);

  const resetData = () : void => {
    setUserInfo({ consent: 'true', code: '' });
    setPatientId(null);
  };

  let content: ReactElement = <Welcome><UserInfoInput setUserInfo={setUserInfo} /></Welcome>;

  if (userInfo.consent === 'false' && patientId) {
    content = (
      <>
        <GoodBye>
          <AvatarGroup professionalsList={professionals} />
        </GoodBye>
        <Box p={5}>
          <Button
            w="auto"
            onClick={resetData}
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

  if (userInfo.consent === 'true' && patientId) {
    content = (
      <Survey patientId={patientId} />
    );
  }

  useEffect(() => {
    if (userInfo.code) {
      try {
        fetch(`${apiUrl}/patient?id=eq.${getPatientId(userInfo.code)}`, { headers: { apiKey } })
          .then((res) => res.json())
          .then((data) => {
            if (data.length) {
             setPatientId(data[0].id);
            } else {
              console.log('PATIENTE INEXISTENTE');
            }
          });
      } catch ({ message }) {
        console.log(message);
      }
    }
  }, [userInfo]);

  return (

    <Box backgroundColor="twitter.50" height="100vh" py={{ sm: 0, lg: 10 }}>
      <VStack justifyContent="center" backgroundColor="twitter.50">
        {content}
      </VStack>
    </Box>

  );
};

export default App;
