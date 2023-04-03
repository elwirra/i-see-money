import './Result.scss';
import data from '../../data/data.json';

function Result(amount, type) {
  console.log(amount, type);
  return (
    <div className="result">
      Choosen type is: {amount.type}
      {amount.amount} US Dollars it is {amount.amount / 100} [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅] bills. Stacked one on another it will have {amount.amount * 0.1092/1000} m
      
    </div>
  );
  }
  
  export default Result;