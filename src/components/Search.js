import React, { Component } from 'react';
import searchYouTube from 'youtube-api-search';

const API_KEY = "AIzaSyB3Sd7Re3z0ofRmcAxjsrLTGRORVO554HY";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getMovie(value) {
        searchYouTube({key: API_KEY, maxResults: 10, term: value }, (videos) => {
            this.setState({
                movies: videos
            })
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.getMovie(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.setRequest(this.state.movies);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" placeholder="Youtube search" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

