import React from 'react';
import Typical from 'react-typical';
import { Box, Flex, Stack, Text, Button } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import Screenshot1 from '../assests/Screenshot1.jpg';
import BOSSALEX from '../assests/BOSSALEX.png';
// import alex from '../assests/alex.png';
import { Fade } from 'react-reveal';

const Header = () => {
  return (
    <>
      <Fade down>
        <Box
          rounded="md"
          boxShadow="outline"
          bgImage={`url('${Screenshot1}')`}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          h={{ base: '60vh', md: '55vh' }}
          display="flex"
          mt="10"
          maxW={{ base: 'md', md: '1460px' }}
          marginLeft={'auto'}
          marginRight={{ base: 'md', sm: '90' }}
        >
          <Stack color="white">
            <Text
              fontSize={{ base: '4xl', sm: '4xl', xl: '4xl' }}
              fontWeight="black"
              fontFamily="sans-serif"
              padding={20}
              // defaultValue="Rasengan ⚡️"
            >
              Discover My Amazing <br />
              Art Space!
            </Text>
            <Flex fontSize={{ base: 'sm', md: 'md' }} justifyContent="center">
              <Text color="#FFC107">
                <ChevronLeftIcon />
                code
                <ChevronRightIcon />
              </Text>
              <Text fontFamily="sans-serif">
                <Typical
                  loop={Infinity}
                  wrapper="p"
                  steps={[
                    'I build',
                    200,
                    ' ios and android applications.',
                    200,
                  ]}
                />
              </Text>
              <Text color="#FFC107">
                <ChevronLeftIcon />
                code <ChevronRightIcon />
              </Text>
            </Flex>

            <Flex paddingX={20} paddingTop={5}>
              <Button
                boxShadow="Dark lg"
                rounded="md"
                fontWeight="semibold"
                colorScheme="yellow"
                marginLeft={{ base: 6, sm: 0 }}
                fontSize="small"
                textAlign="center"
                borderRadius="none"
                bg="#FFC107"
                w="20vh"
                h="50px"
              >
                EXPLORE NOW
              </Button>
            </Flex>
          </Stack>

          <Stack
            display={{ base: 'none', xl: 'flex' }}
            flex="1 1 0%"
            // backgroundImage={`url(${alex})`}
            backgroundImage={`url(${BOSSALEX})`}
            backgroundPosition="center"
            backgroundSize="cover"
          ></Stack>
        </Box>
      </Fade>
    </>
  );
};

export default Header;
