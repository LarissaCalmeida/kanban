import Loading from "@/components/Loading";
import { Container, Form, SignUpText } from "@/styles/login";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (name) {
      localStorage.setItem("name-kanban", name);
      router.replace("/");
    } else {
      toast.error("Please enter a name");
    }
  };

  useEffect(() => {
    const nameKanban = localStorage.getItem("name-kanban");

    if (nameKanban) {
      router.replace("/");
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <Loading />;

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
        <form onSubmit={onSubmit}>
          <div className={"formInput"}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Name of Workspace"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </Form>
    </Container>
  );
};

export default Login;
