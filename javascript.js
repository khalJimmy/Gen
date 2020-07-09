var quotes = [ 'alleluia', 'buking','xenon', 'cardied','corurtney','khalid','chrissy']

function newquote(){
  var randomNum = Math.floor( Math.random()*(quotes.length));
   document.getElementById('qtdis').innerHTML=
   quotes[randomNum];
 }
 
 

 
