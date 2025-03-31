import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



let createExcuse = ()=>{
  let primerElementoArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  let first = ["The "];
  let who = ["dog ", "grandma ", "mailman ", "bird ", "driver "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let possetion = ["my homework ", "my phone ", "the car "];
  let when = ["before the class", "when i was sleeping", "while i was exercising", "during my lunch", "while i was praying"];
  let firstFirst = primerElementoArray(first)
  let firstWho = primerElementoArray(who)
  let firstAction = primerElementoArray(action)
  let firstPossetion = primerElementoArray(possetion)
  let firstWhen = primerElementoArray(when)
  let excuse = document.getElementById("excuse")
  excuse.innerText = firstFirst + firstWho + firstAction + firstPossetion + firstWhen ;
}
window.onload = function() {
  createExcuse()
  
};
  
 



