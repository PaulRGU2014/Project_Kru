import React from "react";
import ReactDOM from "react-dom";

// when we use class, we create a class with 1 method that's assigned to it

class App extends React.Component {
    // We have to call a constructor function before anything else!! -- initialize state
    constructor(props) {
        super(props)
        // we use this to make sure that the React.component get called and we have to do it everytime

        // THIS IS THE ONLY TIME we do direct assignment to this.state

        this.state = { lat: null, errorMessage: '' };
        // We call for a current location here in order not to double fetch
        window.navigator.geolocation.getCurrentPosition(
            //  We called setstate!!!
            position => { this.setState({ lat: position.coords.latitude }); },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    // React says we have to define render!!. In this case, we're using conditioning rendering
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Lattitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))