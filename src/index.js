import "./style.css";
import gatos from "./gatos.jpg";

console.log(gatos);
document.querySelector(".root").innerHTML = `<img src="${gatos}" />`;
