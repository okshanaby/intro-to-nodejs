const addTwoNumbers = (num1, num2) => num1 + num2

test("Add two numbers and returns the sum", ()=> {
    const result = addTwoNumbers(1,2)

    expect(result).toBe(3)
})