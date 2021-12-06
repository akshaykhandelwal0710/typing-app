import React from "react";

class InputBox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <input value = {this.props.value} onChange = {this.props.onChange} disabled = {this.props.disabled} ref = {this.props.rf}></input>
        );
    }
}

export default InputBox