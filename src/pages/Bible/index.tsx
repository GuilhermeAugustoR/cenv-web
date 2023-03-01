/* eslint-disable no-lone-blocks */
import React from "react";
import * as Styled from "./styles";
import { bible } from "./bible";

const Bible = () => {
  const [cap, setCap] = React.useState<string>("");
  const [capIndex, setCapIndex] = React.useState<number>(0);

  const mapBooks = React.useMemo(() => {
    return bible.map(({ id, nome }, index): any => (
      <Styled.ContainerBooks key={id}>
        <button
          onClick={() => {
            setCap(nome);
            setCapIndex(index + 1);
          }}
        >
          {index + 1} - {nome}
        </button>
      </Styled.ContainerBooks>
    ));
  }, []);

  const mapCap = React.useMemo(() => {
    return bible.map(({ capitulos }, index): any => (
      <Styled.ContainerCap key={index}>
        {`${index + 1} - ${capitulos[capIndex]}`}
      </Styled.ContainerCap>
    ));
  }, [capIndex]);

  console.log(capIndex);

  return (
    <Styled.Container>
      {mapBooks}
      {mapCap}
    </Styled.Container>
  );
};

export default Bible;
