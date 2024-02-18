import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IBoardProps {
  todos: string[];
  boardId: string;
}

function Board({ todos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <DragabbleCard key={todo} index={index} todo={todo} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
