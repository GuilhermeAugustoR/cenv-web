/* eslint-disable no-lone-blocks */
import React from "react";
import * as Styled from "./styles";
import bibleService from "../../services/bibleService";

const Bible = () => {
  const [cap, setCap] = React.useState<any>([]);
  const [chapter, setChapter] = React.useState<any>(0);
  const [chapterNumber, setChapterNumber] = React.useState<number>(0);
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
        let total = [];

        for (let i = 0; i < result.chapters; i++) {
          total.push(
            <button
              value={i + 1}
              onClick={() => {
                setChapterNumber(i + 1);
              }}
            >
              {i + 1}
            </button>
          );
        }

        setChapter(total);
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
        <Styled.ContainerChapterNumber>{chapter}</Styled.ContainerChapterNumber>
      ) : (
        mapCap
      )}
    </Styled.Container>
  );
};

export default Bible;
