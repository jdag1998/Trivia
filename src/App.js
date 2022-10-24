
import './App.css';
import {useState, useEffect} from 'react';

import Score from './components/Score';
import Home from './components/Home';
import Questions from './components/Questions';

function App() {
  
  let [quest, setQuest] = useState('')
  let [ans, setAns] = useState('')
  

  const handleQuestion = async () => {
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
 
  function handleAnswer () {
    setAns(quest.ans)
  }

  return (
    <div className="App">
       
      <Home/>
      <Score quest={quest}/>
      <h2>Let's Play!</h2>
      <button onClick={handleQuestion}>Get Question</button>
      <Questions quest={quest}/>
      <button onClick={handleAnswer}>Show Answer</button>
      <h1>{ans}</h1>
    
      
    </div>
  );
}

export default App;
