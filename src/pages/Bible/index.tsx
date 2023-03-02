/* eslint-disable no-lone-blocks */
import React from "react";
import * as Styled from "./styles";
import bibleService from "../../services/bibleService";

const Bible = () => {
  const [cap, setCap] = React.useState<any>([]);

  React.useEffect(() => {
    const getBooks = async () => {
      try {
        const result = await bibleService.getBooks();

        setCap(result);
        console.log(result);
      } catch (error) {
        console.log(error);
        return;
      }
    };
    getBooks();
  }, []);

  const mapCap = React.useMemo(() => {
    return cap.map((props: any, index: React.Key | null | undefined) => (
      <Styled.ContainerCap key={index}>{props.name}</Styled.ContainerCap>
    ));
  }, [cap]);

  return (
    <Styled.Container>
      {/* {mapBooks} */}
      {mapCap}
    </Styled.Container>
  );
};

export default Bible;
