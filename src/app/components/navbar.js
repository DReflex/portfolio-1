import React from 'react';
import './navbar.css';
import {nav} from '../../actions/index'
import {connect} from 'react-redux';
import smoothScroll from 'smoothscroll'

// fix navbar this is just display
class Navbar extends React.Component{
  constructor(){
    super();

    this.handleScroll= this.handleScroll.bind(this)
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }
  scrollTo = (where) =>{
    let portfolio = document.getElementById('portfolio').offsetTop
    let contact = document.getElementById('contact').offsetTop

    switch(where){
      case "home":
      return smoothScroll(0)
      case "skills":
      return smoothScroll(window.innerHeight)
      case "portfolio":
      return smoothScroll(portfolio)
      case "contact":
      return smoothScroll(contact)
      default:
      return console.log("ERROR");
    }
  }
  handleScroll =() =>{
    let height= window.scrollY
    var background = (height > window.innerHeight/2)? 'rgb(0, 16, 62)'
    : 'transparent';
    this.props.dispatch(nav(background))
  }
  toggleMenu =() =>{
    let menu = document.getElementById('menu')
    menu.style.transform? menu.style.transform = "" : menu.style.transform ="none";
  }
  render(){
    return(
      <div style={{background: this.props.nav.nav}} className="nav">
        <div className="links">
          <ul id="menu">
            <li onClick={()=>this.scrollTo('home')}>Home</li>
            <li onClick={()=>this.scrollTo('skills')}>Skills</li>
            <li onClick={()=>this.scrollTo('portfolio')}>Portfolio</li>
            <li onClick={()=>this.scrollTo('contact')}>Contact</li>
          </ul>
        </div>
        <div className="burger">
          <input onClick={this.toggleMenu} type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}
const state = (state) =>{
  return{
    nav: state.State
  }
}
Navbar = connect(state)(Navbar)
export default Navbar
