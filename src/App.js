import React from 'react';
import './style.css';
import { TextColor, Switches, Slider } from './Imports';

export default function App(parent, props) {
  return (
    <div>
      <TextColor />
      <Switches />
      <Slider />
    </div>
  );
}
