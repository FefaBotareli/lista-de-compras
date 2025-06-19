export default function editarItem(containerItemLista, nomeItem, botaoEditar, checkbox) {
  if (botaoEditar.dataset.editando === "true") {
    // Salvar edição
    const inputEdicao = containerItemLista.querySelector("input[type='text']");
    if (inputEdicao && inputEdicao.value.trim() !== "") {
      nomeItem.innerText = inputEdicao.value.trim();
    }
    containerItemLista.replaceChild(nomeItem, inputEdicao);
    containerItemLista.insertBefore(checkbox, nomeItem);

    botaoEditar.dataset.editando = "false";
    botaoEditar.innerHTML = "✏️";
    botaoEditar.title = "Editar item";

    checkbox.disabled = false; // Desmarca o checkbox ao salvar a edição
    checkbox.classList.remove("desativado");
  } else {
    // Modo de edição
    const inputEdicao = document.createElement("input");
    inputEdicao.type = "text";
    inputEdicao.value = nomeItem.innerText;
    inputEdicao.classList.add("input-edicao");

    containerItemLista.replaceChild(inputEdicao, nomeItem);
    containerItemLista.removeChild(checkbox);
    inputEdicao.focus();
    inputEdicao.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        botaoEditar.click();
      }
    });

    botaoEditar.dataset.editando = "true";
    botaoEditar.textContent = "📝";
    botaoEditar.title = "Salvar edição";

    checkbox.disabled = true; // Desabilita o checkbox enquanto edita
    checkbox.classList.add("desativado");
  }
}