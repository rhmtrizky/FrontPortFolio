'use client';

import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import AboutMe from './aboutMe';
import Portfolio from './portfolio';
import pic1 from '../images/pic1.png';
import Contact from './contact';
import Footer from './footer';
import Anonymous from './anonymous';

export default function Home() {
  return (
    <>
      <Navbar />
      <Stack
        minH={'100vh'}
        direction={{ base: 'column', md: 'row' }}
        pt={10}
      >
        <Flex
          p={8}
          flex={1}
          align={'center'}
          justify={'center'}
        >
          <Stack
            spacing={6}
            w={'full'}
            maxW={'lg'}
          >
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                Web Developer
              </Text>
              <br />{' '}
              <Text
                color={'blue.400'}
                as={'span'}
              >
                Rahmat Rizky Rifa'i
              </Text>{' '}
            </Heading>
            <Text
              fontSize={{ base: 'md', lg: 'lg' }}
              color={'gray.500'}
            >
              The project board is an exclusive resource for contract work. It&apos;s perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
            >
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Hire me
              </Button>
              <Button rounded={'full'}>See about me</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={pic1}
          />
        </Flex>
      </Stack>
      <AboutMe />
      <Portfolio />
      <Contact />
      <Anonymous />
      <Footer />
    </>
  );
}
