import React from 'react';
import VideoClient from '../api/VideoClient';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onSearch = async (query) => {
        const searchResult = await VideoClient.get('/search', {
            params: {
                q: query
            }
        });
        this.setState({ videos: searchResult.data.items });
    }

    onVideoSelect = (video) => {
        console.log('app.js onSelectVideo ', video);
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <SearchBar onSubmit={this.onSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
            </div>
        )
    }
}

export default App;
