import { Box, Text } from '@chakra-ui/react';
import { Image } from 'react-bootstrap';
import ReactLoading from 'react-loading';

const Loading = () => (
  <Box
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    margin={'auto'}
    bgColor={'white'}
  >
    <Box
      mt={'20'}
      w={'500px'}
      h={'300px'}
      objectFit={'cover'}
    >
      <Image src="https://img.freepik.com/free-vector/school-children-moving-hour-hand-alarm-clock_74855-17806.jpg?w=826&t=st=1697092357~exp=1697092957~hmac=8d9251ab8f3d9a97538fdd8c0f8ad01410ee5e4e0105d636414a62948a953622" />
    </Box>
    <Box
      mt={5}
      mb={0}
    >
      <ReactLoading
        type={'bubbles'}
        color={'gray'}
        height={200}
        width={175}
      />
    </Box>
    <Text
      mt={'-50px'}
      color={'blue.600'}
      fontSize={'md'}
      fontWeight={'800'}
    >
      Tunggu dulu yaa..
    </Text>
  </Box>
);

export default Loading;
