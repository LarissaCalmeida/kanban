import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/TextArea";
import { BtnRemove, Container } from "./styles";
import Button from "@/components/Form/Button";
import Select from "@/components/Form/Select";
import CheckTask from "@/components/Form/CheckTask";

interface IFormData {
  status: string;
}

interface IOption {
  name: string;
  label: string;
}

interface ITask {
  name: string;
  description?: string;
  number: number;
  numberTaskDone: number;
  substask: Array<ISubstasks>;
}

interface IProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  task: ITask;
  handleRemoveTask: () => void;
}

interface ISubstasks {
  name: string;
  completed: boolean;
}

const RemoveTask: React.FC<IProps> = ({
  setOpenModal,
  handleRemoveTask,
  task,
}) => {
  return (
    <Modal setOpenModal={setOpenModal}>
      <Container>
        <h2 className="description">
          Are you sure you want to delete: <br /> {task.name}
        </h2>

        <div className="buttons">
          <Button
            label="Cancel"
            color="secondary"
            type="button"
            onClick={() => setOpenModal(false)}
          />
          <Button
            label="Delete"
            color="primary"
            type="button"
            onClick={() => handleRemoveTask()}
          />
        </div>
      </Container>
    </Modal>
  );
};

export default RemoveTask;
