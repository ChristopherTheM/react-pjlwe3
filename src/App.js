import React from 'react';
import './style.css';
import TextColor from './components/coloring/TextColor';
import { Slider, Switch } from '@mui/material';

export default function App(parent, props) {
  return (
    <div>
      <TextColor />
      <Switch />
      <Slider />
    </div>
  );
}