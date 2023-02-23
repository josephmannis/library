import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

export function CardSearch(props: { onChange: (query: string) => void }) {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    props.onChange(value);
  }, [value]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
      <InputRightElement
        children={
          <IconButton
            aria-label="clear"
            icon={<CloseIcon />}
            onClick={() => setValue("")}
          />
        }
      />
      <Input
        backgroundColor="#EEEEEE"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        size="md"
        placeholder="No way I don't have this card..."
      />
    </InputGroup>
  );
}
