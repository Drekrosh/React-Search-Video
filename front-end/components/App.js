import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar/index';
import VideoList from './VideoList/index';
import VideoDetail from './VideoDetail/index';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
    }


    render() {

        return (
            <main>
                <SearchBar/>
                <VideoDetail/>
                <VideoList/>
            </main>
        );

    }
}

export default App;