// ! Задание №1
function sum1(a, b, c) {
  const s = (a + b + c) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
console.log(sum1(3, 4, 5))
// ! Задание №2
function sum(a, b) {
  let i = a.indexOf(b)
  return i + 1 ? i : "Not found"
}
console.log(sum([1, 2, 3], 2))
console.log(sum([1, 2, 3], 5))
