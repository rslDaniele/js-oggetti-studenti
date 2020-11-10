var studente = {

  'nome' : "Pinco",

  'cognome' : "Pallo",

  'eta' : 19,

}

// STAMPA STUDENTE

for (var key in studente) {
  document.getElementById('stampa1').innerHTML = "<b>Nome:</b> " + studente.nome + " <b>Cognome:</b>: " + studente.cognome + " <b>Età:</b> " + studente.eta;
}

// ARRAY DI OGGETTI

var studenti = [
  {

    'nome' : "Maria",

    'cognome' : "Rossi",

    'eta' : 20,

  },

  {

    'nome' : "Mario",

    'cognome' : "Rossi",

    'eta' : 21,

  },

  {

    'nome' : "Dario",

    'cognome' : "Rossi",

    'eta' : 23,

  }
];

console.log(studenti);
// CICLO STAMPA OGGETTI

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + " " + studenti[i].cognome)
}

// UTENTE AGGIUNGE OGGETTI TRAMITE PROMPT

var aggiunta = {
  'nome' : prompt("inserisci nome"),

  'cognome' : prompt("inserisci cognome  "),

  'eta' : parseInt(prompt("inserisci eta")),

};

studenti.push(aggiunta);
console.log(studenti);
