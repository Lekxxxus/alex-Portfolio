import React from 'react';

import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';

import carl from '../assests/carl.png';
import vids from '../assests/vids.png';
import james from '../assests/james.png';
import georgy from '../assests/georgy.png';
import jes from '../assests/jes.png';
import kian from '../assests/kian.jpg';
import { StarIcon } from '@chakra-ui/icons';
// import { Rotate } from 'react-reveal';

function Testimony() {
  return (
    <>
      <Box>
        <Text
          paddingLeft={{ base: '1', md: 330 }}
          color="#FFC107"
          fontWeight="semibold"
          fontSize="xl"
          mx={6}
          my={6}
          pt={10}
        >
          Testimonial
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
        <Fade up>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              // bg="#252531"
              padding="4"
              height={{ base: '22rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              rounded="md"
              boxShadow="outline"
            >
              <Flex justify="flex-end">
                <Image
                  borderRadius="full"
                  boxSize="70px"
                  src={carl}
                  alt="carl"
                />
              </Flex>
              <Text fontWeight="semibold" color="white" pl={'3'} fontSize="sm">
                Paul Trueman
              </Text>
              <Text
                fontWeight="semibold"
                pl={'3'}
                fontSize="xs"
                color="whiteAlpha.400"
                fontStyle="italic"
              >
                Template author
              </Text>
              <Text
                fontWeight="light"
                color="whiteAlpha.600"
                pl="4"
                fontSize="sm"
                _hover={{
                  color: '#FFC107',
                }}
              >
                Working with Artur has been a pleasure. Better yet - I alerted
                them of a minor issue before going to sleep. The issue was fixed
                the next morning. I couldn't ask for better support. Thank you
                Artur! This is easily a 5 star freelancer.
                <Flex
                  // bg="#15151b"
                  rounded="full"
                  color="#FFC107"
                  justifyContent="center"
                  w={28}
                  h={6}
                  pt={4}
                >
                  <Text>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft={1}>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft={1}>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft={1}>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft={1}>
                    <StarIcon />
                  </Text>
                </Flex>
              </Text>
            </Box>
          </Box>
        </Fade>

        <Fade down>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              // bg="#252531"
              padding="4"
              height={{ base: '22rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              rounded="md"
              boxShadow="outline"
            >
              <Flex justify="flex-end ">
                <Image
                  borderRadius="full"
                  boxSize="70px"
                  src={vids}
                  alt="vids"
                />
              </Flex>
              <Text fontWeight="semibold" color="white" pl={'3'} fontSize="sm">
                Paul Trueman
              </Text>
              <Text
                fontWeight="semibold"
                pl={'3'}
                fontSize="xs"
                color="whiteAlpha.400"
                fontStyle="italic"
              >
                Template author
              </Text>
              <Text
                fontWeight="light"
                color="whiteAlpha.600"
                pl={4}
                fontSize="sm"
                _hover={{
                  color: '#FFC107',
                }}
              >
                Working with Artur has been a pleasure. Better yet - I alerted
                them of a minor issue before going to sleep. The issue was fixed
                the next morning. I couldn't ask for better support. Thank you
                Artur! This is easily a 5 star freelancer.
                <Flex
                  // bg="#15151b"
                  rounded="full"
                  color="#FFC107"
                  justifyContent="center"
                  w={28}
                  h={6}
                  mt={4}
                >
                  <Text>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft={1}>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text color="whiteAlpha.200" paddingLeft="1">
                    <StarIcon />
                  </Text>
                </Flex>
              </Text>
            </Box>
          </Box>
        </Fade>

        <Fade left cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              // bg="#252531"
              padding="4"
              height={{ base: '22rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              rounded="md"
              boxShadow="outline"
            >
              <Flex justify="flex-end">
                {/* pr="10" mb="15" */}
                <Image
                  borderRadius="full"
                  boxSize="70px"
                  src={james}
                  alt="james"
                />
              </Flex>
              <Text fontWeight="semibold" color="white" pl={'3'} fontSize="sm">
                Paul Trueman
              </Text>
              <Text
                fontWeight="semibold"
                pl={'3'}
                fontSize="xs"
                color="whiteAlpha.400"
                fontStyle="italic"
              >
                Template author
              </Text>
              <Text
                fontWeight="light"
                color="whiteAlpha.600"
                pl="4"
                fontSize="sm"
                _hover={{
                  color: '#FFC107',
                }}
              >
                Working with Artur has been a pleasure. Better yet - I alerted
                them of a minor issue before going to sleep. The issue was fixed
                the next morning. I couldn't ask for better support. Thank you
                Artur! This is easily a 5 star freelancer.
                <Flex
                  // bg="#15151b"
                  rounded="full"
                  color="#FFC107"
                  justifyContent="center"
                  w={28}
                  h={6}
                  mt="4"
                >
                  <Text>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                </Flex>
              </Text>
            </Box>
          </Box>
        </Fade>

        <Fade left cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              // bg="#252531"
              padding="4"
              height={{ base: '22rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              rounded="md"
              boxShadow="outline"
            >
              <Flex justify="flex-end">
                <Image
                  borderRadius="full"
                  boxSize="70px"
                  src={georgy}
                  alt="georgy"
                />
              </Flex>
              <Text fontWeight="semibold" color="white" pl={'3'} fontSize="sm">
                Paul Trueman
              </Text>
              <Text
                fontWeight="semibold"
                pl={'3'}
                fontSize="xs"
                color="whiteAlpha.400"
                fontStyle="italic"
              >
                Template author
              </Text>
              <Text
                fontWeight="light"
                color="whiteAlpha.600"
                pl="4"
                fontSize="sm"
                _hover={{
                  color: '#FFC107',
                }}
              >
                Working with Artur has been a pleasure. Better yet - I alerted
                them of a minor issue before going to sleep. The issue was fixed
                the next morning. I couldn't ask for better support. Thank you
                Artur! This is easily a 5 star freelancer.
                <Flex
                  // bg="#15151b"
                  rounded="full"
                  color="#FFC107"
                  justifyContent="center"
                  w={28}
                  h={6}
                  mt="4"
                >
                  <Text>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                </Flex>
              </Text>
            </Box>
          </Box>
        </Fade>

        <Fade down cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              // bg="#252531"
              padding="4"
              height={{ base: '22rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              rounded="md"
              boxShadow="outline"
            >
              <Flex justify="flex-end">
                <Image
                  borderRadius="full"
                  boxSize="70px"
                  src={kian}
                  alt="kian"
                />
              </Flex>
              <Text fontWeight="semibold" color="white" pl={'3'} fontSize="sm">
                Paul Trueman
              </Text>
              <Text
                fontWeight="semibold"
                pl={'3'}
                fontSize="xs"
                color="whiteAlpha.400"
                fontStyle="italic"
              >
                Template author
              </Text>
              <Text
                fontWeight="light"
                color="whiteAlpha.600"
                pl="4"
                fontSize="sm"
                _hover={{
                  color: '#FFC107',
                }}
              >
                Working with Artur has been a pleasure. Better yet - I alerted
                them of a minor issue before going to sleep. The issue was fixed
                the next morning. I couldn't ask for better support. Thank you
                Artur! This is easily a 5 star freelancer.
                <Flex
                  // bg="#15151b"
                  rounded="full"
                  color="#FFC107"
                  justifyContent="center"
                  w={28}
                  h={6}
                  mt="4"
                >
                  <Text>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                </Flex>
              </Text>
            </Box>
          </Box>
        </Fade>

        <Fade right cascade>
          <Box mb={{ base: '5', md: '10' }}>
            <Box
              // bg="#252531"
              padding="4"
              height={{ base: '22rem', xl: '20rem' }}
              width={{ base: '20rem', sm: '19rem', xl: '27rem' }}
              rounded="md"
              boxShadow="outline"
            >
              <Flex justify="flex-end">
                <Image borderRadius="full" boxSize="70px" src={jes} alt="jes" />
              </Flex>
              <Text fontWeight="semibold" color="white" pl={'3'} fontSize="sm">
                Paul Trueman
              </Text>
              <Text
                fontWeight="semibold"
                pl={'3'}
                fontSize="xs"
                color="whiteAlpha.400"
              >
                Template author
              </Text>
              <Text
                fontWeight="light"
                color="whiteAlpha.600"
                pl="4"
                fontSize="sm"
                _hover={{
                  color: '#FFC107',
                }}
              >
                Working with Artur has been a pleasure. Better yet - I alerted
                them of a minor issue before going to sleep. The issue was fixed
                the next morning. I couldn't ask for better support. Thank you
                Artur! This is easily a 5 star freelancer.
                <Flex
                  // bg="#15151b"
                  rounded="full"
                  color="#FFC107"
                  justifyContent="center"
                  w={28}
                  h={6}
                  mt="4"
                >
                  <Text>
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                  <Text paddingLeft="1">
                    <StarIcon />
                  </Text>
                </Flex>
              </Text>
            </Box>
          </Box>
        </Fade>
      </Flex>
    </>
  );
}

export default Testimony;
