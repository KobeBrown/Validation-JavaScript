var valEle = document.body.querySelector(".val")
var Header = document.body.querySelector(".Home")
var User = document.body.querySelector(".User")
var Submit = document.body.querySelector(".Submit")
var ErrorMessage = document.body.querySelector(".ErrorMessage")
var Importance=document.body.querySelector("importance")


var NextPageView = document.body.querySelector(".NextPageView")
var Notes = document.body.querySelector(".NextPage")

var AddingNotes = document.body.querySelector(".AddingNotes")
var Error = document.body.querySelector(".Error")

var list = []

NextPageView.style.display = "none"

function NextView(){
  valEle.style.display = "none"
  NextPageView.style.display = "block"
}

function renderList(){
  document.body.querySelector(".list").innerHTML ="";
  for(var i=0; i<list.length; i++){
    var itmEle = document.createElement("h6");
    itmEle.innerHTML=list[i]
    document.body.querySelector(".list").appendChild(itmEle)
  }
}


document.body.querySelector(".Submit").addEventListener("click",function(){
  if(User.value == "coolStudent123"){
    NextView()
  }else{
    document.body.querySelector(".ErrorMessage").innerHTML = "Incorrect Username"
  }
})

document.body.querySelector(".Notes").addEventListener("click",function(){
  if(!isNaN(AddingNotes.length>=1)){
   list.push(AddingNotes.value) 
    renderList() 
  }else{
    Error.innerHTML = "Not Enough Characters"  
  }
})