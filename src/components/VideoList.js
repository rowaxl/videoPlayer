import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        console.log('this.props ', this.props);
        return (
            <div className="ui relaxed aligned divided list">
                {this.props.videos.map(
                    video => <VideoItem detail={video} key={video.id.videoId} />
                )}
            </div>
        );
    }
}

export default VideoList;