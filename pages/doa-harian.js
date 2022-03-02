import Head from "next/head";
import { useState } from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader";
import SearchInput from "@/components/SearchInput";
import PrayerList from "@/components/PrayerList";
import BackToTop from "@/components/BackToTop";
import dailyPrayerJson from "/data/daily-doa.json";

function DailyPrayer() {
  const [searchTerm, setSearchTerm] = useState("");
  const { colorMode } = useColorMode();

  const prayerList = dailyPrayerJson.data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Kumpulan Do&apos;a harian beserta terjemahan</title>
        <meta
          name="description"
          content="Daftar lengkap Do'a harian beserta terjemahan"
        />
      </Head>

      <PageHeader title="Do'a Harian" goBack />
      <Box px="15px" pt="20px" as="main">
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari doa harian..."
        />
        {prayerList.length === 0 && (
          <Text
            fontSize="14px"
            color={colorMode === "dark" ? "gray.200" : "gray.600"}
            mt="20px"
          >
            {"Do'a yang anda cari tidak ditemukan!"}
          </Text>
        )}
        <PrayerList items={prayerList} />
      </Box>
      <BackToTop />
    </>
  );
}

export default DailyPrayer;
