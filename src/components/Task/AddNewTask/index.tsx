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

interface IFormData {
  title: string;
  description: string;
  status: string;
  substasks: string;
}

interface IOption {
  name: string;
  label: string;
}

interface IProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  optionsStatus: IOption[];
  handleAddTasks: (data: IFormData, substasks: ISubstasks[]) => void;
}

interface ISubstasks {
  name: string;
  completed: boolean;
}

const schema = yup
  .object({
    title: yup.string().required("Informe o título"),
    description: yup.string().default(""),
    status: yup.string().required("Informe o status"),
    substasks: yup.string().default(""),
  })
  .required();

const AddNewTask: React.FC<IProps> = ({
  setOpenModal,
  optionsStatus,
  handleAddTasks,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });
  const [isAddSubstasks, setIsAddSubstasks] = useState<boolean>(false);
  const [substasks, setSubstasks] = useState<Array<ISubstasks>>([]);
  const watchSubstask = watch("substasks");

  const removeFieldSubstask = (index: number) => {
    const _substasks = [...substasks];

    _substasks.splice(index, 1);
    setSubstasks([..._substasks]);
  };

  const onSubmit: SubmitHandler<IFormData> = (data) =>
    handleAddTasks(data, substasks);

  useEffect(() => {
    if (isAddSubstasks) {
      const _substask: ISubstasks = {
        name: watchSubstask,
        completed: false,
      };

      substasks.push(_substask);
      setSubstasks([...substasks]);

      setIsAddSubstasks(false);

      setValue("substasks", "");
    }
  }, [isAddSubstasks, substasks, watchSubstask, setValue]);

  return (
    <Modal setOpenModal={setOpenModal}>
      <Container>
        <h1 className="title">Add new task</h1>

        <form action="">
          <Input
            register={register}
            name="title"
            label="Title"
            placeholder="Example: Finish Site"
            errorMessage={errors.title?.message}
          />
          <TextArea
            register={register}
            name="description"
            label="Description"
            placeholder="Add task description"
            errorMessage={errors.description?.message}
          />

          <div className="containerSubstasks">
            <h2 className="label">Substaskss</h2>

            {substasks.map((substask, index) => (
              <ul className="container-substasks" key={index}>
                <li>{substask.name}</li>
                <BtnRemove onClick={() => removeFieldSubstask(index)}>
                  x
                </BtnRemove>
              </ul>
            ))}

            <Input
              register={register}
              name={`substasks`}
              label=""
              placeholder="Describe a new substaks"
              errorMessage={errors.substasks?.message}
            />
            <Button
              label="+ Add new substak"
              color="secondary"
              type="button"
              onClick={() => {
                setIsAddSubstasks(true);
              }}
            />
          </div>

          <Select
            register={register}
            name="status"
            label={"Status"}
            options={optionsStatus}
            errorMessage={errors.status?.message}
          />

          <Button
            label="Create task"
            color="primary"
            type="button"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </Container>
    </Modal>
  );
};

export default AddNewTask;
