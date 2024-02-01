// function with object literal parameter type
function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`)
}
printName({ first: "Thomas", last: "Edison" })


// variable with object literal type
let coordinate: { x: number, y: number } = { x: 34, y: 2 }


// function with object literal return type
function randomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
}


// excess properties
// not allowed inline
printName({ first: "Thomas", last: "Edison", age: 4 })
// allowed with variable declaration
const person = { first: "Thomas", last: "Edison", age: 4 }
printName(person)


// type alias
type Point = {
    x: number
    y: number
}
function randomPoint(): Point {
    return { x: Math.random(), y: Math.random() }
}


// nested objects
type Song = {
    title: string
    artist: string
    streams: number
    credits: {
        producer: string
        writer: string
    }
}
function calculatePayout(song: Song): number {
    return song.streams * 0.003
}
const mySong: Song = {
    title: 'My Song',
    artist: 'Aditya',
    streams: 1000,
    credits: {
        producer: 'Aditya',
        writer: 'Aditya'
    }
}
calculatePayout(mySong)


// optional properties
type Point2 = {
    x: number
    y: number
    z?: number // optional
}
const point: Point2 = { x: 10, y: 5 }


// readonly properties
type User = {
    readonly id: number
    username: string
}
const user: User = {
    id: 1,
    username: 'aarcot'
}
user.id = 2 // cannot be changed
user.username = 'aarcot1'


// interesection type
type Circle = { radius: number }
type Color = { color: string }
type ColorfulCircle = Circle & Color & { orientation: string }
const happyFace: ColorfulCircle = {
    radius: 1,
    color: 'yellow',
    orientation: 'up'
}