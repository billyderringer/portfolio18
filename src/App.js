import React, { Component } from 'react'
import './SharedCSS/'
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

class App extends Component {
    render() {
    return (
      <div id="container-main" className="caps">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App
