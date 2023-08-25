import GenerateJoke from "./Generate";
import Insta from "./assets/icon-instagram.svg"


const Img=document.getElementById("Img")
Img.src=Insta
console.log(GenerateJoke())

const jokeBtn=document.getElementById("jokebtn")

jokeBtn.addEventListener('click', GenerateJoke)
GenerateJoke()
