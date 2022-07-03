
import React, { useRef } from 'react';
import { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

import emailjs from '@emailjs/browser';

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn
} from 'react-icons/md';
import { BsEnvelope, BsPerson } from 'react-icons/bs';

export function ContactForm() {

  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''


  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const form = useRef();

  const handleChange = (e) => {
    if (e.target.name === 'user_email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_8bvlagi', 'template_36gglk4', form.current, 'Qipkbg_kQLx-Nrs3f')
      .then((result) => {
        console.log('Submit Form', formState);
      }, (error) => {
        // show the user an error
      });
  };

  return (
    <Container id='contact-me' bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          id='contact-form'
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact Me</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.300" fontSize='24'>
                   
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        as='a'
                        href='tel:+7047966327'
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        (704) 796-6327

                      </Button>
                      <Button
                        as='a'
                        href="mailto:ems1980@hotmail.com"
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        onClick={() => 'mailto:ems1980@hotmail.com'}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        ems1980@hotmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Indian Trail, NC
                      </Button>
                    </VStack>
                  </Box>

                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form ref={form} onSubmit={sendEmail}>
                        <FormControl id="name" isRequired>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input defaultValue={name} onBlur={handleChange} name='user_name' type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="e-mail" isRequired>
                          <FormLabel>E-Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsEnvelope color="gray.800" />}
                            />
                            <Input
                              defaultValue={email}
                              onBlur={handleChange}
                              name='user_email'
                              size="md"
                              type='text'
                              />
                          </InputGroup>
                      </FormControl>
                      <FormControl id="message" isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          defaultValue={message}
                          onBlur={handleChange}
                          name='message'
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="send-button" float="right">
                        <Button
                          mt={3}
                          type='submit'
                          value="Send"
                          onSubmit={sendEmail}
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </form>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Flex>
    </Container >
  );
}

export default ContactForm;