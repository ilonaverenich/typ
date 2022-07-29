import './App.less';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './Components/Login';
import Main from './Components/Main';
import Module from './Components/Modules/Module';


function App() {
  return (
    <div className="wrapper">
       <BrowserRouter>
      <Routes>  
            <Route path='/login' element={<Login/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/module' element={<Module/>}/>
      </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
