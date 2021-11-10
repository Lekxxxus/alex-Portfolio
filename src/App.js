import React from 'react';
import Typical from 'react-typical';
import {
  ChakraProvider,
  Box,
  theme,
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
  Image,
  SimpleGrid,
  Button,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Tag,
  TagLabel,
  HStack,
} from '@chakra-ui/react';
import {
  CheckIcon,
  DownloadIcon,
  ChevronRightIcon,
  SmallCloseIcon,
  StarIcon,
  ChevronLeftIcon,
} from '@chakra-ui/icons';

import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedinIn,
  FaAcquisitionsIncorporated,
  FaAccessibleIcon,
  Fa500Px,
  FaAddressCard,
  FaAccusoft,
  FaInstagram,
  FaDownload,
} from 'react-icons/fa';

import one from './assests/one.png';
import two from './assests/two.png';
import three from './assests/three.png';
import four from './assests/four.png';

import { useDisclosure } from '@chakra-ui/react';
import Screenshot1 from './assests/Screenshot1.jpg';
import yellow from './assests/yellow.jpg';

import carl from './assests/carl.png';
import vids from './assests/vids.png';
import james from './assests/james.png';
import georgy from './assests/georgy.png';
import jes from './assests/jes.png';
import lexus from './assests/lexus.jpg';
import lex from './assests/lex.jpg';

function App() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Box bg="#20202A" h="100vh" w="100%">
        <Flex minH="100vh">
          <Box bg="#20202A" w="20%" display={{ base: 'none', xl: 'block' }}>
            {/* PERSONAL INFORMATION */}
            <Box p={10} h="260px" bg="#252531">
              <Center>
                <Flex direction={'column'} justify="center" align="center">
                  <Avatar w="100px" h="95px" src={lexus} />
                  <Stack spacing={3} p={3}>
                    <Text fontSize="md" textAlign="center" color="white">
                      Alexander A. Magalona
                    </Text>
                    <Text fontSize="xs" color="lightgray">
                      Front-end Deweloper Ui/UX Designer,
                    </Text>
                  </Stack>
                </Flex>
              </Center>
            </Box>
            {/* OTHER INFOS */}
            <Box bg="#20202A">
              <Container maxW="320px" p={4}>
                {/* MY ADDRESS */}

                <Stack spacing={3}>
                  <Flex>
                    <Text fontSize="xs" fontWeight="bold" color="lightgray">
                      Residence:
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" fontWeight="semibold" color="gray">
                      Canada
                    </Text>
                  </Flex>
                  <Flex>
                    <Text fontSize="xs" fontWeight="bold" color="lightgray">
                      City:
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" fontWeight="semibold" color="gray">
                      Toronto
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
                      <CircularProgress
                        thickness={'6px'}
                        color="#FFC107"
                        value={100}
                      >
                        <CircularProgressLabel color="lightgray">
                          100%
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Spacer />
                      <CircularProgress
                        thickness="6px"
                        color="#FFC107"
                        value={90}
                      >
                        <CircularProgressLabel color="lightgray">
                          90%
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Spacer />
                      <CircularProgress
                        thickness="6px"
                        color="#FFC107"
                        value={70}
                      >
                        <CircularProgressLabel color="lightgray">
                          70%
                        </CircularProgressLabel>
                      </CircularProgress>
                    </Flex>
                    <Flex>
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="lightgray"
                      >
                        French
                      </Text>
                      <Spacer />
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="lightgray"
                      >
                        English
                      </Text>
                      <Spacer />
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="lightgray"
                      >
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
                      colorScheme=""
                      fontSize="xs"
                      textColor="gray.400"
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

                    {/* <Text fontSize="xs" fontWeight="medium" color="gray">
                      DOWNLOAD CV
                      <DownloadIcon w={3} color="#FFC107" ml={1} />
                    </Text> */}
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

          {/*DISCOVERY */}

          <Box></Box>

          <Box
            bg=""
            w="100%"
            bgPosition="center"
            bgSize="cover"
            backgroundAttachment="fixed"
            bgRepeat="no-repeat"
            bgImage={`url('${Screenshot1}')`}
          >
            <Box
              bgImage={`url('${Screenshot1}')`}
              bgPosition="center"
              bgRepeat="no-repeat"
              h="46vh"
            >
              <Flex mt={{ base: 10, xl: 32 }} ml={{ base: 10, xl: 52 }}>
                <Stack color="white">
                  <Text
                    fontSize={{ base: '4xl', xl: '5xl' }}
                    fontWeight="black"
                    fontFamily="sans-serif"
                  >
                    Discover my Amazing <br />
                    Art Space!
                  </Text>
                  <Flex>
                    <Text mr={3} color="#FFC107">
                      <ChevronLeftIcon />
                      code
                      <ChevronRightIcon />
                    </Text>
                    <Text mr={3} fontFamily="sans-serif">
                      <Typical
                        loop={Infinity}
                        wrapper="p"
                        steps={[
                          'I build',
                          1000,
                          ' ios and android applications.',
                          200,
                        ]}
                      />
                    </Text>
                    <Text color="#FFC107">
                      {' '}
                      <ChevronLeftIcon />
                      code <ChevronRightIcon />
                    </Text>
                  </Flex>

                  <Flex>
                    <Button
                      fontWeight="semibold"
                      colorScheme="yellow"
                      fontSize="small"
                      textAlign="center"
                      m={4}
                      bg="#FFC107"
                      w="16vh"
                      h="48px"
                      color="black"
                    >
                      EXPLORE NOW
                    </Button>
                  </Flex>
                </Stack>
                <Stack display={{ base: 'none', xl: 'block' }}>
                  <Box boxSize="">
                    <Image
                      boxSize="25rem"
                      objectFit="scale-down"
                      pt={6}
                      ml={10}
                      src={lex}
                      alt="Segun Adebayo"
                    />
                  </Box>
                </Stack>
              </Flex>
            </Box>
            <Flex
              flexDirection={{ base: 'row', xl: 'row' }}
              flexWrap={{ base: 'wrap' }}
              bgColor=""
              justify="center"
              mt={8}
              pl={10}
            >
              <Box display="flex">
                <Text fontWeight="bold" fontSize="2xl" color="#FFC107">
                  10 +
                </Text>
                <Text
                  ml={3}
                  fontSize="sm"
                  mt={2}
                  fontWeight="semibold"
                  color="white"
                >
                  Years Experience
                </Text>
              </Box>
              <Spacer />

              <Box display="flex">
                <Text fontWeight="bold" fontSize="2xl" color="#FFC107">
                  143
                </Text>
                <Text
                  ml={3}
                  fontSize="sm"
                  fontWeight="semibold"
                  mt={2}
                  color="white"
                >
                  Completed Projects
                </Text>
              </Box>
              <Spacer />
              <Spacer />

              <Box display="flex">
                <Text fontWeight="bold" fontSize="2xl" color="#FFC107">
                  114
                </Text>
                <Text
                  ml={3}
                  fontSize="sm"
                  fontWeight="semibold"
                  mt={2}
                  color="white"
                >
                  Happy Customers
                </Text>
              </Box>
              <Spacer />
              <Spacer />

              <Box display="flex">
                <Text fontWeight="bold" fontSize="2xl" color="#FFC107">
                  20 +
                </Text>
                <Text
                  ml={3}
                  fontSize="sm"
                  fontWeight="semibold"
                  mt={2}
                  color="white"
                >
                  Honors and Awards
                </Text>
              </Box>
              <Spacer />
            </Flex>

            {/*  */}

            <Stack>
              <Text color="#FFC107" fontSize="xl" mx={6} my={6} pt={10}>
                My Services
              </Text>
            </Stack>

            <SimpleGrid
              columns={{ base: 1, xl: 3 }}
              spacingX={{ base: 1, xl: 1 }}
              spacingY="3rem"
              mx={{ base: 6, xl: 7 }}
              my={6}
            >
              <Box
                bg="#252531"
                height="15rem"
                width={{ base: '16rem', xl: '24rem' }}
                boxShadow="dark-lg"
              >
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="semibold"
                  ml={5}
                  mt={5}
                >
                  Web Development
                </Text>
                <Text
                  color="whiteAlpha.600"
                  fontSize="md"
                  my={6}
                  mx={6}
                  fontWeight="light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </Text>
                <Text
                  color="#FFC107"
                  fontSize="xs"
                  mx={6}
                  fontWeight="semibold"
                >
                  ORDER NOW <ChevronRightIcon />
                </Text>
              </Box>
              <Box
                bg="#252531"
                height="15rem"
                width={{ base: '16rem', xl: '24rem' }}
                boxShadow="dark-lg"
              >
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="semibold"
                  ml={5}
                  mt={5}
                >
                  UI/UX Design
                </Text>
                <Text
                  color="whiteAlpha.600"
                  fontSize="md"
                  my={6}
                  mx={6}
                  fontWeight="light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </Text>
                <Text
                  color="#FFC107"
                  fontSize="xs"
                  mx={6}
                  fontWeight="semibold"
                >
                  ORDER NOW <ChevronRightIcon />
                </Text>
              </Box>
              <Box
                bg="#252531"
                height="15rem"
                width={{ base: '16rem', xl: '24rem' }}
                boxShadow="dark-lg"
              >
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="semibold"
                  ml={5}
                  mt={5}
                >
                  Sound Design
                </Text>
                <Text
                  color="whiteAlpha.600"
                  fontSize="md"
                  my={6}
                  mx={6}
                  fontWeight="light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </Text>
                <Text
                  color="#FFC107"
                  fontSize="xs"
                  mx={6}
                  fontWeight="semibold"
                >
                  ORDER NOW <ChevronRightIcon />
                </Text>
              </Box>
              <Box
                bg="#252531"
                height="15rem"
                width={{ base: '16rem', xl: '24rem' }}
                boxShadow="dark-lg"
              >
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="semibold"
                  ml={5}
                  mt={5}
                >
                  Game Design
                </Text>
                <Text
                  color="whiteAlpha.600"
                  fontSize="md"
                  my={6}
                  mx={6}
                  fontWeight="light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </Text>
                <Text
                  color="#FFC107"
                  fontSize="xs"
                  mx={6}
                  fontWeight="semibold"
                >
                  Sound Design <ChevronRightIcon />
                </Text>
              </Box>
              <Box
                bg="#252531"
                height="15rem"
                width={{ base: '16rem', xl: '24rem' }}
                boxShadow="dark-lg"
              >
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="semibold"
                  ml={5}
                  mt={5}
                >
                  Advertising
                </Text>
                <Text
                  color="whiteAlpha.600"
                  fontSize="md"
                  my={6}
                  mx={6}
                  fontWeight="light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </Text>
                <Text
                  color="#FFC107"
                  fontSize="xs"
                  mx={6}
                  fontWeight="semibold"
                >
                  Advertising <ChevronRightIcon />
                </Text>
              </Box>
            </SimpleGrid>

            <Box>
              <Text
                color="#FFC107"
                fontWeight="semibold"
                fontSize="xl"
                mx={6}
                my={6}
                pt={10}
              >
                Price Plans
              </Text>
            </Box>

            {/*  */}

            <SimpleGrid
              columns={{ base: 1, xl: 3 }}
              spacingX={{ base: 1, xl: 2 }}
              spacingX=""
              spacingY={{ base: 5, xl: 2 }}
              mx={6}
              my={6}
            >
              <Box
                width={{ base: '16rem', xl: '20rem' }}
                height="22rem"
                boxShadow="dark-lg"
              >
                <Text
                  fontWeight="semibold"
                  fontSize="lg"
                  color="white"
                  pt={4}
                  textAlign="center"
                >
                  Starter Price
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="3xl"
                  color="#FFC107"
                  pt={5}
                  textAlign="center"
                >
                  FREE <sup>*</sup>
                </Text>
                <Text
                  fontSize="xs"
                  textAlign="center"
                  color="whiteAlpha.900"
                  fontWeight="semibold"
                  pt={7}
                  pr={5}
                >
                  <CheckIcon mr={1} /> Ui Design
                </Text>
                <Text
                  fontSize="xs"
                  textAlign="center"
                  color="whiteAlpha.900"
                  pt={3}
                  pr={5}
                  fontWeight="semibold"
                >
                  <CheckIcon mr={1} /> Web Development
                </Text>
                <Text
                  fontSize="xs"
                  textAlign="center"
                  // color="#FFC107"
                  pt={3}
                  pr={5}
                  fontWeight="semibold"
                  color="whiteAlpha.500"
                >
                  <SmallCloseIcon mr={1} /> Logo design
                </Text>
                <Text
                  fontSize="xs"
                  textAlign="center"
                  color="whiteAlpha.500"
                  pt={3}
                  pr={5}
                  fontWeight="semibold"
                >
                  <SmallCloseIcon mr={1} /> SEO optimization
                </Text>
                <Text
                  fontSize="xs"
                  textAlign="center"
                  color="whiteAlpha.500"
                  pt={3}
                  pr={5}
                  fontWeight="semibold"
                >
                  <SmallCloseIcon mr={1} /> Wordpress integration
                </Text>
                <Text
                  fontSize="xs"
                  textAlign="center"
                  color="#FFC107"
                  pt={3}
                  pr={3}
                  fontWeight="semibold"
                >
                  ORDER NOW <ChevronRightIcon />
                </Text>
                <Text
                  fontSize="xs"
                  textAlign="center"
                  color="whiteAlpha.500"
                  pt={3}
                  pr={5}
                  fontWeight="semibold"
                >
                  * Free only when ordering paid services
                </Text>
              </Box>
              <Box>
                <Box
                  bg="#252531"
                  height="22rem"
                  width={{ base: '16rem', xl: '20rem' }}
                  boxShadow="dark-lg"
                >
                  <Text
                    fontWeight="semibold"
                    fontSize="lg"
                    color="white"
                    pt={4}
                    textAlign="center"
                  >
                    Hourly payment
                  </Text>
                  <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#FFC107"
                    pt={5}
                    textAlign="center"
                  >
                    $ 29 h
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    fontWeight="semibold"
                    pt={7}
                    pr={5}
                  >
                    <CheckIcon mr={1} /> Ui Design
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  >
                    <CheckIcon mr={1} /> Web Development
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  >
                    <CheckIcon mr={1} /> Logo design
                  </Text>

                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  >
                    <SmallCloseIcon mr={1} /> SEO optimization
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  >
                    <SmallCloseIcon mr={1} /> Wordpress integration
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="#FFC107"
                    pt={3}
                    pl={3}
                    fontWeight="semibold"
                  >
                    ORDER NOW <ChevronRightIcon />
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="#FFC107"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  ></Text>
                </Box>
              </Box>
              <Box>
                <Box
                  bg="#252531"
                  height="22rem"
                  width={{ base: '16rem', xl: '20rem' }}
                  boxShadow="dark-lg"
                >
                  <Text
                    fontWeight="semibold"
                    fontSize="lg"
                    color="white"
                    pt={4}
                    textAlign="center"
                  >
                    Full time
                  </Text>
                  <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#FFC107"
                    pt={5}
                    textAlign="center"
                  >
                    $ 2999 m
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    fontWeight="semibold"
                    pt={7}
                    pr={5}
                  >
                    <CheckIcon mr={1} /> Ui Design
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  >
                    <CheckIcon mr={1} /> Web Development
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  >
                    <CheckIcon mr={1} /> Logo design
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  >
                    <CheckIcon mr={1} /> SEO optimization
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="whiteAlpha.500"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  >
                    <CheckIcon mr={1} /> Wordpress integration
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="#FFC107"
                    pt={3}
                    pl={3}
                    fontWeight="semibold"
                  >
                    ORDER NOW <ChevronRightIcon />
                  </Text>
                  <Text
                    fontSize="xs"
                    textAlign="center"
                    color="#FFC107"
                    pt={3}
                    pr={5}
                    fontWeight="semibold"
                  ></Text>
                </Box>
              </Box>
            </SimpleGrid>

            {/*  */}

            <Box>
              <Text
                color="#FFC107"
                fontWeight="semibold"
                fontSize="xl"
                mx={6}
                my={6}
                pt={10}
              >
                Recommendations
              </Text>
            </Box>

            {/*  */}

            <SimpleGrid
              columns={{ base: 1, xl: 3 }}
              spacingX={{ base: 1, xl: 2 }}
              spacingY="3rem"
              mx={6}
              my={6}
            >
              <Box
                bg="#252531"
                padding="4"
                width={{ base: '16rem', xl: '20rem' }}
                boxShadow="inner"
              >
                <Flex justify="flex-end" pr="10" mb={15}>
                  <Image
                    borderRadius="full"
                    boxSize="70px"
                    src={carl}
                    alt="Segun Adebayo"
                  />
                </Flex>
                <Text fontWeight="semibold" color="white" pl="5" fontSize="sm">
                  Paul Trueman
                </Text>
                <Text
                  fontWeight="semibold"
                  color="white"
                  pl="5"
                  fontSize="xs"
                  color="whiteAlpha.400"
                  as="em"
                >
                  Template author
                </Text>
                <Text
                  fontWeight="light"
                  color="whiteAlpha.600"
                  pl="4"
                  fontSize="sm"
                >
                  Working with Artur has been a pleasure. Better yet - I alerted
                  them of a minor issue before going to sleep. The issue was
                  fixed the next morning. I couldn't ask for better support.
                  Thank you Artur! This is easily a 5 star freelancer.
                  <Flex
                    bg="#15151b"
                    rounded="full"
                    color="#FFC107"
                    justifyContent="flex-start"
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

              <Box
                bg="#252531"
                padding="4"
                width={{ base: '16rem', xl: '20rem' }}
                boxShadow="inner"
              >
                <Flex justify="flex-end " pr={10} mb={15}>
                  <Image
                    borderRadius="full"
                    boxSize="70px"
                    src={vids}
                    alt="Segun Adebayo"
                  />
                </Flex>
                <Text fontWeight="semibold" color="white" pl={5} fontSize="sm">
                  Paul Trueman
                </Text>
                <Text
                  fontWeight="semibold"
                  color="white"
                  pl={5}
                  fontSize="xs"
                  color="whiteAlpha.400"
                  as="em"
                >
                  Template author
                </Text>
                <Text
                  fontWeight="light"
                  color="whiteAlpha.600"
                  pl={4}
                  fontSize="sm"
                >
                  Working with Artur has been a pleasure. Better yet - I alerted
                  them of a minor issue before going to sleep. The issue was
                  fixed the next morning. I couldn't ask for better support.
                  Thank you Artur! This is easily a 5 star freelancer.
                  <Flex
                    bg="#15151b"
                    rounded="full"
                    color="#FFC107"
                    justifyContent="flex-start"
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
              <Box>
                <Box
                  bg="#252531"
                  padding="4"
                  width={{ base: '16rem', xl: '20rem' }}
                  boxShadow="inner"
                >
                  <Flex justify="flex-end" pr="10" mb="15">
                    <Image
                      borderRadius="full"
                      boxSize="70px"
                      src={james}
                      alt="Segun Adebayo"
                    />
                  </Flex>
                  <Text
                    fontWeight="semibold"
                    color="white"
                    pl="5"
                    fontSize="sm"
                  >
                    Paul Trueman
                  </Text>
                  <Text
                    fontWeight="semibold"
                    color="white"
                    pl="5"
                    fontSize="xs"
                    color="whiteAlpha.400"
                    as="em"
                  >
                    Template author
                  </Text>
                  <Text
                    fontWeight="light"
                    color="whiteAlpha.600"
                    pl="4"
                    fontSize="sm"
                  >
                    Working with Artur has been a pleasure. Better yet - I
                    alerted them of a minor issue before going to sleep. The
                    issue was fixed the next morning. I couldn't ask for better
                    support. Thank you Artur! This is easily a 5 star
                    freelancer.
                    <Flex
                      bg="#15151b"
                      rounded="full"
                      color="#FFC107"
                      justifyContent="flex-start"
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
              <Box>
                <Box
                  bg="#252531"
                  padding="4"
                  width={{ base: '16rem', xl: '20rem' }}
                  boxShadow="inner"
                >
                  <Flex justify="flex-end" pr="10" mb="15">
                    <Image
                      borderRadius="full"
                      boxSize="70px"
                      src={georgy}
                      alt="Segun Adebayo"
                    />
                  </Flex>
                  <Text
                    fontWeight="semibold"
                    color="white"
                    pl="5"
                    fontSize="sm"
                  >
                    Paul Trueman
                  </Text>
                  <Text
                    fontWeight="semibold"
                    color="white"
                    pl="5"
                    fontSize="xs"
                    color="whiteAlpha.400"
                    as="em"
                  >
                    Template author
                  </Text>
                  <Text
                    fontWeight="light"
                    color="whiteAlpha.600"
                    pl="4"
                    fontSize="sm"
                  >
                    Working with Artur has been a pleasure. Better yet - I
                    alerted them of a minor issue before going to sleep. The
                    issue was fixed the next morning. I couldn't ask for better
                    support. Thank you Artur! This is easily a 5 star
                    freelancer.
                    <Flex
                      bg="#15151b"
                      rounded="full"
                      color="#FFC107"
                      justifyContent="flex-start"
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
              <Box>
                <Box
                  bg="#252531"
                  padding="4"
                  width={{ base: '16rem', xl: '20rem' }}
                  boxShadow="inner"
                >
                  <Flex justify="flex-end" pr="10" mb="15">
                    <Image
                      borderRadius="full"
                      boxSize="70px"
                      src={jes}
                      alt="Segun Adebayo"
                    />
                  </Flex>
                  <Text
                    fontWeight="semibold"
                    color="white"
                    pl="5"
                    fontSize="sm"
                  >
                    Paul Trueman
                  </Text>
                  <Text
                    fontWeight="semibold"
                    color="white"
                    pl="5"
                    fontSize="xs"
                    color="whiteAlpha.400"
                    as="em"
                  >
                    Template author
                  </Text>
                  <Text
                    fontWeight="light"
                    color="whiteAlpha.600"
                    pl="4"
                    fontSize="sm"
                  >
                    Working with Artur has been a pleasure. Better yet - I
                    alerted them of a minor issue before going to sleep. The
                    issue was fixed the next morning. I couldn't ask for better
                    support. Thank you Artur! This is easily a 5 star
                    freelancer.
                    <Flex
                      bg="#15151b"
                      rounded="full"
                      color="#FFC107"
                      justifyContent="flex-start"
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
            </SimpleGrid>

            <Flex justifyContent="space-around">
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

            <Flex
              bg="#252531"
              width={{ base: '18rem', xl: '95%' }}
              ml={6}
              mb={6}
              boxShadow="dark-lg"
            >
              <Box fontSize="xs" color="whiteAlpha.500" p="4">
                © 2021 Lexus
              </Box>
              <Spacer />
              <Box color="whiteAlpha.500" fontSize="xs" p="4">
                Template author:
              </Box>
            </Flex>
          </Box>

          {/* |||| */}

          <Box bg="#252531" w="15%" align="center" p={4}>
            {/* <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<AddIcon />} command="⌘T">
                  HOME
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                  ABOUT
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                  CONTACT
                </MenuItem>
                <MenuItem icon={<EditIcon />} command="⌘O">
                  RESUME
                </MenuItem>
              </MenuList>
            </Menu> */}
            <Box p={4} display={{ base: 'none', xl: 'block' }}>
              <Button
                _hover={{
                  color: '#',
                }}
                fontSize="xs"
                fontWeight="semibold"
                bg="#FFC107"
                onClick={onToggle}
              >
                Open Drawer
              </Button>
              {/* <Box bg="#FFC107"> 1</Box> */}
              <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader fontWeight="bold" bg="#FFC107">
                    HOME
                  </DrawerHeader>
                  <DrawerBody bg="#20202A" color="white">
                    <Box>
                      <Text
                        _hover={{
                          color: '#FFC107',
                        }}
                        fontSize="xs"
                        fontWeight="semibold"
                        borderBottomWidth="1px"
                      >
                        HOME
                      </Text>
                      <Text
                        _hover={{
                          color: '#FFC107',
                        }}
                        fontSize="xs"
                        fontWeight="semibold"
                        borderBottomWidth="1px"
                      >
                        ABOUT
                      </Text>
                      <Text
                        _hover={{
                          color: '#FFC107',
                        }}
                        fontSize="xs"
                        fontWeight="semibold"
                        borderBottomWidth="1px"
                      >
                        CONTACT
                      </Text>
                    </Box>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
