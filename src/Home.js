import React, { Component } from 'react'
import Cindy from '../images/cindyCrawford.jpg'
import Footer from './Footer'

class Home extends Component {
  _navToBio = () => {
    this.props.navigate('bio')
  }
  _navToGal = () => {
    this.props.navigate('gallery')
  }
  render () {
    return <div className="Home">
      <div className="Home-Container">
        <aside>
          <ul>
            <li onClick={this._navToBio}>Biography</li>
            <li onClick={this._navToGal}>Image Gallery</li>
            <li><a href="https://en.wikipedia.org/wiki/Cindy_Crawford">Wikipedia Link</a></li>
          </ul>
        </aside>
        <div className="centralImage">
          <h1>I Love Cindy Crawford</h1>
          <div className="cindySparkleBox">
            <img className="spark" src="https://media.giphy.com/media/e0x1ctKBmQMSc/giphy.gif" alt="sparkle" />
            <img className="cindy"src={Cindy} alt="Cindy Crawford" />
          </div>
        </div>
      </div>
    </div>
  }
}
export default Home
