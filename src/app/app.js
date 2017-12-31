import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import Skills from './components/skils';
import Portfolio from './components/portfolio';
import Contact from './components/contact'
// export main to seperate component if?
class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    )
  }
}
export default App
