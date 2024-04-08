import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { CloseModal, Container, Wrapper } from "./styles";

interface IProps extends React.PropsWithChildren {
  children: ReactElement;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<IProps> = ({ children, setOpenModal }: IProps) => {
  return (
    <Container>
      <Wrapper>
        <CloseModal onClick={() => setOpenModal(false)}>x</CloseModal>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Modal;
