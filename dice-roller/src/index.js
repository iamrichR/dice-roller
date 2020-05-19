import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './components/UserInput';
import Display from './components/Display'
import './css/index.css';
import './css/userInput.css';
import './css/display.css';

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



/*****************************************/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);