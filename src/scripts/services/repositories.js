import { baseUrl, repositoriesQuantity } from "../variables.js"


async function getRepoUser(userName) {
  const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
  
  return await response.json()
}


export {getRepoUser}

