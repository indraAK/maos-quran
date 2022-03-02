import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  AspectRatio,
  Grid,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const { colorMode } = useColorMode();
  const menuList = [
    {
      text: "Daftar Surah",
      icon: "/images/surat.png",
      href: "/surah",
    },
    {
      text: "Juz Amma",
      icon: "/images/juz-amma.png",
      href: "/juz-amma",
    },
    {
      text: "Do'a Harian",
      icon: "/images/doa-harian.svg",
      href: "/doa-harian",
    },
    {
      text: "Asmaul Husna",
      icon: "/images/asmaul-husna.svg",
      href: "/asmaul-husna",
    },
    {
      text: "Wirid",
      icon: "/images/tasbih.png",
      href: "/wirid",
    },
    {
      text: "Do'a Tahlil",
      icon: "/images/doa-tahlil.png",
      href: "/tahlil",
    },
  ];

  return (
    <>
      <Head>
        <title>Al-Quran Online Terjemahan dan Tafsir Ayat | Maos Quran</title>
        <meta
          name="keywords"
          content="Al-Quran Online, Baca Al-Quran. Al-Quran beserta terjemahan dan tafsir, Juz Amma, Doa Harian, Asmaul Husna, Wirid, Doa Tahlil"
        />
        <meta
          name="description"
          content="Baca Al-Quran 30 Juz Lengkap dengan Terjemahan Bahasa Indonesia & Tafsir Ayat."
        />
        <meta name="author" content="Indra Adi Kusuma"></meta>
      </Head>

      <PageHeader />
      <Box as="main">
        <AspectRatio ratio={[16 / 9, 16 / 8]}>
          <Image
            src="/images/banner.jpg"
            layout="fill"
            alt="Banner"
            objectFit="cover"
          />
        </AspectRatio>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }}
          gap={4}
          p="20px 15px"
        >
          {menuList.map((menu, idx) => (
            <NextLink href={menu.href} passHref key={idx}>
              <Link
                w="100%"
                minH="80px"
                p={4}
                bg={colorMode === "dark" ? "#152451" : "white"}
                boxShadow="md"
                textAlign="center"
                borderRadius="8px"
                cursor="pointer"
                _hover={{
                  boxShadow: "lg",
                }}
                _focus={{
                  boxShadow: "lg",
                }}
              >
                <Image
                  src={menu.icon}
                  width={35}
                  height={35}
                  alt="Icon Surat"
                  objectFit="cover"
                />
                <Text
                  fontSize="sm"
                  mt="5px"
                  fontWeight="500"
                  color={colorMode === "dark" ? "gray.100" : "gray.700"}
                >
                  {menu.text}
                </Text>
              </Link>
            </NextLink>
          ))}
        </Grid>
      </Box>
    </>
  );
}
