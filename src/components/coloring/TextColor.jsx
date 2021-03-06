import React, { useState } from 'react';
import { sha256 } from 'js-sha256';
//This component creates a textbox that takes user input and colors it with hashing
//It returns the colored text as a paragraph in hmtl

export default function TextColor(parent, props) {
  let [data, setData] = useState(null);
  const [color, setColor] = useState(null);

  function getData(val) {
    const newInput = val.target.value;
    setData(newInput);
    const hash = sha256(newInput);
    console.log(hash);
    setColor('#' + hash.substring(0, 6));
  }

  return (
    <div>
      <input onChange={getData} value={data} />{' '}
      <p style={{ color: color }}>{data}</p>
    </div>
  );
}

//I'm experimenting with this in Input.jsx to try and export a variable
