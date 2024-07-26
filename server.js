//console.log('server file is running');
// function add(a,b){
//   return a+b;
// }

// const { notInitialized } = require("react-redux/es/utils/useSyncExternalStore");

// var res = add(2,6);
// console.log(res);

// var add = function(a,b){
//   return a+b;
// }
//var add = (a,b) => {return a + b};
// var add = (a,b) => a+b;
// var res = add(2,79);
// console.log(res);
// const add = function(a,b,prince){
//   var res = a + b;
//   console.log('result: ' +res);
//   prince();
// }

// add(2,3, () => console.log('add complete'));
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);
// fs.appendFile('greeting.txt','Hi' + user.username + '!\n', ()=>console.log('fileiscreated'));
// const notes = require('./notes.js');
// var _ = require('\lodash');
// var age = notes.age;
// var result = notes.addNumber(age+18,10);
// console.log(age);
// console.log('result is now' + result);

// var data = ["person","person",1,2,3,1,2,"name","age"];
// var filter = _.uniq(data);

// console.log(filter);

// console.log(_.isString('prince'));
// const jsonString = '{"name": "john", "age" : 30,"city" : "newyork"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);
//for converting object to string const jsonstring = JSON.stringify(jsonObject);
const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());// store in req.body



app.get('/', function (req, res) {
  res.send('welcome to my hotel .. how i can help you?')
})

// app.get('/chicken', (req,res)=>{
//   res.send('sure sir,i would love to')
// })
// app.get('/idli',(req,res)=> {
//   var customized_idli = {
//     name : 'rava idli',
//     size : '10 cm diameter',
//     is_sambar : true,
//     is_chutney : false
//   }
//   res.send(customized_idli)
// })







//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(3000, ()=>{
  console.log('listening on port 3000');
})