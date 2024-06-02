// regular enum
// declaration - TS
enum TSDirection {
    Up, // defaults to 0
    Down, // increments by 1
    Right = 5,
    Left, // 6
    Front = 'front',
    Back = 10 // follows string value - must be explicity set
}
// declaration - JS
var JSDirection
(function (JSDirection) {
    JSDirection[JSDirection["Up"] = 0] = "Up"
    JSDirection[JSDirection["Down"] = 1] = "Down"
    JSDirection[JSDirection["Right"] = 5] = "Right"
    JSDirection[JSDirection["Left"] = 6] = "Left"
    JSDirection["Front"] = "front"
    JSDirection[JSDirection["Back"] = 10] = "Back"
})(JSDirection || (JSDirection = {}));

// usage - TS
const tsDir = TSDirection.Down
// usage - JS
const jsDir = JSDirection.Down


// const enum
// declaraction - TS
const enum Status {
    Pending,
    Shipped,
    Delivered
}
// no declaration JS

// usage - TS
const tsStatus = Status.Delivered
// usage - JS
const jsStatus = 2
