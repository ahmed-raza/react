import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {  
  constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      err => {
        this.setState({ errMessage: err.message })
      }
    )
  }
  
  render() {
    if(this.state.errMessage && !this.state.lat) {
      return <h2>Error: {this.state.errMessage}</h2>
    }
    if(!this.state.errMessage && this.state.lat) {
      return <h2>Latitude: {this.state.lat}</h2>
    }
    return <h2>Latitude: Loading...</h2>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);