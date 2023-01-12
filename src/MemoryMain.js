import './css/App.css';
import {useState, useEffect} from 'react'
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
        <Score memArray={memArray}/>
        <Highscore memArray={memArray} format={format}/>
        <Toggle format={format} setFormat={setFormat} />
      </div>
      <div className = "gameContainer">
        <Cardfield format={format} memArray={memArray} setMemArray={setMemArray}/>
      </div>
      <Footer />
    </div>
  );
}

export default MemoryMain;
