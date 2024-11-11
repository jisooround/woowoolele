import { useRef, useState } from "react";
import styled from "styled-components";

type Props = {};

interface InputBox {
  chord: string;
  lyrics: string;
}

const Sheetmusic = (props: Props) => {
  const InputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [inputBox, setInputBox] = useState<InputBox[]>([
    {
      chord: "",
      lyrics: "",
    },
  ]);

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setInputBox([...inputBox, { chord: "", lyrics: "" }]);
      setTimeout(() => {
        const newIndex = idx + 1;
        InputRefs.current[newIndex]?.focus();
      }, 0);
    }
  };

  return (
    <ContainerStyles>
      {inputBox.map((item, index) => (
        <ChordBoxStyles key={`${index}_${item}`}>
          <input
            type="text"
            value={item?.chord}
            onChange={(e) => {
              e.preventDefault();
              const { value } = e.target;
              setInputBox((prev) => prev.map((item, i) => (i === index ? { ...item, chord: value } : item)));
            }}
          />
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

const ChordBoxStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Sheetmusic;
