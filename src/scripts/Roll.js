import Result from './Result'

class Roll{
    constructor(diceSize, numDice, postRollAdd, numRolls){
        const initDiceSize = parseInt(diceSize);
        const initNumDice = parseInt(numDice);
        const initPostRollAdd = parseInt(postRollAdd);
        const initNumRolls = parseInt(numRolls);

        if(diceSize === undefined || !Number.isInteger(initDiceSize)){
            this.diceSize = 20;
        } else{
            this.diceSize = parseInt(initDiceSize);
        }
        
        if(numDice === undefined || !Number.isInteger(initNumDice)){
            this.numDice = 1;
        } else{
            this.numDice = initNumDice;
        }
        
        if(postRollAdd === undefined || !Number.isInteger(initPostRollAdd)){
            this.postRollAdd = 0;
        } else{
            this.postRollAdd = initPostRollAdd;
        }

        if(numRolls === undefined || !Number.isInteger(initNumRolls)){
            this.numRolls = 1;
        } else{
            this.numRolls = initNumRolls;
        }


    }

    basicRoll = function(result){
        let newRollResult = Math.floor(Math.random() * Math.floor(this.diceSize)+1);
        result.detail['rolls'].push(newRollResult);
        result.total += newRollResult;
        return result
    }

    fullRoll  = function(result){
        this.repeat_roll(this.numDice, this.basicRoll.bind(this), result);
        result.total += this.postRollAdd;
        result.detail['adds'].push(this.postRollAdd);
        return result;
    }

    repeat_roll  = function(num, func, result){
        func(result);
        num--;

        if(num > 0){
            this.repeat_roll(num, func, result);
            return result;
        }

        return result;
    }

    roll  = function(){
        let result = new Result(this);
        this.repeat_roll(this.numRolls, this.fullRoll.bind(this), result);
        return result;
    }

    toString  = function(){
        const numRollsStr = this.numRolls <= 1 ? '' : ("roll " + this.numRolls + " times");

        if(this.numDice === 1 && this.postRollAdd === 0
            && this.numRolls === 1){
                return `d${this.diceSize}`;
        } else{
            let innerStr = `${this.numDice}d${this.diceSize}`;
            return `${this.numRolls}[${innerStr} + ${this.postRollAdd}]`;
        }
    }
    
}

export default Roll;