//! Задание№1
let number = 1
for (let i = 0; i < 7; i++) {
  console.log(number)
  number *= 2
}
//! Задание№2
const arr = ["canon", "polaroid", "nikon", "sony", "fujifilm", "pentax"]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
//! Задание№3
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].length)
}
//! Задание№4
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    console.log(arr[i])
  }
}
