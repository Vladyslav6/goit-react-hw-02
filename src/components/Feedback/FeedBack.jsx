const FeedBack = ({ Good, Neutral, Bad }) => {
  const totalFeedback = Good + Neutral + Bad;
  if (totalFeedback >= 1) {
    return (
      <>
        <div>
          <p>Good:{Good}</p>
          <p>Neutral:{Neutral}</p>
          <p>Bad:{Bad}</p>
          <p>Total:{totalFeedback}</p>
        </div>
      </>
    );
  }
};
export default FeedBack;
