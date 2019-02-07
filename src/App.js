import React from 'react'
import './SharedCSS/'
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

function App(props) {
  return (
    <div id="container-main">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
