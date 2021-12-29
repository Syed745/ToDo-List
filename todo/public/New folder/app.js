var a = document.getElementById('inp')
var b = document.getElementById('creatUl')

function foo(){
    var inpValue = a.value;
    var todoLi = document.createElement('li')
todoLi.setAttribute('class', 'list')
    var creaText = document.createTextNode(inpValue)
    todoLi.appendChild(creaText)
    b.appendChild(todoLi)

    
    var delet = document.createElement('button')
    var dlTxt = document.createTextNode('Delete')
    delet.setAttribute('class', 'btn')
    delet.setAttribute('onclick', 'deleteTodo(this)')
    delet.appendChild(dlTxt)
    todoLi.appendChild(delet)

    // delet.setAttribute('class', 'btn')
    var ed = document.createElement('button')
    var edTxt = document.createTextNode('EDIT')
    ed.setAttribute('class', 'edit')
    ed.setAttribute('onclick', 'editTodo(this)')
    ed.appendChild(edTxt)
    todoLi.appendChild(ed)

} 

function deleteTodo(ele){
    ele.parentNode.remove()
}
function editTodo(edit){
edit.parentNode.firstChild.nodeValue = prompt('user edit')
}

function ddele(){
 b.innerHTML = " ";
}