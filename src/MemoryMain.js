import './css/App.css';
import {useState} from 'react'
import {sym,img,dom} from './data'
import Header from './Header'
import Score from './Score';
import Highscore from './Highscore';
import Toggle from './Toggle';
import Cardfield from './Cardfield';
import Footer from './Footer';



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
