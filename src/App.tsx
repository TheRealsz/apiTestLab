
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


// mocklab

const [teste, setTeste] = useState("")
const URL_TestLab = "https://6jkj1.mocklab.io/json"

async function postInfo(){
  try{
     await axios.post(URL_TestLab,
       {
        "id": 12345,
        "value": "abc-def-ghi"
      })
      // await firebaseApiTestLab()
  }
  catch(error){
    console.log(error)
  }
}

async function getTest(){
  try{
    const response = await axios.get("https://6jkj1.mocklab.io/json/1")
    const data = response.data
    setTeste(JSON.stringify(data))
  } 
  catch(error){
    console.log("Deu erro")
  }
}

async function putTeste(){
  try{
      await axios.put("https://6jkj1.mocklab.io/json/2")
      
      // Comum
      // await axios.put (URL, body(todas as infos do usuario e mudar as chaves que quer mudar))
  }
  catch(error){
    console.log(error)
  }
}

async function deleteTeste(){
  try {
    await axios.delete("https://6jkj1.mocklab.io/fault")

    // Comum
    // await axios.delete (minhaURL/:id -> id de quem quer deletar, header (por conta de autorizacao))
  }
  catch(error){
    console.log(error)
  }
}


  return (
    <div className="App" >
      <img src={data} alt="" />
      <button onClick={postInfo}>teste</button>
      <button onClick={getTest}>get</button>
      <button onClick={putTeste}>put</button>
      <button onClick={deleteTeste}>delete</button>
      <p>{teste}</p>
    </div>
  );
}

export default App;
