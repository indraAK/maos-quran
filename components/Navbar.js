import NextLink from "next/link";
import { useRouter } from "next/router";
import { Flex, Link, Icon, useColorMode } from "@chakra-ui/react";
import {
  IoHomeOutline,
  IoHomeSharp,
  IoBookOutline,
  IoBook,
  IoHeartOutline,
  IoHeart,
  IoSettingsOutline,
  IoSettings,
} from "react-icons/io5";

export default function Navbar() {
  const { colorMode } = useColorMode();
  const navLinks = [
    {
      text: "Beranda",
      icon: { outline: IoHomeOutline, fill: IoHomeSharp },
      href: "/",
    },
    {
      text: "Terakhir Baca",
      icon: { outline: IoBookOutline, fill: IoBook },
      href: "/terakhir-dibaca",
    },
    {
      text: "Favorit",
      icon: { outline: IoHeartOutline, fill: IoHeart },
      href: "/favorit",
    },
    {
      text: "Setelan",
      icon: { outline: IoSettingsOutline, fill: IoSettings },
      href: "/setelan",
    },
  ];

  const router = useRouter();

  return (
    <Flex
      as="nav"
      bg={colorMode === "dark" ? "#152451" : "white"}
      justifyContent="space-between"
      position="fixed"
      inset="auto 0 0 0"
      maxW="576px"
      mx="auto"
      boxShadow="inner"
      display={
        router.pathname === "/surah/[id]" || router.pathname === "/404"
          ? "none"
          : "flex"
      }
    >
      {navLinks.map(({ text, icon, href }) => (
        <NextLink href={href} passHref key={text}>
          <Link
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
            whiteSpace="nowrap"
            px="15px"
            py="10px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            fontSize="xs"
            fontWeight="500"
            rowGap={1}
            style={{
              color:
                router.pathname === href && colorMode === "dark"
                  ? "white"
                  : null,
            }}
            color={colorMode === "dark" ? "white" : "gray.700"}
          >
            {router.pathname === href ? (
              <Icon
                as={icon.fill}
                fontSize={{ base: "22px", sm: "25px" }}
                cursor="pointer"
              />
            ) : (
              <Icon
                as={icon.outline}
                fontSize={{ base: "22px", sm: "25px" }}
                cursor="pointer"
              />
            )}
            {text}
          </Link>
        </NextLink>
      ))}
    </Flex>
  );
}
