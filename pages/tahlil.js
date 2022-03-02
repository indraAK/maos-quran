import Head from "next/head";
import { Heading, Box, useColorMode } from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader";
import PrayerList from "@/components/PrayerList";
import BackToTop from "@/components/BackToTop";
import tahlilJson from "/data/tahlil.json";

function Tahlil() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Bacaan Lengkap Tahlil beserta Terjemahan | Moas Quran</title>
        <meta
          name="description"
          content="Bacaan Lengkap Tahlil beserta Terjemahan"
        />
      </Head>

      <PageHeader goBack title="Tahlil" />

      <Box as="main" px="15px">
        <Heading
          as="h1"
          textAlign="center"
          color={colorMode === "dark" ? "gray.100" : "gray.600"}
          fontSize="19px"
          my="30px"
          lineHeight={1.4}
        >
          Bacaan Tahlil Lengkap Beserta Terjemahan
        </Heading>

        <PrayerList items={tahlilJson.data} />

        <BackToTop />
      </Box>
    </>
  );
}

export default Tahlil;
