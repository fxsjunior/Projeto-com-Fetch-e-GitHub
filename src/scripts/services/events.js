import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getEvents(nameUser){
  const eventsResponse = await fetch(`${baseUrl}/${nameUser}/events?per_page=${repositoriesQuantity}`)

  return await eventsResponse.json()

}

export {getEvents}