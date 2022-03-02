import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: props.colorMode === "dark" ? "#091945" : "#FBFBFB",
      },
      img: {
        userSelect: "none",
      },
      "a:hover": {
        textDecoration: "none !important",
      },
    }),
  },
  fonts: {
    body: `Inter, ${base.fonts?.body}`,
    heading: `Montserrat, ${base.fonts?.heading}`,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
