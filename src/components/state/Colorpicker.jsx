import React, { useState } from "react";

export default function Colorpicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // Red Controls
  const redIncrement = () => {
    if (red < 255 && red > 0) {
      setRed(red + 5);
    } else if (red === 0) {
      setRed(5);
    }
  };
  const redDecrement = () => {
    if (red > 0 && red <= 255) {
      setRed(red - 5);
    }
  };

  const greenIncrement = () => {
    if (green < 255) setGreen(green + 5);
  };
  const greenDecrement = () => {
    if (green > 0) setGreen(green - 5);
  };

  const blueIncrement = () => {
    if (blue < 255) setBlue(blue + 5);
  };
  const blueDecrement = () => {
    if (blue > 0) setBlue(blue - 5);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: "5in",
          height: "4in",
          border: "1px solid black",
        }}
      ></div>
      <p>
        R:{red} G:{green} B:{blue}
      </p>
      <button onClick={redIncrement}>+R</button>
      <button onClick={redDecrement}>-R</button>
      <button onClick={greenIncrement}>+G</button>
      <button onClick={greenDecrement}>-G</button>
      <button onClick={blueIncrement}>+B</button>
      <button onClick={blueDecrement}>-B</button>
    </div>
  );
}
