import { addToArr } from "../../store/slices/hovered";
import { useAppDispatch } from "../../store/hooks";
import "./style.css";
import { useState } from "react";

function Square({ idx }: any) {
  const [hover, setHover] = useState<boolean>(false)

  const dispatch = useAppDispatch();

  const handleClick = (a: any) => {
    //round numbers to 5 - 10, for exmp 11 will be rounded to 15, 16 to 20
    let c = a;
    let b = a % 5;
    b && (a = (a - b + 5));

    setHover(!hover)

    dispatch(addToArr(
      {
        id: idx+1,
        row: a/5,
        col: c,
        hover: !hover
      },
    ))
  };

  return <div className={`square ${hover ? 'hovered' : ''}`} onMouseEnter={() => handleClick(idx+1)}></div>;
}

export default Square;
