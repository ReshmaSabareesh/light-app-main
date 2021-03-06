
import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Switch from './components/Switch';

function App() {
  const [value1,setvalue1]=useState('OFF')
  const [value2,setvalue2]=useState('OFF')
  return (
    <div className="App">
      <Header />
      <div className='lightContainer'>
      <Switch isOn={value1} toggle={()=>setvalue1(value1==='OFF'?'ON':'OFF')}/>
      <Switch isOn={value2} toggle={()=>setvalue2(value2==='ON'?'OFF':'ON')}/>
      </div>
    </div>
  );
}

export default App;
