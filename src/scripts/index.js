import { getUser } from "./services/user.js"
import { getRepoUser } from "./services/repositories.js"
import { getEvents } from "./services/events.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"


document.querySelector('#btn-search').addEventListener('click', () => {
  const buscarUsuario = document.querySelector('#input-search').value
  if (validateEmptyInput(buscarUsuario)) return
  getUserProfile(buscarUsuario)
})

document.querySelector('#input-search').addEventListener('keyup', (e) => {

  const userName = e.target.value

  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13
  if (isEnterKeyPressed) {
    if (validateEmptyInput(userName)) return
    getUserProfile(userName)

  }

})

function validateEmptyInput(userName) {

  if (userName.length === 0) {
    alert('Preencha o campo com o nome do usuário do GitHub')
    return true

  }
}

async function getUserProfile(nameUser) {

  const userResponse = await getUser(nameUser)

  if (userResponse.message === "Not Found") {
    screen.renderNotFound()
    return
  }

  const repositoriesResponse = await getRepoUser(nameUser)

  const eventsResponse = await getEvents(nameUser)

  user.setInfo(userResponse)
  user.setRepositories(repositoriesResponse)
  user.setEvents(eventsResponse)

  screen.renderUser(user)


}




