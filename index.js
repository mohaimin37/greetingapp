import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
let date = new Date(2023,7,3,23);
date = date.getHours();
let greetings = "";
let h1 = "";
const css = {

}

if(date>=1 && date<=12) { 
  greetings = "good morning"
  h1= " i am fine"
  css.color = "green";
  
}
else if(date>=12 && date<=18){
  greetings = "good afternoon" 
  css.color = "orange";


}
else{ greetings = "good night"
css.color = "black";
}





ReactDOM.render(<><div><h1>hello sir ,<span style = {css}> {greetings} </span> </h1></div> </>,document.getElementById("root") ) 