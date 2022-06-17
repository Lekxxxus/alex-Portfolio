import React from 'react';

// import Typical from 'react-typical';
import {
  Box,
  Flex,
  Avatar,
  Center,
  Stack,
  Text,
  Divider,
  Container,
  Spacer,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Button,
  HStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaDownload,
} from 'react-icons/fa';

// import lexus from '../assests/lexus.jpg';
// import grass1 from '../assests/grass1.jpg';
import grass2 from '../assests/grass2.png';

const Sidebar = () => {
  return (
    <Box
      position={'fixed'}
      bg="#20202A"
      w="15%"
      display={{ base: 'none', xl: 'block' }}
      h="100%"
      overflow={'auto'}
    >
      {/* PERSONAL INFORMATION */}
      <Box p={10} h="260px" bg="#252531">
        <Center>
          <Flex direction={'column'} justify="center" align="center">
            {/* <Avatar w="100px" h="95px" src={lexus} /> */}
            <Avatar w="100px" h="95px" src={grass2} />

            <Stack spacing={3} p={3}>
              <Text fontSize="md" textAlign="center" color="white">
                Alexander A. Magalona
              </Text>
              <Text fontSize="xs" textAlign="center" color="lightgray">
                Front-end Deweloper Ui/UX Designer,
              </Text>
            </Stack>
          </Flex>
        </Center>
      </Box>
      {/* OTHER INFOS */}
      <Box bg="#20202A">
        <Container maxW="300px" p={4}>
          {/* MY ADDRESS */}

          <Stack spacing={3}>
            <Flex>
              <Text fontSize="xs" fontWeight="bold" color="lightgray">
                Residence:
              </Text>
              <Spacer />
              <Text fontSize="xs" fontWeight="semibold" color="gray">
                Sunset Tower
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="xs" fontWeight="bold" color="lightgray">
                City:
              </Text>
              <Spacer />
              <Text fontSize="xs" fontWeight="semibold" color="gray">
                L.A.
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="xs" fontWeight="bold" color="lightgray">
                Age:
              </Text>
              <Spacer />
              <Text fontSize="xs" fontWeight="semibold" color="gray">
                Ꝏ
              </Text>
            </Flex>
          </Stack>
          <Divider pt={4} borderColor="gray" />

          {/* LANGUAGE SKILLS */}

          <Box m={8}>
            <Stack spacing={3}>
              <Flex>
                <CircularProgress thickness={'6px'} color="#FFC107" value={100}>
                  <CircularProgressLabel color="lightgray">
                    100%
                  </CircularProgressLabel>
                </CircularProgress>
                <Spacer />
                <CircularProgress thickness="6px" color="#FFC107" value={90}>
                  <CircularProgressLabel color="lightgray">
                    90%
                  </CircularProgressLabel>
                </CircularProgress>
                <Spacer />
                <CircularProgress thickness="6px" color="#FFC107" value={70}>
                  <CircularProgressLabel color="lightgray">
                    70%
                  </CircularProgressLabel>
                </CircularProgress>
              </Flex>
              <Flex>
                <Text fontSize="xs" fontWeight="semibold" color="lightgray">
                  French
                </Text>
                <Spacer />
                <Text fontSize="xs" fontWeight="semibold" color="lightgray">
                  English
                </Text>
                <Spacer />
                <Text fontSize="xs" fontWeight="semibold" color="lightgray">
                  Spanish
                </Text>
              </Flex>
            </Stack>
          </Box>
          <Divider pt={1} borderColor="gray" />

          {/* TECH SKILLS */}

          <Box pt={3}>
            <Flex align="center">
              <Text fontSize="sm" fontWeight="bold" color="lightgray">
                html
              </Text>
              <Spacer />
              <Text fontSize="xs" color="gray">
                96%
              </Text>
            </Flex>
            <Progress mt={2} value={96} colorScheme="yellow" size="xs" />
          </Box>
          <Box pt={3}>
            <Flex align="center">
              <Text fontSize="sm" fontWeight="bold" color="lightgray">
                CSS
              </Text>
              <Spacer />
              <Text fontSize="xs" color="gray">
                95%
              </Text>
            </Flex>
            <Progress mt={2} value={95} colorScheme="yellow" size="xs" />
          </Box>
          <Box pt={3}>
            <Flex align="center">
              <Text fontSize="sm" fontWeight="bold" color="lightgray">
                JS
              </Text>
              <Spacer />
              <Text fontSize="xs" color="gray">
                90%
              </Text>
            </Flex>
            <Progress mt={2} value={90} colorScheme="yellow" size="xs" />
          </Box>
          <Box pt={3}>
            <Flex align="center">
              <Text fontSize="sm" fontWeight="bold" color="lightgray">
                React
              </Text>
              <Spacer />
              <Text fontSize="xs" color="gray">
                98%
              </Text>
            </Flex>
            <Progress mt={2} value={98} colorScheme="yellow" size="xs" />
          </Box>
          <Box pt={3}>
            <Flex align="center">
              <Text fontSize="sm" fontWeight="bold" color="lightgray">
                Redux
              </Text>
              <Spacer />
              <Text fontSize="xs" color="gray">
                96%
              </Text>
            </Flex>
            <Progress mt={2} value={96} colorScheme="yellow" size="xs" />
          </Box>
          <Divider pt={8} borderColor="gray" />

          {/* FRAMEWORKS SKILLS */}

          <Flex align="center" pt={5}>
            <CheckIcon w={3} color="#FFC107" mr={2} />
            <Text fontSize="xs" fontWeight="semibold" color="gray">
              Bootstrap, Materialize
            </Text>
          </Flex>
          <Flex align="center" pt={5}>
            <CheckIcon w={3} color="#FFC107" mr={2} />
            <Text fontSize="xs" fontWeight="semibold" color="gray">
              Stylus, Sass, Less
            </Text>
          </Flex>
          <Flex align="center" pt={5}>
            <CheckIcon w={3} color="#FFC107" mr={2} />
            <Text fontSize="xs" fontWeight="semibold" color="gray">
              Gulp, Webpack, Grunt
            </Text>
          </Flex>
          <Flex align="center" pt={5}>
            <CheckIcon w={3} color="#FFC107" mr={2} />
            <Text fontSize="xs" fontWeight="semibold" color="gray">
              GIT knowledge
            </Text>
          </Flex>
          <Divider pt={5} borderColor="gray" />
          <Box mt={2}>
            <HStack>
              <Button
                size="md"
                textColor="gray.400"
                colorScheme=""
                fontSize="xs"
                _focus={{
                  outline: 'none',
                }}
                _hover={{
                  textColor: 'white',
                }}
                rightIcon={<FaDownload />}
              >
                DOWNLOAD CV
              </Button>

              <Spacer />
            </HStack>
          </Box>
        </Container>
      </Box>

      <HStack bg="#252531" boxShadow="xs">
        <Button
          colorScheme="github"
          textColor="gray.400"
          _focus={{
            outline: 'none',
          }}
          _hover={{
            textColor: 'white',
          }}
          leftIcon={<FaGithub />}
        ></Button>
        <Button
          colorScheme="github"
          textColor="gray.400"
          _focus={{
            outline: 'none',
          }}
          _hover={{
            textColor: 'white',
          }}
          leftIcon={<FaLinkedinIn />}
        ></Button>
        <Button
          colorScheme="github"
          textColor="gray.400"
          _focus={{
            outline: 'none',
          }}
          _hover={{
            textColor: 'white',
          }}
          leftIcon={<FaTwitter />}
        ></Button>
        <Button
          colorScheme="github"
          textColor="gray.400"
          _focus={{
            outline: 'none',
          }}
          _hover={{
            textColor: 'white',
          }}
          leftIcon={<FaInstagram />}
        ></Button>
      </HStack>
    </Box>
  );
};

export default Sidebar;
