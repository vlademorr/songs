import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import SearchFilter from "./SearchFilter";
import { searchFilterAction } from "../../actions/searchFilterAction";

const SearchFilterContainer = ({
                                   songsNames,
                                   searchFilterAction
                               }) => {
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        searchFilterAction(selectedValue);
    }, [selectedValue, searchFilterAction]);

    return (
        <SearchFilter
            songsNames={songsNames}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
        />
    );
};

const mapDispatchToProps = {
    searchFilterAction
};

export default connect(null, mapDispatchToProps)(SearchFilterContainer);