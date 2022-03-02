import { useEffect, useLayoutEffect, useState } from "react";
import { Flex, Icon, Portal } from "@chakra-ui/react";
import { BsChevronUp } from "react-icons/bs";

export default function BackToTop() {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 2;

    const handleScrollDown = () => {
      if (window.scrollY > threshold) {
        setShowBackToTopBtn(true);
      } else {
        setShowBackToTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScrollDown);

    return () => window.removeEventListener("scroll", handleScrollDown);
  }, [showBackToTopBtn]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Portal>
      <Flex
        align="center"
        justify="center"
        w="35px"
        h="35px"
        rounded="full"
        bg="#863ED5"
        position="fixed"
        bottom="70px"
        right="15px"
        zIndex={1000}
        shadow="md"
        opacity={showBackToTopBtn ? 1 : 0}
        visibility={showBackToTopBtn ? "visible" : "hidden"}
        transition="opacity 200ms ease-in-out"
        as="button"
        onClick={scrollToTop}
      >
        <Icon
          color="white"
          fontSize="20px"
          strokeWidth="1px"
          as={BsChevronUp}
        />
      </Flex>
    </Portal>
  );
}
