import React from 'react';

function CustomButtonForm(props){
    return(
        <div className='modal-content'>
            <div className='modal-input-container'>
                <div className='form-heading'>
                    <h3>Add a custom Dice</h3>
                    <p>Please enter custom dice size</p>
                </div>
                <form className='custom-btn-form'>
                    <div className='input-row'>
                        <label for='input-roll-details' className='label-roll-details'>Custom Roll</label>
                        <input id='input-roll-details' className='input-text' type='text' name='input-roll-details'></input>
                    </div>
                    <div className='input-row'>
                        <input id='input-submit' className='input-submit modal-btn' type='submit' name='input-submit' />
                    </div>
                </form>
                <button className='modal-close-btn modal-btn' onClick={() => props.closeModal()}>Close</button>
            </div>
        </div>
    );
}

export default CustomButtonForm;