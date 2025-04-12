// ! Задание №1
function heron(a, b, c) {
  var s = (a + b + c) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
console.log(heron(3, 4, 5))
// ! Задание №2
function Kata(a, e) {
  let i = a.indexOf(e)
  return i + 1 ? i : "Not found"
}
console.log(Kata([1, 2, 3], 2))
console.log(Kata([1, 2, 3], 5))
