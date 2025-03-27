const FeedBack = ({ Good, Neutral, Bad, Total }) => {
  const PositiveOption = Math.round((Good / Total) * 100);

  return (
    <>
      <div>
        <p>Good:{Good}</p>
        <p>Neutral:{Neutral}</p>
        <p>Bad:{Bad}</p>
        <p>Total:{Total}</p>
        {PositiveOption >= 1 ? <p>Positive:{PositiveOption}%</p> : <></>}
      </div>
    </>
  );
};
export default FeedBack;
