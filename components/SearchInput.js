import { forwardRef } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const SearchInput = forwardRef((props, ref) => {
  const { colorMode } = useColorMode();

  return (
    <InputGroup size="lg">
      <InputLeftElement pointerEvents="none">
        <BiSearch color="#CBD5E0" fontSize="23px" />
      </InputLeftElement>
      <Input
        type={props.text}
        {...props}
        bg={colorMode === "dark" ? "#152451" : "white"}
        ref={ref}
        _placeholder={{ color: "gray.400", fontSize: "16px" }}
      />
    </InputGroup>
  );
});

SearchInput.displayName = "SearchInput";

SearchInput.defaultProps = {
  type: "search",
  placeholder: "Cari",
};

export default SearchInput;
