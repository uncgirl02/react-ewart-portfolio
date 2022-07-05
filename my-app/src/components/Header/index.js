import React from 'react';
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import coverImage from '../../assets/header-images/cover-photo.jpg';
import profileImage from '../../assets/header-images/profile.jpg';
import Resume from '../../assets/header-images/Erin-Ewart-Resume.pdf';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Text,
  
} from '@chakra-ui/react';

const font = "'Rock Salt', cursive";
// const styles = theme = ({
//   introText: {
//     fontFamily: font,
//     color: "white"
//     }
//   }
// );


export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    
      <Box bg={useColorModeValue('blue.400', 'gray.900')} px={6}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} >
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              >
              <Text fontFamily={font}
                color={'white'}
                as='a'
                href='/react-ewart-portfolio'
                fontWeight='bold'>Erin Ewart</Text>
              <Button
              as='a'
              href='/react-ewart-portfolio/#about-me'>
                About Me
              </Button>
              <Button
              as='a'
              href='/projects'>
                Projects
              </Button>
              <Button
              as='a'
              href='/react-ewart-portfolio/#contact-me'>
                Contact Me
              </Button>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      
  )
}


export default Header;