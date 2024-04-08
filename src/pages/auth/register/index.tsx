import { Container, Form, SignInText } from "@/styles/register";
import Head from "next/head";
import Link from "next/link";

const Login = () => {
  return (
    <Container>
      <Head>
        <title>Kanban - Cadastro</title>
      </Head>
      <Form>
        <h1 className="title">Cadastro</h1>
        <form action="">
          <div className={"formInput"}>
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="email@gmail.com" />
          </div>
          <div className={"formInput"}>
            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <div className={"formInput"}>
            <label htmlFor="">Confirmar senha</label>
            <input type="password" placeholder="Repita sua senha" />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
        <SignInText>
          Já tem acesso ao KanBan?{" "}
          <Link href="/auth/login" className={"signIn"}>
            Faça o login
          </Link>
        </SignInText>
      </Form>
      <div className={"background"}>
        <div className={"text"}>
          <img src="/logo.png" alt="" />
          <p>Gerencie suas tarefas facilmente</p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
