import React from 'react';

class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        if (!this.props.video) {
            return <div>Loading...</div>
        }

        const videoURL = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoURL} title={this.props.video.snippet.title}/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoDetail;