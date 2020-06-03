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

    basicRoll = function(){
        let result = Math.floor(Math.random() * Math.floor(this.diceSize)+1);
        return {
            total: result,
            resultDetail: `${result}`
        }
    }

    fullRoll  = function(){
        let finalResult = this.repeat_roll(this.numDice, this.basicRoll.bind(this));
        finalResult['total'] += this.postRollAdd;
        finalResult['resultDetail'] = finalResult['resultDetail'].slice(0, -2) + `) + ${this.postRollAdd}`;
        return finalResult;
    }

    repeat_roll  = function(num, func, resultDetail){
        if(resultDetail === undefined){
            resultDetail = "(";
        }

        let fullResult = func();
        let result = fullResult['total'];
        resultDetail += `${fullResult['resultDetail']}, `;
        num--;

        if(num > 0){
            const nextRoll = this.repeat_roll(num, func, resultDetail);
            return {total: result + nextRoll['total'], resultDetail: nextRoll['resultDetail']};
        }

        return {total: result, resultDetail: resultDetail};
    }

    roll  = function(){
        let finalResult = this.repeat_roll(this.numRolls, this.fullRoll.bind(this));
        finalResult['resultDetail'] = finalResult['resultDetail'].slice(0, -2) + ")";
        return finalResult;
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