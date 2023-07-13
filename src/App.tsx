
import axios from 'axios'
import { useState } from 'react'


function App() {

  // Onde acesso as informaçoes
  const API_URL = "https://valorant-api.com/v1/weapons/skins"
  // Para poder armazenar o resultado assincrono da funcao e renderizar assim que estiver disponivel o resultado.
  // É necessario pois nao é possivel renderizar uma promisse diretamente no componente, pois o tsx precisa de valor imediato para renderizar.
  // useState como string pois na funcao faco com que o json vire formato para texto
  const [data, setData] = useState("")

  // Funcao para pegar informação da API
  async function getStats() {

    try {
      const response = await axios.get(API_URL)
      const dataDefault = response.data
      const dataJson = dataDefault.data
      const dataImg = dataJson[706].displayIcon
      setData(dataImg)
    }
    catch (error) {
      console.log(error)
    }
  }

  getStats()


  async function jsonPlaceholderAPI(){
    const URL_FAKEAPI = "https://jsonplaceholder.typicode.com/posts"

    try{
      const response = await axios.post(URL_FAKEAPI,
        // body 
        {
          title : "Alo",
          body: "Oi",
          userId: 101
        },  
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
        )
      console.log(response.data)
    }
    catch(error){
      console.log("Deu erro")
    }
  }

  jsonPlaceholderAPI()


// Firebase

const [teste, setTeste] = useState("")

async function firebaseApiTestLab(){
  const URL_TestLab = "urlFirebaseJson"
  try{
    const response = await axios.get(URL_TestLab)
    const data = response.data
    setTeste(JSON.stringify(data))
  } 
  catch(error){
    console.log("Deu erro")
  }
}

firebaseApiTestLab()

  return (
    <div className="App" >
      <img src={data} alt="" />
      <p>{teste}</p>
    </div>
  );
}

export default App;
