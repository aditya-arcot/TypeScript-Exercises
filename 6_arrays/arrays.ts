// type annotation
const names: string[] = []


// elements of same type can be added or assigned
names.push("Bob")
names[0] = "John"
// elements of wrong type cannot
names.push(100)
names[0] = 1000


// alternate type annotation
const ages: Array<number> = []


type Point = {
    x: number
    y: number
}
// array of non-primitive type
const points: Point[] = []
points.push({ x: 1, y: 2 })
points.push({ x: 'abc', y: 10 }) // invalid property


// multi-dimensional array
const arr: number[][] = []
arr.push([1, 2, 3])
