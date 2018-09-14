function Numbers(){
    this.nums = [];

    for (var i = 1; i <= 100; i++) {
        this.nums.push(i);
    }
}

Numbers.prototype.getEvens=function(){
    const evens = this.nums.filter(function(element) {
        return (element % 2 == 0);
    });

    return evens;
};

Numbers.prototype.getOdds=function(){
    const evens = this.nums.filter(function(element) {
        return (element % 2 !== 0);
    });

    return evens;
};

module.exports=Numbers;
