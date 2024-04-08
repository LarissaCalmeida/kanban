import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/TextArea";
import { Container } from "./styles";
import Button from "@/components/Form/Button";
import Select from "@/components/Form/Select";

interface IFormData {
  name: string;
  color: string;
}

interface IProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  handleAddColumn: (name: string, color: string) => void;
}

const schema = yup
  .object({
    name: yup.string().required("Enter a valid name"),
    color: yup.string().required("Enter a valid color"),
  })
  .required();

const AddNewColumn: React.FC<IProps> = ({ setOpenModal, handleAddColumn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    handleAddColumn(data.name, data.color);
    setOpenModal(false);
  };

  return (
    <Modal setOpenModal={setOpenModal}>
      <Container>
        <h1 className="title">Add new column</h1>

        <form action="">
          <Input
            register={register}
            name="name"
            label="Name"
            placeholder="Example: Done"
            errorMessage={errors.name?.message}
          />
          <Input
            register={register}
            name="color"
            label="Color"
            type="color"
            placeholder="Choose color"
            errorMessage={errors.color?.message}
          />

          <Button
            label="Create column"
            color="primary"
            type="button"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </Container>
    </Modal>
  );
};

export default AddNewColumn;
