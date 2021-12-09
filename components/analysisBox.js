function AnalysisBox(props){
    const gross = Math.round(props.numChars*12/props.time);
    const accuracy = Math.round(props.correctCount*100/props.totalCount);
    const net = Math.round(props.correctCount*12/props.time);

    var accuracyClass = "greenText2";
    if (accuracy < 80){
        accuracyClass = "redText";
    }
    else if (accuracy < 90){
        accuracyClass = "orangeText";
    }

    return (
        <div className = "analysisBox">
            <h2> Analysis </h2>
            <p>Gross Typing Speed = {gross} wpm</p>
            <p>Net Typing Speed = {net} wpm</p>
            <p>Accuracy = <span className = {accuracyClass}>{accuracy}%</span></p>
        </div>
    )
}

export default AnalysisBox;