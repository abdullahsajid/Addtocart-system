import React from 'react';
import './App.css';
import Main from './Components/Main';
import AllCart from './Components/AllCart'
import { Counter } from './features/counter/Counter';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/addtocart' element={<AllCart/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
