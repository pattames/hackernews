export default function SearchBar({ userInput, setUserInput }) {
  return (
    <>
      <form action="">
        <label htmlFor="searchbar">
          Searchbar
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
