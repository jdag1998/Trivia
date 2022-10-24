export default function Questions ({question}) {
    
    function    questionLoading() {
        return(
            <>
            <h1>Loading Question...</h1>
            </>
        )
    }
    function questionLoaded() {
        return(
            <>
            <h2> <span>Catergory:</span> {question.category.title.toString()}</h2>
            <h2> <span>Points:</span> {question.points}</h2>
            <h1> <span>Answer:</span> {question.question} </h1>
            </>
        )  
    }
    
    return question ? questionLoaded() : questionLoading()
}

