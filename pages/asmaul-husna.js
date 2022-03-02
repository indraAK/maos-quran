import Head from "next/head";
import { useState } from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader";
import SearchInput from "@/components/SearchInput";
import BackToTop from "@/components/BackToTop";
import asmaulHusnaJson from "/data/asmaul-husna.json";

function AsmaulHusna() {
  const [searchTerm, setSearchTerm] = useState("");
  const { colorMode } = useColorMode();

  const asmaulHusnaList = asmaulHusnaJson.data.filter((item) => {
    return item.latin.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>
          Asmaul Husna beserta Terjemahan Bahasa Indonesia | Maos Quran
        </title>
        <meta
          name="description"
          content="Asmaul Husna beserta Terjemahan Bahasa Indonesia"
        />
      </Head>

      <PageHeader title="Asmaul Husna" goBack />
      <Box px="15px" pt="20px" as="main">
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari asmaul husna"
        />

        {asmaulHusnaList.length === 0 && (
          <Text
            fontSize="14px"
            color={colorMode === "dark" ? "gray.200" : "gray.600"}
            mt="20px"
          >
            {"Asmaul Husna yang anda cari tidak ditemukan!"}
          </Text>
        )}

        {asmaulHusnaList.map((item) => (
          <Box
            key={item.index}
            bg={colorMode === "dark" ? "#152451" : "white"}
            shadow="md"
            rounded="md"
            mt="20px"
            p="20px"
            position="relative"
          >
            <Box
              position="absolute"
              left="20px"
              top="20px"
              color={colorMode === "dark" ? "gray.100" : "gray.700"}
              fontWeight="500"
            >
              {item.index}
            </Box>
            <Flex direction="column" align="center">
              <Text
                fontSize="35px"
                fontFamily="Amiri, serif"
                color={colorMode === "dark" ? "gray.100" : "gray.700"}
                mt="10px"
              >
                {item.arabic}
              </Text>
              <Text
                mt="15px"
                mb="8px"
                color={colorMode === "dark" ? "gray.100" : "gray.700"}
                fontWeight="600"
              >
                {item.latin}
              </Text>
              <Text
                fontSize="sm"
                color={colorMode === "dark" ? "gray.200" : "gray.600"}
                fontStyle="italic"
                textAlign="center"
              >
                {item.translation_id}
              </Text>
            </Flex>
          </Box>
        ))}
      </Box>

      <BackToTop />
    </>
  );
}

export default AsmaulHusna;
