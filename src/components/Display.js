import React from 'react';

function Display(props){
    return(
        <div className='display-container'>
            <ResultHistoryDisplay rollHistory={props.rollHistory}/>
            <ResultDisplay result={props.currentResult}
                contextClass='current-result' />
        </div>
    );
}

function ResultHistoryDisplay(props){
    let idx = -1;
    const historyList = props.rollHistory.map((item) => {
        idx++;
        return (<li key={'history-' + idx}>
            <ResultDisplay 
            result={item}
            contextClass='historical-result' />
            </li>);
    });

    return(
        <div className='result-history'>
            <ul id='result-history-list' className='result-history-list'>
                {historyList}
            </ul>
        </div>
    );
}

function ResultDisplay(props){
    return(
        <div className={'result-wrapper ' + props.contextClass}>
            <h4 className='result-details'>{props.result.roll}</h4>
            <p className='result-display'>{props.result.result}</p>
        </div>
    );
}

export default Display;