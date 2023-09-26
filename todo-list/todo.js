const form = document.getElementById("formulario");
const categoriaSelect = document.getElementById("categoria");
const descricaoInput = document.getElementById("descricao");
const dataInput = document.getElementById("data");
const pendentesUL = document.getElementById("pendentes");
const concluidasUL = document.getElementById("concluidas");
let submitSignal = true;

descricaoInput.addEventListener("change", allowSubmit);
form.addEventListener("submit", submitForm);

function allowSubmit(event) {
  if (event.target.value.length > 0) submitSignal = false;
  else  submitSignal = true;
}

function submitForm(event) {
  event.preventDefault();
  if (submitSignal) return;
  const categoria = categoriaSelect.value;
  const descricao = descricaoInput.value;
  const data = dataInput.value;
  criarTarefa(categoria, descricao, data);
}

function criarTarefa(categoria, descricao, data) {
  console.log(`${categoria} ${descricao} ${data}`);
  const tarefaLi = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.addEventListener("change", concluir);

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(descricao));


  tarefaLi.appendChild(label);
  pendentesUL.appendChild(tarefaLi);
}

function concluir(evento) {
  console.log(`function ${concluir.name}`)
  const parent = evento.target.parentNode.parentNode
  if (evento.target.checked) {
    concluidasUL.appendChild(parent);
  } else {
    pendentesUL.appendChild(parent);
  }
}