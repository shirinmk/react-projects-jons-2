import React,{useEffect, useState} from 'react'

// get new advice from api 
function App(){
const [advice,setAdvice] = useState('')
const [counter, setCounter] = useState(0)

  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    console.log(data.slip.advice)
    setAdvice(data.slip.advice)
    setCounter(counter + 1)
  }
useEffect(function(){getAdvice()},[])

  return(
    <div>
      <h1>Hello world</h1>
      <p>{advice}</p>
      <button onClick={getAdvice}>Get Advice?</button>
      <p>you have read {counter} pieces of advice</p>
    </div>
  )
}
export default App