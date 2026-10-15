// 1. Seleccionar elementos
let titulo= 
document.querySelector("h1");
let recetas=
document.querySelectorAll("section");
// 2.Cambiar el titulo 
titulo.textContent="Mis recetas de Soukayna";
// 3. Mostrar cuantas hay 
console.log("hay " +recetas.length+" recetas");
let boton=
document.querySelector("#boton");
boton.addEventListener("click",function(){
document.body.style.backgroundColor= "green";
});