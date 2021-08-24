import React, { FC } from 'react';

import {
  Wrap, WrapItem, Avatar, Text, VStack, Grid,
} from '@chakra-ui/react';

type Props = {
    professionalsList: {
        firstName: string,
        lastName: string,
        area: string,
        profilePic: string,
    }[]
}
const AvatarGroup: FC<Props> = ({ professionalsList }) => (
  <Wrap>
    <Grid spacing={4} templateColumns={{ sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
      {
          professionalsList.map((professional) => (

            <WrapItem alignItems="center" key={professional.profilePic}>
              <Avatar mr={4} showBorder={false} size="lg" name={`${professional.firstName} ${professional.lastName}`} src={professional.profilePic} />
              <VStack spacing={1} alignItems="flex-start">
                <Text as="b" fontSize="xs">{`${professional.firstName} ${professional.lastName}`}</Text>
                <Text fontSize="xs">{professional.area}</Text>
              </VStack>
            </WrapItem>
          ))
    }
    </Grid>
  </Wrap>
);

export default AvatarGroup;
