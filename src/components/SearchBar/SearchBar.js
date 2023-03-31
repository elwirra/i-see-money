import './SearchBar.scss';

function SearchBar() {
  return (
    <div className="searchBar">
        <form>
            <label className="searchBar__label">Enter amount of money to visualise (US Dollars)</label>
            <input className="searchBar__input" />
        </form>
    </div>
  );
}

export default SearchBar;
