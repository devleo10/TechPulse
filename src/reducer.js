const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            };
        case "GET_POPULAR_NEWS":
            return {
                ...state,
                popularNews: action.payload,
                isLoading: false,
            };
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload,
            };
        case "NEXT_PAGE":
            let nextPage = state.page + 1;
            if (nextPage >= state.nbPages) {
                nextPage = 0; // Reset to 0 if the page exceeds the total number of pages
            }
            return {
                ...state,
                page: nextPage,
            };
        case "PREV_PAGE":
            let prevPage = state.page;
            if (prevPage <= 0) {
                prevPage = 0;
            } else {
                prevPage = prevPage - 1;
            }
            return {
                ...state,
                page: prevPage,
            };
        case "TOGGLE_READING_MODE":
            return { ...state, readingMode: action.payload };

        case "SET_FONT_SIZE":
            return { ...state, fontSize: action.payload };
        default:
            return state;
    }
};

export default reducer;


