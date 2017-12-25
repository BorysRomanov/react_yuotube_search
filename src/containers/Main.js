import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../components/Search';
import SearchList from '../components/SearchList';
import * as pageActions from '../actions/PageActions';

class Main extends Component {
    render() {
        const { movies } = this.props;
        const { setRequest } = this.props.pageActions;
        return (
            <div style={{textAlign: 'center'}}>
                <Search  setRequest={setRequest}/>
                <SearchList movies={movies}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
