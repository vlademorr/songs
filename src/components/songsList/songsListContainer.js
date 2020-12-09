import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from "../../actions/songsActions";
import SongsList from "./songsList";

const SongsListContainer = ({
                                     loadingSongs,
                                     btnClicks,
                                     songs,
                                     fetchSongs,
                                     songsPage,
                                     searchFilter
}) => {
    useEffect(() => {
        fetchSongs(songsPage);
    }, [btnClicks, fetchSongs, songsPage]);

    return <SongsList songs={songs} loadingSongs={loadingSongs} searchFilter={searchFilter}/>;
};

const mapStateToProps = ({
                             loadingSongs,
                             btnClicks,
                             songs,
                             songsPage,
                             searchFilter
}) => {
    return {
        loadingSongs,
        btnClicks,
        songs,
        songsPage,
        searchFilter
    };
};

const mapDispatchToProps = {
    fetchSongs
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsListContainer);