import React from 'react'

function Toggle({format,setFormat}) {
  const toggleHandler = (e) => {
    setFormat(e.target.value)
    
  }
  return (
    <div>
      
 <form>
        <input type="radio"  value='sym' checked={format==='sym'} onChange={toggleHandler}/> SYMBOL
        <input type="radio" value='img' checked={format==='img'} onChange={toggleHandler}/> IMAGE
        <input type="radio" value='dom' checked={format==='dom'} onChange={toggleHandler}/> DOMINO
</form>

      
    </div>
  )
}

export default Toggle