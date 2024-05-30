// union type annotation
let age: number | string = 10


// values of any of union types are valid
age = 20
age = "30"
// not valid
age = false


// parameter with union type
const printAge = (age: string | number): void => {
    console.log(`age: ${age}`)
}
printAge(10)
printAge("20")
printAge(true)


// type narrowing
const calculateTax = (price: number | string, tax: number) => {
    if (typeof price === 'string') {
        price = parseFloat(price.replace('$', ''))
    }
    // price is a number here
    return price * tax
}
console.log(calculateTax(45, 0.07))
console.log(calculateTax("$45", 0.07))


// mixed array
const arr: (number | string)[] = []
arr.push(10)
arr.push('20')


// union literal type
let bit: 0 | 1 = 0
bit = 1
// invalid
bit = 2
