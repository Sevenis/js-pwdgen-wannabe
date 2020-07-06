var nome = prompt('Inserisci il tuo nome:');
console.log(nome);
var cognome = prompt('Inserisci il tuo cognome:');
console.log(cognome);
var pcolor = prompt('Inserisci il tuo colore preferito:');
console.log(pcolor);
var password = nome+cognome+pcolor+19;
console.log(password);
document.getElementById('mkpwd').innerHTML='La tua nuova password è ' + password + '!';
