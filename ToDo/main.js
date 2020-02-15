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
  checkBox.addEventListener("onchange", isDone );

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
  //let el = document.getElementsByClassName('done');
  //let list = document.getElementsByTagName('li');
 event.target.checked === true ? list.classList.add('completed') : list.classList.remove('completed');
}
