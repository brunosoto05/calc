let numeros = "";
let buttons = document.querySelectorAll("button");

buttons.forEach((botones) => {
  botones.addEventListener("click", () =>{
    if(botones.id === "="){
      numeros = eval(numeros);
    } else if(botones.id === "ac"){
      numeros = "";
    } else if(botones.id === "dl"){
      numeros = numeros.slice(0, -1)
    } else {
      numeros += botones.id
    }
    document.getElementById("numeros").value = numeros
    console.log(numeros)
  })
})