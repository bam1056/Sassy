import React, { Component } from 'react'
import Cindy from './Images.json'

class Gallery extends Component {
  _goHome = () => {
    this.props.navigate('home')
  }
  render () {
    let images = Cindy.cindy.map((img, index) => {
      return <img className="galImg" src={img} alt="cindyImage" key={index} height="500" width="500"/>
    })
    return <div className="Gallery">
      <div className="CindyGallery">
      {images}
      </div>
      <button onClick={this._goHome}>Click here to return home</button>
    </div>
  }
}
export default Gallery
