var list = document.getElementById("list")

function add_todo(){
    var todo_item = document.getElementById("todo_item")
    var li = document.createElement("li")
    var litext = document.createTextNode(todo_item.value)
    li.setAttribute("class","li")
    li.appendChild(litext)
    list.appendChild(li)
    todo_item.value = " "
    
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete")
    delbtn.appendChild(deltext)
    delbtn.setAttribute("onclick","delete_item(this)")
    delbtn.setAttribute("class","delbtn")

    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Update")
    editbtn.appendChild(edittext)
    editbtn.setAttribute("onclick","edititem(this)")
    editbtn.setAttribute("class","editbtn")

    li.appendChild(delbtn)
    li.appendChild(editbtn)
  
}

function delete_item(e){
    e.parentNode.remove()

}

function delete_all(){
    list.innerHTML = ""
}

function edititem(e){
   e.parentNode.firstChild.nodeValue
   var val = prompt ("Enter updated value" , e.parentNode.firstChild.nodeValue )
   e.parentNode.firstChild.nodeValue = val
   console.log(e.parentNode.firstChild.nodeValue)
  
}