//document.write("welcome")
function addtask(){
var element = document.getElementById('task container')
console.log(element)
var newElement= document.createElement('div')
newElement.setAttribute('id','ind-task')
newElement.innerHTML="<p>task1</p><button>delete</button>"
element.append(newElement)
}
function Deletetask(event){
    console.log.event
}
