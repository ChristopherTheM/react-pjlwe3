import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '../../Imports';
//This slider should display the value of present slider position as a colorful number

//This is what's displayed in the textbox above the slider
function valuetext(value) {
  return `${value}`;
}

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={1}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
