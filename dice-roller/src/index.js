import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentResult: 0,
            resultHistory: []
        };
    }

    onClickDice(size){
        const newResult = this.roll(size);
        const newHistory = this.state.resultHistory.concat(newResult)
        this.setState({
            currentResult: newResult,
            resultHistory: newHistory
        });
    }

    roll = (n) => Math.floor(Math.random() * Math.floor(n)+1);

    render() {
        const basicDice = [2,4,6,8,10,12,20,100];

        return(
            <div className='container'>
                <UserInput onClick={(size) => this.onClickDice(size)} basicDice={basicDice}/>
                <Display result={this.state.currentResult}/>
            </div>
        );
    }
}

class UserInput extends React.Component{
    render() {
        return(
            <div className="input-container">
                <DiceList dice={this.props.basicDice} onClick={(size) => this.props.onClick(size)}/>
            </div>
        );
    }
}

function DiceList(props){
    const diceButtons = props.dice.map((die) => {
        return <DiceButton 
        key={`die-${die}`}
        size={die} 
        onClick={() => props.onClick(die)}/>
    });

    return diceButtons;
}

function DiceButton(props){
    return(
    <button className="diceBtn" onClick={props.onClick}>d{props.size}</button>
    );
}

class Display extends React.Component{
    render() {
        return(
            <div className="display-container">
                <div className="display-text">
                    <h4 id="results-heading">Result</h4>
                    <p id="results-display">{this.props.result}</p>
                </div>
            </div>
        );
    }
}



/*****************************************/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);