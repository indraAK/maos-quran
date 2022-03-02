import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <Box maxW="576px" m="auto">
      <Box mb="120px">{children}</Box>
      <Navbar />
    </Box>
  );
}

export default Layout;
