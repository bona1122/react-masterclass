import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const BoxOne = styled.div`
  width: 100px;
  height: 100px;
  background-color: teal;
`;
const BoxTwo = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
`;
const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
