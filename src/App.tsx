import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todosState } from "./atoms";
import Board from "./Components/Board";

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const [todos, setTodos] = useRecoilState(todosState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setTodos((prevBoards) => {
        const boardCopy = [...prevBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...prevBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      setTodos((prevBoards) => {
        const sourceBoardCopy = [...prevBoards[source.droppableId]];
        const taskObj = sourceBoardCopy[source.index];
        const destBoardCopy = [...prevBoards[destination.droppableId]];
        sourceBoardCopy.splice(source.index, 1);
        destBoardCopy.splice(destination.index, 0, taskObj);
        return {
          ...prevBoards,
          [source.droppableId]: sourceBoardCopy,
          [destination.droppableId]: destBoardCopy,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(todos).map((boardId) => (
            <Board key={boardId} boardId={boardId} todos={todos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
export default App;
