import { use, useState } from "react";
import Description from "./components/Description/Description";
import FeedBack from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  // const [TestOptions, setTestOptions] = useState({
  //   good: 1,
  //   neutral: 3,
  //   bad: 2,
  // });
    const [TestOptions, setTestOptions] = useState({
      good: 1,
      neutral: 3,
      bad: 2,
    });
const HandlClickOptions =()=>{
  console.log("hi")
}
  return (
    <>
      <Description />
      <Options TestOptions={TestOptions} TesdtOptions={setTestOptions} testFunk={HandlClickOptions}/>
      <FeedBack
        Good={TestOptions.good}
        Neutral={TestOptions.neutral}
        Bad={TestOptions.bad}
      />
    </>
  );
}

export default App;
