import React, { useState } from 'react';
import { sha256 } from 'js-sha256';

export default function App() {
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
      <input onChange={getData} /> <p style={{ color: color }}>{data}</p>
    </div>
  );
}
