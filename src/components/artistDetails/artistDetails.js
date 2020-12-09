import React  from "react";
import Spinner from "../spinner/spinner";
import "./artistDetails.css";

const ArtistDetails = ({
                              artistDetails,
                              loadingArtistDetails
}) => {
    if (loadingArtistDetails) {
        return <Spinner/>
    }
    if (!artistDetails) {
        return <h4 className="artist_details_help">Choose Artist To See Details</h4>
    }
    const tagsArray = [];
    artistDetails.tags.tag.forEach((item) => {
        const tag = item.name[0].toUpperCase() + item.name.substring(1);
        tagsArray.push(tag)
    });
    return (
        <div className="artist_details_container">
            <h5>{artistDetails.name}</h5>
            <img src={artistDetails.image[2]["#text"]} alt={artistDetails.name}/>
            <h6>Tags:</h6>
            <p>{tagsArray.join(", ")}</p>
            <h6>Artist Bio:</h6>
            <p>{artistDetails.bio.summary.slice(0, artistDetails.bio.summary.indexOf("<"))}</p>
        </div>
    );
};

export default ArtistDetails;