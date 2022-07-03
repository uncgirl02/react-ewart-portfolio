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
  VStack,
  useBreakpointValue,
  Image,
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
    <>
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
                fontWeight='bold'>Erin Ewart</Text>
              <Button
              as='a'
              href='#about-me'>
                About Me
              </Button>
              <Button
              as='a'
              href='#projects'>
                Projects
              </Button>
              <Button
              as='a'
              href='#contact-me'>
                Contact Me
              </Button>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={coverImage}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <HStack maxW={'3xl'} align={'flex-start'} justify-content={'space-around'} spacing={6}>
            <VStack direction={'row'} align={'flex-start'} spacing={10}>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                Hi! I'm
              </Text>
              <Text
                fontFamily={font}
                color={'white'}
                fontWeight={400}
                lineHeight={1.4}
                fontSize={useBreakpointValue({ base: '5xl', md: '7xl' })}>
                Erin Ewart
              </Text>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                and I'm a Full Stack Web Developer.
              </Text>
              <Button
                as='a'
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}
                href={Resume}>
                Download Resume
              </Button>
            </VStack>
            <Image
              borderRadius='full'
              boxSize='300px'
              objectFit={'cover'}
              src={profileImage}
              alt='Erin Ewart'></Image>
          </HStack>
        </VStack>
      </Flex>
    </>

  )
}


export default Header;