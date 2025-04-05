let number = prompt("Введите число:")

if (number % 2 === 0) {
  if (number % 4 === 0) {
    console.log("Число четное и делится на 4")
  } else {
    console.log("Число четное, но не делится на 4")
  }
} else {
  if (number % 9 === 0) {
    console.log("Число нечетное и делится на 9")
  } else {
    console.log("Число нечетное и не делится на 9")
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}
