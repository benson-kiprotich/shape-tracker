export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function () {
  if (
    Array.isArray(this.side1) ||
    this.side1 < 0 ||
    Array.isArray(this.side2) ||
    this.side2 < 0 ||
    Array.isArray(this.side3) ||
    this.side3 < 0
  ) {
    return "One or more values are invalid";
  }

  if (
    (typeof this.side1 === "string" && !isNumeric(this.side1)) ||
    (typeof this.side2 === "string" && !isNumeric(this.side2)) ||
    (typeof this.side3 === "string" && !isNumeric(this.side3))
  ) {
    return "One or more values are invalid";
  }

  if (
    this.side1 > this.side2 + this.side3 ||
    this.side2 > this.side1 + this.side3 ||
    this.side3 > this.side1 + this.side2
  ) {
    return "not a triangle";
  } else if (
    this.side1 !== this.side2 &&
    this.side1 !== this.side3 &&
    this.side2 !== this.side3
  ) {
    return "scalene triangle";
  } else if (this.side1 === this.side2 && this.side1 === this.side3) {
    return "equilateral triangle";
  } else {
    return "isosceles triangle";
  }
};
