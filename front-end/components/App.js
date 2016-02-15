import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar/index';
import VideoList from './VideoList/index';
import YTSearch from 'youtube-api-search';
import VideoDetail from './VideoDetail/index';

const API_KEY = 'AIzaSyDmbw1I5gzelxHOjCRTMDkUJK27hcNVn1k';

class App extends Component {

    constructor(props) {

        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this._videoSearch('Путин');

    }

    _videoSearch = (term) => {

        YTSearch({ key: API_KEY, term: term }, (videos) => {

            let selectedVideo = videos[0];
            this.setState({
                videos,
                selectedVideo
            });

        });

    };

    render() {

        const _videoSearch = _.debounce(this._videoSearch, 300);
        return (
            <main>
                <SearchBar onSearchTerm={ _videoSearch }/>
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                    videos={ this.state.videos }/>
            </main>
        );

    }
}

export default App;
