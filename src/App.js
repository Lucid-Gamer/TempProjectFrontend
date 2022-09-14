import './App.css';
import { Routes , Route } from 'react-router-dom'
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployee from './Components/CreateEmployee';
import HomePage from './Components/HomePage';
import ListEmployees from './Components/ListEmployees';
import EditEmployee from './Components/EditEmployee';
import ListTickets from './Components/ListTickets';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className='container'>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/add-employee' element={<CreateEmployee/>}/>
        <Route path='/employees' element={<ListEmployees/>}/>
        <Route path='/edit-employee/:id' element={<EditEmployee/>}/>
        <Route exact path='/ticket/all' element={<ListTickets/>}/>
        <Route exact path='/login' element={<LoginForm/>}/>
      </Routes>
      </div>
    <FooterComponent/>
    </div>
  );
}

export default App;
