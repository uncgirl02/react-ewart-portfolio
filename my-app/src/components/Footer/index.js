import React from 'react';


import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      rounded={'full'}
      w={20}
      h={20}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 Erin Ewart. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Github'} href={'https://github.com/uncgirl02'}>
            <FaGithub size={40}/>
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/erin-ewart/'}>
            <FaLinkedin size={40}/>
          </SocialButton>
          <SocialButton label={'StackOverflow'} href={'https://stackoverflow.com/users/17812432/uncgirl02'}>
            <FaStackOverflow size={40}/>
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;