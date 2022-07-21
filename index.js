// Your code here
class Polygon {
  constructor (integerArray) {
    this.integerArray = integerArray;
    this.count = this.integerArray.length
  };

  get countSides() {
    return this.integerArray.length;
  };

  get perimeter() {
    return this.integerArray.reduce((x,y) => x + y, 0);
  };
};

class Triangle extends Polygon {
  // inherits constructor from Polygon class
  get isValid() {
    if (this.count === 3) {
      let side1 = this.integerArray[0];
      let side2 = this.integerArray[1];
      let side3 = this.integerArray[2];
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  };
};

class Square extends Polygon {
  // inherits constructor from Polygon class
  get isValid() {
    if (this.count === 4) {
      let side1 = this.integerArray[0];
      let side2 = this.integerArray[1];
      let side3 = this.integerArray[2];
      let side4 = this.integerArray[3];
      return((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  };

  get area() {
    if (!Array.isArray(this.integerArray)) return;
    if (this.count !== 4) return;
    return this.integerArray[0] * this.integerArray[0]
  }
};