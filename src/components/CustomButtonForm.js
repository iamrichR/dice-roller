import React from 'react';

class CustomButtonForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            diceSize: '',
            numDice: '',
            postRollAdd: ''
        };
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div className='modal-content'>
                <div className='modal-input-container'>
                    <div className='form-heading'>
                        <h3>Add a custom Dice</h3>
                        <p>Please enter custom dice size</p>
                    </div>
                    <form className='custom-btn-form' onSubmit={this.props.handleSubmit}>
                        {/* dice size */}
                        <FormRow inputID='diceSize'
                        labelText='Dice Size (dX)' 
                        value={this.state.diceSize}
                        handleChange={(event) => this.handleChange(event)} />
                        {/* number of dice */}
                        <FormRow inputID='numDice'
                        labelText='Number of Dice' 
                        value={this.state.numDice}
                        handleChange={(event) => this.handleChange(event)} />
                        {/* modifier to roll result */}
                        <FormRow inputID='postRollAdd'
                        labelText='Modifier to roll result' 
                        value={this.state.postRollAdd}
                        handleChange={(event) => this.handleChange(event)} />
                        {/* "do you want to run this roll multiple times?" */}
                        <div className='input-row'>
                            Your Custom Roll:  {this.state.numDice}d{this.state.diceSize}+{this.state.postRollAdd}
                        </div>
                        <div className='input-row'>
                            <input id='input-submit' className='input-submit modal-btn' type='submit' name='input-submit' />
                        </div>
                    </form>
                    <button className='modal-close-btn modal-btn' onClick={() => this.props.closeModal()}>Close</button>
                </div>
            </div>
        );
    }
}

function FormRow(props){
    return(
        <div className='input-row'>
            <label for={props.inputID} className={`label-${props.inputID} input-label`}>
                {props.labelText}
            </label>
            <input id={`input-${props.inputID}`} className='input-text' 
            type='text' name={props.inputID}
            value={props.value} 
            onChange={(event) => props.handleChange(event)} />
        </div>
    );
}

export default CustomButtonForm;