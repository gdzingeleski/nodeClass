function Square(width) {
      this.width = width;
}

Square.prototype.area = function() {
       return this.width * this.width;
};

const square = new Square(4);
console.log(square.area());

