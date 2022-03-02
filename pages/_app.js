import { ChakraProvider, Spinner } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import theme from "src/theme";
import "src/theme/styles.css";
import { useHydration } from "hooks/useHydration";

function MyApp({ Component, pageProps }) {
  const hasHydrated = useHydration();

  return (
    <ChakraProvider theme={theme}>
      {hasHydrated ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Spinner size="md" />
      )}
    </ChakraProvider>
  );
}

export default MyApp;
