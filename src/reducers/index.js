const initialState = {
    songs: [],
    songsPage: 1,
    artistDetails: null,
    loadingBtnLoadMore: true,
    loadingSongs: true,
    loadingArtistDetails: false,
    error: null,
    searchFilter: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_SONGS_REQUEST":
            return {
                ...state,
                error: null,
                loadingSongs: true
            };
        case "GET_SONGS_SUCCESS":
            return {
                ...state,
                loadingSongs: false,
                loadingBtnLoadMore: false,
                songs: state.songs.concat(action.payload.tracks.track)
            };
        case "GET_SONGS_FAILURE":
            return {
                ...state,
                loadingSongs: false,
                error: action.payload
            };
        case "GET_ARTIST_DETAILS_REQUEST":
            return {
                ...state,
                error: null,
                loadingArtistDetails: true
            };

        case "GET_ARTIST_DETAILS_SUCCESS":
            return {
                ...state,
                loadingArtistDetails: false,
                artistDetails: action.payload.artist
            };

        case "GET_ARTIST_DETAILS_FAILURE":
            return {
                ...state,
                loadingArtistDetails: false,
                error: action.payload
            };
        case "LOAD_MORE_ITEMS":
            return {
                ...state,
                songsPage: state.songsPage + 1
            };
        case "LOADING_INDICATOR_LOAD_MORE":
            return {
                ...state,
                loadingBtnLoadMore: true
            };
        case "SEARCH_FILTER":
        return {
            ...state,
            searchFilter: action.payload
        };
        default:
            return state;
    }
};

export default reducer;
