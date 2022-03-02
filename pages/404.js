import Head from "next/head";
import Link from "next/link";
import { Box, Text, Heading, Button, useColorMode } from "@chakra-ui/react";

export default function Custom404Page() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Halaman tidak ditemukan</title>
      </Head>

      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        p="20px"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Heading
          as="h1"
          fontSize="6xl"
          color={colorMode === "dark" ? "gray.100" : "gray.700"}
        >
          404
        </Heading>
        <Text
          color={colorMode === "dark" ? "gray.200" : "gray.600"}
          fontSize="xl"
          mt="10px"
          mb="30px"
        >
          Halaman tidak ditemukan
        </Text>
        <Link href="/" passHref>
          <Button colorScheme="teal" p="25px">
            Kembali ke Beranda
          </Button>
        </Link>
      </Box>
    </>
  );
}
