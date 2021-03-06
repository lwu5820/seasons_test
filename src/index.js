import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, lon: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setstate !!!
        this.setState({ lat: position.coords.latitude , lon: position.coords.longitude });
       // this.setState({ long: position.coords.longitude });
      },
      err => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {
    return <div> Latitude: {this.state.lat} , Longtitude: {this.state.lon} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
