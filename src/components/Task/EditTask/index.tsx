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
  optionsStatus: IOption[];
  currentStatus: string;
  task: ITask;
  handleEditTasks: (task: ITask, column: string) => void;
}

interface ISubstasks {
  name: string;
  completed: boolean;
}

const schema = yup
  .object({
    status: yup.string().required("Informe o status"),
  })
  .required();

const EditTask: React.FC<IProps> = ({
  setOpenModal,
  optionsStatus,
  handleEditTasks,
  currentStatus,
  task,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const [substasks, setSubstasks] = useState<Array<ISubstasks>>([
    ...task.substask,
  ]);
  const [numberCompletedSubstask, setNumberCompletedSubstask] =
    useState<number>(0);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    const _completed = substasks.filter((sub) => sub.completed === true);
    task.numberTaskDone = _completed.length;

    handleEditTasks(task, data.status);
  };

  useEffect(() => {
    const _substask = substasks.filter(
      (substask) => substask.completed === true
    );

    setNumberCompletedSubstask(_substask.length);
  }, [substasks]);

  const handleChangeCompleted = (index: number) => {
    substasks[index].completed = !substasks[index].completed;

    setSubstasks([...substasks]);
  };

  return (
    <Modal setOpenModal={setOpenModal}>
      <Container>
        <h1 className="title">{task.name}</h1>
        <h2 className="description">{task.description}</h2>

        <form action="">
          <div className="containerSubstasks">
            <h2 className="label">
              Substasks ({numberCompletedSubstask}/{task.substask?.length})
            </h2>

            {substasks.map((substask, index) => (
              <CheckTask
                key={index}
                checked={substask.completed}
                label={substask.name}
                onClick={() => {
                  handleChangeCompleted(index);
                }}
              />
            ))}
          </div>

          <Select
            register={register}
            name="status"
            label={"Status"}
            options={optionsStatus}
            errorMessage={errors.status?.message}
            defaultValue={currentStatus}
          />

          <Button
            label="Save alterations"
            color="primary"
            type="button"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </Container>
    </Modal>
  );
};

export default EditTask;
