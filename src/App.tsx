import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div<BoxProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;
const Circle = styled(Box)`
  border-radius: 50%;
`;

interface BoxProps {
  bgColor: string;
}

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
