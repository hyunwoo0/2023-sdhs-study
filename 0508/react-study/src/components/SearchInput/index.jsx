import { useState } from "react";

import * as S from "./styled";

function SearchInput({ onChange }) {
  const [value, setValue] = useState("");

  const handleValue = ({ target: { value } }) => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <S.SearchInputBox>
      <S.SearchInput
        placeholder="검색할 내용을 입력하세요."
        value={value}
        onChange={handleValue}
      />
    </S.SearchInputBox>
  );
}

export default SearchInput;
