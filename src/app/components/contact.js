import React from 'react';
import {connect} from 'react-redux'
import * as query from '../../actions/index'
import './contact.css';

class Contact extends React.Component{
  componentDidMount(){
    this.props.dispatch(query.queryReset())
  }
  handleChange =(e,type)=>{
    let value = e.target.value
    this.props.dispatch(query.error(false))
    switch(type){
      case "from":
      return this.props.dispatch(query.queryFrom(value))
      case "subject":
      return this.props.dispatch(query.querySubject(value))
      case "text":
      return this.props.dispatch(query.queryText(value))
      default:
      return console.log("error")
    }
    this.props.dispatch(query.queryReset())
  }
  handleSend = () =>{
    if(this.props.form.from == false || this.props.form.subject == false || this.props.form.text == false){
      this.props.dispatch(query.error(true))
    }else{
      let form = this.props.form
      console.log("sending");
      fetch('/api/mail',{
        method: 'POST',
        mode: "CORS",
        body: JSON.stringify({
          from: form.from,
          subject: form.subject,
          text: form.text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      this.props.dispatch(query.queryReset())
    }

  }

  render(){
    let height = window.innerHeight -100;
    let form = this.props.form;
    let error = this.props.state.error? '3px solid rgb(159, 0, 43)': "none"
    return(
      <div id="contact" style={{height:height}} className="home Contact">
        <div className="skew1"></div>
        <div className="con-head">
          <div className="cube"></div>
          <h1>Contact</h1>
          <img className="profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
        </div>
        <div className="con-body">
          <a className="a" target="_blank" href="https://github.com/DReflex">
            <div></div>
            <h3>GitHub</h3>
          </a>
          <h4>vatraisreflex@gmail.com || vatroslav.puncer@outlook.com</h4>
          <div className="form">
            <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "from")} value={form.from} placeholder="your e-mail: " type="email"/></div>
            <div className="area"><input style={{border: error}} onChange={(e)=>this.handleChange(e, "subject")} value={form.subject} placeholder="Subject: " type="text"/></div>
            <div className="area"><textarea style={{border: error}} onChange={(e)=>this.handleChange(e, "text")} value={form.text} placeholder="Text" type="text"/></div>
            <button className="save" onClick={this.handleSend}> <i className="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
          </div>

        </div>

      </div>
    )
  }
}
const store = (store) =>{
  return{
    form:store.form,
    state: store.State
  }
}
Contact = connect(store)(Contact)

export default Contact
