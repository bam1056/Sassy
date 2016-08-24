import React, { Component } from 'react'

class Biography extends Component {
  render () {
    return <div className="Biography">
      <h1>Biographical Data</h1>
      <div className="infoCard">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/CindyCrawfordOct09.jpg" alt="cindy2" height="200" width="200"/>
        <ul>
          <li>Name: Cindy Crawford</li>
          <li>D.O.B: 3/5/1975</li>
          <li>Height: 6'3"</li>
          <li>Weight: 125lbs</li>
          <li>Place of Birth: Poland</li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  }
}
export default Biography
