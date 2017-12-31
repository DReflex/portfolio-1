import React from 'react'
import './components.css';
const smoothScroll = require('smoothscroll')


class Home extends React.Component {
  next=()=>{
    smoothScroll(window.innerHeight)
  }
  render(){
    let height = window.innerHeight
    return (
      <div className="home" style={{height: height}}>
        <div className="skew"></div>
        <div className="home-text">
          <div className="developer"><h1>Web</h1><h1>Developer</h1></div>
          <div id="changing" className="changing "><h1 id="str">Inspired by</h1>
          <div className="translate"><span id="perfection">PERFECTION</span></div>

          </div>
          <p className="pop-pop">Developed with passion</p>
        </div>
        <div onClick={this.next} className="next"></div>
      </div>
    )
  }
}


export default Home
