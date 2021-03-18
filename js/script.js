var nome = prompt("Inserire il nome");
console.log(nome);

var cognome = prompt("Inserire il cognome");
console.log(cognome);

var colore_preferito = prompt("Qual è il tuo colore preferito?")
console.log(colore_preferito);


document.getElementById("password").innerHTML = "La tua password è: " + nome + cognome + colore_preferito + "21";