import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from './SearchBar';
import ImageList from "./ImageList";

class App extends React.Component {
    // we start from set a state

    state = { images: [] }

    // Anything that takes time, we put async in front of the method
    onSearchSubmit = async (term) => {
        // get a request from unsplash and put await for the return
        const response = await unsplash.get('/search/photos', {
            params: { query: term },

        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;