import SongsService from "../services/songs-service";

const { getSongs, getArtist } = new SongsService();

const fetchSongs = (songsPage) => dispatch =>{
    if(songsPage === 1){
        dispatch(getSongsRequest());
    }
    getSongs(songsPage)
        .then(({ data }) => {dispatch(getSongsSuccessAction(data))})
        .catch(err => dispatch(getSongsFailureAction(err)))
};

const getSongsRequest = () => {
    return {
        type: "GET_SONGS_REQUEST"
    }
};

const getSongsSuccessAction = songs => {
    return {
        type: "GET_SONGS_SUCCESS",
        payload: songs
    };
};

const getSongsFailureAction = error => {
    return {
        type: "GET_SONGS_FAILURE",
        payload: error
    };
};

const fetchArtistDetails = (artist) => dispatch =>{
    dispatch(getArtistDetailsRequest());
    getArtist(artist)
        .then(({ data }) => {dispatch(getArtistSuccess(data))})
        .catch(err => dispatch(getArtistDetailsFailure(err)))
};

const getArtistDetailsRequest = () => {
    return {
        type: "GET_ARTIST_DETAILS_REQUEST"
    }
};

const getArtistSuccess = artist => {
    return {
        type: "GET_ARTIST_DETAILS_SUCCESS",
        payload: artist
    };
};

const getArtistDetailsFailure = error => {
    return {
        type: "GET_ARTIST_DETAILS_FAILURE",
        payload: error
    };
};
export {
    fetchSongs,
    fetchArtistDetails
}