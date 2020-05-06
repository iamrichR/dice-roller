import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: 0
        };
    }

    roll(){
        const newResult = Math.floor(Math.random() * Math.floor(4)+1);
        this.setState({
            result: newResult
        });
    }

    render() {
        return(
            <div className='container'>
                <div className='btns'>
                    {/* I'm not sure bind is the right move here? 
                        TODO - learn more about React scoping  */}
                    <button onClick={this.roll.bind(this)}></button>
                </div>
                <div className='results'>
                    <p>{this.state.result}</p>
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