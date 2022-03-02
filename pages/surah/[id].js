import Head from "next/head";
import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Text,
  Flex,
  Heading,
  Spacer,
  VisuallyHidden,
  Link,
  Icon,
  useToast,
  useColorMode,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import {
  IoPlayOutline,
  IoPauseOutline,
  IoBookmarkOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { useLastReadStore } from "stores/LastRead";
import { usePreferenceStore } from "stores/Preference";
import PageHeader from "@/components/PageHeader";
import BackToTop from "@/components/BackToTop";

function Surah({ surah, prevSurah, nextSurah }) {
  const [playing, setPlaying] = useState(false);
  const { colorMode } = useColorMode();
  const { markLastRead } = useLastReadStore();
  const { preference } = usePreferenceStore();
  const toast = useToast();
  const { verses } = surah;

  const togglePlay = (audioId) => {
    const audios = document.querySelectorAll("audio");
    audios.forEach((audio) => {
      if (audio.id === audioId) {
        if (audio.paused) {
          audio.play();
          setPlaying(audio.id);
        } else {
          audio.pause();
          setPlaying(false);
        }
      } else {
        audio.pause();
      }
    });
  };

  const handleBookmarkClick = (verse, toastId) => {
    markLastRead({
      name: surah.name,
      number: surah.number,
      verse,
    });

    if (!toast.isActive(toastId)) {
      toast({
        description: `QS. ${surah.name.transliteration.id}: ${verse} telah ditambahkan ke terakhir dibaca.`,
        position: "top-right",
        status: "success",
        isClosable: true,
        id: toastId,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Quran Surah {surah.name.transliteration.id} | Maos Quran</title>
        <meta
          name="description"
          content={`Quran Surah ${surah.name.transliteration.id} Beserta Terjemahan dan Tafsir.`}
        />
      </Head>

      <PageHeader title={surah.name.transliteration.id} goBack surah={surah} />
      <Box as="main" px="15px">
        <Flex
          py="30px"
          bgGradient="linear(to-r, #DF98FA 0%, #9055FF 100%)"
          mt="15px"
          borderRadius="8px"
          display="flex"
          direction="column"
          align="center"
          justify="center"
          color="white"
          shadow="lg"
        >
          <Heading as="h2" size="xl">
            {surah.name.transliteration.id}
          </Heading>
          <Text my="8px">
            ({surah.name.translation.id}: {surah.numberOfVerses} Ayat)
          </Text>
          {surah.preBismillah && (
            <Text
              mt="25px"
              fontSize="3xl"
              fontFamily="Amiri, serif"
              dir="rtl"
              fontWeight="700"
            >
              {surah.preBismillah.text.arab}
            </Text>
          )}
        </Flex>

        <VStack
          divider={
            <StackDivider
              borderColor={colorMode === "dark" ? "gray.500" : "gray.200"}
            />
          }
          spacing={10}
          align="stretch"
          mt="50px"
        >
          {verses.map((verse) => (
            <Box key={verse.number.inQuran} id={`ayat-${verse.number.inSurah}`}>
              <Flex
                minH="47px"
                bg={
                  colorMode === "dark"
                    ? "rgba(134, 62, 213, 0.1)"
                    : "rgba(134, 62, 213, 0.05)"
                }
                borderRadius="10px"
                py="10px"
                px="15px"
                align="center"
                columnGap={4}
              >
                <Box color="#863ED5" fontWeight="500">
                  {verse.number.inSurah}
                </Box>
                <Spacer />
                <Box
                  as="button"
                  title="Audio ayat"
                  aria-label="Audio ayat"
                  onClick={() => togglePlay(`audio-${verse.number.inSurah}`)}
                >
                  <Icon
                    as={
                      playing === `audio-${verse.number.inSurah}`
                        ? IoPauseOutline
                        : IoPlayOutline
                    }
                    fontSize="25px"
                    color="#863ED5"
                  />
                </Box>
                <VisuallyHidden>
                  <audio
                    src={verse.audio.primary}
                    id={`audio-${verse.number.inSurah}`}
                    onEnded={() => setPlaying(false)}
                  ></audio>
                </VisuallyHidden>
                <Box
                  as="button"
                  title="Tandai terakhir dibaca"
                  aria-label="Tandai terakhir dibaca"
                  id="mark-verse"
                  onClick={(e) =>
                    handleBookmarkClick(verse.number.inSurah, e.target.id)
                  }
                >
                  <Icon
                    as={IoBookmarkOutline}
                    fontSize="20px"
                    color="#863ED5"
                  />
                </Box>
              </Flex>
              <Box pt="30px">
                <Text
                  fontFamily="Amiri, serif"
                  dir="rtl"
                  fontSize="3xl"
                  color={colorMode === "dark" ? "gray.100" : "gray.700"}
                  lineHeight="70px"
                >
                  {verse.text.arab}
                </Text>
                <Text
                  mt="35px"
                  color={colorMode === "dark" ? "gray.100" : "#240F4F"}
                  fontSize="18px"
                  fontWeight="500"
                >
                  {verse.text.transliteration.en}
                </Text>
                {preference.translation && (
                  <>
                    <Text
                      mt="20px"
                      mb="5px"
                      color={colorMode === "dark" ? "gray.100" : "#240F4F"}
                      fontWeight="500"
                    >
                      Terjemah:
                    </Text>
                    <Text
                      color={colorMode === "dark" ? "gray.200" : "#240F4F"}
                      fontSize="sm"
                      fontStyle="italic"
                    >
                      {verse.translation.id}
                    </Text>
                  </>
                )}

                {preference.tafsir && (
                  <>
                    <Text
                      mt="20px"
                      mb="5px"
                      color={colorMode === "dark" ? "gray.100" : "#240F4F"}
                      fontWeight="500"
                    >
                      Tafsir:
                    </Text>
                    <Text
                      color={colorMode === "dark" ? "gray.200" : "#240F4F"}
                      fontSize="sm"
                    >
                      {verse.tafsir.id.short}
                    </Text>
                  </>
                )}
              </Box>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box
        h="40px"
        position="fixed"
        inset="auto 0 10px 0"
        maxW="500px"
        mx="auto"
        px="15px"
        zIndex={900}
      >
        <Flex
          h="100%"
          bg={colorMode === "dark" ? "#863ED5" : "white"}
          borderRadius="40px"
          shadow="lg"
          py="10px"
        >
          <NextLink href={`/surah/${prevSurah?.number}`} passHref>
            <Link
              flex="none"
              w="50%"
              h="100%"
              display="flex"
              alignItems="center"
              px="15px"
              pointerEvents={
                prevSurah.hasOwnProperty("number") ? "auto" : "none"
              }
              cursor={
                prevSurah.hasOwnProperty("number") ? "pointer" : "not-allowed"
              }
              color={colorMode === "dark" ? "white" : "#863ED5"}
              fontSize="sm"
              fontWeight="500"
              opacity={prevSurah.hasOwnProperty("number") ? 1 : 0.5}
              _focus={{ outline: "none" }}
            >
              <IoChevronBack size={18} />
              <Text flex={1} display="flex" justifyContent="center">
                {prevSurah.hasOwnProperty("number")
                  ? prevSurah.name.transliteration.id
                  : ""}
              </Text>
            </Link>
          </NextLink>
          <NextLink href={`/surah/${nextSurah?.number}`} passHref>
            <Link
              flex="none"
              w="50%"
              h="100%"
              borderLeft="1px solid #ddd"
              display="flex"
              alignItems="center"
              px="15px"
              pointerEvents={
                nextSurah.hasOwnProperty("number") ? "auto" : "none"
              }
              cursor={
                nextSurah.hasOwnProperty("number") ? "pointer" : "not-allowed"
              }
              color={colorMode === "dark" ? "white" : "#863ED5"}
              fontSize="sm"
              fontWeight="500"
              opacity={nextSurah.hasOwnProperty("number") ? 1 : 0.5}
              _focus={{ outline: "none" }}
            >
              <Text flex={1} display="flex" justifyContent="center">
                {nextSurah.hasOwnProperty("number")
                  ? nextSurah.name.transliteration.id
                  : ""}
              </Text>
              <IoChevronForward size={18} />
            </Link>
          </NextLink>
        </Flex>
      </Box>

      <BackToTop />
    </>
  );
}

export default Surah;

export async function getStaticPaths() {
  const response = await fetch(`https://api.quran.sutanlab.id/surah/`);
  const resultJson = await response.json();
  const surahList = resultJson.data;

  const paths = surahList.map((surah) => ({
    params: { id: surah.number.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const results = await Promise.all([
    fetchData(`https://api.quran.sutanlab.id/surah/${id}`),
    fetchData(`https://api.quran.sutanlab.id/surah/${Number(id) - 1}`),
    fetchData(`https://api.quran.sutanlab.id/surah/${Number(id) + 1}`),
  ]);

  const [surah, prevSurah, nextSurah] = results;

  return {
    props: {
      surah: surah.data,
      prevSurah: prevSurah.data,
      nextSurah: nextSurah.data,
    },
  };
}
