function Numbers(){
    let nums = [1,2,3,4,5,6];

}

Numbers.prototype.getEvens = function() {
    
    console.log(this.nums);
    const evens = this.nums.filter(function(element) {
        return (element % 2 == 0);
    });

    return evens;
};

Numbers.prototype.getOdds = function() {
    const evens = this.nums.filter(function(element) {
        return (element % 2 !== 0);
    });

    return evens;
};

module.exports = Numbers;
