import React, { Component } from "react";

class InputBox extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.placeholder}
            </React.Fragment>
        )
    }
}

export default InputBox;