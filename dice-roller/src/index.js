import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentResult: 0,
            resultHistory: []
        };
    }

    diceClick(size){
        const newResult = this.roll(size);
        const newHistory = this.state.resultHistory.concat(newResult)
        this.setState({
            currentResult: newResult,
            resultHistory: newHistory
        });
    }

    roll = (n) => Math.floor(Math.random() * Math.floor(n)+1);

    render() {
        return(
            <div className='container'>
                <div className="input-container">
                    <UserInput onClick={(size) => this.diceClick(size)}/>
                </div>
                <div className="display-container">
                    <Display result={this.state.currentResult}/>
                </div>
            </div>
        );
    }
}

class UserInput extends React.Component{
    renderColumn(dice){
        return(
            <DiceColumn renderButton={(size) => this.renderButton(size)} dice={dice}/>
        );
    }

    renderButton(size){
        return <DiceButton 
                size={size} 
                onClick={() => this.props.onClick(size)}/>
    }

    render() {
        return(
            <div className="user-input">
                {this.renderColumn([2,4,6,8])}
                {this.renderColumn([10,12,20,100])}
            </div>
        );
    }
}

class DiceColumn extends React.Component{
    render(){
        return(
            <div className="dice-column">
                {/* TODO - Figure out how React arrays/keys/dynamic lists work and refactor this */}
                {this.props.renderButton(this.props.dice[0])}
                {this.props.renderButton(this.props.dice[1])}
                {this.props.renderButton(this.props.dice[2])}
                {this.props.renderButton(this.props.dice[3])}
            </div>
        );
    }
}

function DiceButton(props){
    return(
    <button onClick={props.onClick}>d{props.size}</button>
    );
}

class Display extends React.Component{
    render() {
        return(
            <>
                <h4>Result</h4>
                <p id="results-display">{this.props.result}</p>
            </>
        );
    }
}



/*****************************************/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);