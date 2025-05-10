// Задание 1: Напишите функцию, которая принимает массив объектов пользователей
// и возвращает новый массив, содержащий только имена пользователей, у которых возраст больше 18 лет.
// Используйте метод перебора массива.
function getAdultUserNames(users) {
  return users.filter((user) => user.age > 18).map((user) => user.name)
}

// Пример вызова:
const users = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 17},
  {name: "Charlie", age: 30},
]
console.log(getAdultUserNames(users)) // должен вернуть ['Alice', 'Charlie']

// Задание 2: Напишите функцию, которая принимает массив товаров (объектов)
// и возвращает объект, где ключи - это категории товаров,
// а значения - массивы товаров этих категорий.
// Используйте подходящий метод перебора массива.
function groupProductsByCategory(products) {
  return products.reduce((acc, product) => {
    const category = product.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(product)
    return acc
  }, {})
}

// Пример вызова:
const products = [
  {id: 1, name: "Laptop", category: "Electronics"},
  {id: 2, name: "Shirt", category: "Clothing"},
  {id: 3, name: "Phone", category: "Electronics"},
]
console.log(groupProductsByCategory(products))
// должен вернуть {
//   Electronics: [
//     { id: 1, name: 'Laptop', category: 'Electronics' },
//     { id: 3, name: 'Phone', category: 'Electronics' }
//   ],
//   Clothing: [
//     { id: 2, name: 'Shirt', category: 'Clothing' }
//   ]
// }
