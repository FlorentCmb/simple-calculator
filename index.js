const calculate = (num1, operator, num2) => {
    // Variables checking
    if (typeof num1 === "number" && typeof operator === "string" && typeof num2 === "number") {
        // Functions
        const add = (num1, num2) => console.log(`${num1} + ${num2} = ${num1 + num2}`)
        const multiply = (num1, num2) => console.log(`${num1} * ${num2} = ${num1 * num2}`)
        const substract = (num1, num2) => console.log(`${num1} - ${num2} = ${num1 - num2}`)
        const divide = (num1, num2) => console.log(`${num1} / ${num2} = ${num1 / num2}`)
        const powered = (num1, num2) => console.log(`${num1}^${num2} = ${num1 ** num2}`)
        const root = (num1, num2) => console.log(`${num2}√${num1} = ${Math.pow(num1, (1/num2))}`)
        const euclidianDivision = (num1, num2) => console.log(`The rest of ${num1} ÷ ${num2} = ${num1 % num2}`)
        const percentage = (num1, num2) => console.log(`${num1} ${num2 > 0 ? "+" + num2 : num2}% = ${num1 * (1 + (num2 / 100))}`)
    
        const operators = {
            "+" : () => add(num1, num2),
            "*" : () => multiply(num1, num2),
            "-" : () => substract(num1, num2),
            "/" : () => divide(num1, num2),
            "^" : () => powered(num1, num2),
            "√" : () => root(num1, num2),
            "÷" : () => euclidianDivision(num1, num2),
            "%" : () => percentage(num1, num2)
        }
    
        return operators[operator](num1, num2)
    }
}