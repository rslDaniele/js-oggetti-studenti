var studente = {

  "nome" : "Pinco",

  "cognome" : "Pallo",

  "eta" : 19,

}

for (var key in studente) {
  document.getElementById('stampa1').innerHTML = "<b>Nome:</b> " + studente.nome + " <b>Cognome:</b>: " + studente.cognome + " <b>Età:</b> " + studente.eta;
}


var studenti = [
  ["Maria", "Rossi", "20"],
  ["Mario", "Rossi", "21"]
];

for (var key in studente) {
  document.getElementById('stampa2').innerHTML = "<b>Nome:</b> " + studenti[0][0] + " <b>Cognome:</b>: " + studenti[0][1] + " <b>Età:</b> " + studenti[0][2];
  document.getElementById('stampa2').innerHTML = "<b>Nome:</b> " + studenti[1][0] + " <b>Cognome:</b>: " + studenti[1][1] + " <b>Età:</b> " + studenti[1][2];
}
