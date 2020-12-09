import React from 'react';
import { connect } from 'react-redux';
import { loadMore, loadingIndicatorLoadMore } from "../../actions/loadMoreBtnActions";
import BtnLoadMore from "./btnLoadMore";

const BtnLoadMoreContainer = ({
                                  loadMore,
                                  loadingBtnLoadMore,
                                  loadingIndicatorLoadMore
}) => {
    return(
        <BtnLoadMore
            loadMore={loadMore}
            loadingBtnLoadMore={loadingBtnLoadMore}
            loadingIndicatorLoadMore={loadingIndicatorLoadMore}
        />
    )



};

const mapStateToProps = ({loadingBtnLoadMore}) => {
    return {
        loadingBtnLoadMore
    };
};

const mapDispatchToProps = {
    loadMore,
    loadingIndicatorLoadMore
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnLoadMoreContainer);