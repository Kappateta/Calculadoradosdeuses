function inserir(caracter){
    document.querySelector(".resultado").textContent+=caracter
    console.log(caracter)
}
function calcular(){
    document.querySelector(".resultado").textContent=eval(document.querySelector(".resultado").textContent)
    
}
function apagar(){
    document.querySelector(".resultado").textContent=""
}