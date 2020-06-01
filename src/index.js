import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './components/UserInput';
import CustomButtonForm from './components/CustomButtonForm';
import Display from './components/Display'
import Modal from 'react-modal';
import Roll from './scripts/Roll';

import '../node_modules/normalize.css/normalize.css';
import './css/index.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentResult: {roll: '', result: 0},
            rollHistory: [],
            customButtons: [],
            modalIsOpen: false
        };
    }

    componentDidUpdate(){
        this.scrollHistoryDown();
    }

    onClickDice(roll){
        const newRoll = {roll:  roll.toString(), result: roll.roll()};
        console.log(newRoll);
        const newHistory = this.state.rollHistory.concat(newRoll)
        this.setState({
            currentResult: newRoll,
            rollHistory: newHistory
        });
    }

    scrollHistoryDown(){
        let historyDisplay = document.getElementById('result-history-list');

        historyDisplay.scrollTop = historyDisplay.scrollHeight;
    }

    showAddButtonModal(){
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal(){
        this.setState({
            modalIsOpen: false
        });
    }

    handleSubmit(event){
        const forms = event.target.elements;
        const newRoll = new Roll(forms[0], forms[1], forms[2], forms[3]);
        const newValue = parseInt(event.target.elements[0].value);
        event.preventDefault();
        if(Number.isInteger(newValue)){
            const newCustomButtons = this.state.customButtons.concat([newValue]);
            this.setState({
                customButtons: newCustomButtons
            });
            this.closeModal();
        }
    }

    render() {
        const basicDice = [2,4,6,8,10,12,20,100];

        return(
            <div className='container'>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={() => this.closeModal()}
                >
                    <CustomButtonForm closeModal={() => this.closeModal()}
                        handleSubmit={(event) => this.handleSubmit(event)}/>
                </Modal>
                <UserInput onClick={(roll) => this.onClickDice(roll)} 
                    diceButtons={this.state.customButtons.length === 0 ?
                    basicDice : basicDice.concat(this.state.customButtons)} />
                <Display currentResult={this.state.currentResult} 
                    rollHistory={this.state.rollHistory}
                    addButtonOnClick={() => this.showAddButtonModal()} />
            </div>
        );
    }
}



/*****************************************/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);