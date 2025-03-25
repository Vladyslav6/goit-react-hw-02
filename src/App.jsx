import Description from "./components/Description/Description";
import FeedBack from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const ObjectOptions = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  return (
    <>
      <Description />
      <Options />
      <FeedBack />
    </>
  );
}

export default App;
