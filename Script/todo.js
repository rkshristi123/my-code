var todo2=JSON.parse(localStorage.getItem("todo1"))
console.log(todo2)
var completed=JSON.parse(localStorage.getItem("completedtodo"))||[]
todo2.map(function(el){
var tr=document.createElement("tr") 
var td1=document.createElement("td") 
td1.innerText=el.name1
var td2=document.createElement("td") 
td2.innerText=el.qty 
var td3=document.createElement("td") 
td3.innerText=el.prty
var td4=document.createElement("td") 
td4.textContent="complete" ;
td4.style.cursor="pointer"
td4.addEventListener("click",function(){
    todo3(el)
});
tr.append(td1,td2,td3,td4) 
document.querySelector("#body").append(tr)


});

function todo3(el){
   completed.push(el)
   localStorage.setItem("completedtodo",JSON.stringify(completed))
}