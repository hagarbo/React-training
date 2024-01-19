import logo from './logo.svg';
import './App.css';
/* import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF'; */
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio de Greeting */}
        {/* <Greeting name="Alonso"></Greeting> */}
        {/* <GreetingF name="Alonso"></GreetingF> */}
        {/* Componente de Listado de Tareas  */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo lo que hay aqui dentro, es tradado como props.children */}
        {/* <Ejemplo4 nombre="Jaime">
          <h3>
            Contenido del props.children
          </h3>
          <p>holas</p>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Antonio"></GreetingStyled> */}
     {/*  </header> */}
     {/* <Father></Father> */}
     {/* Ejemplos de renderizado condicional */}
        {/* <OptionalRender></OptionalRender> */}

        {/* Ejemplos de uso de Formik y yup */}
        {/* <LoginFormik></LoginFormik> */}
        <RegisterFormik></RegisterFormik>

      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
