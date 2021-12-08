function AnalysisBox(props){
    const gross = Math.trunc(props.numChars*12/props.time);
    const accuracy = Math.round(props.correctCount*100/props.totalCount);
    const net = Math.trunc(props.correctCount*12/props.time);

    return (
        <div className = "analysisBox">
            <h2> Analysis </h2>
            <p>Gross Typing Speed = {gross} wpm</p>
            <p>Net Typing Speed = {net} wpm</p>
            <p>Accuracy = {accuracy}%</p>
        </div>
    )
}

export default AnalysisBox;