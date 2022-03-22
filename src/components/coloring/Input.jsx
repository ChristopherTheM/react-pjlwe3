//This component should be able to handle inputs from a user.
//The output should be the input value with a color assigned to it with hashing.
//I want the output to be in the form of a variable that I can use anywhere.

import React, { useState } from 'react';
import { sha256 } from 'js-sha256';

export default function Input() {
  let [data, setData] = useState(null);
  const [color, setColor] = useState(null);

  function getData(val) {
    const newInput = val.target.value;
    setData(newInput);
    const hash = sha256(newInput);
    setColor('#' + hash.substring(0, 6));
  }

  //Instead of a textbox to receive data, this will be slider input.
  //This returns the data as an h2 tag
  // return (
  //   <div>
  //     <input onChange={getData} value={data} />{' '}
  //     <p style={{ color: color }}>{data}</p>
  //   </div>
  // );

  //I don't think I'm returning an acutal variable to use elsewhere, need to come back to this.
  return data;
}
