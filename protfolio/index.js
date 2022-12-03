var nav = document.getElementById("nav")
var menu = document.getElementById("menu")
// var inner = document.getElementById("inner")
window.onscroll=function(){
    if( window.pageYOffset >=40){
nav.classList.add("sticky")
    }
    else{
        nav.classList.remove("sticky")
    }       
    // if(document.body.scrollTop>250||document.documentElement.scrollTop>250) {
    //     inner.style.opacity="0"
    // }
    // else{
    //     inner.style.opacity="1"
    // }
}
//about section code
 var skillsBtn = document.getElementById("skills-btn")
 var eduBtn = document.getElementById("edu-btn")
 var content1 = document.getElementById("content1")
 var content2 = document.getElementById("content2")
 function skillsbtn(){
    skillsBtn.classList.add('active-btn')
    eduBtn.classList.remove('active-btn')
    content1.classList.add('active-content')
    content2.classList.remove('active-content')
 }
 function edubtn(){
    skillsBtn.classList.remove('active-btn')
    eduBtn.classList.add('active-btn')
    content1.classList.remove('active-content')
    content2.classList.add('active-content')
 }
 function projectsbtn(){
    skillsBtn.classList.remove('active-btn')
    eduBtn.classList.remove('active-btn')
    content1.classList.remove('active-content')
    content2.classList.remove('active-content')
 }
 //responsive nav bar
 var menu = document.getElementById("menu")
 var close = document.getElementById("cross")
 var open = document.getElementById("menuicon")

 function openmenu(){
menu.style.right = "0"
 }

 function closemenu(){
menu.style.right="-200px"
 }