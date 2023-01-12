//creates random array of numbers from 1-17//

export default function randomizer () {
  let array = []
  let set = new Set
  const genRandom = () => {return Math.ceil(Math.random()*17)}

  while(set.size<17){
   
    let random = genRandom();
    set.has(random)?random=genRandom():set.add(random)
    
  }

  set.forEach(item=>array.push(item))

  return array
}


