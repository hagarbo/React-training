import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

//Importar hoja de estilos
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example1",
    "Description 1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description 2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Description 3",
    true,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida
  useEffect(() => {
    console.log("Task State has been modified");
    setTimeout(() => {
        setLoading(false);
    }, 2000); 
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    //Actualizamos el estado del componente y al hacerlo se actualiza la iteracion en el map y se actualizar la tarea en la vista
    setTasks(tempTasks);
  }

  function removeTask(task) {
    console.log("Delete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log("Add this Task:", task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const TasksTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={removeTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let table;

  if (tasks.length>0){
    table = <TasksTable></TasksTable>
  }
  else{
    table = (
        <div>
            <h3>No tasks available.</h3>
            <h4>Please, create one</h4>
        </div>
    )
  }

  const loadingStyle = {
    color: 'grey',
    fontSize: '30px',
    fontWeight: 'bold'
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header {title} */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/* Card Body {content} */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}>
                {/* Add Loading Spinner */}
                {loading ? <p style={loadingStyle}>Loading Tasks...</p> : table}
          </div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
