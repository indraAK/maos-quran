import Head from "next/head";
import {
  Heading,
  Box,
  VStack,
  Text,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader";
import BackToTop from "@/components/BackToTop";
import wiridJson from "/data/wirid.json";

function Wirid() {
  const { colorMode } = useColorMode();
  const arabicPattern = /[\u0600-\u06FF]/;

  return (
    <>
      <Head>
        <title>
          Susunan Doa & Bacaan Wirid Sesudah Shalat Wajib | Maos Quran
        </title>
        <meta
          name="description"
          content="Susunan Doa & Bacaan Wirid Sesudah Shalat Wajib"
        />
      </Head>

      <PageHeader goBack title="Wirid" />

      <Box as="main" px="15px">
        <Heading
          as="h1"
          textAlign="center"
          color={colorMode === "dark" ? "gray.100" : "gray.600"}
          fontSize="19px"
          my="30px"
          lineHeight={1.4}
        >
          Susunan Doa & Bacaan Wirid
          <br /> Sesudah Shalat Wajib
        </Heading>
        <VStack align="stretch" spacing={5}>
          {wiridJson.data.map((item) => (
            <Box
              key={item.id}
              bg={colorMode === "dark" ? "#152451" : "white"}
              py="25px"
              px="20px"
              rounded="md"
              shadow="md"
              position="relative"
            >
              <Flex align="start" columnGap="20px">
                <Text>{item.times}x</Text>
                {arabicPattern.test(item.arabic) ? (
                  <Text
                    flex={1}
                    fontSize="3xl"
                    dir="rtl"
                    textAlign="right"
                    fontFamily="Amiri, serif"
                    lineHeight="70px"
                    color={colorMode === "dark" ? "gray.100" : "gray.700"}
                  >
                    {item.arabic}
                  </Text>
                ) : (
                  <Text
                    flex={1}
                    fontSize="lg"
                    color={colorMode === "dark" ? "gray.100" : "gray.700"}
                  >
                    {item.arabic}
                  </Text>
                )}
              </Flex>
              {item.tnc && (
                <Text
                  mt="30px"
                  fontSize="sm"
                  color={colorMode === "dark" ? "gray.200" : "gray.600"}
                >
                  {item.tnc}
                </Text>
              )}
            </Box>
          ))}
        </VStack>
      </Box>

      <BackToTop />
    </>
  );
}

export default Wirid;
