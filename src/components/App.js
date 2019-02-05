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
        this.setState({
            videos: searchResult.data.items,
            selectedVideo: searchResult.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    componentDidMount() {
        this.onSearch('');
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <SearchBar onSubmit={this.onSearch} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
