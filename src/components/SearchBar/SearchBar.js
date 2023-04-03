import './SearchBar.scss';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [amount, setAmount] = useState('100000');
  const [type, setType] = useState('coin');

  const typeOptions =  [
    {
      label: "1 Dollar coins",
      value: "coin",
    },
    {
      label: "1 Dollar bills",
      value: "1$bill",
    },
    {
      label: "100 Dollar bills",
      value: "100$bill",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(amount, type);
  };

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  }

  const handleSelectChange = (event) => {
    setType(event.target.value);
  }

  return (
    <div className="searchBar">
        <form onSubmit={handleSubmit}>
            <label className="searchBar__label">Enter amount of money to visualise (US Dollars)</label>
            <input value={amount} 
                   onChange={handleInputChange} 
                   className="searchBar__input" />

            <select value={type}
                    onChange={handleSelectChange} 
                    className="searchBar__select">
                {typeOptions.map((option) => (
                  <option key={option.value} 
                          value={option.value}>
                            {option.label}
                  </option>
                ))}
            </select>

            <button className="searchBar__button">Visualise</button>
        </form>
    </div>
  );
}

export default SearchBar;

