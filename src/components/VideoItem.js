import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="item video-item">
                <img className="ui image" src={this.props.detail.snippet.thumbnails.medium.url} alt={this.props.detail.snippet.title} />
                <div className="content">
                    <div className="header">{this.props.detail.snippet.title}</div>
                </div>
            </div>
        )
    }
}

export default VideoItem;