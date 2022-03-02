import { useRouter } from "next/router";
import {
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  FormControl,
  FormLabel,
  Switch,
  SimpleGrid,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import {
  IoArrowBack,
  IoHeartOutline,
  IoHeart,
  IoEllipsisVertical,
} from "react-icons/io5";
import { useFavoriteStore } from "/stores/Favorite";
import { usePreferenceStore } from "stores/Preference";

export default function PageHeader({ title, goBack, surah }) {
  const router = useRouter();
  const { surahIsFavorite, toggleFavorite } = useFavoriteStore();
  const { preference, showTranslation, showTafsir } = usePreferenceStore();
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      left={0}
      width="100%"
      height="60px"
      zIndex={1000}
      display="flex"
      alignItems="center"
      p={4}
      bg={colorMode === "dark" ? "#152451" : "white"}
      boxShadow="base"
    >
      {goBack && (
        <Box
          as="button"
          onClick={() => router.replace("/")}
          mr="15px"
          fontSize={0}
          cursor="pointer"
          aria-label="Kembali"
        >
          <Icon as={IoArrowBack} fontSize="27px" fontWeight={700} />
        </Box>
      )}
      <Heading
        as="h1"
        flex={1}
        display="flex"
        justifyContent={goBack ? "start" : "center"}
        fontSize="lg"
        color={colorMode === "dark" ? "gray.100" : "gray.700"}
      >
        {title}
      </Heading>

      {router.pathname === "/surah/[id]" && (
        <>
          <Box
            mr="15px"
            as="button"
            display="flex"
            alignItems="center"
            justifyContent="center"
            aria-label="Tambahkan ke favorit"
            onClick={() => toggleFavorite(surah)}
          >
            <Icon
              fontSize="22px"
              as={surahIsFavorite(surah.number) ? IoHeart : IoHeartOutline}
              color={colorMode === "dark" ? "white" : "gray.700"}
              style={{ color: surahIsFavorite(surah.number) ? "red" : null }}
            />
          </Box>

          <Menu>
            <MenuButton as="button" aria-label="Options">
              <IoEllipsisVertical fontSize="22px" />
            </MenuButton>
            <MenuList>
              <MenuItem closeOnSelect={false} cursor="default">
                <FormControl
                  as={SimpleGrid}
                  columns={{ base: 2 }}
                  alignItems="center"
                >
                  <FormLabel htmlFor="translation">Terjemahan:</FormLabel>
                  <Switch
                    id="translation"
                    justifySelf="end"
                    isChecked={preference.translation}
                    onChange={showTranslation}
                  />
                </FormControl>
              </MenuItem>
              <MenuItem closeOnSelect={false} cursor="default">
                <FormControl
                  as={SimpleGrid}
                  columns={{ base: 2 }}
                  alignItems="center"
                >
                  <FormLabel htmlFor="tafsir">Tafsir:</FormLabel>
                  <Switch
                    id="tafsir"
                    justifySelf="end"
                    isChecked={preference.tafsir}
                    onChange={showTafsir}
                  />
                </FormControl>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      )}
    </Box>
  );
}

PageHeader.defaultProps = {
  title: "Maos Qur'an",
  goBack: false,
  surah: {},
};
