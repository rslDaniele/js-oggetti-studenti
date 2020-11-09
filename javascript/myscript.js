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

    "nome" : "Maria",

    "cognome" : "Rossi",

    "eta" : 20,

  },

  {

    "nome" : "Mario",

    "cognome" : "Rossi",

    "eta" : 21,

  }
];



for (var i = 0; i < studenti.length; i++) {
  var tizio = studenti[i];
  console.log(tizio.nome, tizio.cognome, tizio.eta);
}
