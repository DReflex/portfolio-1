import React from 'react';
import Home from './home/home';
import Todo from './todo/todo';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar/navbar'
// export main to seperate component if?
class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/todo' component={Todo} />
          </Switch>
        </main>
      </div>
    )
  }
}
export default App
