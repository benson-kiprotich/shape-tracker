/* eslint-disable no-undef */
import { Triangle, isNumeric } from "./../src/triangle.js";

describe("Triangle", () => {
  test("should correctly create a triangle with three lengths", () => {
    const triangle = new Triangle(2, 4, 5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test("should correctly determine whether three lengths are not a triangle", () => {
    const notTriangle = new Triangle(3, 9, 22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  test("should correctly determine whether three lengths make a scalene triangle", () => {
    const scalTriangle = new Triangle(4, 5, 7);
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });

  test("should correctly determine whether three lengths make an isosceles triangle", () => {
    const isoscTriangle = new Triangle(5, 5, 7);
    expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
  });

  test("should correctly determine whether three lengths make an equilateral triangle", () => {
    const equiTriangle = new Triangle(5, 5, 5);
    expect(equiTriangle.checkType()).toEqual("equilateral triangle");
  });
});

describe("validation", () => {
  test("should correctly determine the value passed is numeric", () => {
    const isNumber = isNumeric("5");
    expect(isNumber).toEqual(true);
  });

  test("should correctly determine the value passed is not numeric", () => {
    const isNumber = isNumeric("five");
    expect(isNumber).toEqual(false);
  });

  test("should correctly determine the value passed is an array", () => {
    const isArray = new Triangle([5], 5, 4);
    expect(isArray.checkType()).toEqual("One or more values are invalid");
  });

  test("should correctly determine the value passed is a non numeric string", () => {
    const isArray = new Triangle("five", 5, 4);
    expect(isArray.checkType()).toEqual("One or more values are invalid");
  });

  test("should correctly determine the value passed is a negative number", () => {
    const isArray = new Triangle(5, -5, 4);
    expect(isArray.checkType()).toEqual("One or more values are invalid");
  });
});
