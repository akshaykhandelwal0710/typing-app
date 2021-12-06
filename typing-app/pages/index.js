import { useState, useEffect, useRef } from "react";
import AnalysisBox from "../components/analysisBox";
import InputBox from "../components/inputBox";
import TextArea from "../components/textArea";

const maxlen = 30;//Maximum length of word that can be entered in input box

var para = "Machine learning (ML) is the study of computer algorithms that can improve automatically through experience and by the use of data.";
para = para.split(' ');
const numWords = para.length;

function min(a, b){
    return (a < b) ? a : b;
}

function homePage(){
    const [time, setTime] = useState(0);//time in seconds if timer running
    const [running, setRunning] = useState(false);//whether timer running
    const [text, setText] = useState('');//text inside the input box
    const inputRef = useRef(null);//reference to the inputBox
    const [currentWord, setCurrentWord] = useState(0);//current word index in the para
    const [numOfCharsEntered, setNumOfCharsEntered] = useState(0);//number of characters entered
    const [correctChars, setCorrectChars] = useState(0)//Number of characters entered(only from correctly entered words)
    const [match, setMatch] = useState(0);//number of matching characters with the current word
    const [incorrectWords, setIncorrectWords] = useState([]);//list of indices of words entered incorrectly
    const [firstTime, setFirstTime] = useState(true);//whether it is the first time user will start a test in the current session
    const [intervalId, setIntervalId] = useState(null);

    //Effect to set/unset an interval to run timer
    useEffect(() => {
        if (running){
            setIntervalId(setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000));
        }
        else if (intervalId != null){
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }, [running]);

    //set input box to focus when running or text changes
    useEffect(() => {
        if (inputRef != null){
            inputRef.current?.focus();
        }
    }, [running, text]);

    //Click handler for start button
    const handleClick = (_event) => {
        if (!running){
            setText('');
            setRunning(true);
            setFirstTime(false);
            setCurrentWord(0);
            setNumOfCharsEntered(0);
            setCorrectChars(0);
            setIncorrectWords([]);
            setTime(0);
        }
    };

    //Change handler for input box
    const handleChange = ({ target }) => {
        const change = target.value.length - text.length;
        var newMatch = 0;
        if (change > 1 || change < -1 || target.value.length > maxlen){
            return;
        }
        while (newMatch < min(target.value.length, para[currentWord].length) && target.value[newMatch] == para[currentWord][newMatch]){
            newMatch++;
        }
        if (target.value[target.value.length - 1] == ' '){
            if (target.value.length - 1 != para[currentWord].length || newMatch != para[currentWord].length){
                setIncorrectWords((prev) => [...prev, currentWord]);
            }
            else{
                setCorrectChars((prev) => prev + para[currentWord].length);
            }
            if (currentWord == numWords - 1){
                setRunning(false);
            }
            setNumOfCharsEntered((prev) => prev + target.value.length - 1);
            setCurrentWord((prev) => prev + 1);
            setMatch(0);
            setText('');
        }
        else{
            setMatch(newMatch);
            setText(target.value);
        }
    };

    return (
        <div>
            <h1>HOME</h1>
            <p>{time}</p>
            <button onClick = {handleClick}>Start</button>
            <TextArea content = {para} disabled = {!running} currentWord = {currentWord} match = {match} totLen = {text.length} incorrectWords = {incorrectWords} firstTime = {firstTime}></TextArea>
            <InputBox rf = {inputRef} value = {text} onChange = {handleChange} disabled = {!running}></InputBox>
            {(!running && !firstTime) ? <AnalysisBox numChars = {numOfCharsEntered} time = {time} correctChars = {correctChars} incorrectCount = {incorrectWords.length} totalCount = {numWords}/> : <div></div>}
        </div>
    );
}

export default homePage;