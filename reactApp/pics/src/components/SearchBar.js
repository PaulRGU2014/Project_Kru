import React from "react";

// In this case, we want a class based component
class SearchBar extends React.Component {
    state = { term: '' }


    render() {
        return (<div className='ui segment'>
            <form className='ui form'>
                <div className='field'>
                    <label>Image Search</label>
                    <input type='text'
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })} />
                    {/* we don't put 'onInputChange()' because 
                    we don't want to call when the component is rendered. It's a callback bunction*/}
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;
