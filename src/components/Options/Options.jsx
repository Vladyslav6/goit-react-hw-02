import { useState } from "react";

const Options = ({ TestOptions, setTestOptions,testFunk }) => {
  const HandlClickOptions = option =>{
    // setTestOptions({
    //   ...TestOptions,
    //   [option]: TestOptions[option] + 1,
    // });
    if (option === 'good') {
      setTestOptions({
          ...TestOptions,
          good: TestOptions.good + 1,
        });
      }
      if (option === 'neutral') {
        setTestOptions({
            ...TestOptions,
            neutral: TestOptions.neutral + 1,
          });
        }
        if (option === 'bad') {
          setTestOptions({
              ...TestOptions,
              bad: TestOptions.bad + 1,
            });
          }
      // if (option === 'macos') {
      //   setVotingData({
      //     ...votingData,
      //     macos: votingData.macos + 1,
      //   });
      // }
      // if (option === 'linux') {
      //   setVotingData({
      //     ...votingData,
      //     linux: votingData.linux + 1,
      //   });
      // }
  
  // TestOptions.good=TestOptions.good+1
  // setTestOptions2(TestOptions2+1)
  // console.log(TestOptions2)
  
  // console.log(option)
  
  // console.log(TestOptions)
  }
  return (
    <>
      <div>
        <button onClick={()=>HandlClickOptions("good")}>Good</button>
        <button onClick={()=>HandlClickOptions("neutral")}>Neutral</button>
        <button onClick={()=>HandlClickOptions("bad")}>Bad</button>
      </div>
    </>
  );
};
export default Options;
