import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  $bgColor: string;
  $borderColor: string;
}
interface CircleProps {
  $bgColor: string;
  $borderColor?: string;
}
const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 100px;
  border: 2px solid ${(props) => props.$borderColor};
`;

function Circle({ $bgColor, $borderColor }: CircleProps) {
  const [value, setValue] = useState<number|string>(0); // 상태값의 타입을 number|string으로 지정
  setValue(0);
  setValue('ddd');
  return (
    <Container $bgColor={$bgColor} $borderColor={$borderColor ?? $bgColor} />
  );
}

export default Circle;
