import { useState } from "react";

import * as S from "./styled";

function SearchInput({ onChange }) {
  const [value, setValue] = useState("");

  const handleValue = ({ target: { value } }) => {
    //1. input에서 입력한 값
    setValue(value);

    //2. onChange라는 함수에 input에서 입력한 값을 넘겨줌
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
