var complete=JSON.parse(localStorage.getItem("completedtodo"))
console.log(complete)


    
    complete.map(function(el){
       var tr=document.createElement("tr") 
     var  td1=document.createElement("td") 
      td1.innerText=el.name1;
      var td2=document.createElement("td") 
      td2.innerText=el.qty 
      var td3=document.createElement("td") 
      td3.innerText=el.prty
      tr.append(td1,td2,td3)
      document.querySelector("#body").append(tr)
    })
        

