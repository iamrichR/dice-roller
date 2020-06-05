class Result{
    constructor(roll){
        this.origin = roll
        this.total = 0;
        this.detail = {rolls: [], adds: []};
        //rolls will be an array of arrays
        //one array for each roll
        //each inner roll array will contain string for the results of those dice rolls
    }

    printDetail = function(){
        //I think in order to make this work, detailStr will
        //need to return an array of strings, one for each
        //roll.

        //on the Display/RollHistory side of things, if
        //a printDetail is too large (you can do a quick test like detail.rolls.length)
        //then the detail string should be replaced with a small "expand details" button,
        //which will bring up a modal window with the expanded details

        let detailStr = "";
        this.detail.rolls.forEach(item => {
            detailStr += `(${item}), `;
        });

        //adds will only ever be the same number because the roll obj only allows
        //for a static add value.  So don't add every add into an array, just save a single
        //static add value to the add property.
        this.detail.adds.forEach(item => {
            detailStr += `(+${item}), `;
        });

        /* 
            rolls.forEach(rollArr => {
                let innerRollStr = "[";
                rollArr.forEach(item => {
                    innerRollStr += `(${item}), `;
                })
                innerRollStr = innerRollStr.slice(0,-2);
                innerRollStr += (this.detail.add != 0 ? ("+" + this.detail.add) : '') + "]";
                
                //output innerRollStr somehow
            })
        */

        return detailStr.slice(0,-2);
    }
}

export default Result;