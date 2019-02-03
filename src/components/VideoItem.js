import React from 'react';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        console.log(this.props.detail);
        return (
            <div className="item">
                <img className="ui image" src={this.props.detail.snippet.thumbnails.medium.url} alt={this.props.detail.snippet.title} />
                <div className="content">
                    <a className="header">{this.props.detail.snippet.title}</a>
                </div>
            </div>
        )
    }
}

export default VideoItem;