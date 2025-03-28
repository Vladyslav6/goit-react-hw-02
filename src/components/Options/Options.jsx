const Options = ({ updatePropFeedback, Total }) => {
  return (
    <>
      <div>
        <button onClick={() => updatePropFeedback("good")}>Good</button>
        <button onClick={() => updatePropFeedback("neutral")}>Neutral</button>
        <button onClick={() => updatePropFeedback("bad")}>Bad</button>
        {Total >= 1 ? (
          <button onClick={() => updatePropFeedback("Reset")}>Reset</button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default Options;
