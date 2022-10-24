import {useState} from 'react'

export default function Score ({question}) {
    const [score , setScore] = useState(0)
    function increaseScore() {
        setScore(score + question.points)
    }
    function decreaseScore() {
        if (score - question.points <= 0){
          setScore(0)  
        } else {
            setScore(score - question.points)
        }
        
    }
    function scoreReset() {
        setScore(0)
    }
     return(
        <>
        <h1>Current Score: {score} </h1>
        <div id='scorebuttons'>
            <button id='increaseScore' onClick={increaseScore}>Add Points</button>
            <button id='decreaseScore' onClick={decreaseScore}>Deduct Points</button>
            <button id='resetscore' onClick={scoreReset}> Reset </button>
        </div>
        </>
    )
}