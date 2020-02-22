// incluir cada item(tarefa) em um objeto tarefas
//loop tarefas e por cada  tarefa , incluir em lista. display block



let addItem = () => {
  let newItem = document.getElementById("newItem").value;
  let lista = document.getElementById("lista");
  let delBtn = document.createElement("button");
  let newLi = document.createElement("li");
let checkBox = document.createElement("input");
// newLi.innerHTML = `<label>${newItem}</label>`;

  delBtn.setAttribute("onclick", "removeItem(this)");
  delBtn.innerText ='X';
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "done");
  checkBox.addEventListener("change", isDone );

  newLi.append(checkBox, delBtn);
  lista.append(newLi);
  delBtn.before(checkBox, `${newItem}`);


  
};
          //checkbox onclick virar verde
          //remove onclick vermelho
let removeItem = item => {
//li=this.parentNode ul = li.parentNode; ul.removeChild(li);
  item.parentNode.parentNode.removeChild(item.parentNode);
};

let isDone = (event) =>{

 event.target.checked === true ? event.target.parentNode.classList.add('completed') : event.target.parentNode.classList.remove('completed');
}


