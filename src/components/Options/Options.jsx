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
        <button onClick={testFunk}>Good{Clicks}</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
    </>
  );
};
export default Options;
