import React from 'react'
import { useGlobalContext } from './Context'


const Search = () => {
  const { query, searchFn, showPopularNews, setReadingMode, readingMode } = useGlobalContext();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <button
          onClick={() => setReadingMode(!readingMode)}
        >
          {readingMode ? "Exit Reading Mode" : "Enter Reading Mode"}
        </button>
      </div>
      <h1 className="heading">
        <span className='subText'>T</span>ech
        <span className='subText'>P</span>ulse
      </h1>

      {!showPopularNews &&
        <form className="search-form">
          <div className="search-container">
            <label htmlFor="search-input" className="search-label">
              Search for articles:
            </label>
            <input type="text" placeholder="search here"
              value={query}
              onChange={(e) => searchFn(e.target.value)}
            />
          </div>
        </form>
      }
    </>


  )
}

export default Search