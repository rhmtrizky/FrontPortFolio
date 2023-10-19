import { Flex, Heading, Image, Stack, Text, Box } from '@chakra-ui/react';
import { SiChakraui, SiMysql, SiReact, SiTypescript } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoPostgresql, BiLogoGoLang } from 'react-icons/bi';
import pic2 from '../images/pic2.png';

export default function AboutMe() {
  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      pt={5}
    >
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={pic2}
        />
      </Flex>
      <Flex
        p={8}
        flex={1}
        align={'center'}
        justify={'center'}
        flexDirection={'column'}
        gap={5}
      >
        <Stack
          spacing={6}
          w={'full'}
          maxW={'lg'}
        >
          <Box
            bg={'#60B9C9'}
            px={10}
            py={8}
            borderRadius={10}
          >
            <Heading fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}>
              <Text
                color={'blue.900'}
                as={'span'}
              >
                About Me
              </Text>{' '}
            </Heading>
            <Text
              mt={5}
              fontSize={{ base: 'sm', lg: 'md' }}
              color={'white'}
            >
              The project board is an exclusive resource for contract work. It&apos;s perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Text
              mt={5}
              fontSize={{ base: 'sm', lg: 'md' }}
              color={'white'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a similique unde nulla ex vero quaerat nesciunt modi vitae debitis laudantium laboriosam officiis voluptatibus, eius id maiores sequi natus tenetur?
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
            ></Stack>
          </Box>
        </Stack>
        <Stack
          spacing={6}
          w={'full'}
          maxW={'lg'}
        >
          <Box
            bg={'blue.400'}
            px={10}
            py={8}
            borderRadius={10}
          >
            <Heading fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}>
              <Text
                color={'gray.800'}
                as={'span'}
              >
                Skills
              </Text>{' '}
            </Heading>
            <Flex
              gap={3}
              mt={5}
              alignItems={'center'}
            >
              <SiReact fontSize={'40px'} />
              <SiChakraui fontSize={'40px'} />
              <RiJavascriptFill fontSize={'50px'} />
              <SiTypescript fontSize={'38px'} />
              <BiLogoPostgresql fontSize={'50px'} />
              <BiLogoGoLang fontSize={'55px'} />
              <SiMysql fontSize={'55px'} />
            </Flex>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
            ></Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
}
