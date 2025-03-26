// ? задание №1
const phone = "+996 (550) 225-456"
let phoneCountry

if (phone.startsWith("+996")) {
  phoneCountry = "KG"
} else if (phone.startsWith("+7")) {
  phoneCountry = "KZ"
} else if (phone.startsWith("+1")) {
  phoneCountry = "US"
} else {
  phoneCountry = "Unknown"
}

console.log(phoneCountry)

// ? задание №2

let year = 1995
let isAlmostLeapYear

if (
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 4 === 3 && (year + 1) % 4 === 0)
) {
  isAlmostLeapYear = true
} else {
  isAlmostLeapYear = false
}

console.log(isAlmostLeapYear)

let year2 = 1999
let isAlmostLeapYear2

if (
  (year2 % 4 === 0 && year2 % 100 !== 0) ||
  (year2 % 4 === 3 && (year2 + 1) % 4 === 0)
) {
  isAlmostLeapYear2 = true
} else {
  isAlmostLeapYear2 = false
}

console.log(isAlmostLeapYear2)

// ? задание №3
let num = 7
let result

switch (true) {
  case num % 7 === 0 && num % 5 !== 0:
    result = "Семёрка!"
    break
  case num % 5 === 0 && num % 7 !== 0:
    result = "Пятёрка!"
    break
  case num % 5 === 0 && num % 7 === 0:
    result = "Семь и пять!"
    break
  default:
    result = "Обычное число"
}

console.log(result)
