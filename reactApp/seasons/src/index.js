import React from "react";
import ReactDOM from "react-dom";

// when we use class, we create a class with 1 method that's assigned to it

class App extends React.Component {
    // We have to call a constructor function before anything else!! -- initialize state
    constructor(props) {
        super(props)
        // we use this to make sure that the React.component get called and we have to do it everytime

        this.state = { lat: null };
    }

    // React says we have tp define render!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))