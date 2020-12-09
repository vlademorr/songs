import React from "react";
import { connect } from "react-redux";
import { fetchArtistDetails } from "../../actions/songsActions";
import SongListItem from "./songListItem";

const SongListItemContainer = ({song, fetchArtistDetails}) => {
    return (
        <SongListItem song={song} fetchArtistDetails={fetchArtistDetails}/>
    );
};

const mapDispatchToProps = {
    fetchArtistDetails
};

export default connect(null, mapDispatchToProps)(SongListItemContainer);