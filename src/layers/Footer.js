import React from 'react';

import { Box, Flex, Image } from '@chakra-ui/react';

import one from '../assests/one.png';
import two from '../assests/two.png';
import three from '../assests/three.png';
import four from '../assests/four.png';
import { Fade } from 'react-reveal';
function Footer() {
  return (
    <>
      <Fade up>
        <Flex
          justifyContent="space-around"
          paddingLeft={{ base: 'auto', md: 290 }}
        >
          <Box>
            <Image boxSize="150px" src={one} alt="one" />
          </Box>

          <Box>
            <Image boxSize="150px" src={two} alt="two" />
          </Box>
          <Box>
            <Image boxSize="150px" src={three} alt="three" />
          </Box>
          <Box>
            <Image boxSize="150px" src={four} alt="four" />
          </Box>
        </Flex>
      </Fade>

      <Fade right>
        <Box paddingLeft={{ base: 'auto', md: 290 }}>
          <Flex
            mx={{ md: '100' }}
            // bg="#252531"
            rounded="sm"
            boxShadow="outline"
            justifyContent="space-between"
            mb={5}
          >
            <Box fontSize="xs" color="whiteAlpha.500" p="4">
              © 2021 Lexus
            </Box>

            <Box color="whiteAlpha.500" fontSize="xs" p="4">
              Template author: L.M
            </Box>
          </Flex>
        </Box>
      </Fade>
    </>
  );
}

export default Footer;
