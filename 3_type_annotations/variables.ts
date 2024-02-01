// variable types
let movieTitle: string = 'movie1'
movieTitle = 'movie2'
movieTitle = 9 // wrong type

let numCatLives: number = 9
numCatLives += 1
numCatLives = '11' // wrong type

let gameOver: boolean = false
gameOver = true
gameOver = 'false' // wrong type


// type inference
let tvShow = 'Prison Break'
tvShow = false // wrong type


// any type
let var1: any = "hello"
var1 = 1
var1 = false
var1() // JS error
var1.nonexistentMethod() // JS error
