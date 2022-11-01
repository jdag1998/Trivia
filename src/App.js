import './App.css';
import {useState, useEffect} from 'react';

import Question from './components/Questions';
import Score from './components/Score';
import Home from './components/Home';

function App() {

  let [question,setQuest] = useState('')
  let [answer , setAns] = useState('')
  

  const showQuestion = async () => {
    const response = await fetch('http://jservice.io/api/random')
    const data = await response.json()

    setQuest(data[0])
    setAns()
  }

  useEffect(() => {
    fetch('http://jservice.io/api/random')
    .then(res => {
      return res.json()
    })
    .then( data => {
      setQuest(data[0])
    })
  }, [])
 
  function showAnswer () {
    setAns(question.answer)
  }

  return (
    <div className="App">
      <Home />
      <Score question={question}/>
      <h2>Let's Play!</h2>
      <button onClick={showQuestion}>Get Question</button>
      <Question question={question}/>
      <button onClick={showAnswer}>Show Answer</button>
      <h1>{answer}</h1>
    </div>
  );
}

export default App;
