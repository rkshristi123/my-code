document.querySelector("form").addEventListener("submit",myfunc)
var todo=JSON.parse(localStorage.getItem("todo1"))||[]
function myfunc(){
    event.preventDefault()
    var name1=document.querySelector("#name").value 
    var qty=document.querySelector("#qty").value 
    var prty=document.querySelector("#priority").value 

    var obj={
        name1,
        qty,
        prty
    }
    console.log(obj)
    todo.push(obj)
    console.log(todo)
    localStorage.setItem("todo1",JSON.stringify(todo))
}