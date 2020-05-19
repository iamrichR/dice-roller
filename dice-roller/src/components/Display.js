import React from 'react';

class Display extends React.Component{
    render() {
        return(
            <div className="display-container">
                <ResultDisplay rollDetails={this.props.currentRoll.roll}
                result = {this.props.currentRoll.result}
                contextClass="current-result" />
            </div>
        );
    }
}

function ResultDisplay(props){
    return(
        <div className={"result-wrapper " + props.contextClass}>
            <h4 id="result-heading">{props.rollDetails}</h4>
            <p id="result-display">{props.result}</p>
        </div>
    );
}

export default Display;