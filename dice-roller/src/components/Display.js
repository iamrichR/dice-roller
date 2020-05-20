import React from 'react';

function Display(props){
    return(
        <div className="display-container">
            <ResultHistoryDisplay rollHistory={props.rollHistory}/>
            <ResultDisplay result={props.currentResult}
                contextClass="current-result" />
        </div>
    );
}

function ResultHistoryDisplay(props){
    let idx = -1;
    const historyList = props.rollHistory.map((item) => {
        idx++;
        return <ResultDisplay 
            key={'history-' + idx}
            result={item}
            contextClass="history-result" />
    });

    return(
        <div className="result-history">
            {/* <ul> */}
            {historyList}
            {/* </ul> */}
        </div>
    );
}

function ResultDisplay(props){
    return(
        <div className={"result-wrapper " + props.contextClass}>
            <h4 id="result-details">{props.result.roll}</h4>
            <p id="result-display">{props.result.result}</p>
        </div>
    );
}

export default Display;