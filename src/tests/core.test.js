import { describe, it, expect } from "vitest"
import {
  calculateDiscount,
  fetchData,
  getCoupons,
  isPriceInRange,
  validateUserInput,
} from "../core"

describe("getCoupons", () => {
  it("should return an array ", () => {
    const result = getCoupons()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThanOrEqual(1)
  })
  it("should return array with a valid coupon code", () => {
    const coupons = getCoupons()
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code")
      expect(typeof coupon.code).toBe("string")
      expect(coupon.code).toBeTruthy(true)
    })
  })
  it("should return array with a valid discount", () => {
    const coupons = getCoupons()
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount")
      expect(typeof coupon.discount).toBe("number")
      expect(coupon.discount).toBeGreaterThan(0)
      expect(coupon.discount).toBeLessThan(1)
    })
  })
})

describe("calculateDiscount", () => {
  it("should return discounted price if given valid code", () => {
    const tenPercentOff = calculateDiscount(10, "SAVE10")
    const twentyPercentOff = calculateDiscount(10, "SAVE20")

    expect(tenPercentOff).toBe(9)
    expect(twentyPercentOff).toBe(8)
  })
  it("should handle non-numeric price", () => {
    const result = calculateDiscount("10", "SAVE10")
    expect(result).toMatch(/invalid/i)
  })
  it("should handle negative price", () => {
    const result = calculateDiscount(-10, "SAVE10")
    expect(result).toMatch(/invalid/i)
  })
  it("should handle non string discount code", () => {
    const result = calculateDiscount(10, 20)
    expect(result).toMatch(/invalid/i)
  })
  it("should handle invalid discount code", () => {
    const result = calculateDiscount(10, " 20")
    expect(result).toBe(10)
  })
})

describe("validateUserInput", () => {
  it("should return validation successful if given the right values", () => {
    expect(validateUserInput("Abnet", 24)).toMatch(/successful/i)
  })
  it("should return invalid error message if username lessthan 3 chars ", () => {
    expect(validateUserInput("Ab", 24)).toMatch(/invalid/i)
  })
  it("should return invalid error message if type of username is not string ", () => {
    expect(validateUserInput(24, 24)).toMatch(/invalid/i)
  })
  it("should return invalid error message if type of username is greater than 255 chars ", () => {
    expect(validateUserInput("A".repeat(300), 24)).toMatch(/invalid/i)
  })
  it("should return invalid error message if type of age is not number", () => {
    expect(validateUserInput("Abnet", "24")).toMatch(/invalid/i)
  })
  it("should return invalid error message if given age is lessthan 18", () => {
    expect(validateUserInput("Abnet", 17)).toMatch(/invalid/i)
  })
  it("should return invalid error message if given both age and username is invalid", () => {
    expect(validateUserInput("Ab", 17)).toMatch(/invalid/i)
  })
})

describe("isPriceInRange", () => {
  it("should return false if price is with in the range", () => {
    expect(isPriceInRange(0, 5, 10)).toBe(false)
  })
  it("should return ture if price is within the range", () => {
    expect(isPriceInRange(10, 5, 15)).toBe(true)
  })
})
describe("isPriceRange", () => {
  it.each([
    {
      scenario: "price greater than min and lessthan max",
      min: 0,
      price: 5,
      max: 10,
      result: true,
    },
    {
      scenario: "price less than min ",
      min: 10,
      price: 7,
      max: 15,
      result: false,
    },
    {
      scenario: "price greater than min and max ",
      min: 10,
      price: 20,
      max: 15,
      result: false,
    },

    {
      scenario: "price equal to both min and max ",
      min: 5,
      price: 5,
      max: 5,
      result: true,
    },
  ])(
    "should return $result if passed $scenario ",
    ({ min, price, max, result }) => {
      expect(isPriceInRange(price, min, max)).toBe(result)
    }
  )
})
describe("fetchData", () => {
  it("should return a promise that will return a resolve to array of numbers", () => {
    fetchData().then((result) => {
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBeGreaterThan(0)
    })
  })
})
