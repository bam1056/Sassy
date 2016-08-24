import React from 'react'
import Home from './Home'
import Biography from './Biography'
import './style.sass'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'home'
    }
  }

  _navigateTo = (scr) => {
    this.setState({ currentScreen: scr })
  }

  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'home': return <Home navigate={this._navigateTo}/>
        break
      case 'bio': return <Biography navigate={this._navigateTo} />
        break
      default: return <Home navigate={this._navigateTo} />
    }
    return <div className="App">
      {screen}
    </div>
  }
}
export default App
