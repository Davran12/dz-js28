function count(arr) {
  const result = {}

  for (let num of arr) {
    if (result[num]) {
      result[num] += 1
    } else {
      result[num] = 1
    }
  }

  return result
}

console.log(count([1, 2, 2, 3, 1, 1, 4, 2, 5]))
