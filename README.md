# Basic Mern

This is basic setup for MERN stack(MongoDB, Express, React, Node.js)
It focuses on getting started quickly and with minimum confusion.
Goal of back-end intro is to get you started with creating API, using API calls, MongoDB, CRUD operations, React and Redux,
Heroku and Glitch deployment.

## Prerequisites

Local Development:

* Node nad npm [Node.js](https://nodejs.org/en/)
* MongoDB [MongoDB](https://www.mongodb.com/download-center?ct=false#community)
* mlab for database hosting [mLab](https://mlab.com/)
* Robo 3T (monogDb GUI) [Robomongo] (https://robomongo.org/)
* Postman (GUI for CRUD calls) [Postman](https://www.getpostman.com/)
* React CLI (npm install -g create-react-app) [react](https://reactjs.org/docs/installation.html#creating-a-new-application)

Helpful links (guides) on MERN:
* Back-End MongoDB, Express, Node by The Net Ninja [playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8)
* React getting started by The Net Ninja [playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i0_2FF-WhtRIfIJ1lXlTZR)
* Getting Started with Redux on Egghead.io by Dan Abramov [playlist](https://egghead.io/courses/getting-started-with-redux)

## Quick Preview
This basic fullstack app is build with React-Redux on frontend and express server running in backend. In the development they are running on separate ports and they communicate using proxy.

file separation:
* React-Redux (create-react-app):
   * Public
   * src
* Node.js - Express:
    * server
## Server
we use express to serve up files, make https requests to API's and connect our database.
its simpel to use and set up.
Express itself is separated in tree files mondels/model.js,
routes/api.js and index.js

#### index.js is main file that inits the express app. What we do here ?
* import library's like express,mongoose,path and body-parser.
````javascript
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
````

* start app using express, set the port
````javascript
const app =express();
app.set('port', (process.env.PORT || 4000));

````
* connect to MongoDB
````javascript
var promise = mongoose.connect('mongodb://localhost/todos', {
  useMongoClient: true,
  /* other options */
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
````
* connect with routes and handle errors
````javascript
app.use('/api', require('./routes/api'));
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message})
});
````
* app listener
````javascript
app.listen(app.get('port'), function () {
    console.log('App listening on port ' + app.get('port'));
});
````

#### Models are JSON object, this is data stored in database

* example code using monoose schemas
````javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema ({
    data:[
      {text:String}
    ]
});
const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;
````
#### Routing is used to call servers this is essential part of getting data from database

* require express, start router and require models
````javascript
const express= require('express');
const router = express.Router();
const Todo = require('../models/todo');
````
* create routing functions to get, post, update or delete data
````javascript
//get all
router.get('/todos', function(req, res, next){
  Todo.find({}).then(function(result){
    res.send(result);
  }).catch(next);
});

````

## Frontend React-Redux app

React-redux takes care of creating and displaying html and css, routing, tracking states and most importantly using fetch API to make http calls.
It is very powerful system and its easy to start learning.

You can declare each state in separate file and combine them in index.js. Actions connects react component with redux state emitting declared action that updates state

react-component.js
* import actions from actions folder into component and dispatch function on click

````javascript
import { addTodo, Delete } from '../../actions/index'
//
handleClick = (e)=> {
  let num = parseInt(e.target.value, 10)
  this.props.dispatch(Delete(num))
}
````
* then declared function in actions gets called and it passes data to reducer state
````javascript
export const Delete = (num) =>{
  return{
    type: 'DELETE',
    data: num
  }
}
````
* and finally reducer updates the state
````javascript
case 'DELETE':
const commentId = action.data;
return state.filter(comment => comment.id !== commentId);
````

more detailed react-redux functionality you can find on egghead guides. Take look at src/index.js file, that is how you import state and provide it to each component on every route in react. Thats why redux over react store.
##Local Development
in package.json add proxy````"proxy":"http://localhost:4000/"````
install nodemon globally ````npm install -g nodemon````

make sure mongod is running
````mongod --dbpath data/db````

start server and react
````
npm run dev
nodemon server/index.js
````
## Finally Deployment

#### package.json

we need to setup package.json so when we run


 $```` npm install ````

 it automatically builds the app using create-react-app build script.

````
"scripts": {
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject",
  "postinstall": "npm run build",
  "start": "node server/index.js",
  "dev":"react-scripts start"
},
````
#### Heroku
* create heroku acc, create app, navigate to deploy and follow guide on how to install cli and deploy

* login to heroku
````
$ heroku login
````
* push git repository to heroku  
````
$ git add .
$ git commit -am "make it better"
$ git push heroku master
````
now app should be up and running on heroku server

#### Glitch (not sure how fast it is)
* create glitch node app, and import your GitHub repository  
