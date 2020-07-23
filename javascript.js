var str="Hamilton Burr Eliza Angelica Peggy Lafayette KingGeorge Theodosia Reynold JohnAdams Jefferson Washington";
var quotes = str.replace(/([ .,;]+)/g,'$1§sep§').split('§sep§');


function newquote(){
  var randomNum = Math.floor( Math.random()*(quotes.length));
   document.getElementById('qtdis').innerHTML=
   quotes[randomNum];
 }
 

 
const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn= document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click', function(){
				
				let hexcolor="#";
				for(i=0;i<6;i++){
								
								hexcolor+=hex[getRandom()];
								
								}
				
				document.body.style.backgroundColor=hexcolor;
				
				});
				
function getRandom(){
				return Math.floor(Math.random() * hex.length);
				
				
				}

 

 
