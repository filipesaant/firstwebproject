//1- pegar o elemento que representa o botao no js
const botaoTrailer = document.querySelector(".botao-trailer");

//2- identificar quando o usuario clicar no botao
botaoTrailer.addEventListener("click", ()=>{
  //4- abrir modal na tela
  modal.classList.add("aberto");
  video.setAttribute("src", linkDoVideo)
});

//3- pegar o elemento da modal com js
const modal = document.querySelector(".modal");

//5- pegar o elemento de fechar modal no js
const botaoFecharModal = document.querySelector(".fechar-modal");

//6- identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", ()=>{
    //7- fechar modal
    modal.classList.remove("aberto");
    
  });
  
  //8- fazer o video abrir sempre que clicar no botao
  const video = document.getElementById("video");
  const linkDoVideo = video.src;