import React, { FC, useState } from "react";
import "../css/StartupOptions.css";
import { IStartupOptions } from "../interfaces/IStartupOptions";

const StartupOptions: FC<IStartupOptions> = (props) => {
  const [height, setHeight] = useState(16);
  const [width, setWidth] = useState(16);

  return (
    <div>
      <h1>Set grid dimensions</h1>
      <div>
        <label>Height</label>
        <input
          name="height"
          type="number"
          value={height}
          onChange={(e) => {
            setHeight(parseInt(e.target.value));
            props.updateHeight(parseInt(e.target.value))
        }}
        />
      </div>
      <div>
        <label>Width</label>
        <input
          name="width"
          type="number"
          value={width}
          onChange={(e) => {
            setWidth(parseInt(e.target.value))
            props.updateWidth(parseInt(e.target.value));
        }}
        />
      </div>

      <button onClick={() => props.updateShowOptions(false)}>Start Drawing!</button>
    </div>
  );
};

export default StartupOptions;
