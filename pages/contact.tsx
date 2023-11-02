import { FiMapPin } from "@react-icons";

import React from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";

import Image from "@components/image";

import ContactForm from "@blocks/contact-form";
import CTA from "@blocks/cta";

// Google Analytics
import ReactGA from 'react-ga';
import { useEffect, useRef } from 'react';

// cookies
import { FcLock } from "@react-icons";

const ContactPage: React.FC = () => {

// Google Analytics代码
useEffect(() => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`; // 使用环境变量替代跟踪ID
  document.head.appendChild(script);

  script.addEventListener('load', () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_ID); // 使用环境变量替代跟踪ID
  });
}, []);

  // cookies
  const toast = useToast();
  const toastIdRef = useRef<string | number>();

  const cookie = () =>
  (toastIdRef.current = toast({
    position: "bottom",
    duration: null,
    isClosable: true,
    containerStyle: {
      width: "full",
      maxWidth: "4xl",
    },
    render: () => <SimpleCookiePreference toastRef={toastIdRef} />,
  }));

  useEffect(() => {
    if (!toastIdRef.current) cookie();
    return () => toast.close(toastIdRef.current);
  });

  
  return (
    <>
      <NextSeo title="Contact us" description="NotionTemplate.AI contact us" />
      <chakra.main
        // bg="gray.50"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box
          pt={[28, 28, 32, 210]}
          pb={32}
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <Container maxW={850}>
            <VStack textAlign="center">
              <Text variant="subtitle" data-aos="fade-up">
                Contact
              </Text>
              {/* <Heading
                as="h1"
                lineHeight={[1.5, 1, 1]}
                fontSize={["2em", "3em", "4em"]}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                We would love to hear your comments and suggestions
              </Heading> */}
              <Text
                data-aos="fade-up"
                data-aos-delay="100"
                maxW={680}
                fontSize="2xl"
              >
                You can reach me at b (@) zhiyuan081632
              </Text>
            </VStack>
          </Container>
        </Box>
        {/* <Container mt={-20} maxW="container.lg">
          <Box
            data-aos="fade-up"
            data-aos-delay="150"
            rounded="2xl"
            p={[4, 8, 10, 20]}
            bg={useColorModeValue("white", "gray.700")}
          >
            <ContactForm />
          </Box>
        </Container> */}

        <Container
          zIndex={1}
          pos="relative"
          py={[5, 10, 28]}
          maxW="container.xl"
        >
          {/* <ImageLazyload
            left="50%"
            top="50%"
            transform="translateY(-50%) translateX(-50%)"
            pos="absolute"
            maxWidth="750px"
            width="full"
            zIndex={-1}
            image={useColorModeValue(WorldMapDotLight, WorldMapDotDark)}
          />
          <Box
            left="50%"
            top="50%"
            transform="translateY(-50%) translateX(-50%)"
            pos="absolute"
            zIndex={-1}
          >
            <Image
              src={useColorModeValue(
                "/images/world-map-dots-light.png",
                "/images/world-map-dots-dark.png",
              )}
              width={720}
              height={405}
              alt="world map dot"
            />
          </Box> */}

          <Stack
            alignItems={["stretch", "stretch", "center"]}
            direction={["column", "column", "row"]}
          >
            <Flex
              justify={["center", "center", "start"]}
              w="full"
              flex={[1, 1, 1, 2]}
              data-aos="fade-up"
            >
              <VStack
                textAlign={["center", "center", "start"]}
                align={["center", "center", "start"]}
              >
                <Text variant="subtitle">Location</Text>
                <Heading
                  lineHeight={[1.5, 1, 1]}
                  fontSize={["1.5em", "2em", "3em"]}
                >
                  Our offices
                </Heading>
                {/* <Text fontSize="xl" maxW={400}>
                  We look forward to meeting you and offering solutions to your
                  software and design problems.
                </Text> */}
              </VStack>
            </Flex>

            <Flex
              data-aos="fade-up"
              data-aos-delay="50"
              justify={["center", "center", "start"]}
              flex="1"
            >
              <Box p={[2, 5, 10]}>
                <VStack align={["center", "center", "start"]}>
                  <Flex w="full" justify={["center", "center", "start"]}>
                    <Icon color="brand.400" as={FiMapPin} w={6} h={6} />
                  </Flex>
                  <Text fontSize="lg" fontWeight="600">
                    Beijing, China
                  </Text>
                  <Text>
                    Building 112, HuizhongliB, Chaoyang District
                  </Text>
                  {/* <Text>+1 216-342-3084</Text> */}
                  {/* <Link>Get directions</Link> */}
                </VStack>
                
              </Box>

            </Flex>

            {/* <Flex
              data-aos="fade-up"
              data-aos-delay="100"
              justify={["center", "center", "start"]}
              flex="1"
            >
              <Box p={[2, 5, 10]}>
                <VStack align={["center", "center", "start"]}>
                  <Flex w="full" justify={["center", "center", "start"]}>
                    <Icon color="brand.400" as={FiMapPin} w={6} h={6} />
                  </Flex>
                  <Text fontSize="lg" fontWeight="600">
                    Frankfurt, Germany
                  </Text>
                  <Text>Brückenstraße 70, 60594 Frankfurt am Main</Text>
                  <Text>+49 0211 44 29 68</Text>
                  <Link>Get directions</Link>
                </VStack>
              </Box>
            </Flex> */}
            
          </Stack>
        </Container>

        {/* <Box pos="relative">
          <Container pos="relative" zIndex={1} maxW="container.xl">
            <CTA
              data-aos="fade-up"
              title="Start your & 14-day free trial"
              subtitle="Try out premium features and start trading right away"
            />
          </Container>
          <Box
            zIndex={0}
            bg="gray.900"
            w="full"
            pos="absolute"
            h={52}
            bottom={0}
          />
        </Box> */}
      </chakra.main>
    </>
  );
};

const SimpleCookiePreference: React.FC<{
  toastRef: React.MutableRefObject<string | number>;
}> = ({ toastRef }) => {
  const toast = useToast();
  return (
    <Stack bg="white" p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Your Privacy</Text>
        <FcLock />
      </Stack>

      <Stack
        direction={["column", "column", "row"]}
        justifyContent="space-between"
        align="center"
        spacing={5}
      >
        <Text fontSize="sm" textAlign="left" maxW="4xl">
          We use cookies and similar technologies to help personalise content,
          tailor and measure ads, and provide a better experience. By clicking
          OK or turning an option on in Cookie Preferences, you agree to this,
          as outlined in our Cookie Policy. To change preferences or withdraw
          consent, please update your Cookie Preferences.
        </Text>
        <Stack direction={["column", "column", "row"]}>
          <Button variant="outline" colorScheme="green">
            Cookie Preferences
          </Button>
          <Button
            onClick={() => toast.close(toastRef.current)}
            colorScheme="green"
          >
            OK
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactPage;
