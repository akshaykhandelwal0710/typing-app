import React from "react";

class InputBox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.disabled){
            return (
                <input value = {this.props.value} onChange = {this.props.onChange} disabled = {true} ref = {this.props.rf} title = {"Click on Start to begin.."}></input>
            );
        }
        else if (this.props.isFirst){
            return (
                <input placeholder = "Type here: " value = {this.props.value} onChange = {this.props.onChange} disabled = {false} ref = {this.props.rf} title = {"Type in here"}></input>
            );
        }
        else{
            return (
                <input value = {this.props.value} onChange = {this.props.onChange} disabled = {false} ref = {this.props.rf} title = {"Type in here"}></input>
            );
        }
    }
}

export default InputBox