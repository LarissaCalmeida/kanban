import Button from "@/components/Form/Button";
import { Container, ContainerNavbar, Navbar } from "@/styles/404";
import Head from "next/head";
import React from "react";

const Page404 = () => {
  return (
    <Container>
      <ContainerNavbar>
        <Head>
          <title>Kanban | 404</title>
        </Head>
        <Navbar>
          <img src="/logo.png" alt="logo" />
        </Navbar>
      </ContainerNavbar>
      <div className="wrapper">
        <img src="/mouse_404.gif" className="mouse_animated" />

        {/* <img src="/cat_404.gif" /> */}
        <div className="container-text">
          <h1>404</h1>

          <span>{`Oops, it looks like this page doesn't exist`}</span>
          <div>
            <Button type="button" color="primary" label="Back to main" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page404;
