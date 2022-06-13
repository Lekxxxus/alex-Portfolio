import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import Twitter from '../assests/Twitter.jpg';
import Shopee from '../assests/Shopee.png';
import DashBoard from '../assests/Dashboard.jpg';
import HackReactor from '../assests/HackReactor.png';
import LoginPage from '../assests/LoginPage.jpg';
import TodoList from '../assests/TodoList.jpg';

import { Link } from 'react-router-dom';
import { Rotate, Fade } from 'react-reveal';

const RecentWorks = () => {
  return (
    <>
      <Rotate>
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
            RECENT WORKS
          </Text>
        </Box>
      </Rotate>

      <Flex
        flexWrap={'wrap'}
        justifyContent={'space-around'}
        paddingLeft={{ base: '1', md: 300 }}
        pt={10}
        mx={6}
        my={6}
      >
        <Fade right cascade>
          <Box mb={{ base: '5', md: '5' }}>
            <Link to="/shopee">
              <Box
                bg="#252531"
                height={{ base: '17rem', xl: '20rem' }}
                width={{ base: '20rem', sm: '20rem', xl: '27rem' }}
                bgSize="cover"
                bgRepeat="round"
                bgImage={`url('${Shopee}')`}
                boxShadow="outline"
                rounded="md"
              ></Box>
            </Link>
          </Box>
        </Fade>

        <Fade down cascade>
          <Box mb={{ base: '5', md: 5 }}>
            <Link to="/DashBoard">
              <Box
                bg="#252531"
                height={{ base: '17rem', xl: '20rem' }}
                width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
                bgSize="cover"
                bgRepeat="round"
                bgImage={`url('${DashBoard}')`}
                rounded="md"
                boxShadow="outline"
              ></Box>
            </Link>
          </Box>
        </Fade>

        <Fade left cascade>
          <Box mb={{ base: '5', md: 5 }}>
            <Link to="/HackReactor">
              <Box
                bg="#252531"
                height={{ base: '17rem', xl: '20rem' }}
                width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
                bgSize="cover"
                bgRepeat="round"
                bgImage={`url('${HackReactor}')`}
                rounded="md"
                boxShadow="outline"
              ></Box>
            </Link>
          </Box>
        </Fade>

        <Fade left cascade>
          <Box mb={{ base: '5', md: 5 }}>
            <Link to="/LoginPage">
              <Box
                bg="#252531"
                height={{ base: '17rem', xl: '20rem' }}
                width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
                bgSize="cover"
                bgRepeat="round"
                bgImage={`url('${LoginPage}')`}
                rounded="md"
                boxShadow="outline"
              ></Box>
            </Link>
          </Box>
        </Fade>

        <Fade up cascade>
          <Box mb={{ base: '5', md: 5 }}>
            <Link to="/TodoList">
              <Box
                bg="#252531"
                height={{ base: '17rem', xl: '20rem' }}
                width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
                bgSize="cover"
                bgRepeat="round"
                bgImage={`url('${TodoList}')`}
                rounded="md"
                boxShadow="outline"
              ></Box>
            </Link>
          </Box>
        </Fade>

        <Fade right cascade>
          <Box mb={{ base: '5', md: 5 }}>
            <Link to="/Twitter">
              <Box
                bg="#252531"
                height={{ base: '17rem', xl: '20rem' }}
                width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
                bgSize="cover"
                bgRepeat="round"
                bgImage={`url('${Twitter}')`}
                rounded="md"
                boxShadow="outline"
              ></Box>
            </Link>
          </Box>
        </Fade>
      </Flex>
    </>
  );
};

export default RecentWorks;
