import React, { useEffect, useState } from "react";
import "./index.css";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { useGetAllModesQuery } from "./store/api/mode";
import { deleteFromArr, clearArr } from "./store/slices/hovered";

import Square from "./components/Square";

function App() {
  //get modes
  useGetAllModesQuery();
  
  //easy normal hard store
  const modes = useAppSelector((state) => state.modes.modes);
  
  //hovered items
  const hovered = useAppSelector((state) => state.hovered.hovered);
  
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState<any>(0);
  
  //condition when square will render
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    //if item square already exists in arr
    hovered?.forEach((item: any) => {
      if (item.hover === false) {
        dispatch(deleteFromArr(item));
      }
    });
  }, [hovered]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): any => {
    if(typeof e.target.value === 'string'){
      setMode(e.target.value);
      setRender(false)
    }
    setMode(e.target.value);
  };

  const renderTable = () => {
    dispatch(clearArr());
    const numberOfSquares = Number(mode);
    setMode(numberOfSquares);
    setRender(true);
  };

  return (
    <div className="wrapper">
      <div className="modes">
        <select onChange={handleChange} value={mode} name="mode">
          <option value={0}>Select mode:</option>
          {modes?.map((item: any, idx: any) => {
            return <option value={item?.field} key={idx+1000}>{item.name}</option>;
          })}
        </select>
        <button type="button" onClick={renderTable}>
          Start
        </button>
      </div>
      <div className="action">
        <div className="table">
          {!render
            ? null
            : new Array(mode)?.fill(mode)?.map((_, idx) => {
                return <Square idx={idx} key={idx+100}/>;
              })}
        </div>
        <div className="hovered-table">
          <h2>Hovered items</h2>
          {hovered?.map((item: any, idx: any) => {
            return (
              <span className="hovered-table-item" key={idx+10}>
                {`row ${item?.row}`} {`col ${item?.col}`}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
