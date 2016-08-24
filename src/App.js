import React from 'react'
import Home from './Home'
import Biography from './Biography'
import Gallery from './Gallery'
import Footer from './Footer'
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
      case 'home': screen = <Home navigate={this._navigateTo}/>
        break
      case 'bio': screen = <Biography navigate={this._navigateTo} />
        break
      case 'gallery': screen = <Gallery navigate={this._navigateTo} />
        break
    }
    return (
      <div>
        {screen}
        <Footer />
      </div>

    )
  }
}
export default App
