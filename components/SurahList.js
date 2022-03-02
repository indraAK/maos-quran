import NextLink from "next/link";
import {
  Flex,
  Box,
  Text,
  VStack,
  Link,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useFavoriteStore } from "stores/Favorite";

function SurahList({ items }) {
  const { surahIsFavorite, toggleFavorite } = useFavoriteStore();
  const { colorMode } = useColorMode();

  return (
    <VStack spacing={4} align="stretch" mt="20px">
      {items.map((surah) => (
        <Box
          key={surah.number}
          bg={colorMode === "dark" ? "#152451" : "white"}
          borderRadius="8px"
          boxShadow="base"
        >
          <Flex justify="space-between" align="start" px="20px" pt="10px">
            <Text
              color={colorMode === "dark" ? "gray.100" : "gray.700"}
              fontWeight="500"
            >
              {surah.number}
            </Text>
            <Box
              as="button"
              aria-label="Tambahkan ke favorit"
              onClick={() => toggleFavorite(surah)}
            >
              {surahIsFavorite(surah.number) ? (
                <Icon as={BsHeartFill} fontSize="20px" color="red" />
              ) : (
                <Icon
                  as={BsHeart}
                  fontSize="20px"
                  color={colorMode === "dark" ? "gray.100" : "gray.700"}
                />
              )}
            </Box>
          </Flex>
          <NextLink href={`/surah/${surah.number}`} passHref>
            <Link display="flex" justifyContent="end" columnGap={5} p="20px">
              <Box textAlign="right">
                <Text
                  dir="rtl"
                  fontSize="40px"
                  fontFamily="Amiri, serif"
                  fontWeight="400"
                  color={colorMode === "dark" ? "gray.100" : "gray.700"}
                >
                  {surah.name.short}
                </Text>
                <Text
                  color={colorMode === "dark" ? "gray.200" : "gray.700"}
                  fontWeight="600"
                  mt="10px"
                  fontSize="lg"
                >
                  {surah.name.transliteration.id}
                </Text>
                <Text
                  fontStyle="italic"
                  color={colorMode === "dark" ? "gray.300" : "gray.600"}
                  fontSize="14px"
                  mt="4px"
                >
                  ({surah.name.translation.id}: {surah.numberOfVerses} Ayat)
                </Text>
              </Box>
            </Link>
          </NextLink>
        </Box>
      ))}
    </VStack>
  );
}

export default SurahList;
