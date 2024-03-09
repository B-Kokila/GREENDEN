// selecting menuicon
var menuicon=document.getElementById("menuicon")
var sidenav=document.getElementById("sidenav")
var sideright=document.getElementById("sideright")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
sideright.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
