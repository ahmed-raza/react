import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [], load: 'none' }
  onSearchSubmit = async term => {
    this.setState({ load: 'block' })
    const response = await unsplash.get('/search/photos', {
      params: {query: term}
    })
    this.setState({ images: response.data.results, load: 'none' })
  }
  render() {
    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <div style={{ display : this.state.load }} className="ui active dimmer">
            <div className="ui loader"></div>
          </div>
          <ImageList images={this.state.images} />
        </div>
      )
  }
}

export default App