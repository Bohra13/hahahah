burger=document.querySelector(".burger")
navbar=document.querySelector(".navbar")
rightnav=document.querySelector(".rightnav")
navlist=document.querySelector(".navlist")

burger.addEventListener('click',()=>{
    
  
    navbar.classList.toggle("navheight");
    rightnav.classList.toggle("visual");
    navlist.classList.toggle("visual");
})
