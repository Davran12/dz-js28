const paragraphs = document.querySelectorAll("p")

paragraphs.forEach((parag) => {
  if (parag.textContent === "Click me") {
    parag.addEventListener("click", () => {
      console.log("Button clicked!")
    })
  }
})
