import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
import editarItem from "./EditarItens.js";

const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista(){
    if(inputItem.value === ""){
        alert("Por favor, coloque um item na lista!");
        return;
    }
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox- " + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;
    
    inputCheckbox.addEventListener("click", function(){
        if (inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through";
        } else{
            nomeItem.style.textDecoration = "none";
        }
    });

    const botaoEditar = document.createElement("button");
    botaoEditar.innerText = "✏️";
    botaoEditar.classList.add("botao-editar");
    
    botaoEditar.addEventListener("click", function() {
        editarItem(containerItemLista, nomeItem, botaoEditar, inputCheckbox);
    });
  
    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(nomeItem);
    containerItemLista.appendChild(botaoEditar);
    itemDaLista.appendChild(containerItemLista);
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}