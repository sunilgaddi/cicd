import axios from "axios"
import {useState} from 'react'


function App() {
 const [response, setResponse] = useState()
  async function data() {
    const res = await axios.get('http://localhost:5000/api/home')
    setResponse(res.data.msg)
  }


  data()

  return (
    <div>
      <h1>{response}</h1>
    </div>
  );
}

export default App;
