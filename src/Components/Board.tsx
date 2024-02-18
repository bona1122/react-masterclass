import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import styled from "styled-components";
import { set, useForm } from "react-hook-form";
import { ITodo, todosState } from "../atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;
interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "#b2bec3 "
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IBoardProps {
  todos: ITodo[];
  boardId: string;
}

interface IForm {
  todo: string;
}

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

function Board({ todos, boardId }: IBoardProps) {
  const setTodos = useSetRecoilState(todosState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ todo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos((prevBoards) => {
      console.log(prevBoards);
      return { ...prevBoards, [boardId]: [...prevBoards[boardId], newTodo] };
    });
    setValue("todo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("todo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos.map((todo, index) => (
              <DragabbleCard
                key={todo.id}
                index={index}
                todoId={todo.id}
                todoText={todo.text}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
