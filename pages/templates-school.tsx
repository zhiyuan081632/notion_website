import React, { useContext, useLayoutEffect, useState } from "react";

import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import chunk from "lodash.chunk";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  AspectRatio,
  Box,
  Button,
  Center,
  chakra,
  type ChakraProps,
  Circle,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
  type ThemingProps,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import useBoundingRect from "@definitions/hooks/useBoundingRect";
import Site from "@definitions/site";

import Image from "@components/image";
import MotionBox from "@components/motion/motion-box";


const Home: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo
        title="Notion Template AI School"
        description="Notion Template AI Website school template"
      />
      <chakra.main>
        <VStack mb={32} spacing={20}>
          {/* <HeroBlock
            title="Using a premium E-Commerce template can assist you in turning visitors into buyers"
            body="NotionTemplate.AI is the ideal e-commerce template to power your startup's website, with a variety of pages and layout possibilities, several content sections, and a user interface that is simple to customize."
          /> */}
          <Divider borderColor="gray.600" />
          <ScreenshotBlock
            subtitle=""
            title="School Templates"
            items={[
              {
                image: "/images/notion/CourseSchedule.png",
                title: "Course Schedule",
                href: "https://www.notion.so/templates/course-schedule",
                
                
              },
              {
                image: "/images/notion/CollegeLifePlanner.png",
                title: "College Life Planner",
                href: "https://tricky-whale-c0c.notion.site/Academic-Planner-ae960839f04a41faade9b60878dcd10d",
                
                
              },
              {
                image: "/images/notion/LessonPlans.png",
                title: "Lesson Plans",
                href: "https://www.notion.so/templates/lesson-plans",
              },
            ]}
          />
          <ScreenshotBlock
            subtitle=""
            title=""
            items={[
              {
                image: "/images/notion/UltimateStudyPlanner.png",
                title: "Ultimate Study Planner",
                href: "https://vagabond-class-8ef.notion.site/Japanese-template-c91b86e1472447adbcfab68e11bfb3f6",
              },
              {
                image: "/images/notion/JapaneseLanguageLearning.png",
                title: "Japanese language learning",
                href: "https://www.notion.so/Teacher-home-8149ad2c3e374a4e99d82f46bcce4e34",
              },
              {
                image: "/images/notion/TeacherHome.png",
                title: "Teacher Home",
                href: "/pricing-3",
              },
            ]}
          />
          {/* Blog */}
          <ScreenshotBlock
            subtitle=""
            title=""
            // columns={[1, 1, 3, 4]}
            items={[
              {
                image: "/images/notion/AcademicOverview.png",
                title: "Academic Overview",
                href: "https://ash-earwig-2b1.notion.site/54b1456e0c2144ec8ce6696595e540d4",
              },
              {
                image: "/images/notion/ResearchPaper.png",
                title: "Research Paper",
                href: "https://donwells.notion.site/Research-Paper-Template-102f5965d90e4456b7106bca87bc21e3",
              },
              {
                image: "/images/notion/UPSCExamPrep.png",
                title: "UPSC Exam Prep",
                href: "https://fair-goldenrod-dec.notion.site/UPSC-Preparation-2023-3d9625f48dc3429aad0c2601279eac21",
              },
            ]}
          />
          
        </VStack>
      </chakra.main>
    </>
  );
};

const HeroBlock: React.FC<{ title: string; body: string }> = ({
  title,
  body,
}) => {
  const heroBg = useColorModeValue("gray.100", "gray.700");
  const minHeight = useBreakpointValue({ base: "unset", md: "100vh" });

  const bgGradient = useColorModeValue(
    "linear(to-t, gray.200, transparent)",
    "linear(to-t, gray.600, transparent)",
  );

  const mouseDownHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };

  return (
    <Box
      pb={32}
      w="full"
      pos="relative"
      overflow="hidden"
      minHeight={minHeight}
      pt={[28, 28, 32, 210]}
      bg={[heroBg, heroBg, "unset", "unset"]}
    >
      <Container pos="relative" zIndex={1} maxW="container.xl">
        <VStack textAlign="center">
          <Heading
            as="h1"
            size="3xl"
            letterSpacing={"-1px"}
            data-aos="fade-up"
            data-aos-delay={0}
          >
            {title}
          </Heading>
          <Text
            maxW={890}
            fontSize="xl"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {body}
          </Text>
          <Center>
            <Button
              onClick={mouseDownHandler}
              mt={10}
              size="jumbo"
              data-aos="fade-up"
              data-aos-delay={200}
              colorScheme="brand"
            >
              Buy {Site.name} for {Site.purchasePrice}
            </Button>
          </Center>
        </VStack>
      </Container>

      <Box
        display={["none", "none", "block", "block"]}
        width="full"
        pos="absolute"
        left={0}
        bottom={-10}
        zIndex={0}
        _before={{
          pos: "absolute",
          content: "''",
          bgGradient: bgGradient,
          width: "full",
          height: "full",
        }}
      >
        <HStack align="stretch" height="30vh">
          <Parallax min={-100} max={100} width="20%">
            <AspectRatio shadow="lg" roundedTop="lg" flex="1" ratio={3 / 4}>
              <Image
                roundedTop="lg"
                objectFit="cover"
                objectPosition="top center"
                src="/images/page-home-1.png"
                layout="fill"
                alt="NotionTemplate.AI Home 1"
              />
            </AspectRatio>
          </Parallax>

          <Parallax min={-50} max={100} width="33%">
            <AspectRatio
              shadow="lg"
              roundedTop="lg"
              mt={"5vh"}
              flex="1"
              ratio={3 / 4}
            >
              <Image
                roundedTop="lg"
                objectFit="cover"
                objectPosition="top center"
                src="/images/page-home-2.png"
                layout="fill"
                alt="NotionTemplate.AI Home 2"
              />
            </AspectRatio>
          </Parallax>

          <Parallax min={-100} max={200} width="18%">
            <AspectRatio shadow="lg" roundedTop="lg" flex="1" ratio={3 / 4}>
              <Image
                roundedTop="lg"
                objectFit="cover"
                objectPosition="top center"
                src="/images/page-contact.png"
                layout="fill"
                alt="NotionTemplate.AI contact page"
              />
            </AspectRatio>
          </Parallax>

          <Parallax min={-10} max={200} width="30%">
            {/* <Box w="full" h="full" mt={"2vh"} bg="purple.100" /> */}
            <AspectRatio
              shadow="lg"
              roundedTop="lg"
              flex="1"
              mt={"2vh"}
              ratio={3 / 4}
            >
              <Image
                roundedTop="lg"
                objectFit="cover"
                objectPosition="top center"
                src="/images/page-product-overview.png"
                layout="fill"
                alt="NotionTemplate.AI product overview"
              />
            </AspectRatio>
          </Parallax>

          <Parallax min={0} max={200} width="20%">
            {/* <Box w="full" h="full" mt={"6vh"} bg="indigo.100" /> */}
            <AspectRatio
              shadow="lg"
              roundedTop="lg"
              flex="1"
              mt={"6vh"}
              ratio={3 / 4}
            >
              <Image
                roundedTop="lg"
                objectFit="cover"
                objectPosition="top center"
                src="/images/page-pricing-1.png"
                layout="fill"
                alt="NotionTemplate.AI pricing page"
              />
            </AspectRatio>
          </Parallax>
        </HStack>
      </Box>
    </Box>
  );
};

const ScreenshotBlock: React.FC<{
  subtitle: string;
  title: string;
  height?: number;
  width?: number;
  columns?: number[];
  items: { href: string; title: string; image: string }[];
}> = ({
  title,
  subtitle,
  height = 400,
  width = 300,
  items = [],
  columns = [1, 1, 3],
}) => {
  const bg = useColorModeValue("gray.100", "gray.700");

  const hoverStyle = {
    _before: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: -1,
      content: "''",
      top: "100%",
      left: "5%",
      height: "10px",
      width: "90%",
      opacity: 0,
      background:
        "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%)",
      transitionDuration: "300ms",
      transitionProperty: "transform, opacity",
    },
    _groupHover: {
      // transform: "scale(1.025)",
      transform: "translateY(-5px)",
      _before: {
        opacity: 1,
        transform: "translateY(10px)",
      },
    },
  };

  return (
    <Box width="full">
      <Container maxW="container.xl">
        <VStack spacing={[16]}>
          <VStack textAlign="center">
            {subtitle && (
              <Text
                // fontSize="md"
                // fontWeight={700}
                // textTransform="uppercase"
                // letterSpacing="0.1em"
                // color="brand.400"
                variant="subtitle"
                data-aos="fade-up"
              >
                {subtitle}
              </Text>
            )}
            {title && (
              <Heading
                // as="h1"
                // lineHeight={[1.5, 1, 1]}
                // fontSize={["1.5em", "2em", "3em"]}
                size="2xl"
                data-aos="fade-up"
                data-aos-delay="50"
                maxW={800}
              >
                {title}
              </Heading>
            )}
          </VStack>
          {items && !!items.length && (
            <SimpleGrid width="full" spacing={16} columns={columns}>
              {items.map((item, idx) => (
                <LinkBox role="group" key={item.title}>
                  <VStack
                    data-aos="fade-up"
                    data-aos-delay={idx * 50 ?? "0ms"}
                    spacing={6}
                  >
                    <Box
                      pos="relative"
                      rounded="md"
                      width="full"
                      bg={bg}
                      p={1}
                      pt={6}
                      transitionProperty="common"
                      transitionDuration="normal"
                      transitionTimingFunction="ease-in-out"
                      {...hoverStyle}
                    >
                      <HStack pos="absolute" left={3} top={"8px"} spacing={1}>
                        <Circle size={2} bg="red.300" />
                        <Circle size={2} bg="yellow.300" />
                        <Circle size={2} bg="green.300" />
                      </HStack>
                      <Image
                        display="block"
                        height={height}
                        width={width}
                        layout="responsive"
                        rounded="md"
                        objectFit="cover"
                        objectPosition="top"
                        alt={item.title}
                        src={item.image}
                      />
                    </Box>
                    <NextLink href={item.href} passHref>
                      <LinkOverlay>
                        <Text fontWeight={600} fontSize="xl">
                          {item.title}
                        </Text>
                      </LinkOverlay>
                    </NextLink>
                  </VStack>
                </LinkBox>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

const SectionBlock: React.FC<{
  subtitle: string;
  title: string;
}> = ({ title, subtitle }) => {
  const space = 8;

  const items = [
    // chunk 1
    {
      image: "/images/page-blog-3.png",
      title: "page-blog-3",
      bg: "cyan.800",
      objectPosition: "center 32%",
    },
    {
      image: "/images/page-blog-post.png",
      title: "page-blog-post",
      bg: "purple.800",
      objectPosition: "center 6%",
    },
    {
      image: "/images/page-product-overview.png",
      title: "page-product-overview",
      bg: "amber.800",
      objectPosition: "center 10%",
    },
    {
      image: "/images/page-shopping-cart.png",
      title: "page-shopping-cart",
      bg: "lime.800",
    },
    //  chunk 2
    {
      image: "/images/page-invoice.png",
      title: "page-invoice",
      bg: "pink.800",
    },
    {
      image: "/images/page-filtered-products.png",
      title: "page-filtered-products",
      bg: "lightGreen.800",
      objectPosition: "center 20%",
    },
    {
      image: "/images/page-home-1.png",
      title: "page-home-1",
      bg: "deepPurple.800",
      objectPosition: "center 89%",
    },
    {
      image: "/images/page-pricing-2.png",
      title: "page-pricing-2",
      bg: "blue.800",
      objectPosition: "center 43%",
    },
    // chunk 3
    {
      image: "/images/page-pricing-3.png",
      title: "page-pricing-3",
      bg: "lightBlue.800",
      objectPosition: "center 85%",
    },
    {
      image: "/images/page-blog-2.png",
      title: "page-blog-2",
      bg: "amber.800",
      objectPosition: "center 98%",
    },
    {
      image: "/images/page-account-sign-up.png",
      title: "page-account-sign-up",
      bg: "yellow.800",
      objectPosition: "center 45%",
    },
    {
      image: "/images/page-account-sign-in.png",
      title: "page-account-sign-in",
      bg: "purple.800",
    },
  ];

  const _items = chunk(items, 4);

  const translateArr = ["0", "-20%", "-5%"];

  const arrX = [
    {
      min: 0,
      max: -20,
    },
    {
      min: -20,
      max: 20,
    },
    {
      min: 30,
      max: -30,
    },
  ];

  return (
    <Box
      overflow="hidden"
      pos="relative"
      py={32}
      color="white"
      bg="brand.900"
      width="full"
    >
      <Circle
        zIndex={0}
        top={16}
        left={-8}
        pos="absolute"
        size={32}
        bg="yellow.600"
      />
      <Circle
        zIndex={0}
        top={52}
        left={8}
        pos="absolute"
        size={4}
        bg="teal.600"
      />
      <Circle
        zIndex={0}
        top={36}
        right={"13%"}
        pos="absolute"
        size={2}
        bg="amber.400"
      />
      <Circle
        zIndex={0}
        bottom={8}
        right={16}
        pos="absolute"
        size={4}
        bg="cyan.400"
      />
      <Circle
        zIndex={0}
        top={12}
        right={"30%"}
        pos="absolute"
        size={12}
        bg="green.400"
      />
      <Circle
        zIndex={0}
        bottom={-4}
        left={"30%"}
        pos="absolute"
        size={12}
        bg="lime.400"
      />
      <Container pos="relative" zIndex={1} maxW="container.xl" mb={16}>
        <VStack spacing={[16]}>
          <VStack textAlign="center">
            {subtitle && (
              <Text variant="subtitle" data-aos="fade-up" data-aos-delay={100}>
                {subtitle}
              </Text>
            )}
            {title && (
              <Heading
                // as="h1"
                lineHeight={[1.25, 1, 1]}
                // fontSize={["1.8em", "2em", "3em"]}
                size="2xl"
                data-aos="fade-up"
                data-aos-delay={200}
                maxW={1000}
              >
                {title}
              </Heading>
            )}
          </VStack>
        </VStack>
      </Container>

      <Box data-aos="fade-up" data-aos-delay={250}>
        {_items.map((_chunk, idx) => (
          <XParallax key={`XParallaxSectionBlock-grid-${idx}`} {...arrX[idx]}>
            <Grid
              // key={`SectionBlock-grid-${idx}`}
              pos="relative"
              gap={space}
              mb={space}
              mx="auto"
              templateColumns="repeat(4, 1fr)"
              transform={`translateX(${[translateArr[idx]]})`}
            >
              {_chunk.map((item, idx) => (
                <Box
                  key={item.title + idx}
                  overflow="hidden"
                  // h={32}
                  rounded={"lg"}
                  w={[200, 250, 300, 400]}
                  bg={item.bg}
                >
                  <AspectRatio
                    shadow="lg"
                    roundedTop="lg"
                    flex="1"
                    ratio={6 / 3}
                  >
                    <Image
                      roundedTop="lg"
                      objectFit="cover"
                      objectPosition={
                        item.objectPosition ? item.objectPosition : "top"
                      }
                      src={item.image}
                      layout="fill"
                      alt={item.title}
                    />
                  </AspectRatio>
                </Box>
              ))}
            </Grid>
          </XParallax>
        ))}
      </Box>
    </Box>
  );
};

const CTABlock = () => {
  const mouseDownHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };
  return (
    <Box width="full" py={20} bg="brand.400" data-aos="fade-up">
      <Container maxW="container.xl">
        <Stack
          direction={["column", "column", "row"]}
          justify="space-between"
          spacing={8}
        >
          <Heading
            fontFamily="body"
            textAlign={["center", "center", "start"]}
            // color="whiteAlpha.900"
            color="white"
            size="2xl"
            maxW={800}
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Get everything you need to create the perfect website for your
            startup
          </Heading>
          <Flex flex="1" align="center" justify={["center", "center", "end"]}>
            <Button
              onClick={mouseDownHandler}
              colorScheme={"white"}
              px={6}
              py={4}
              size="jumbo"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              Buy {Site.name} Now
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

interface ParallaxProps extends ChakraProps, ThemingProps {
  children: React.ReactNode;
  offset?: number;
  min?: number;
  max?: number;
}

const Parallax = ({
  children,
  // offset = 50,
  min = 50,
  max = 150,
  ...rest
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [ref, { top }] = useBoundingRect();

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  // const final = elementTop + offset;
  const final = elementTop + max;

  // useTransform(x, input, output)
  const yRange = useTransform(scrollY, [initial, final], [min, max]);
  const rRange = useTransform(scrollY, [initial, final], [-5, 5]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    if (window && top) {
      setElementTop(top + window.scrollY || window.pageYOffset);
    }
    setClientHeight(window.innerHeight);
  }, [top]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <MotionBox ref={ref} style={{ y, rotate: rRange }} {...rest}>
      {children}
    </MotionBox>
  );
};

const XParallax = ({
  children,
  // offset = 50,
  min = 50,
  max = 150,
  ...rest
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [ref, { top }] = useBoundingRect();

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  // const final = elementTop + offset;
  const final = elementTop + max;

  const yRange = useTransform(scrollY, [initial, final], [min, max]);
  const x = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    if (window && top) {
      setElementTop(top + window.scrollY || window.pageYOffset);
    }
    setClientHeight(window.innerHeight);
  }, [top]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <MotionBox ref={ref} style={{ x }} {...rest}>
      {children}
    </MotionBox>
  );
};

export default Home;
