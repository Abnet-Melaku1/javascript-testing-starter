import { describe, expect, it, test } from "vitest"
import { factorial, fizzBuzz, max } from "../intro"

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    //AAA -> Arrange Act Assert
    // Arrange part
    const a = 30
    const b = 20
    // Act

    const result = max(a, b)
    // Assert

    expect(result).toBe(30)
  })
  it("should return the second argument if it is greater", () => {
    //AAA -> Arrange Act Assert
    // Arrange part
    const a = 20
    const b = 30
    // Act

    const result = max(a, b)
    // Assert

    expect(result).toBe(30)
  })
  it("should return the first argument if it is equal to the second argument ", () => {
    //AAA -> Arrange Act Assert
    // Arrange part
    const a = 30
    const b = 30
    // Act

    const result = max(a, b)
    // Assert

    expect(result).toBe(30)
  })
})

describe("fizzBuzz", () => {
  it("should return FizzBuzz if n % 3 === 0 && n % 5 === 0", () => {
    const a = 15

    const result = fizzBuzz(a)
    expect(result).toBe("FizzBuzz")
  })
  it("should return Fizz if n % 3 === 0 ", () => {
    const a = 3

    const result = fizzBuzz(a)
    expect(result).toBe("Fizz")
  })
  it("should return Buzz if n % 5 === 0 ", () => {
    const a = 5
    const result = fizzBuzz(a)
    expect(result).toBe("Buzz")
  })
  it("should return n changed to string if it is not divisible by 3 or 5", () => {
    const a = 2
    const result = fizzBuzz(a)
    expect(result).toBe(a.toString())
  })
})

describe("factorial", () => {
  it("should return 1 if arg is 0", () => {
    expect(factorial(0)).toBe(1)
  })
  it("should return 1 if arg is 1", () => {
    expect(factorial(1)).toBe(1)
  })
  it("should return 2 if arg is 2", () => {
    expect(factorial(2)).toBe(2)
  })
  it("should return 6 if arg is 3", () => {
    expect(factorial(3)).toBe(6)
  })
  it("should return undefined if arg is lessthan 0", () => {
    expect(factorial(-2)).toBeUndefined()
  })
})
