import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = { query: '' };

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                            onChange={ e => this.setState({ query: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;