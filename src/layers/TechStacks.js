import React from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

import maxresdefault from '../assests/maxresdefault.jpg';
import HTML from '../assests/HTML.png';
import JavaScript from '../assests/JavaScript.png';
import Reactjs from '../assests/Reactjs.png';
import CascadingStyleSheets from '../assests/CascadingStyleSheets.jpg';
import material from '../assests/material.png';
import { Fade } from 'react-reveal';

function TechStacks() {
  return (
    <>
      <Box>
        <Text
          paddingLeft={{ base: '1', md: 350 }}
          color="#FFC107"
          fontWeight="semibold"
          fontSize="xl"
          mx={6}
          my={6}
          pt={10}
        >
          TECH STACKS
        </Text>
      </Box>

      <Flex
        flexWrap={'wrap'}
        justifyContent={'space-around'}
        paddingLeft={{ base: '1', md: 300 }}
        pt={10}
        mx={6}
        my={6}
      >
        <Fade left cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              bg="#252531"
              height={{ base: '17rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              bgSize="cover"
              bgRepeat="round"
              bgImage={`url('${material}')`}
              transition
              rounded="md"
              boxShadow="outline"
            ></Box>
          </Box>
        </Fade>

        <Fade down cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              bg="#252531"
              height={{ base: '17rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              bgSize="cover"
              bgRepeat="round"
              bgImage={`url('${maxresdefault}')`}
              rounded="md"
              boxShadow="outline"
            ></Box>
          </Box>
        </Fade>

        <Fade right cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              bg="#252531"
              height={{ base: '17rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              bgSize="cover"
              bgRepeat="round"
              bgImage={`url('${CascadingStyleSheets}')`}
              rounded="md"
              boxShadow="outline"
            ></Box>
          </Box>
        </Fade>

        <Fade right cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              bg="#252531"
              height={{ base: '17rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              bgSize="cover"
              bgRepeat="round"
              bgImage={`url('${HTML}')`}
              rounded="md"
              boxShadow="outline"
            ></Box>
          </Box>
        </Fade>

        <Fade down cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              bg="#252531"
              height={{ base: '17rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              bgSize="cover"
              bgRepeat="round"
              bgImage={`url('${JavaScript}')`}
              rounded="md"
              boxShadow="outline"
            ></Box>
          </Box>
        </Fade>

        <Fade left cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              bg="#252531"
              height={{ base: '17rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              bgSize="cover"
              bgRepeat="round"
              bgImage={`url('${Reactjs}')`}
              rounded="md"
              boxShadow="outline"
            ></Box>
          </Box>
        </Fade>
      </Flex>
    </>
  );
}

export default TechStacks;
