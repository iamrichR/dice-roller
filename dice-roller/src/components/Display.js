import React from 'react';

class Display extends React.Component{
    render() {
        return(
            <div className="display-container">
                <Result rollDetails="1dX: (9)"
                result = {this.props.result}
                contextClass="current-result" />
            </div>
        );
    }
}

function Result(props){
    return(
        <div className={"result-wrapper " + props.contextClass}>
            <h4 id="result-heading">{props.rollDetails}</h4>
            <p id="result-display">{props.result}</p>
        </div>
    );
}

export default Display;