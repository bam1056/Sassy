import React, { Component } from 'react'
import Cindy from '../images/cindyCrawford.jpg'

class Home extends Component {
  _navToBio = () => {
    this.props.navigate('bio')
  }
  render () {
    return <div className="Home">
      <div className="Home-Container">
        <aside>
          <ul>
            <li onClick={this._navToBio}>Biography</li>
            <li>Image Gallery</li>
            <li>Wikipedia</li>
            <li>Contact Us</li>
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
