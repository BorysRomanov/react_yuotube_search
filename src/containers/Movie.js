import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class Movie extends Component {
    render() {
        console.log(this.props.location.pathname.split('$')[1]);
        var videoId = this.props.location.pathname.split('$')[1];
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };
        return (
            <div style={{textAlign: 'center'}}>
                <YouTube
                    videoId={videoId}
                    opts={opts}
                />
            </div>
        );
    }
}
