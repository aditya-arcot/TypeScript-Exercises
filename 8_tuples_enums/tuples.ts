type color = [number, number, number]
// valid assignment
let myColor: color = [255, 0, 255]
// wrong number of elements
myColor = [255, 0]
// incorrect type
myColor = [255, 0, "b"]
// incorrect type
myColor[0] = "abc"
// limitation - push/pop operations allowed after creation
myColor.push(0)
myColor.pop()

type HTTPResponse = [number, string]
const ok = [200, "ok"]
const err = [500, "internal error"]
