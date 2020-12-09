import axios from "axios";

export default class SongsService {
    getSongs(songsPage) {
        return axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=1dfc8a924af95a510e836e699d85bfda&format=json&limit=18&page=${songsPage}`)
    }
    getArtist(artist){
        return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=1dfc8a924af95a510e836e699d85bfda&format=json`)
    }
}
