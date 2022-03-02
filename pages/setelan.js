import Head from "next/head";
import {
  Box,
  FormControl,
  FormLabel,
  Switch,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import { usePreferenceStore } from "stores/Preference";
import PageHeader from "@/components/PageHeader";

function Settings() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { preference, showTranslation, showTafsir } = usePreferenceStore();

  return (
    <>
      <Head>
        <title>Setelan Aplikasi | Maos Quran</title>
        <meta
          name="description"
          content="Atur setelan Aplikasi sesuai dengan preferensi user"
        />
      </Head>

      <PageHeader title="Setelan" goBack />
      <Box as="main" px="15px">
        <FormControl
          as={SimpleGrid}
          templateColumns="1fr auto"
          gap="10px"
          bg={colorMode === "dark" ? "#152451" : "white"}
          shadow="sm"
          p="20px"
          mt="20px"
        >
          <FormLabel htmlFor="dark-mode">Mode gelap:</FormLabel>
          <Switch
            id="dark-mode"
            justifySelf="end"
            onChange={toggleColorMode}
            isChecked={colorMode === "dark" ? true : false}
          />

          <FormLabel htmlFor="translation">Tampilkan terjemah:</FormLabel>
          <Switch
            justifySelf="end"
            id="translation"
            isChecked={preference.translation}
            onChange={showTranslation}
          />

          <FormLabel htmlFor="tafsir">Tampilkan tafsir:</FormLabel>
          <Switch
            id="tafsir"
            justifySelf="end"
            isChecked={preference.tafsir}
            onChange={showTafsir}
          />
        </FormControl>
      </Box>
    </>
  );
}

export default Settings;
