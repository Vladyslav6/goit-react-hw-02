import { use, useEffect, useState } from "react";
import Description from "./components/Description/Description";
import FeedBack from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [allOptions, setAllOptions] = useState(() => {
    const ObjectSave = window.localStorage.getItem("setSaveObject");
    if (ObjectSave !== null) {
      return JSON.parse(ObjectSave);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = allOptions.good + allOptions.neutral + allOptions.bad;

  useEffect(() => {
    window.localStorage.setItem("setSaveObject", JSON.stringify(allOptions), [
      allOptions,
    ]);
  });
  //
  //
  //b
  //
  const updateFeedback = (feedbackType) => {
    setAllOptions({
      ...allOptions,
      [feedbackType]: allOptions[feedbackType] + 1,
    });

    // if (feedbackType === "good") {
    //   setAllOptions({
    //     ...allOptions,
    //     good: allOptions.good + 1,
    //   });
    // }
    // if (feedbackType === "neutral") {
    //   setAllOptions({
    //     ...allOptions,
    //     neutral: allOptions.neutral + 1,
    //   });
    // }
    // if (feedbackType === "bad") {
    //   setAllOptions({
    //     ...allOptions,
    //     bad: allOptions.bad + 1,
    //   });
    // }
    if (feedbackType === "Reset") {
      setAllOptions({
        ...allOptions,
        good: (allOptions.good = 0),
        neutral: (allOptions.neutral = 0),
        bad: (allOptions.bad = 0),
      });
    }
  };
  return (
    <>
      <Description />
      <Options updatePropFeedback={updateFeedback} Total={totalFeedback} />
      {totalFeedback > 0 ? (
        <FeedBack
          Good={allOptions.good}
          Neutral={allOptions.neutral}
          Bad={allOptions.bad}
          Total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
