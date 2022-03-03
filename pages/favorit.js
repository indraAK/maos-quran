import Head from "next/head";
import Image from "next/image";
import { Box, Text, Flex, Heading, useColorMode } from "@chakra-ui/react";
import { useFavoriteStore } from "stores/Favorite";
import PageHeader from "@/components/PageHeader";
import SurahList from "@/components/SurahList";

function FavoriteSurah() {
  const favoriteSurahList = useFavoriteStore((state) => state.surahFavorites);
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Daftar Surah Favorit | Maos Quran</title>
      </Head>

      <PageHeader title="Surah Favorit" goBack />

      <Box px="15px" pt="20px" as="main">
        {favoriteSurahList.length > 0 && (
          <Heading
            as="h2"
            color={colorMode === "dark" ? "gray.100" : "gray.600"}
            fontSize="2xl"
          >
            Surah favorit kamu:
          </Heading>
        )}

        {<SurahList items={favoriteSurahList} />}

        {favoriteSurahList.length === 0 && (
          <Flex direction="column" align="center" mt="50px">
            <Image
              src="/images/joyride.svg"
              width="300px"
              height="200px"
              alt="Joyride Icon"
            />
            <Text
              color={colorMode === "dark" ? "gray.200" : "gray.700"}
              textAlign="center"
              mt="30px"
            >
              Anda belum punya surah yang ditandai sebagai favorit.
            </Text>
          </Flex>
        )}
      </Box>
    </>
  );
}

export default FavoriteSurah;
