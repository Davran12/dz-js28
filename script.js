async function getUserPosts(userId) {
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )

  if (!userResponse.ok) {
    throw new Error("User not found")
  }

  const user = await userResponse.json()

  const postsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
  const posts = await postsResponse.json()

  return {
    user,
    posts,
  }
}

getUserPosts(5).then(console.log).catch(console.error)

//!--------------------------------
async function findLongestPost(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
  const posts = await response.json()

  if (!posts.length) {
    throw new Error("No posts found")
  }

  let longest = posts[0]

  for (const post of posts) {
    if (post.body.length > longest.body.length) {
      longest = post
    }
  }

  return {
    id: longest.id,
    title: longest.title,
    body: longest.body,
    length: longest.body.length,
  }
}

;(async () => {
  try {
    const longestPost = await findLongestPost(1)
    console.log(longestPost)
  } catch (error) {
    console.error(error)
  }
})()
