var studente = {

  "nome" : "Pinco",

  "cognome" : "Pallo",

  "eta" : 19,

}

for (var key in studente) {
  document.getElementById('stampa1').innerHTML = "<b>Nome:</b> " + studente.nome + " <b>Cognome:</b>: " + studente.cognome + " <b>Età:</b> " + studente.eta;
}


var studenti = [

  {

    "nome" : "Roberto",

    "cognome" : "Bianchi",

    "eta" : 20,

  },

  {

    "nome" : "Mario",

    "cognome" : "Rossi",

    "eta" : 21,

  },

];

for (var key in studenti) {
  console.log(studente[key]);
}
