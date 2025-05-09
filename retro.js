const menu = document.querySelector("#sidemenu");
const toggleBtn = document.querySelector("#side-icon");
const about = document.querySelector("#about");
let main = document.querySelector("main");
let skills = document.querySelector("#skills1");
let body = document.querySelector("body");
let projects = document.querySelector("#projects1");
let education = document.querySelector("#education1");
let contact = document.querySelector("#contact1")


about.addEventListener("click", () => {
  menu.classList.toggle("active");
  main.classList.toggle("main");
  // body.classList.toggle("hide");
 

});

skills.addEventListener("click",function(){
  menu.classList.toggle("active");
  main.classList.toggle("main");
  body.classList.toggle("hidden");
})





toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  main.classList.toggle("main");
  body.classList.toggle("hidden");
});



projects.addEventListener("click",function(){
menu.classList.toggle("active");
main.classList.toggle("main");
body.classList.toggle("hidden");

});

education.addEventListener("click",function(){
 menu.classList.toggle("active");
main.classList.toggle("main");
body.classList.toggle("hidden");
});


contact.addEventListener("click",function(){
  menu.classList.toggle("active");
  main.classList.toggle("main");
  body.classList.toggle("hidden");

})




















