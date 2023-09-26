const formulario = document.getElementById("formulario")
const categoriaSelect = document.getElementById("categoria")
const descricaoInput = document.getElementById("descricao")
const dataInput = document.getElementById("data")
const pendentesUl = document.getElementById("pendentes")
const concluidasUl = document.getElementById("concluidas")

formulario.addEventListener("submit", evento => {
  evento.preventDefault()
  const categoria = categoriaSelect.value
  const descricao = descricaoInput.value
  const data = dataInput.value
  criarTarefa(categoria, descricao, data)
})

function criarTarefa(categoria, descricao, data) {
  console.log(`${categoria} ${descricao} ${data}`)
  
  const tarefaLi = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")

  checkbox.type = "checkbox"
  checkbox.addEventListener('change', concluir)
  tarefaLi.appendChild(checkbox)
  
  label.textContent = descricao
  tarefaLi.appendChild(label)
  tarefaLi.classList.add(categoria)

  pendentesUl.appendChild(tarefaLi)
}

function concluir(evento) {
  const parent = evento.target.parentNode
  if(evento.target.checked) {
    pendentesUl.removeChild(parent)
    concluidasUl.appendChild(parent)
  } else {
    concluidasUl.removeChild(parent)
    pendentesUl.appendChild(parent)
  }
}