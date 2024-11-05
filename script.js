function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (img.contains("./assets/avatar-light.png")) {
    Text.setAttribute("alt", "Mayk Brito de jaqueta preta e óculos escuros")
  } else {
    Text.setAttribute(
      "alt",
      "Foto Mayk Brito de camisa preta sorrindo e óculos de grau"
    )
  }
}
