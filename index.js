class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length
    }

    get countSides() {
         return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((acc, currentSide) => acc + currentSide, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];

        if (a + b < c || a + c < b || b + c < a) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get area() {
        return this.sides[0] ** 2;
    }
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        let d = this.sides[3];
        if (a === b && b === c && c === d && d === a) {
            return true
        } else {
            return false
        }
    }
}