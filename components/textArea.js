import React from "react";

class TextArea extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var spans = [];
        var min = (a, b) => a < b ? a : b;
        const myclass = (this.props.firstTime) ? "randomClass" : "greenText";
        if (this.props.disabled){
            var cur = 0;
            for (var i = 0; i < this.props.content.length; i++){
                if (cur < this.props.incorrectWords.length && this.props.incorrectWords[cur] == i){
                    ++cur;
                    spans.push(<span className = {"redText"}>{this.props.content[i]} </span>);
                }
                else{
                    spans.push(<span className = {myclass}>{this.props.content[i]} </span>);
                }
            }
        }
        else{
            const redl = min(this.props.totLen, this.props.content[this.props.currentWord].length);
            var cur = 0;

            for (var i = 0; i < this.props.currentWord; i++){
                if (cur < this.props.incorrectWords.length && this.props.incorrectWords[cur] == i){
                    ++cur;
                    spans.push(<span className = {"redText"}>{this.props.content[i]} </span>);
                }
                else{
                    spans.push(<span className = {"greenText"}>{this.props.content[i]} </span>);
                }
            }
            spans.push(<span className = {"greenText"}><u>{this.props.content[this.props.currentWord].slice(0, this.props.match)}</u></span>);
            spans.push(<span className = {"redBackgroundText"}><u>{this.props.content[this.props.currentWord].slice(this.props.match, redl)}</u></span>);
            spans.push(<span><u>{this.props.content[this.props.currentWord].slice(redl, this.props.content[this.props.currentWord].length)}</u></span>);
            var flg = (redl < this.props.totLen);
            if (flg) spans.push(<span className = {"redBackgroundText"}> </span>);
            for (var i = this.props.currentWord + 1; i < this.props.content.length; i++){
                if (flg) spans.push(<span>{this.props.content[i]}</span>);
                else spans.push(<span> {this.props.content[i]}</span>);
                flg = false;
            }
        }

        return (
            <div className = {"textBox"}>
                {spans}
            </div>
        );
    }
}

export default TextArea;