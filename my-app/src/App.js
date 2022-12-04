import './App.css';
import ClassComponent from "./pages/classComponents/ClassComponents";
import ClassComponentsSecond from "./pages/classComponentsSecond/ClassComponentsSecond";
import FormPage from "./pages/formPage/FormPage";

function App() {
  const user ={name:"Anna", age: 19}
  return (
    <div className="App">
      {/*<ClassComponent name={user}/>*/}
      {/*<ClassComponentsSecond name={user}/>*/}
      <FormPage/>
    </div>
  );
}

export default App;
