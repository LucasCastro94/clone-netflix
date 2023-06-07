const popularesImg = [
    "./img/mini1.jpg",
    "./img/mini2.jpg",
    "./img/mini3.jpg",
    "./img/mini4.jpg",
    "./img/mini5.jpg",
    "./img/mini6.jpg",
    "./img/mini7.jpg",
    "./img/mini8.jpg",
    "./img/mini9.jpg",
    "./img/mini10.jpg"
  ];

  const recentementeImg = [
    "./img/mini11.jpg",
    "./img/mini12.jpg",
    "./img/mini3.jpg",
    "./img/mini14.jpg",
    "./img/mini15.jpg",
    "./img/mini9.jpg",
    "./img/mini13.jpg",
    "./img/mini10.jpg",
    "./img/mini6.jpg",
    "./img/mini8.jpg"
  ];


  const carrosselPopulares = document.getElementById("populares");
  const carrosselRecentes = document.getElementById("recentemente")

 
for(let file of popularesImg)
{
  let divItem = document.createElement("div");

  divItem.classList.add("item");

  let img = document.createElement("img");
  img.src = file;
  img.alt = "Imagem"+file;
  
  divItem.appendChild(img);

  carrosselPopulares.appendChild(divItem);
} 
 

for(let file of recentementeImg)
{
  let divItem = document.createElement("div");

  divItem.classList.add("item");

  let img = document.createElement("img");
  img.src = file;
  img.alt = "Imagem"+file;
  
  divItem.appendChild(img);

  carrosselRecentes.appendChild(divItem);
}

const modal = document.getElementsByTagName('dialog')[0]
const buttonPlay = document.getElementById('playvideo')
const buttonDetails = document.getElementById('moredetails')
const dialogClose = document.getElementById("close")

buttonPlay.addEventListener('click',()=>{
  alert("Botao Play")
})

buttonDetails.addEventListener('click',()=>{
  alert("More details")
modal.show()
})

dialogClose.addEventListener('click',()=>{
  alert('Fechar modal')
  modal.close()
})