import React from "react";
import {connect} from "react-redux";
import ArtistDetails from "./artistDetails";

const ArtistDetailsContainer = ({artistDetails, loadingArtistDetails}) => {
    return (
        <ArtistDetails
            artistDetails={artistDetails}
            loadingArtistDetails={loadingArtistDetails}
        />
    );
};

const mapStateToProps = ({artistDetails, loadingArtistDetails}) => {
    return {
        artistDetails,
        loadingArtistDetails
    };
};


export default connect(mapStateToProps)(ArtistDetailsContainer);