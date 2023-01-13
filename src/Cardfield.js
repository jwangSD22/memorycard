import React from "react";
import { useEffect } from "react";
import randomizer from "./randomizer";
import { sym, img, dom } from "./data";

function Cardfield({ format, setMemArray, memArray }) {
  let thisFormat = () => {
    if (format === "sym") {
      return sym;
    }
    if (format === "img") {
      return img;
    }
    if (format === "dom") {
      return dom;
    }
  };
  const randomArray = randomizer();

  const clickHandler = (e) => {
    let num = e.target.id;
    for (let item of memArray) {
      if (item === num) {
        return setMemArray([]);
      }
    }
    setMemArray([...memArray, num]);
  };

  useEffect(() => {
    setMemArray([]);
  }, [format,setMemArray]);

  if (memArray.length === 17) {
    return <div>YOU WIN! Try another format!</div>;
  }

  return (
    <>
      {randomArray.map((item) => (
        <div key={item}>
          <img
            id={item}
            onClick={clickHandler}
            className="card"
            src={thisFormat()[item]}
            alt={thisFormat()+item}
          ></img>
        </div>
      ))}
    </>
  );
}

export default Cardfield;
