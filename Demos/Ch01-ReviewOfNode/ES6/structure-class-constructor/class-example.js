class Square {
    constructor(width) {
      this.width = width;
    }
  
    area() {
      return this.width * this.width;
    }
}

const newSquare = new Square(3);
console.log(newSquare.area());
