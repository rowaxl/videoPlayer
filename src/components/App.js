import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        
    }

    onSearch = (query) => {

    }

    render() {
        return (
            <div>
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <SearchBar onSubmit={this.onSearch} />
                </div>
            </div>
        )
    }
}

export default App;
