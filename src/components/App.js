import React from 'react';
import VideoClient from '../api/VideoClient';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
    state = {
        videos: []
    }

    onSearch = async (query) => {
        const searchResult = await VideoClient.get('/search', {
            params: {
                q: query
            }
        });
        this.setState({ videos: searchResult.data.items });
        console.log('this.state.videos: ', this.state.videos);
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <SearchBar onSubmit={this.onSearch} />
                    <div>Search result: {this.state.videos.length} videos</div>
                    <VideoList videos={this.state.videos} />
                </div>
            </div>
        )
    }
}

export default App;
