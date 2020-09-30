console.log('Inico del programa');

setTimeout(function() {
    console.log('Primere Timeout');

}, 3000);

setTimeout(function() {
    console.log('Segundo Timeout');

}, 0);

setTimeout(function() {
    console.log('Tercer Timeout');

}, 0);


console.log('Fin Programa');