import React, {useState} from 'react';
import './style.css';

export default function App() {
  const names = [];
  const [data, setData]=useState(null)
  const [print, setPrint]=useState(false)
  
  function getData(val){
    setData(val.target.value)
    setPrint(false)
    console.log(val.target.value);
  }

  names.push(data);
 
 return(
    
<div>

  
      <h1>Hello World!</h1>
      <form>
        {' '}
        First Name : <input type="text" name="Fname" onChange={getData}></input>
        <button onClick={()=> setPrint(true)} >Click Me!</button>
      </form>

      <p>
        I need to create a text box that takes user input in the form of text.<br /> -
        Output in large font and a unique color, keeping that color with word
        combo.<br /> - So "dave" is red, "table" is orange type thing. Deterministic
        function.
      </p>
      <br />
      <ul>
      {
        print?
        <p>{names}</p>
        :null
      }
      </ul>
      
    </div>
  );
}
