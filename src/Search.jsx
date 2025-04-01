import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
	const { query, searchFn, showPopularNews, setReadingMode, readingMode } =
		useGlobalContext();
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}>
				<button onClick={() => setReadingMode(!readingMode)}>
					{readingMode ? "Exit Reading Mode" : "Enter Reading Mode"}
				</button>
			</div>
			<h1 className="heading">
				<span className="subText">T</span>ech
				<span className="subText">P</span>ulse
			</h1>

			{!showPopularNews && (
				<form role="search" aria-label="Search articles">
					<div className="search-container">
						<label htmlFor="search-input" className="visually-hidden">
							Search articles
						</label>
						<input
							id="search-input"
							type="search"
							placeholder="Search for articles"
							value={query}
							onChange={(e) => searchFn(e.target.value)}
							aria-label="Search articles"
							autoComplete="off"
						/>
					</div>
				</form>
			)}
		</>
	);
};

export default Search;
