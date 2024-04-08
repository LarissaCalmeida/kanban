import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import AddNewColumn from "@/components/NewColumn";
import Task from "@/components/Task";
import AddNewTask from "@/components/Task/AddNewTask";
import EditTask from "@/components/Task/EditTask";
import {
  Container,
  ContainerNavbar,
  ContainerSidebar,
  Dashboard,
  Navbar,
  Sidebar,
} from "@/styles/home";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import RemoveTask from "@/components/Task/RemoveTask";

interface ITask {
  name: string;
  description?: string;
  number: number;
  numberTaskDone: number;
  substask: Array<ISubstasks>;
}

interface ISubstasks {
  name: string;
  completed: boolean;
}

interface IColumnTask {
  name: string;
  color: string;
  task: Array<ITask>;
}

interface IOption {
  name: string;
  label: string;
}

interface IFormDataTask {
  title: string;
  description: string;
  status: string;
  substasks: string;
}

export default function Home() {
  const [openModalAddNewTask, setOpenModalAddNewTask] =
    useState<boolean>(false);
  const [openModalEditTask, setOpenModalEditTask] = useState<boolean>(false);
  const [openModalAddNewColumn, setOpenModalAddNewColumn] =
    useState<boolean>(false);
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  const [columnsTask, setColumnsTask] = useState<Array<IColumnTask>>([
    {
      name: "TO DO",
      color: "#1AB4AA",
      task: [
        {
          name: "Teste 1",
          description: "",
          number: 2,
          numberTaskDone: 1,
          substask: [
            {
              name: "Task 1",
              completed: true,
            },
            {
              name: "Task 2",
              completed: false,
            },
          ],
        },
        {
          name: "Teste 2",
          description: "",
          number: 2,
          numberTaskDone: 1,
          substask: [],
        },
        {
          name: "Teste 3",
          description: "",
          number: 2,
          numberTaskDone: 1,
          substask: [],
        },
      ],
    },
  ]);
  const [optionsStatus, setOptionsStatus] = useState<Array<IOption>>([]);
  const [currentTask, setCurrentTask] = useState<ITask>({} as ITask);
  const [currentStatus, setCurrentStatus] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [currentTaskToRemove, setCurrentTaskToRemove] = useState<ITask>(
    {} as ITask
  );
  const [openModalDeleteTask, setOpenModalDeleteTask] =
    useState<boolean>(false);

  const handleAddColumn = useCallback(
    (name: string, color: string) => {
      const newColumn: IColumnTask = {
        name,
        color,
        task: [],
      };

      columnsTask.push(newColumn);
      setColumnsTask([...columnsTask]);
    },

    [columnsTask]
  );

  const handleAddTasks = (data: IFormDataTask, substask: ISubstasks[]) => {
    const indexColumn = columnsTask.findIndex(
      (colum) => colum.name === data.status
    );

    const newTask: ITask = {
      name: data.title,
      number: substask.length,
      numberTaskDone: 0,
      description: data.description,
      substask,
    };

    columnsTask[indexColumn].task.push(newTask);

    setColumnsTask([...columnsTask]);

    setOpenModalAddNewTask(false);
  };

  useEffect(() => {
    const _arrayStatus: IOption[] = [];

    columnsTask.forEach((column: IColumnTask) => {
      const _newStatus: IOption = {
        name: column.name,
        label: column.name,
      };

      _arrayStatus.push(_newStatus);
    });

    setOptionsStatus(_arrayStatus);
  }, [columnsTask]);

  const handleOpenTask = (task: ITask, status: string, index: number) => {
    setCurrentStatus(status);
    setCurrentTask(task);
    setCurrentIndex(index);
    setOpenModalEditTask(true);
  };

  const handleEditTask = (editedTask: ITask, column: string) => {
    const _idxCol = columnsTask.findIndex(
      (column) => column.name === currentStatus
    );

    if (column !== currentStatus) {
      const _idxNewCol = columnsTask.findIndex((col) => col.name === column);
      columnsTask[_idxNewCol].task.push(editedTask);
      columnsTask[_idxCol].task.splice(currentIndex, 1);
    } else {
      columnsTask[_idxCol].task[currentIndex] = editedTask;
    }

    setColumnsTask([...columnsTask]);

    setOpenModalEditTask(false);
  };

  const handleOpenRemoveTask = (taskToRemove: ITask) => {
    setCurrentTaskToRemove(taskToRemove);
    setOpenModalDeleteTask(true);
    setOpenModalEditTask(false);
  };

  const handleRemoveTask = () => {
    const _idxCol = columnsTask.findIndex(
      (column) => column.name === currentStatus
    );

    columnsTask[_idxCol].task.splice(currentIndex, 1);
    setOpenModalDeleteTask(false);
  };

  const onDropTask = (e: any) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    // e.target.appendChild(document.getElementById(data));
    console.log(data);
    console.log(e);
  };

  const onDragTask = (e: any) => {
    console.log(e);
    e.dataTransfer.setData("text", e.target.id);
  };

  const allowDrop = (e: any) => {
    e.preventDefault();
  };

  // Verify if the document already ready
  if (process.browser) {
    // Get elements like container and task
    const draggables = document.querySelectorAll(".task");
    const droppables = document.querySelectorAll(".containerTask");

    draggables.forEach((task) => {
      task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
      });
      task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging");
      });
    });

    droppables.forEach((zone) => {
      zone.addEventListener("dragover", (e: any) => {
        e.preventDefault();

        const bottomTask = insertAboveTask(zone, e.clientY);
        const curTask = document.querySelector(".is-dragging");

        if (curTask) {
          if (!bottomTask) {
            zone.appendChild(curTask);
            console.log(zone);
            console.log;
          } else {
            zone.insertBefore(curTask, bottomTask);
          }
        }
      });
    });
  }

  const insertAboveTask = (zone: any, mouseY: any) => {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task: any) => {
      const { top } = task.getBoundingClientRect();

      const offset = mouseY - top;

      if (offset < 0 && offset > closestOffset) {
        closestOffset = offset;
        closestTask = task;
      }
    });

    return closestTask;
  };

  return (
    <>
      <Head>
        <title>KanBan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ContainerSidebar>
          <Sidebar>
            <div>
              {" "}
              <img src="/logo.png" alt="logo" />
              <p>ALL BOARDS (2)</p>
              <ul>
                <li className="active">
                  <div>
                    <img src="/no-photo.svg" alt="" />
                  </div>
                  <span>Plataform Launch</span>
                </li>

                <li>
                  <div>
                    <img src="/no-photo.svg" alt="" />
                  </div>
                  <span>Marketing Plan</span>
                </li>
              </ul>
            </div>

            <Link href="/auth/login" className="out">
              Deslogar
            </Link>
          </Sidebar>
        </ContainerSidebar>
        <Dashboard>
          <ContainerNavbar>
            <Navbar openMenu={openMenuMobile}>
              <div className="board">
                <img src="/favicon.png" alt="Logo" />
                <h2>Platform Launch</h2>
                <div
                  className="arrow-menu-mobile"
                  onClick={() => {
                    setOpenMenuMobile((prev) => !prev);
                  }}
                >
                  <img src="/down.png" alt="Arrow Menu" />
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setOpenModalAddNewTask(true);
                }}
                className="desktop"
              >
                + Add new task
              </button>

              <button
                type="button"
                onClick={() => {
                  setOpenModalAddNewTask(true);
                }}
                className="mobile"
              >
                +
              </button>

              <div className="menu-mobile">
                <ul>
                  <li className="active">
                    <div>
                      <img src="/no-photo.svg" alt="" />
                    </div>
                    <span>Plataform Launch</span>
                  </li>

                  <li>
                    <div>
                      <img src="/no-photo.svg" alt="" />
                    </div>
                    <span>Marketing Plan</span>
                  </li>
                </ul>

                <Link href="/auth/login" className="out">
                  Deslogar
                </Link>
              </div>
            </Navbar>
          </ContainerNavbar>

          <div className="content">
            {columnsTask.map((column, index) => (
              <div className={"column"} key={index}>
                <div className={"header"}>
                  <div
                    style={{ background: column.color }}
                    className={"color"}
                  ></div>
                  <span>{column.name}</span>
                </div>

                <div
                  className={`containerTask`}
                  onDrop={onDropTask}
                  id="toDoing"
                  onDragOver={allowDrop}
                >
                  {column.task.map((task, index) => (
                    <Task
                      key={index}
                      name={task.name}
                      number={task.number}
                      numberTaskDone={task.numberTaskDone}
                      dragStart={onDragTask}
                      id={`toDoing-${index}`}
                      onClick={() => {
                        handleOpenTask(task, column.name, index);
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div
              className="newColumn"
              onClick={() => {
                setOpenModalAddNewColumn(true);
              }}
            >
              <span>+ New Column</span>
            </div>
          </div>
        </Dashboard>

        {/* Modals */}
        {openModalAddNewTask && (
          <AddNewTask
            setOpenModal={setOpenModalAddNewTask}
            optionsStatus={optionsStatus}
            handleAddTasks={handleAddTasks}
          />
        )}
        {openModalAddNewColumn && (
          <AddNewColumn
            setOpenModal={setOpenModalAddNewColumn}
            handleAddColumn={handleAddColumn}
          />
        )}

        {openModalEditTask && (
          <EditTask
            setOpenModal={setOpenModalEditTask}
            handleEditTasks={handleEditTask}
            optionsStatus={optionsStatus}
            currentStatus={currentStatus}
            task={currentTask}
            handleOpenRemoveTask={handleOpenRemoveTask}
          />
        )}

        {openModalDeleteTask && (
          <RemoveTask
            setOpenModal={setOpenModalDeleteTask}
            task={currentTaskToRemove}
            handleRemoveTask={handleRemoveTask}
          />
        )}
        {/* End modals */}
      </Container>
    </>
  );
}
