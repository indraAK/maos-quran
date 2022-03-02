import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  useColorMode,
} from "@chakra-ui/react";

function PrayerList({ items }) {
  const { colorMode } = useColorMode();

  return (
    <Accordion allowToggle>
      {items.map((doa, idx) => (
        <AccordionItem
          key={idx}
          border="none"
          mt="20px"
          bg={colorMode === "dark" ? "#152451" : "white"}
          shadow="md"
          borderRadius="6px"
          overflowX="hidden"
        >
          <h2>
            <AccordionButton py="15px">
              <Box
                flex="1"
                textAlign="left"
                color={colorMode === "dark" ? "gray.100" : "gray.700"}
              >
                {doa.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box
              dir="rtl"
              textAlign="right"
              fontFamily="Amiri, serif"
              fontSize="30px"
              lineHeight="65px"
              color={colorMode === "dark" ? "gray.100" : "gray.700"}
              mt="25px"
            >
              {doa.arabic}
            </Box>
            <Text
              mt="40px"
              mb="15px"
              color={colorMode === "dark" ? "gray.100" : "gray.800"}
            >
              {doa.latin}
            </Text>
            <Text
              fontStyle="italic"
              fontSize="sm"
              color={colorMode === "dark" ? "gray.200" : "gray.600"}
            >
              {doa.translation}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default PrayerList;
