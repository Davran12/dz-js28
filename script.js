const translations = [
  ["hello", "привет"],
  ["world", "мир"],
  ["apple", "яблоко"],
]

const dictionary = new Map(translations)
console.log(dictionary.get("apple"))
//--------------------------
const allowedUsers = new Set(["alice", "bob", "charlie"])

console.log(allowedUsers.has("dave"))
//--------------------------------------
const words = ["apple", "banana", "apple", "orange", "banana", "apple"]
const wordCount = new Map()

for (const word of words) {
  wordCount.set(word, (wordCount.get(word) || 0) + 1)
}

console.log(wordCount)

//-----------------------------------
const userIds = [101, 102, 103, 101, 104, 102]
const seen = new Set()
const newUsers = []

for (const id of userIds) {
  if (!seen.has(id)) {
    seen.add(id)
    newUsers.push(id)
  }
}

console.log(newUsers)
