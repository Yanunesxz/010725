let prompt = require('prompt-sync')();
let temperaturaCelsius = parseFloat(prompt('Digite a temperatura em Celsius: ')); 
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32; 
console.log("A temperatura em Fahrenheit é: " + temperaturaFahrenheit.toFixed(2) + "°F");  