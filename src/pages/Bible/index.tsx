/* eslint-disable no-lone-blocks */
import React from "react";
import * as Styled from "./styles";
import bibleService from "../../services/bibleService";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Bible = () => {
  //Steps
  const [isCapName, setIsCapName] = React.useState<boolean>(true);
  const [isTotalChapter, setIsTotalChapter] = React.useState<boolean>(false);
  const [isChapter, setIsChapter] = React.useState<boolean>(false);

  const [cap, setCap] = React.useState<any>([]);
  const [totalChapter, setTotalChapter] = React.useState<any>(0);
  const [chapterNumber, setChapterNumber] = React.useState<number>(0);
  const [chapter, setChapter] = React.useState<any>([]);
  const [abrev, setAbrev] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

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
                setIsChapter(true);
                setIsTotalChapter(false);
                setIsCapName(false);
              }}
            >
              {i + 1}
            </button>
          );
        }

        setTotalChapter(total);
      } catch (error) {
        console.log(error);
        return;
      }
    };
    getBook();
  }, [abrev]);

  React.useEffect(() => {
    const getChapter = async () => {
      try {
        const result = await bibleService.getChapter({
          abrev,
          chapter: String(chapterNumber),
        });

        setChapter(result.verses);
      } catch (error) {
        console.log(error);
        return;
      }
    };
    getChapter();
  }, [abrev, chapterNumber]);

  const mapChapter = React.useMemo(() => {
    return chapter.map(({ text, number }: any) => (
      <Styled.SubContainerChapter key={number}>
        <span>
          {number} - {text}
        </span>
      </Styled.SubContainerChapter>
    ));
  }, [chapter]);

  const mapCap = React.useMemo(() => {
    return cap.map((props: any, index: React.Key | null | undefined) => (
      <Styled.ContainerBooks key={index}>
        <button
          onClick={() => {
            setAbrev(props.abbrev.pt);
            setIsTotalChapter(true);
            setIsCapName(false);
            setName(props.name);
          }}
        >
          {props.name}
        </button>
      </Styled.ContainerBooks>
    ));
  }, [cap]);

  if (isCapName) {
    return <Styled.Container>{mapCap}</Styled.Container>;
  }

  if (isTotalChapter) {
    return (
      <Styled.ContainerChapterNumber>
        <Styled.AreaChapterNumber>
          <AiOutlineArrowLeft
            size={30}
            onClick={() => {
              setIsChapter(false);
              setIsTotalChapter(false);
              setIsCapName(true);
            }}
          />
          <text>{name}</text>
        </Styled.AreaChapterNumber>

        <section>{totalChapter}</section>
      </Styled.ContainerChapterNumber>
    );
  }

  if (isChapter) {
    return (
      <Styled.ContainerChapter>
        <Styled.ContainerChapterName>
          <AiOutlineArrowLeft
            size={30}
            onClick={() => {
              setIsChapter(false);
              setIsTotalChapter(true);
              setIsCapName(false);
            }}
          />
          <text>
            {name} - {chapterNumber}
          </text>
        </Styled.ContainerChapterName>

        {mapChapter}
      </Styled.ContainerChapter>
    );
  }

  return <></>;
};

export default Bible;
