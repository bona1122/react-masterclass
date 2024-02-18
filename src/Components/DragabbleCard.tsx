import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

const Card = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.cardColor};
  margin-bottom: 5px;
`;

interface IDraggableCardProps {
  todo: string;
  index: number;
}

function DraggableCard({ todo, index }: IDraggableCardProps) {
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
