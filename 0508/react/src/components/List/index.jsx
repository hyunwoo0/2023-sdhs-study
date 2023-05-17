import Button from '../../../../react/src/components/Button';

import * as S from './styled';

function List(props) {
  const { data } = props;

  return (
    <S.Container>
      <S.Title>{props.children}</S.Title>
    </S.Container>
  );
}

export default List;
