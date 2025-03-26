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
//     const [TestOptions, setTestOptions] = useState({
//       good: 1,
//       neutral: 3,
//       bad: 2,
//     });
//     const [TestOptions2, setTestOptions2] = useState(0);
// const HandlClickOptions =()=>{
//   // TestOptions.good=TestOptions.good+1
//   setTestOptions2(TestOptions2+1)
//   console.log(TestOptions2)
// }
const [allOptions, setAllOptions] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
});

const updateFeedback = feedbackType =>{
  // setTestOptions({
  //   ...TestOptions,
  //   [allOptions]: TestOptions[allOptions] + 1,
  // });
  
  if (feedbackType === 'good') {
    setAllOptions({
        ...allOptions,
        good: allOptions.good + 1,
      });
    }
    if (feedbackType === 'neutral') {
      setAllOptions({
          ...allOptions,
          neutral: allOptions.neutral + 1,
        });
      }
      if (feedbackType === 'bad') {
        setAllOptions({
            ...allOptions,
            bad: allOptions.bad + 1,
          });
        }
}
  return (
    <>
      <Description />
      {/* <Options allOptions={allOptions} setAllOptions={setAllOptions} /> */}
      <Options updatePropFeedback={updateFeedback}/>
      <FeedBack
        Good={allOptions.good}
        Neutral={allOptions.neutral}
        Bad={allOptions.bad}
      />
    </>
  );
}

export default App;
