import {
  BiGridAlt,
  BsCart,
  HiOutlineSupport,
  IoBagCheckOutline,
  MdInfoOutline,
  TbListDetails,
} from "@react-icons";

import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Icon,
  Link,
  StackDivider,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import Site from "@definitions/site";

// import Logo from "@definitions/brands/envato";

const PagesSubChildren: React.FC = memo(() => {
  const div = useBreakpointValue({
    base: undefined,
    lg: <StackDivider />,
  });

  const links = [
    { title: "Invoice", href: "/invoice" },
    { title: "404 Error", href: "/404" },
    // { title: "500 Error", href: "/500" },
    { title: "Help & Support", href: "/help" },
    { title: "Terms of Services", href: "/terms" },
  ];

  return (
    <VStack align="stretch" spacing={[5, 5, 5, 10]} divider={div}>
      <Box>
        <Text mb={[5, 5, 5, 6]} fontWeight={700} minW={220}>
          More Pages
        </Text>
        <VStack align="stretch" spacing={[5, 5, 5, 3]}>
          {links.map((link, idx) => (
            <NextLink key={link.title + idx} href={link.href} passHref>
              <Link>{link.title}</Link>
            </NextLink>
          ))}
        </VStack>
      </Box>
      <Link
        href={Site.market_profile_link}
        target="_blank"
        color="brand.400"
        fontWeight={700}
        minW={220}
      >
        More Templates
      </Link>
      {/* <Logo /> */}
    </VStack>
  );
});

export const main = [
  {
    title: "Home",
    href: "/",
    // subColumns: [4],
    // subitems: [
    //   {
    //     title: "School Templats",
    //     href: "/templates-school",
    //     image: "/images/notion/SchoolTemplates.jpeg",
    //     description:
    //       "Maximize your academic potential with these student templates. Organize class notes, homework assignments, and projects with ease. Keep track of your grades and goals and improve your academic performance with Notion tools.",
    //   },
    //   {
    //     title: "Work Templats",
    //     href: "/templates-work",
    //     image: "/images/notion/WorkTemplates.jpeg",
    //     description:
    //       "Ready to elevate your work with best practices from leading companies and experts? These easy-to-use templates can help you simplify how you and your team get stuff done.",
    //   },
    //   {
    //     title: "Projects Templats",
    //     href: "/templates-projects",
    //     image: "/images/notion/ProjectsTemplates.jpeg",
    //     description:
    //       "Bring your projects to life with Notion's project management templates. Plan, organize, and collaborate with your team all in one centralized location.",
    //   },
    //   {
    //     title: "School Templats",
    //     href: "/templates-personal",
    //     image: "/images/notion/PersonalTemplates.jpeg",
    //     description:
    //       "Need a better way to organize your life? From daily schedules and to-do lists to home info and habit trackers, Notion's personal templates have you covered for whatever life throws at you.",
    //   },
    // ],
  },

  {
    title: "Pages",
    href: "",
    subColumns: [4],
    subitems: [
      {
        title: "School Templats",
        href: "/templates-school",
        image: "/images/notion/SchoolTemplates.jpeg",
        description:
          "Boost your academic capabilities using these student templates. Efficiently arrange class notes, homework tasks, and projects. Monitor your grades and objectives, and enhance your academic achievements with the help of Notion tools.",
      },
      {
        title: "Work Templats",
        href: "/templates-work",
        image: "/images/notion/WorkTemplates.jpeg",
        description:
          "Are you prepared to enhance your work by adopting best practices from top companies and experts? These user-friendly templates can assist you in streamlining how you and your team accomplish tasks.",
      },
      {
        title: "Projects Templats",
        href: "/templates-projects",
        image: "/images/notion/ProjectsTemplates.jpeg",
        description:
          "Energize your projects using Notion's project management templates. Strategize, arrange, and collaborate with your team, all from a single centralized hub.",
      },
      {
        title: "Personal Templats",
        href: "/templates-personal",
        image: "/images/notion/PersonalTemplates.jpeg",
        description:
          "Looking for a more effective method to streamline your life? Whether it's daily schedules and task lists or home-related information and habit tracking, Notion's personal templates have got you covered for handling whatever life throws your way.",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog-1",
    // subColumns: [4],
    // subitems: [
    //   {
    //     title: "Blog 1",
    //     href: "/blog-1",
    //     image: "/images/page-blog-1.png",
    //     description:
    //       "Expand the audience in line with brand goals with blog posts.",
    //   },
    //   {
    //     title: "Blog 2",
    //     href: "/blog-2",
    //     image: "/images/page-blog-2.png",
    //     description:
    //       "Blog pages to keep your website up to date and drive more traffic.",
    //   },
    //   {
    //     title: "Blog 3",
    //     href: "/blog-3",
    //     image: "/images/page-blog-3.png",
    //     description: "To keep ahead of your rivals, provide fresh content.",
    //   },
    //   {
    //     title: "Blog Post",
    //     href: "/blog-post",
    //     image: "/images/page-blog-post.png",
    //     description:
    //       "NotionTemplate.AI provides several variants for popular sites for customisation.",
    //   },
    // ],
  },
  // {
  //   title: "Pricing",
  //   href: "",
  //   subColumns: [3],
  //   subitems: [
  //     {
  //       title: "Pricing 1",
  //       href: "/pricing-1",
  //       image: "/images/page-pricing-1.png",
  //       description: "Premium price pages for all commercial solutions.",
  //     },
  //     {
  //       title: "Pricing 2",
  //       href: "/pricing-2",
  //       image: "/images/page-pricing-2.png",
  //       description: "E-commerce sites need a premium pricing page.",
  //     },
  //     {
  //       title: "Pricing 3",
  //       href: "/pricing-3",
  //       image: "/images/page-pricing-3.png",
  //       description: "Strengthen your brand with customizable price pages.",
  //     },
  //   ],
  // },
  {
    title: "About",
    href: "/about",
    // subColumns: [1, 1, 1],
    // subChildren: PagesSubChildren,
    // subitems: [
    //   {
    //     icon: <Icon fontSize={24} as={MdInfoOutline} />,
    //     title: "About",
    //     href: "/about",
    //     description: "Trending Design to inspire you",
    //   },
    //   {
    //     icon: <Icon fontSize={24} as={HiOutlineSupport} />,
    //     title: "Help & Support",
    //     href: "/help",
    //     description: "Gain access to product support",
    //   },
    //   {
    //     icon: <Icon fontSize={24} as={MdOutlineAssignment} />,
    //     title: "Invoice",
    //     href: "/invoice",
    //     description: "Fully customizable dynamic invoice page",
    //   },
    //   {
    //     icon: <Icon fontSize={24} as={TbListDetails} />,
    //     title: "Product Overview",
    //     href: "/product-overview",
    //     description: "Summary of the product",
    //   },
    //   {
    //     icon: <Icon fontSize={24} as={BiGridAlt} />,
    //     title: "Filtered Products",
    //     href: "/filtered-products",
    //     description: "Filtered product listings page",
    //   },
    //   {
    //     icon: <Icon fontSize={24} as={BsCart} />,
    //     title: "Shopping Cart",
    //     href: "/shopping-cart",
    //     description: "You can edit and see the products you have added",
    //   },
    //   {
    //     icon: <Icon fontSize={24} as={IoBagCheckOutline} />,
    //     title: "Checkout",
    //     href: "/checkout",
    //     description: "Customers completing their orders",
    //   },
    // ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

// Add Tag to any navigiation item
export const ItemsTag: {
  title: string;
  badge?: string;
  colorScheme?: string;
}[] = [
  {
    title: "More Demo",
    badge: "Soon",
    colorScheme: "green",
  },
  {
    title: "Account Forms",
    badge: "Modal",
    colorScheme: "pink",
  },
];

export default main;
