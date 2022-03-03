import Head from "next/head";
import NextLink from "next/link";
import { Box, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import { useLastReadStore } from "stores/LastRead";
import PageHeader from "@/components/PageHeader";

function VerseLastRead() {
  const verseLastRead = useLastReadStore((state) => state.verseLastRead);
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Ayat Terakhir Dibaca | Maos Quran</title>
      </Head>

      <PageHeader title="Terakhir Dibaca" goBack />

      <Box as="main" px="15px" pt="20px">
        <Heading
          as="h2"
          color={colorMode === "dark" ? "gray.100" : "gray.600"}
          fontSize="2xl"
        >
          Ayat terakhir dibaca:
        </Heading>

        {verseLastRead && (
          <NextLink
            href={`/surah/${verseLastRead.number}#ayat-${verseLastRead.verse}`}
            passHref
          >
            <Link
              display="flex"
              justifyContent="space-between"
              columnGap={5}
              bg={colorMode === "dark" ? "#152451" : "white"}
              borderRadius="8px"
              boxShadow="base"
              p="20px"
              mt="20px"
            >
              <Text
                color={colorMode === "dark" ? "gray.100" : "gray.700"}
                fontWeight="500"
                fontSize="18px"
              >
                Ayat ke {verseLastRead.verse}
              </Text>
              <Box textAlign="right">
                <Text
                  dir="rtl"
                  fontSize="40px"
                  fontFamily="Amiri, serif"
                  color={colorMode === "dark" ? "gray.100" : "gray.700"}
                >
                  {verseLastRead.name.short}
                </Text>
                <Text
                  color={colorMode === "dark" ? "gray.100" : "gray.700"}
                  mt="15px"
                  fontSize="lg"
                >
                  {verseLastRead.name.transliteration.id}
                </Text>
              </Box>
            </Link>
          </NextLink>
        )}
      </Box>
    </>
  );
}

export default VerseLastRead;
