function fetchWithRetry(fetchFunction, retries) {
  return new Promise((resolve, reject) => {
    function attempt(remainingTries) {
      fetchFunction()
        .then(resolve)
        .catch((error) => {
          if (remainingTries === 0) {
            reject("Не удалось загрузить")
          } else {
            setTimeout(() => attempt(remainingTries - 1), 1000)
          }
        })
    }

    attempt(retries)
  })
}

const mockFetch = () =>
  new Promise((res, rej) =>
    Math.random() > 0.3 ? res("Данные получены") : rej("Ошибка сети")
  )

fetchWithRetry(mockFetch, 3)
  .then((data) => console.log(data))
  .catch((error) => console.error(error))

// ! -----------------------------------------------------------

function timeoutPromise(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject("Таймаут"), ms)
  )

  return Promise.race([promise, timeout])
}

const slowPromise = new Promise((res) => setTimeout(() => res("Успех!"), 2000))

timeoutPromise(slowPromise, 2500).then(console.log).catch(console.error)
