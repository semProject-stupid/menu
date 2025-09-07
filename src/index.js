import "./style.css"; 
import sunIcon from "./assets/sunset.png";
import moonIcon from "./assets/night.png";

import { apptFunction } from "./appt.js";
import { courseFunction } from "./main-course.js";
import { dessertFunction } from "./dessert.js";

//query selectors
const apptButton = document.querySelector("#appetizers");
const courseButton = document.querySelector("#main-courses");
const dessertButton = document.querySelector("#desserts");
const themeButton = document.querySelector("#theme");
//functions 
let themeState = false; //false -> light, true -> dark 
function themeFunction() {
    document.body.classList.toggle("light");
    themeState ? themeButton.style.backgroundImage = `url(${moonIcon})` : 
                themeButton.style.backgroundImage = `url(${sunIcon})` ;
    themeState = !themeState;
}
//event listeners
apptButton.addEventListener("click", apptFunction);
courseButton.addEventListener("click", courseFunction);
dessertButton.addEventListener("click", dessertFunction);
themeButton.addEventListener("click", themeFunction);
