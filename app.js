const inputbox=document.getElementById("input-box");
const list_container=document.getElementById("list-item");

function AddTask()
{
    if(inputbox.value==='')
        alert("You must write something!");
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list_container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}
list_container.addEventListener("click", function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data",list_container.innerHTML)
}

function showTask()
{
    list_container.innerHTML=localStorage.getItem("data");
}
showTask(); 