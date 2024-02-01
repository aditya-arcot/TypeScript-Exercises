function square(num: number) {
    return num * num
}
square(3)
square('a') // incorrect type
square(false) // incorrect type


function greet(name: string){
    return `Hello ${name}`
}
greet("Bob")
greet(35) // incorrect type


// multiple typed parameters
const doSomething = (person: string, age: number) => {}
doSomething("Bob", 23)
doSomething("Bob", "a") // incorrect type
doSomething("Bob") // incorrect number of args
doSomething("Bob", 23, 100) // incorrect number of args


// typing default parameter
function greet2(name: string = "stranger"){
    return `Hello ${name}` 
}
greet2("Bob")
greet2()
greet2(124) // incorrect type


// return type
const addNums = (num1: number = 1, num2: number = 2): number => {
    return num1 + num2 + "" // incorrect return type
}
addNums()
addNums(2)
addNums(4, 5)


// inferred return type
function return2(){
    return 2
}
return2()


// multiple inferred return types
function random(){
    if (Math.random() < 0.5){ return "1" }
    return 2
}
random()


// anonymous function type inference
const colors = ["red", "blue", "green"]
colors.map(color => {
    color.charAt(2)
    color.somemethod() // not a string method
})


// void
function print(str: string): void{
    console.log(str)
    return "done" // void function cannot return anything
}
print("abc")


// never
function loop(): never{
    while (true){
        console.log("in function")
    }
}