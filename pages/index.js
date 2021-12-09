import { useState, useEffect, useRef } from "react";
import AnalysisBox from "../components/analysisBox";
import InputBox from "../components/inputBox";
import TextArea from "../components/textArea";
import Image from "next/image";
import keyboard from "../statics/images/keyboard.png";
import React from "react";
import data from "../statics/data/typingText";

const maxlen = 30;//Maximum length of word that can be entered in input box

var rand = Math.floor((Math.random()*data.length));
var para = data[rand];
var total = para.length + 1;
var min = (a, b) => a < b ? a : b;
para = para.split(' ');
var numWords = para.length;

function HomePage(){
    const [time, setTime] = useState(0);//time in seconds if timer running
    const [running, setRunning] = useState(false);//whether timer running
    const [text, setText] = useState('');//text inside the input box
    const inputRef = useRef(null);//reference to the inputBox
    const [currentWord, setCurrentWord] = useState(0);//current word index in the para
    const [numOfCharsEntered, setNumOfCharsEntered] = useState(0);//number of characters entered
    const [correctChars, setCorrectChars] = useState(0)//Number of characters entered correctly
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

    useEffect(() => {
        if (!running && currentWord == numWords){
            window.scrollTo(0,document.body.scrollHeight);
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
        setText('');
        setRunning(true);
        setFirstTime(false);
        setCurrentWord(0);
        setNumOfCharsEntered(0);
        setCorrectChars(0);
        setIncorrectWords([]);
        setTime(0);
        if (inputRef != null){
            inputRef.current?.focus();
        }

        if (!running && !firstTime){
            rand = Math.floor((Math.random()*data.length));
            para = data[rand];
            total = para.length + 1;
            para = para.split(' ');
            numWords = para.length;
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
            const myBool = target.value.length - 1 != para[currentWord].length || newMatch != para[currentWord].length;
            if (myBool){
                setIncorrectWords((prev) => [...prev, currentWord]);
            }

            const correct = 0;
            for (var i = 0; i < min(target.value.length, para[currentWord].length); i++){
                correct += (target.value[i] == para[currentWord][i]);
            }
            setCorrectChars((prev) => prev + correct + !myBool);
            if (currentWord == numWords - 1){
                setRunning(false);
            }
            setNumOfCharsEntered((prev) => prev + target.value.length);
            setCurrentWord((prev) => prev + 1);
            setMatch(0);
            setText('');
        }
        else{
            setMatch(newMatch);
            setText(target.value);
        }
    };

    var varDiv = <div className = "col time">{Math.trunc(time/60)} : {(time%60 < 10) ? 0 : ''}{time%60}</div>;

    return (
        <div className = "home">
            <div className = "row">
                <div className = "col-8 heading align-self-end">
                    <h1>Typing Speed Test</h1>
                </div>
                <div className = "col keyboard">
                    <Image src = {keyboard} height = {150} width = {150}/>
                </div>
            </div>
            <div className = "buttonTime">
                <div className = "row">
                    <div className = "col-4"></div>
                    <div className = "col">
                        <button onClick = {handleClick} title = {"Click to take a quick typing speed test"}>{running ? "Restart" : "Start"}</button>
                    </div>
                    {varDiv}
                </div>
            </div>
            <TextArea content = {para} disabled = {!running} currentWord = {currentWord} match = {match} totLen = {text.length} incorrectWords = {incorrectWords} firstTime = {firstTime}></TextArea>
            <InputBox rf = {inputRef} value = {text} onChange = {handleChange} disabled = {!running} isFirst = {currentWord == 0}></InputBox>
            {(!running && !firstTime) ? <AnalysisBox numChars = {numOfCharsEntered} time = {time} correctCount = {correctChars} totalCount = {total}/> : <div></div>}
        </div>
    );
}

export default HomePage;