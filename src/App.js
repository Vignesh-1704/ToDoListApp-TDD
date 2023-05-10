import './App.css';
import Heading from "./components/Heading/Heading";
import TodoPage from "./pages/TodoPage"
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Routes>
        <Route path= "/" element= {<TodoPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
