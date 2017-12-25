import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class SearchList extends Component {

    render() {
        const opts = {
            height: '160',
            width: '360',
        };
        console.log(this.props.movies);
        const movies = this.props.movies;
        if (this.props.movies) {
            var listItems = movies.map((movie, index) =>
                <li key={index}>
                    <p>{movie.snippet.title}</p>
                    <YouTube
                        videoId={movie.id.videoId}
                        opts={opts}
                        onPlay={()=> {window.location='/movie/$' + movie.id.videoId}}
                    />
                </li>
            );
        }
        // const listItems = movies.map((movie) =>
        //     <li>
        //         {movie}
        //     </li>
        // );
        // console.log(listItems);
        return (
            <ul style={{listStyleType: 'none'}}>
                {listItems}
            </ul>
        );
    }
}

