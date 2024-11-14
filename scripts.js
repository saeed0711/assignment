var input=document.getElementById("input")
console.log(input);
let btn=document.getElementById("btn")
let list=document.getElementById("tasklist")

btn.addEventListener("click",()=>{
    let Task=input.value
    console.log(Task);
    localStorage.setItem("tasks", JSON.stringify(Task))

    let li=document.createElement("li") 
    li.className = "task-item";    
    li.innerText=Task
    list.append(li)

    
    let delet=document.createElement("button")  //creating element button
    delet.innerText="delet" 
    li.appendChild(delet)
    delet.onclick=()=>{
        li.remove()
    }
    
    let completed =document.createElement("button")
        completed.innerText="complete"
        completed.onclick=()=>{
            completed.className="completed"
        }
         li.appendChild(completed)

         input.value="" 

})