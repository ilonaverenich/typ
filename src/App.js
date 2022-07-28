import './App.less';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './Components/Login';
import Main from './Components/Main';
import Test from './Components/Test';


function App() {
  return (
    <div className="wrapper">
     {/*  <Test/> */}
       <BrowserRouter>
      <Routes>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
      
      </BrowserRouter> 

    </div>
  );
}

export default App;
