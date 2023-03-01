/* eslint-disable no-lone-blocks */
import React from "react";
import * as Styled from "./styles";
import { bible } from "./bible";

const Bible = () => {
  const mapCap = React.useMemo(() => {
    return bible.map(({ id, nome, capitulos }, index): any => (
      <Styled.ContainerBible key={index}>{index + 1} - {capitulos[0][0]}</Styled.ContainerBible>
    ));
  }, []);

  return <Styled.Container>{mapCap}</Styled.Container>;
};

export default Bible;
