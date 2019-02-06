import React from 'react';
import VideoClient from '../api/VideoClient';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        pageToken: ''
    }

    onSearch = async (query) => {
        const searchResult = await VideoClient.get('/search', {
            params: {
                q: query
            }
        });

        console.log('searchResult ', searchResult);
        this.setState({
            videos: searchResult.data.items,
            selectedVideo: searchResult.data.items[0],
            pageToken: searchResult.data.nextPageToken
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
                <div className="ui container">
                    <SearchBar onSubmit={this.onSearch} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column" style={{height: "80vh", overflowY: "scroll"}}>
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
