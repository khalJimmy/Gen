var quotes = [ 'Alex', 'Mer','Sloan', 'Arizona','Lexipedia','Kepner','Webber','Miranda','Shepherd', 'Teddy', 'Owens', 'Callie', 'Christina', 'Burke', 'Addison']

function newquote(){
  var randomNum = Math.floor( Math.random()*(quotes.length));
   document.getElementById('qtdis').innerHTML=
   quotes[randomNum];
 }
 
 

 
