class Result{
    constructor(roll){
        this.origin = roll
        this.total = 0;
        this.detail = {rolls: [], adds: []};
    }

    printDetail = function(){
        let detailStr = "";
        this.detail.rolls.forEach(item => {
            detailStr += `(${item}), `;
        });
        this.detail.adds.forEach(item => {
            detailStr += `(+${item}), `;
        });

        return detailStr.slice(0,-2);
    }
}

export default Result;