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
const [TestOptions, setTestOptions] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
});

// const HandlClickOptions = option =>{
//   // setTestOptions({
//   //   ...TestOptions,
//   //   [option]: TestOptions[option] + 1,
//   // });
//   if (option === 'good') {
//     setTestOptions({
//         ...TestOptions,
//         good: TestOptions.good + 1,
//       });
//     }
//     if (option === 'neutral') {
//       setTestOptions({
//           ...TestOptions,
//           neutral: TestOptions.neutral + 1,
//         });
//       }
//       if (option === 'bad') {
//         setTestOptions({
//             ...TestOptions,
//             bad: TestOptions.bad + 1,
//           });
//         }
//     // if (option === 'macos') {
//     //   setVotingData({
//     //     ...votingData,
//     //     macos: votingData.macos + 1,
//     //   });
//     // }
//     // if (option === 'linux') {
//     //   setVotingData({
//     //     ...votingData,
//     //     linux: votingData.linux + 1,
//     //   });
//     // }

// // TestOptions.good=TestOptions.good+1
// // setTestOptions2(TestOptions2+1)
// // console.log(TestOptions2)

// console.log(option)

// console.log(TestOptions)
// }
  return (
    <>
      <Description />
      <Options TestOptions={TestOptions} setTestOptions={setTestOptions} />
      <FeedBack
        Good={TestOptions.good}
        Neutral={TestOptions.neutral}
        Bad={TestOptions.bad}
      />
    </>
  );
}

export default App;
