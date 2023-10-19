import { Container, Flex, Box, Heading, Text, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { ChangeEvent, useState } from 'react';
import { IContact } from '../interfaces/Contact';
import API from '../libs/Api';

export default function Contact() {
  const [form, setForm] = useState<IContact>({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleContact() {
    try {
      const response = await API.post('/contact/send', form);
      console.log('Craete Contact berhasil', response);
      const mailtoLink = `mailto:rahmatrizkyrifai@gmail.com?subject=${encodeURIComponent(`${form.name}`)}&body=${encodeURIComponent(`Hello, I am ${form.name}, my email is ${form.email}. Here's my message: ${form.message}`)}`;

      // Open the default email client with the mailto link
      window.location.href = mailtoLink;
    } catch (error) {
      console.log('kesalahan create contact', error);
    }
  }

  return (
    <Container
      bg="#9DC4FB"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      py={{ base: '20px', md: '20px' }}
    >
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text
                    mt={{ sm: 3, md: 3, lg: 5 }}
                    color="gray.500"
                  >
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack
                      pl={0}
                      spacing={3}
                      alignItems="flex-start"
                    >
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={
                          <MdPhone
                            color="#1970F1"
                            size="20px"
                          />
                        }
                      >
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={
                          <MdEmail
                            color="#1970F1"
                            size="20px"
                          />
                        }
                      >
                        hello@abc.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={
                          <MdLocationOn
                            color="#1970F1"
                            size="20px"
                          />
                        }
                      >
                        Karnavati, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      color={'#0D74FF'}
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF', color: 'black' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      color={'#0D74FF'}
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF', color: 'black' }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      color={'#0D74FF'}
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF', color: 'black' }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  bg="white"
                  borderRadius="lg"
                >
                  <Box
                    m={8}
                    color="#0B0E3F"
                  >
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input
                            value={form.name}
                            name="name"
                            type="text"
                            size="md"
                            placeholder="Ali Syamsie"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input
                            value={form.email}
                            name="email"
                            type="text"
                            size="md"
                            placeholder="example@gmail.com"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Input
                          value={form.message}
                          name="message"
                          onChange={handleChange}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl
                        id="name"
                        float="right"
                      >
                        <Button
                          onClick={handleContact}
                          loadingText="Submitting"
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
