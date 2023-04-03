import './App.scss';
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Result from './components/Result/Result';

function App() {
  const [amount, setAmount] = useState();
  const handleSubmit = (amount) => {
      const result = amount;

      setAmount(amount);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit}/>
      <Result amount={amount} />
      Credits: 
      <a href="https://www.freepik.com/free-vector/golden-coin-cartoon-style-isolated-white-background_18181988.htm#query=one%20dollar&position=5&from_view=keyword&track=ais">Coin image by brgfx</a> on Freepik
      <a href="https://www.freepik.com/free-vector/dollar-money_40109697.htm#query=one%20dollar%20bill&position=7&from_view=search&track=ais">1 Dollar bill image by Sicily87</a> on Freepik
    </div>
  );
}

export default App;
