import { BsBagFill, BsHeart, BsPlus } from "@react-icons";

import React, { useContext } from "react";
import NextLink from "next/link";

import { NextSeo } from "next-seo";

import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import {
  AspectRatio,
  Box,
  Button,
  chakra,
  FormControl,
  type ChakraProps,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  type ThemingProps,
  useBreakpointValue,
  useColorModeValue,
  useToken,
  VStack,
  Wrap,
} from "@chakra-ui/react";

// import AllureLogo from "@definitions/brands/allure";
import CosmopolitanLogo from "@definitions/brands/cosmopolitan";
// import ElleLogo from "@definitions/brands/elle";
// import EsquireLogo from "@definitions/brands/esquire";
import MarieClaireLogo from "@definitions/brands/marieclaire";
import VogueLogo from "@definitions/brands/vogue";
import WomenshealthLogo from "@definitions/brands/womenshealth";
import { ThemeColorContext } from "@definitions/context/theme";
import PriceFormat from "@definitions/utils/price-format";

import ChakraCarousel from "@components/carousel/carousel";
import Image from "@components/image";

import CTA from "@blocks/cta";
import { useState } from "react";

// Google Analytics
import { useEffect } from 'react';

const Home3Page: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  // // Google Analytics代码
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.async = true;
  //   script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`; // 使用环境变量替代跟踪ID
  //   document.head.appendChild(script);

  //   script.addEventListener('load', () => {
  //     (window as any).dataLayer = (window as any).dataLayer || [];
  //     function gtag(...args: any[]) {
  //       (window as any).dataLayer.push(args);
  //     }
  //     gtag('js', new Date());
  //     gtag('config', process.env.NEXT_PUBLIC_GA_ID); // 使用环境变量替代跟踪ID
  //   });
  // }, []);

  // // 百度统计代码
  // useEffect(() => {
  //   var _hmt = ([] as any[]);
  //   (function() {
  //     var hm = document.createElement("script");
  //     hm.src = "https://hm.baidu.com/hm.js?577db1d220d9599402b30c9355472d1e";
  //     var s = document.getElementsByTagName("script")[0];
  //     s.parentNode.insertBefore(hm, s);
  //   })();
  // }, []);


  return (
    <>
      <NextSeo
        title="NotionTemplate.AI"
        description="Notion React E-Commerce Website Template"
      />
      <chakra.main>
        <VStack spacing={[10, 10, 10, 0]}>
          <HeroBlock />

        <Divider borderColor="gray.600" />
        <Stack
          overflow="hidden"
          width="full"
          direction={["column", "column", "row"]}
        >
          <AspectRatio
            data-aos="fade-right"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
          >
            <Image
              src={"/images/notion/SchoolTemplates.jpeg"}
              alt="NotionTemplate.AI product image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              borderEndRadius={["none", "none", "2xl", "2xl"]}
            />
          </AspectRatio>
          <Flex
            data-aos="fade-left"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
                School Templates
              </Text>
              <Text>
                Boost your academic capabilities using these student templates. 
                Efficiently arrange class notes, homework tasks, and projects. 
                Monitor your grades and objectives, and enhance your academic achievements with the help of Notion tools.
              </Text>

              <Link
                    href="/templates-school"
                    fontWeight="bold"
                    variant="underline"
                  >
                    Read More
              </Link>

            </VStack>
          </Flex>
        </Stack>

        <Stack
          overflow="hidden"
          width="full"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Flex
            data-aos="fade-right"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
                Work Templates
              </Text>
              <Text>
                Are you prepared to enhance your work by adopting best practices from top companies and experts? 
                These user-friendly templates can assist you in streamlining how you and your team accomplish tasks.
              </Text>
              <Link
                    href="/templates-work"
                    fontWeight="bold"
                    variant="underline"
                  >
                    Read More
              </Link>
            </VStack>
          </Flex>
          <AspectRatio
            data-aos="fade-left"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
            borderStartRadius={["none", "none", "2xl", "2xl"]}
          >
            <Image
              src={"/images/notion/WorkTemplates.jpeg"}
              alt="NotionTemplate.AI product image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              borderEndRadius={["none", "none", "2xl", "2xl"]}
            />
          </AspectRatio>
        </Stack>

        <Stack
          overflow="hidden"
          width="full"
          direction={["column", "column", "row"]}
        >
          <AspectRatio
            data-aos="fade-right"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
          >
            <Image
              src={"/images/notion/ProjectsTemplates.jpeg"}
              alt="NotionTemplate.AI product image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              borderEndRadius={["none", "none", "2xl", "2xl"]}
            />
          </AspectRatio>
          <Flex
            data-aos="fade-left"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
                Projects Templates
              </Text>
              <Text>
                Energize your projects using Notion's project management templates. 
                Strategize, arrange, and collaborate with your team, all from a single centralized hub.
              </Text>
              <Link
                    href="/templates-projects"
                    fontWeight="bold"
                    variant="underline"
                  >
                    Read More
              </Link>
            </VStack>
          </Flex>
        </Stack>

        <Stack
          overflow="hidden"
          width="full"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Flex
            data-aos="fade-right"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
              Personal templates
              </Text>
              <Text>
                Looking for a more efficient way to simplify your life? 
                Whether you need to manage your daily schedules or keep track of home-related information and habits. 
                Notion's personal templates have you covered for handling whatever challenges life throws your way.
              </Text>
              <Link
                    href="/templates-personal"
                    fontWeight="bold"
                    variant="underline"
                  >
                    Read More
              </Link>
            </VStack>
          </Flex>
          <AspectRatio
            data-aos="fade-left"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
            borderStartRadius={["none", "none", "2xl", "2xl"]}
          >
            <Image
              src={"/images/notion/PersonalTemplates.jpeg"}
              alt="NotionTemplate.AI product image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
        </Stack>
        </VStack>
      </chakra.main>
    </>
  );
};


interface BlockProps extends ChakraProps, ThemingProps {
  // items?: any;
}

const HeroBlock: React.FC<BlockProps> = () => {
  const heading = "clamp(28px, 5vw, 10rem)";
  const [userInput, setUserInput] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleGptResponse = async () => {
    // 定义ChatGPT API的URL
    const API_URL = "https://api.openai.com/v1/chat/completions";

    // 从环境变量中读取 API 密钥
    const apiKey = process.env.NEXT_PUBLIC_NOTION_API_KEY; 
    // console.log("API Key:", apiKey)

    if (!apiKey) {
      console.error("无法读取环境变量 NOTION_API_KEY");
      // 进行错误处理
      return;
    }

    // API请求的header和body
    const requestOptions = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
          {"role": "system", "content": "You are AI Assistant"},
          {"role": "user", "content": userInput},
        ],
        "temperature": 0.7
      })
    };

    try {
      setIsLoading(true);
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      setGptResponse(`${data.choices[0]['message']['content']}`);

      // 添加Google Analytics事件跟踪代码
      if (window.gtag) {
        window.gtag('event', 'AI_Response', {
          event_category: 'User Interaction',
          event_label: 'GPT Response',
        });
      }

    } catch (error) {
      console.error("与OpenAI API通信时发生错误：", error);
      setGptResponse("发生了错误，请稍后再试");
    } finally {
      setIsLoading(false);
    }

  };


  return (
    <Box width="full">
      {/* <Container maxW="container.xl"> */}
      <Stack
        spacing={0}
        direction={["column", "column", "row"]}
        width="full"
        // minHeight="100vh"
      >
        <Flex
          pos="relative"
          bg="pink.50"
          flex="1"
          // height="full"
          minHeight={[150, 250, 450, "unset"]}
          sx={{ "& > div": { width: "full" } }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="50% 25%"
            src="/images/notion/notion_index.png"
            alt="Notion home 3 hero"
          />
        </Flex>

        <Flex bg={useColorModeValue("gray.200", "gray.700")} flex="1">
          <Flex alignSelf="center" py={[10, 10, 0, 28]} px={[5, 5, 10, 20]}>
            <VStack
              width="full"
              align={["center", "center", "start"]}
              spacing={4}
            >
              <Flex justify={["center", "center", "start"]} flexWrap="wrap">
                <Heading
                  data-aos="fade-up"
                  fontSize={heading}
                  bgGradient="linear(to-l, purple.500, magenta.400)"
                  bgClip="text"
                >
                  Notion Template 
                </Heading>
                <Heading
                  data-aos="fade-up"
                  data-aos-delay={150}
                  fontSize={heading}
                  bgGradient="linear(to-l, purple.500, magenta.400)"
                  bgClip="text"
                >
                  for Every Task 
                </Heading>
                <Heading
                  data-aos="fade-up"
                  data-aos-delay={250}
                  fontSize={heading}
                  bgGradient="linear(to-l, purple.500, magenta.400)"
                  bgClip="text"
                >
                  Every Project
                </Heading>
              </Flex>
              <Text
                fontSize="lg"
                textAlign={["center", "center", "start"]}
                data-aos="fade-up"
                data-aos-delay={350}
                maxW={2000}
              >
                Explore our Notion templates for all your tasks and projects, and boost your productivity.
              </Text>
              
              <InputGroup>
                <Stack direction="row" spacing={4} align="center">
                    <Input
                        type="text"
                        placeholder="Ask AI question about Notion, eg. how to duplicate  a Notion template?"
                        borderColor="blue.500"
                        borderWidth="2px"
                        _hover={{ borderColor: 'blue.600' }}
                        _focus={{ borderColor: 'blue.600' }}
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        width="650px"   // 设置文本框的宽度
                        height="40px"  // 设置文本框的高度
                        onKeyPress={e => {
                          if (e.key === 'Enter') {
                              handleGptResponse();
                          }
                      }}
                    />

                    <Button
                        data-aos="fade-up"
                        data-aos-delay={450}
                        variant="outline"
                        size="lg"
                        onClick={handleGptResponse}
                    >
                        {isLoading ? 'Loading...' : 'Submit'}
                    </Button>
                </Stack>
              </InputGroup>
              {gptResponse && <Text>{gptResponse}</Text>} 
            </VStack>
          </Flex>
        </Flex>
      </Stack>
      
      {/* </Container> */}
    </Box>

    
  );
};


export default Home3Page;
