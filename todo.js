// var listdata = document.getElementById("listdata") //list
// var inpudata = document.getElementById("input")
// function AddTodo() {
//     if (inpudata.value.length > 0) {
//         var checkdata = validateData(inpudata)
//         if (checkdata) {
//             var liElement = document.createElement("li")
//             liElement.setAttribute("style","margin:5px")
            
//             var bold = document.createElement("b")//inline

//             var litext = document.createTextNode(inpudata.value)
           
//             bold.appendChild(litext)

//             var input = document.createElement("input")
//             input.setAttribute("style","display:none")
//             liElement.appendChild(input)

//             liElement.appendChild(bold)
//             // bold.style.width=80+"%"
//             bold.setAttribute("style","width:60% !important;display:inline-block;overflow:hidden")
//             console.log(liElement.childNodes[0])
          
            
// var img =document.createElement("img")
// img.src=("https://img.icons8.com/ios-glyphs/30/delete-sign.png ")
//             var editButton = document.createElement("Delete")
//             var editText = document.createTextNode("Edit")
//             editButton.setAttribute("class","btn btn-warning")
//             editButton.appendChild(editText)
//             editButton.setAttribute("OnClicK","editbtn(this)")


//             var UpdateButton = document.createElement("button")
//             var UpdateText = document.createTextNode("Update")
//             UpdateButton.setAttribute("class","btn btn-primary")
//             UpdateButton.appendChild(UpdateText)
//             UpdateButton.setAttribute("style","display:none")
//             UpdateButton.setAttribute("onClick",'updateBtn(this)')

//             // UpdateButton.setAttribute("OnClicK","editbtn(this)")


            
//             var deletButton = document.createElement("button")
//             var deleteText = document.createTextNode("")
//             deletButton.setAttribute("class","btn btn-danger")
//             deletButton.appendChild(deleteText)
// deletButton.appendChild(img)

//             // deletButton.style.backgroundColor="red"
//             deletButton.setAttribute("style","margin:    2px, ")
//             deletButton.setAttribute("onclick","DeleteButton(this)")


           
//             liElement.appendChild(editButton)
//             liElement.appendChild(deletButton)
//             liElement.appendChild(UpdateButton)

//             listdata.appendChild(liElement)
            
//             inpudata.value = ""
//         }
//         else{
//             inpudata.value = ""
//         }
//     }
//     else{
        
//     }
// }

// function validateData(data) {
//     var checkdata = false;
//     for (var i = 0; i < data.value.length; i++) {
//         console.log(data.value.toString().charCodeAt(i))
//         if (data.value.toString().charCodeAt(i) != 32) {
//             checkdata = true
//             break
//         }
//     }
//     console.log(checkdata   )
//     return checkdata
// }

// function DeleteButton(e){
//     // console.log("delete",e.parentNode)
//     e.parentNode.remove()
// }

// function editbtn(e){
//     console.log(e.parentNode.childNodes[0].innerText)
//     var inptext = e.parentNode.childNodes[0].innerText
//     var newData = prompt("enter value",inptext)
//     if(newData!=""){
//         console.log(newData)
//         e.parentNode.childNodes[0].innerText = newData

//     }
//      // console.log(listdata.childNodes.length)
//      for(var i=1;i<listdata.childNodes.length;i++){
//         // console.log( listdata.childNodes[i].childNodes)
//         listdata.childNodes[i].childNodes[0].setAttribute("style","display:none")
//         listdata.childNodes[i].childNodes[1].setAttribute("style","width:60% !important;display:inline-block;overflow:hidden")
//        listdata.childNodes[i].childNodes[2].setAttribute("style","display:inline")
//        listdata.childNodes[i].childNodes[3].setAttribute("style","display:inline")
//        listdata.childNodes[i].childNodes[4].setAttribute("style","display:none")

//     }

//     // // console.log( e.parentNode.childNodes[0])
//     e.parentNode.childNodes[0].value=e.parentNode.childNodes[1].innerText
//     e.parentNode.childNodes[0].setAttribute("style","display:inline;width:80%")
//     e.parentNode.childNodes[1].setAttribute("style","display:none")
//     e.parentNode.childNodes[2].setAttribute("style","display:none")
//     e.parentNode.childNodes[3].setAttribute("style","display:none")
//     e.parentNode.childNodes[4].setAttribute("style","display:inline")

// }




var listdata = document.getElementById("listdata") //list
var inpudata = document.getElementById("input")
function AddTodo() {
    if (inpudata.value.length > 0) {
        var checkdata = validateData(inpudata)
        if (checkdata) {
            var liElement = document.createElement("li")
            liElement.setAttribute("style","margin:5px")
            
            var bold = document.createElement("b")//inline

            var litext = document.createTextNode(inpudata.value)
           
            bold.appendChild(litext)

            //input

            var input = document.createElement("input")
            input.setAttribute("style","display:none")
            liElement.appendChild(input)
           
            

            liElement.appendChild(bold)
            // bold.style.width=80+"%"
            bold.setAttribute("style","width:60% !important;display:inline-block;overflow:hidden")
            console.log(liElement.childNodes[0])
          
            

            var editButton = document.createElement("button")
            var editText = document.createTextNode("Edit")
            editButton.setAttribute("class","btn btn-warning")
            editButton.appendChild(editText)
            editButton.setAttribute("OnClicK","editbtn(this)")

            var UpdateButton = document.createElement("button")
            var UpdateText = document.createTextNode("Update")
            UpdateButton.setAttribute("class","btn btn-primary")
            UpdateButton.appendChild(UpdateText)
            UpdateButton.setAttribute("style","display:none")
            UpdateButton.setAttribute("onClick",'updateBtn(this)')

            // UpdateButton.setAttribute("OnClicK","editbtn(this)")


            
            var deletButton = document.createElement("button")
            var deleteText = document.createTextNode("Delete")
            deletButton.setAttribute("class","btn btn-danger")
            deletButton.appendChild(deleteText)
            // deletButton.style.backgroundColor="red"
            deletButton.setAttribute("style","margin:    2px, ")
            deletButton.setAttribute("onclick","DeleteButton(this)")


           
            liElement.appendChild(editButton)
            liElement.appendChild(deletButton)
            liElement.appendChild(UpdateButton)
           

            listdata.appendChild(liElement)
            
            inpudata.value = ""
        }
        else{
            inpudata.value = ""
        }
    }
    else{
        
    }
}

function validateData(data) {
    var checkdata = false;
    for (var i = 0; i < data.value.length; i++) {
        console.log(data.value.toString().charCodeAt(i))
        if (data.value.toString().charCodeAt(i) != 32) {
            checkdata = true
            break
        }
    }
    console.log(checkdata   )
    return checkdata
}

function DeleteButton(e){
    // console.log("delete",e.parentNode)
    e.parentNode.remove()
}

function editbtn(e){
    // console.log(e.parentNode.childNodes[0].innerText)
    // var inptext = e.parentNode.childNodes[0].innerText
    // var newData = prompt("enter value",inptext)
    // if(newData!=""){
    //     console.log(newData)
    //     e.parentNode.childNodes[0].innerText = newData

    // }

    // console.log(listdata.childNodes.length)
    for(var i=1;i<listdata.childNodes.length;i++){
        // console.log( listdata.childNodes[i].childNodes)
        listdata.childNodes[i].childNodes[0].setAttribute("style","display:none")
        listdata.childNodes[i].childNodes[1].setAttribute("style","width:60% !important;display:inline-block;overflow:hidden")
       listdata.childNodes[i].childNodes[2].setAttribute("style","display:inline")
       listdata.childNodes[i].childNodes[3].setAttribute("style","display:inline")
       listdata.childNodes[i].childNodes[4].setAttribute("style","display:none")

    }

    // // console.log( e.parentNode.childNodes[0])
    e.parentNode.childNodes[0].value=e.parentNode.childNodes[1].innerText
    e.parentNode.childNodes[0].setAttribute("style","display:inline;width:80%")
    e.parentNode.childNodes[1].setAttribute("style","display:none")
    e.parentNode.childNodes[2].setAttribute("style","display:none")
    e.parentNode.childNodes[3].setAttribute("style","display:none")
    e.parentNode.childNodes[4].setAttribute("style","display:inline")


    
    // var inp = document.createElement("input")
    // console.log(inp)
    // e.parentNode.childNodes[0].innerHTML = inp 
    

}

function updateBtn(e){

    e.parentNode.childNodes[1].innerText=e.parentNode.childNodes[0].value
    e.parentNode.childNodes[0].setAttribute("style","display:none")
    e.parentNode.childNodes[1].setAttribute("style","width:60% !important;display:inline-block;overflow:hidden")
    e.parentNode.childNodes[2].setAttribute("style","display:inline")
    e.parentNode.childNodes[3].setAttribute("style","display:inline")
    e.parentNode.childNodes[4].setAttribute("style","display:none")


}
