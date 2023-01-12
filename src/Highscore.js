import React from 'react'
import {useState,useEffect} from 'react'

function Highscore({format,memArray}) {
const [highscore,setHighscore] = useState(0)

if(memArray.length>highscore){
  setHighscore(memArray.length)
}


useEffect(()=>{
setHighscore(0)
},[format])

  return (
    <div>Highscore : {highscore}</div>
  )
}

export default Highscore