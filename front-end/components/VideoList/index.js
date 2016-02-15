import React, { Component } from 'react';
import VideoListItem from  '../VideoListItem/index';

class VideoList extends Component {

    render() {
        const videoItem = this.props.videos.map(item => {
            return <VideoListItem
                onVideoSelect={ this.props.onVideoSelect }
                key={ item.etag }
                video={ item }
            />
        });

        return <ul className="col-md-4 list-group">
            { videoItem }
        </ul>

    }

}

export default VideoList;
