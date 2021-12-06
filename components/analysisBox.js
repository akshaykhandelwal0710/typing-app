function AnalysisBox(props){
    return (
        <div className = "analysisBox">
            <h2> Analysis </h2>
            <p>Gross Typing Speed = {Math.trunc(props.numChars*12/props.time)} wpm</p>
            <p>Net Typing Speed = {Math.trunc(props.correctChars*12/props.time)} wpm</p>
            <p>Accuracy = {Math.round((props.totalCount - props.incorrectCount)*100/props.totalCount)}%</p>
        </div>
    )
}

export default AnalysisBox;