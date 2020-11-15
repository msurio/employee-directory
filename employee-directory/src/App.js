import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee.js'
import employeeData from "./employees.JSON"

function App() {
  return (
    <Employee employees={employeeData.results}/>
  );
}

export default App;
