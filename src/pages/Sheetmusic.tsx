import { ReactEventHandler, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

type Props = {};

interface InputBox {
  chord: string;
  lyrics: string;
  id: string;
}

type Tab = { A: number; E: number; C: number; G: number };

const chordToTab: { [key: string]: Tab } = {
  C: { A: 3, E: 0, C: 0, G: 0 },
  G7: { A: 2, E: 1, C: 0, G: 2 },
  F: { A: 0, E: 1, C: 0, G: 2 },
  D7: { A: 2, E: 2, C: 2, G: 0 },
  // 추가 코드와 타브를 여기에 정의하세요.
};

type TabDisplayProps = {
  tab?: Tab;
};

const TabDisplay = ({ tab }: TabDisplayProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      {tab ? (
        <div>
          <div>G | -{tab.G}-</div>
          <div>C | -{tab.C}-</div>
          <div>E | -{tab.E}-</div>
          <div>A | -{tab.A}-</div>
        </div>
      ) : (
        <p>타브 없음</p>
      )}
    </div>
  );
};

const Sheetmusic = (props: Props) => {
  const InputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [inputBox, setInputBox] = useState<InputBox[]>([
    {
      chord: "",
      lyrics: "",
      id: uuidv4(),
    },
  ]);

  useEffect(() => {
    console.log("inputBox", inputBox);
  }, [inputBox]);

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setInputBox([...inputBox, { chord: "", lyrics: "", id: uuidv4() }]);
      setTimeout(() => {
        const newIndex = idx + 1;
        InputRefs.current[newIndex]?.focus();
      }, 0);
    }
  };

  const handleRemoveChord = (id: string) => {
    console.log("id", id);
    setInputBox(inputBox.filter((item) => item.id !== id));
  };

  return (
    <ContainerStyles>
      <SheetMusicPaper>
        <h2>흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야</h2>
        <ChordWrap>
          {inputBox.map((item, index) => (
            <ChordBoxStyles key={item.id}>
              <button
                onClick={() => {
                  handleRemoveChord(item.id);
                }}
              >
                X
              </button>
              <input
                type="text"
                value={item?.chord}
                placeholder="코드 선택"
                onChange={(e) => {
                  e.preventDefault();
                  const { value } = e.target;
                  setInputBox((prev) => prev.map((item, i) => (i === index ? { ...item, chord: value } : item)));
                }}
              />
              <div>
                <div>G</div>
                <div>C</div>
                <div>E</div>
                <div>A</div>
              </div>
              <input
                type="text"
                value={item?.lyrics}
                onChange={(e) => {
                  e.preventDefault();
                  const { value } = e.target;
                  setInputBox((prev) => prev.map((item, i) => (i === index ? { ...item, lyrics: value } : item)));
                }}
                onKeyPress={(e) => {
                  handleEnterPress(e, index);
                }}
                ref={(el) => (InputRefs.current[index] = el)}
              />
            </ChordBoxStyles>
          ))}
        </ChordWrap>
      </SheetMusicPaper>
    </ContainerStyles>
  );
};

const ContainerStyles = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  p {
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
  }
`;

const SheetMusicPaper = styled.div`
  width: 80%;
  border: 1px solid black;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 60px;
  h2 {
    font-size: 2rem;
    padding: 20px;
    margin: 30px;
    text-align: center;
    width: 100%;
  }
`;
const ChordWrap = styled.div`
  width: 100%;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ChordBoxStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export default Sheetmusic;
