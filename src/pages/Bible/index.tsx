/* eslint-disable no-lone-blocks */
import React, { ReactElement } from "react";
import * as Styled from "./styles";
import bibleService from "../../services/bibleService";

const Bible = () => {
  const [cap, setCap] = React.useState<any>([]);
  const [chapter, setChapter] = React.useState<any>(0);
  const [book, setBook] = React.useState<any>([]);
  const [abrev, setAbrev] = React.useState<string>("");

  React.useEffect(() => {
    const getBooks = async () => {
      try {
        const result = await bibleService.getBooks();

        setCap(result);
      } catch (error) {
        console.log(error);
        return;
      }
    };
    getBooks();
  }, []);

  React.useEffect(() => {
    const getBook = async () => {
      try {
        const result = await bibleService.getBook({ abrev });

        setBook(result);
        setChapter(result.chapters);
      } catch (error) {
        console.log(error);
        return;
      }
    };
    getBook();
  }, [abrev]);

  const mapCap = React.useMemo(() => {
    return cap.map((props: any, index: React.Key | null | undefined) => (
      <Styled.ContainerBooks key={index}>
        <button
          onClick={() => {
            setAbrev(props.abbrev.pt);
          }}
        >
          {props.name}
        </button>
      </Styled.ContainerBooks>
    ));
  }, [cap]);

  return (
    <Styled.Container>
      {abrev ? (
        <div>
          {book.author}
          {chapter}
        </div>
      ) : (
        mapCap
      )}
    </Styled.Container>
  );
};

export default Bible;
