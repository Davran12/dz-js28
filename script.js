// function createPasswordChecker(expectedPassword) {
//   return function (enteredPassword) {
//     return enteredPassword === expectedPassword
//   }
// }

// const checkPassword = createPasswordChecker("secret123")
// console.log(checkPassword("hello"))
// console.log(checkPassword("secret123"))
//----------------------------------------------------
// function startCounter(max, interval) {
//   let count = 1
//   const timerId = setInterval(() => {
//     console.log(count)
//     if (count === max) {
//       clearInterval(timerId)
//     }
//     count++
//   }, interval)
// }

// startCounter(5, 1000)
//--------------------------------------------
function countdown(seconds) {
  const timerId = setInterval(() => {
    if (seconds > 0) {
      console.log(seconds)
      seconds--
    } else {
      console.log("Время вышло!")
      clearInterval(timerId)
    }
  }, 1000)
}

countdown(3)
