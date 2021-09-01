/* eslint-disable react/no-children-prop */
import React, {
 FC, ReactElement, useEffect, useState,
} from 'react';
import {
  VStack, Button, Box,
} from '@chakra-ui/react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Welcome from './components/Welcome';
import GoodBye from './components/GoodBye';
import AvatarGroup from './components/AvatarGroup';
import UserInfoInput from './components/UserInfoInput';
import professionals from './assets/mockData/professionals';
// import useFetch from './hooks/useFetch';
import Survey from './components/Survey';
import getPatientId from './helpers/getPatientId';

const apiKey: any = import.meta.env.VITE_SUPABASE_ANON_KEY;
const apiUrl: any = import.meta.env.VITE_SUPABASE_URL;

// const getUserId: any = async (email: any) => {
//   fetchetch(`${apiUrl}/patient?email=eq.${email}`, { headers: { apiKey } });
//   return { loading, error, data };
// };

const App:FC = () => {
  const [patientId, setPatientId] = useState('');
  const [userInfo, setUserInfo] = useState({ consent: 'true', code: '' });
  let content: ReactElement = <Welcome><UserInfoInput setUserInfo={setUserInfo} /></Welcome>;

  useEffect(() => {
    fetch(`${apiUrl}/patient?id=eq.${getPatientId(userInfo.code)}`, { headers: { apiKey } }).then((res) => res.json()).then((data) => setPatientId(data[0]?.id));
  }, [userInfo]);

  if (userInfo.consent === 'false' && patientId) {
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

  if (userInfo.consent === 'true' && patientId) {
    content = (
      <Survey patientId={5} />
    );
  }
  return (
    <VStack justifyContent="center" backgroundColor="twitter.50" height="100vh">
      {content}
    </VStack>
  );
};

export default App;
