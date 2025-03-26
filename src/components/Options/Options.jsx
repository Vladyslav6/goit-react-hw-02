import { useState } from "react";

const Options = ({ TestOptions, TesdtOptions,testFunk }) => {
  // console.log(TestOptions);
  const testArgs = { ...TestOptions };
  // console.log(testArgs);
  const [Clicks, setClicks] = useState(0);
  const handlGoodClicks = () => {
    setClicks(Clicks + 1);
  };

  return (
    <>
      <div>
        <button onClick={()=>testFunk("good")}>Good</button>
        <button onClick={()=>testFunk("neutral")}>Neutral</button>
        <button onClick={()=>testFunk("bad")}>Bad</button>
      </div>
    </>
  );
};
export default Options;
