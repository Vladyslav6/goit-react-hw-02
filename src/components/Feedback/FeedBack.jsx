const FeedBack = ({ Good, Neutral, Bad, Total,PositiveOpt }) => {
 

  return (
    <>
      <div>
        <p>Good:{Good}</p>
        <p>Neutral:{Neutral}</p>
        <p>Bad:{Bad}</p>
        <p>Total:{Total}</p>
        {PositiveOpt >= 1 ? <p>Positive:{PositiveOpt}%</p> : <></>}
      </div>
    </>
  );
};
export default FeedBack;
