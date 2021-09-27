import React from "react";
import ReactDOM from "react-dom";

// when we use class, we create a class with 1 method that's assigned to it

class App extends React.Component {
    // We have to call a constructor function before anything else!! -- initialize state
    constructor(props) {
        super(props)
        // we use this to make sure that the React.component get called and we have to do it everytime

        // THIS IS THE ONLY TIME we do direct assignment to this.state

        this.state = { lat: null };
        // We call for a current location here in order not to double fetch
        window.navigator.geolocation.getCurrentPosition(
            //  We called setstate!!!
            position => { this.setState({ lat: position.coords.latitude }); },
            err => console.log(err)
        );
    }

    // React says we have tp define render!!
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))