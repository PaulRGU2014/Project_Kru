import React from "react";

// In this case, we want a class based component
class SearchBar extends React.Component {
    render() {
        return (<div>
            <form>
                <input type='text' />
            </form>
        </div>);
    }
}

export default SearchBar;
