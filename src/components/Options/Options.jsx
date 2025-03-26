import { useState } from "react";

const Options = ({ updatePropFeedback}) => {
  // const updateFeedback = feedbackType =>{
  //   // setTestOptions({
  //   //   ...TestOptions,
  //   //   [option]: TestOptions[option] + 1,
  //   // });
    
  //   if (feedbackType === 'good') {
  //     setAllOptions({
  //         ...allOptions,
  //         good: allOptions.good + 1,
  //       });
  //     }
  //     if (feedbackType === 'neutral') {
  //       setAllOptions({
  //           ...allOptions,
  //           neutral: allOptions.neutral + 1,
  //         });
  //       }
  //       if (feedbackType === 'bad') {
  //         setAllOptions({
  //             ...allOptions,
  //             bad: allOptions.bad + 1,
  //           });
  //         }
  // }
  return (
    <>
      <div>
        <button onClick={()=>updatePropFeedback("good")}>Good</button>
        <button onClick={()=>updatePropFeedback("neutral")}>Neutral</button>
        <button onClick={()=>updatePropFeedback("bad")}>Bad</button>
      </div>
    </>
  );
};
export default Options;
