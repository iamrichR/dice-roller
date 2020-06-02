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

    basicRoll = () => Math.floor(Math.random() * Math.floor(this.diceSize)+1);

    //TODO - just for fun, figure out how to use functional programming
    //to refactor into a generic "repeat roll" function that you can pass basic or full into
    basicRoll_Repeat  = function(num, resultDetail){
        if(resultDetail === undefined){
            resultDetail = "(";
        }

        let result = this.basicRoll();
        resultDetail += `${result}, `;
        num--;


        if(num > 0){
            const nextRoll = this.basicRoll_Repeat(num, resultDetail);
            return {total: result + nextRoll['total'], resultDetail: nextRoll['resultDetail']};;
        }

        return {total: result, resultDetail: resultDetail};;
    }

    fullRoll  = function(){
        let finalResult = this.basicRoll_Repeat(this.numDice);
        finalResult['total'] += this.postRollAdd;
        finalResult['resultDetail'] = finalResult['resultDetail'].slice(0, -2) + `) + ${this.postRollAdd}`;
        return finalResult;
    }

    fullRoll_Repeat  = function(num, resultDetail){
        if(resultDetail === undefined){
            resultDetail = "(";
        }
        let fullResult = this.fullRoll();
        let result = fullResult['total'];
        resultDetail += `${fullResult['resultDetail']}, `;
        num--;
        
        if(num > 0){
            const nextRoll = this.fullRoll_Repeat(num, resultDetail);
            return {total: result + nextRoll['total'], resultDetail: nextRoll['resultDetail']};
        }

        return {total: result, resultDetail: resultDetail};
    }

    roll  = function(){
        let finalResult = this.fullRoll_Repeat(this.numRolls);
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