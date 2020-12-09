import React from "react";
import SongsList from "../songsList/songsListContainer";
import ArtistDetails from "../artistDetails/artistDetailsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = () => {
    return (
        <>
            <div className="header">
                <h1 className="title">Songs</h1>
            </div>
            <div className="container">
                <div className="left_side">
                    <SongsList/>
                </div>
                <div className="right_side">
                    <ArtistDetails/>
                </div>
            </div>
        </>
    );
};

export default App;