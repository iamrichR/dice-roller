class Roll{
    // numRolls(numDice(diceSize)+postRollAdd)
    // default is:  1(1d20+0) => 1d20
    constructor(diceSize, numDice, postRollAdd, numRolls){
        if(diceSize === undefined){
            this.diceSize = 20;
        } else{
            this.diceSize = diceSize;
        }
        
        if(numDice === undefined){
            this.numDice = 1;
        } else{
            this.numDice = numDice;
        }
        
        if(postRollAdd === undefined){
            this.postRollAdd = 0;
        } else{
            this.postRollAdd = postRollAdd;
        }

        if(numRolls === undefined){
            this.numRolls = 1;
        } else{
            this.numRolls = numRolls;
        }
        
    }

    basicRoll = () => Math.floor(Math.random() * Math.floor(this.diceSize)+1);

    //TODO - just for fun, figure out how to use functional programming
    //to refactor into a generic "repeat roll" function that you can pass basic or full into
    basicRoll_Repeat(num){
        let result = this.basicRoll();
        num--;


        if(num > 0){
            return result + this.basicRoll_Repeat(num);
        }

        return result;
    }

    fullRoll(){
        return this.basicRoll_Repeat(this.numDice) + this.postRollAdd;
    }

    fullRoll_Repeat(num){
        let result = this.fullRoll();
        num--;
        
        if(num > 0){
            return result + this.fullRoll_Repeat(num);
        }

        return result;
    }

    roll(){
        return this.fullRoll_Repeat(this.numRolls);
    }

    toString(){
        if(this.numDice === 1 && this.postRollAdd === 0
            && this.numRolls === 1){
                return `1d${this.diceSize}`;
        } else{
            let innerStr = `${this.numDice}d${this.diceSize}`;
            return `${this.numRolls}[${innerStr} + ${this.postRollAdd}]`;
        }
    }
}

export default Roll;