'use client';

import { Box, Flex, Heading, Text, Stack, Container, Avatar, useColorModeValue, Input, Button } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { IAnonymous } from '../interfaces/Anonymous';
import API from '../libs/Api';

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading
      as={'h3'}
      fontSize={'xl'}
    >
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex
      align={'center'}
      mt={8}
      direction={'column'}
    >
      <Avatar
        src={src}
        mb={2}
      />
      <Stack
        spacing={-1}
        align={'center'}
      >
        <Text fontWeight={600}>{name}</Text>
        <Text
          fontSize={'sm'}
          color={useColorModeValue('gray.600', 'gray.400')}
        ></Text>
      </Stack>
    </Flex>
  );
};

export default function Anonymous() {
  const [anonymous, setAnonymous] = useState<any>([]);
  const [clearInputMessage, setClearInputMessage] = useState('');

  const handleSubmit = () => {
    setClearInputMessage('');
  };

  async function fetchData() {
    try {
      const res = await API.get('/anonymous');
      setAnonymous(res.data);
    } catch (error) {
      console.log('kesalahan create contact', error);
    }
  }
  console.log('ini fetch data', anonymous);

  useEffect(() => {
    fetchData();
  }, []);

  const [form, setForm] = useState<IAnonymous>({
    messageAnonymous: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleAnonymous() {
    try {
      const response = await API.post('/anonymous/message', form);
      fetchData();
      setClearInputMessage('');
      console.log('Create Anonymous berhasil', response);
    } catch (error) {
      console.log('kesalahan create anonymous', error);
    }
  }
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container
        maxW={'7xl'}
        py={16}
        as={Stack}
        spacing={12}
      >
        <Stack
          spacing={0}
          align={'center'}
        >
          <Heading>Anonymous Message</Heading>
          <Text>Write your anonymous message for me</Text>
        </Stack>
        <Box
          mx={{ base: '10%', md: '20%', lg: '30%' }}
          display={'flex'}
          alignItems={'center'}
          gap={3}
        >
          <Input
            type="text"
            name="messageAnonymous"
            placeholder="Write here..."
            bgColor="gray.200"
            value={clearInputMessage}
            onChange={(e) => {
              setClearInputMessage(e.target.value);
              handleChange(e);
            }}
          />
          <Button
            borderRadius={10}
            bgColor={'blue.900'}
            color={'white'}
            fontSize={'14px'}
            _hover={{ bg: 'blue.500' }}
            onClick={() => {
              handleAnonymous();
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
        >
          <Stack
            direction={{ base: 'column', md: 'row', lg: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
            justifyContent={'center'}
            flexWrap={'wrap'}
          >
            {anonymous.map((item: any) => (
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Message</TestimonialHeading>
                  <TestimonialText>{item?.messageAnonymous}</TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={'https://images.unsplash.com/photo-1573547429441-d7ef62e04b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFub255bW91c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60   '}
                  name={'Anonymous'}
                />
              </Testimonial>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
