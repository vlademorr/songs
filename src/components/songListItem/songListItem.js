import React from "react";
import "./songListItem.css";

const SongListItem = ({song, fetchArtistDetails}) => {
    return (
        <div
            className="song_container"
        >
            <img
                className="song_list_img"
                src={song.image[2]["#text"]}
                alt={song.name}
            />
            <p>{song.name}</p>
            <p className="artist_name" onClick={() => fetchArtistDetails(song.artist.name)}>
                {song.artist.name}
            </p>
            <a href={song.artist.url}>
                on Last.fm
            </a>
        </div>
    );
};

export default SongListItem;