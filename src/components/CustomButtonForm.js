import React from 'react';

class CustomButtonForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rollDetailValue: 3
        };
    }

    handleChange(event){
        this.setState({
            rollDetailValue: event.target.value
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
                        <div className='input-row'>
                            <label for='input-roll-details' className='label-roll-details'>Custom Roll</label>
                            <input id='input-roll-details' className='input-text' 
                            type='text' name='input-roll-details'
                            value={this.state.rollDetailValue} 
                            onChange={(event) => this.handleChange(event)} />
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

export default CustomButtonForm;