import React from 'react';
import SongListItem from "../songListItem/songListItemContainer";
import BtnLoadMore from "../buttons/btnLoadMoreContainer";
import SearchFilter from "../../components/searchFilter/SearchFilterContainer";
import {Row, Col} from "react-bootstrap";
import Spinner from "../spinner/spinner";
import "./songsList.css";

const SongsList = ({songs, loadingSongs, searchFilter }) => {
    if (loadingSongs) {
        return <Spinner/>
    }
    const filteredBySearchSongs = songs
        .filter(({name}) => name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1);
    return (
        <>
            <div className="filter_container">
                <SearchFilter songsNames={songs.map(({name}) => name)} />
            </div>
            <Row as="ul" className="songs_list">
                {
                    filteredBySearchSongs.map((song) => {
                        return (
                            <Col as="li" xl={4} lg={6} md={6} sm={12} xs={12} key={song.name}>
                                <SongListItem song={song}/>
                            </Col>
                        )
                    })
                }
            </Row>
            <BtnLoadMore/>
        </>
    );
};

export default SongsList;