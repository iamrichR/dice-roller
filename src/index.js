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
        const basicDice = this.createBasicDice();
        this.state = {
            currentResult: {},
            rolls: basicDice,
            rollHistory: [],
            customButtons: [],
            modalIsOpen: false
        };
    }

    componentDidUpdate(){
        this.scrollHistoryDown();
    }

    createBasicDice(){
        const basicDice = [2,4,6,8,10,12,20,100];
        let rollsToAdd = [];

        basicDice.forEach(item => {
            const newRoll = new Roll(item);
            rollsToAdd = rollsToAdd.concat(newRoll);
        });

        return rollsToAdd;
    }

    onClickDice(roll){
        const newResult = roll.roll();
        console.log(newResult);
        const newHistory = this.state.rollHistory.concat(newResult)
        this.setState({
            currentResult: newResult,
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
        event.preventDefault();
        const forms = event.target.elements;
        const newRoll = new Roll(forms[0].value, forms[1].value, forms[2].value, forms[3].value);
        const updatedRolls = this.state.rolls.concat(newRoll);
        this.setState({
            rolls: updatedRolls
        });
    }

    render() {
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
                    rolls={this.state.rolls} />
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