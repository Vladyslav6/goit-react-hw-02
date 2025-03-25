import { useState } from "react";

const Options = () => {
  const [Clicks, setClicks] = useState(0);
  const handlGoodClicks = () => {
    setClicks(Clicks + 1);
  };
  return (
    <>
      <div>
        <button onClick={handlGoodClicks}>Good{Clicks}</button>
        <button onClick={handlGoodClicks}>Neutral{Clicks}</button>
        <button>Bad</button>
      </div>
    </>
  );
};
export default Options;
