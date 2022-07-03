import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export function AboutMe() {
    return (
        <>
            <Box id='about-me' w="full" >

                <Accordion defaultIndex={[0]} allowMultiple p='5' shadow='dark-lg'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'blue.900', color: 'white' }}>
                                <Box fontSize='2xl' fontWeight= 'bold' flex='1' textAlign='left'>
                                    About Me
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  fontSize='xl' pb={4}>
                            Hi! I'm Erin.  I'm a passionate and hard-working web designer completing a coding boot camp at UNC-Charlotte.  Although much of my career has been spent in education, I have always had a passion for computers, coding, web design, and creating in general.  I am adept in all stages of web development and knowledgeable in user interface, testing, and debugging processes. I am equipped with a diverse and promising skill-set and eager to work with a team of individuals just as passionate about web design as I am. I am proficient in an assortment of languages and technologies, including HTML, CSS, and JavaScript. Although I am able to effectively self-manage during independent projects, I love to collaborate in a team setting.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'blue.900', color: 'white' }}>
                                <Box fontSize='2xl' fontWeight= 'bold' flex='1' textAlign='left'>
                                    Why Coding?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  fontSize='xl' pb={4}>
                            Coding is so impactful.  I enjoy it because it allows me to leave a visible mark on the world.  After hours of work, you're left with a product that many other can enjoy or benefit from.  From collaboration to indepentdent work, problem-solving, and being able to use my creativity: there are so many reason why I love to code!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'blue.900', color: 'white' }}>
                                <Box fontSize='2xl' fontWeight= 'bold' flex='1' textAlign='left'>
                                    My Skills
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  fontSize='xl' pb={4}>
                            My skills include: HTML, CSS, JavaScript, Node.js, Express.js, SQL, Git, NoSQL, React, MVCs, PWAs, APIs, Mongooge and MongoDB amoung verious other frameworks and libraries.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

            
        </>

    )
};

export default AboutMe;