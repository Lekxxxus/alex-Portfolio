import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';
// import Screenshot1 from '../assests/Screenshot1.jpg';

import Header from '../layers/Header';
import Sidebar from '../layers/Sidebar';
import RecentWorks from '../layers/RecentWorks';
import TechStacks from '../layers/TechStacks';
import Testimony from '../layers/Testimony';
import Footer from '../layers/Footer';
import Contact from '../layers/Contact';

function Home() {
  const {} = useDisclosure();
  return (
    <Box bg="#20202A" h="auto" w="100%">
      <Flex minH="100vh">
        <Sidebar />

        <Box
          bg=""
          w="100%"
          bgPosition="center"
          bgSize="cover"
          backgroundAttachment="fixed"
          bgRepeat="no-repeat"
          backgroundColor={'gray.900'}
          // bgImage={`url('${Screenshot1}')`}
        >
          <Contact />
          <Header />

          <RecentWorks />
          <TechStacks />

          <Testimony />
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
