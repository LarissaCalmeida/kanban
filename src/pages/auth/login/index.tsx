import { Container, Form, SignUpText } from "@/styles/login";
import Head from "next/head";
import Link from "next/link";

const Login = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <div className={"background"}>
        <div className={"text"}>
          <img src="/logo.png" alt="" />
          <p>Gerencie suas tarefas facilmente</p>
        </div>
      </div>
      <Form>
        <h1 className="title">Login</h1>
        <form action="">
          <div className={"formInput"}>
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="email@gmail.com" />
          </div>
          <div className={"formInput"}>
            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>

          <Link href="#" className={"forgotPassword"}>
            Esqueceu sua senha?
          </Link>

          <button type="submit">Entrar</button>
        </form>
        <SignUpText>
          Não tem acesso ao KanBan?{" "}
          <Link href="/auth/register" className={"signUp"}>
            Registre-se agora
          </Link>
        </SignUpText>
      </Form>
    </Container>
  );
};

export default Login;
