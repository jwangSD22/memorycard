import './App.css';
import {useState} from 'react'
import {sym,img,dom} from './data'



function MemoryMain() {
  const [format,setFormat] = useState('sym')
  const [memArray, setMemArray] = useState([])
  
  return (
    <div className="App">
      <Header />
      <div className = "dataBar">
        <Score />
        <Highscore />
        <Toggle />
      </div>
      <div className = "gameContainer">
        <Cardfield />
      </div>
      <Footer />
    </div>
  );
}

export default MemoryMain;
