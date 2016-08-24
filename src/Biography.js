import React, { Component } from 'react'

class Biography extends Component {
  _goHome = () => {
    this.props.navigate('home')
  }
  render () {
    return <div className="Biography">
      <h1>Biographical Data</h1>
      <button onClick={this._goHome}>Click here to go home</button>
      <div className="infoCard">
        <img className="cindy2" src="https://upload.wikimedia.org/wikipedia/commons/9/92/CindyCrawfordOct09.jpg" alt="cindy2" height="300" width="300" />
        <ul>
          <li>Name: Cindy Crawford</li>
          <li>D.O.B: 3/5/1975</li>
          <li>Height: 6'3"</li>
          <li>Place of Birth: Poland</li>
          <li>Knickname: Pinky</li>
          <li>Favorite Animal: Aardvark</li>
          <li>Favorite Color: Pink</li>
          <li>Favorite Quote: "Four score and seven years ago..."</li>
        </ul>
        <img src="http://mylittlepony.hasbro.com/images/spring2016/ponies/char_pinkiepie.png" alt="my little pony" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  }
}
export default Biography
