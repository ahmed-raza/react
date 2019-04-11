import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {  
  state = { late: null, lng: null, errMessage: '' }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
      err => this.setState({ errMessage: err.message })
    )
  }
  renderContent() {
    if(this.state.errMessage && !this.state.lat) {
      return <h2>Error: {this.state.errMessage}</h2>
    }
    if(!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please accept the location request" />
  }
  render() {
    return (
      <div className="border red">{ this.renderContent() }</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
