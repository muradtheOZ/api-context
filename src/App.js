import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import { createContext, useState } from 'react';
const categoryContext = createContext();

function App() {
  const[count,setCount]=useState(0)
  return (
    <div style={{textAlign: 'center'}} >
     <Header count ={count} setCount ={setCount}/>
     <Home/>
     <Shipment count={count}/>
    </div>
  );
}

export default App;
