import React, { Dispatch, HTMLAttributes, SetStateAction } from "react";
import styles from "./styles.module.css";
import { RemoveTask, TaskStyle } from "./styles";

interface ISubstasks {
  name: string;
  completed: boolean;
}
interface IProps extends HTMLAttributes<HTMLDivElement> {
  subtask?: Array<ISubstasks>;
  name: string;
  number: number;
  numberTaskDone: number;
  dragStart: (e: any) => void;
  id: string;
}

const Task = ({
  name,
  number,
  numberTaskDone,
  id,
  dragStart,
  ...rest
}: IProps) => {
  return (
    <TaskStyle
      className="task"
      onDragStart={dragStart}
      draggable={true}
      id={`task-${id}`}
      {...rest}
    >
      <p>{name}</p>
      <span>
        {numberTaskDone} of {number} substasks
      </span>
    </TaskStyle>
  );
};

export default Task;
