import React, { Component } from 'react';

class VideoListItem extends Component {

    _selectVideo = () => {
        let props = this.props;
        props.onVideoSelect(props.video);
    };

    render() {

        const videoItem = this.props.video,
            imageUrl = videoItem.snippet.thumbnails.default.url;

        return <li onClick={ this._selectVideo } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className='media-object' src={ imageUrl }/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        { videoItem.snippet.title }
                    </div>
                </div>
            </div>
        </li>

    }

}

export default VideoListItem;
