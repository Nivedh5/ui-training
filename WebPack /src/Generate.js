
import "./styles/main.scss"
import axios from "axios"

function GenerateJoke(){
   const  config={
    headers:{
        Accept: 'application/json'
    },
   }
   axios.get('http://icanhazdadjoke.com',config).then(res=>{
    document.getElementById('joke').innerHTML=res.data.joke
   })
}
export default GenerateJoke