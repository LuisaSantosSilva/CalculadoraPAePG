function calcular() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var q = parseFloat(document.getElementById('q').value);
    var somaInfinita = parseFloat(document.getElementById('soma').value);
    var a1soma = a1/somaInfinita;

    var resultado = document.getElementById('res');
    resultado.innerHTML = '';

    if (isNaN(a1) && isNaN(q) && isNaN(somaInfinita)) {
        resultado.innerHTML += 'Insira pelo menos dois valores para realizar o cálculo.';
    } else if (q === 1) {
        resultado.innerHTML += 'A soma infinita não é calculável quando q é igual a 1.';
    } else {
        if (isNaN(a1)) {            
            resultado.innerHTML += 'a1 = S / (1 - q)<br>';
            resultado.innerHTML += 'a1 = ' + somaInfinita.toFixed(2) + ' / (1 - ' + q + ')<br>';
            a1 = somaInfinita * (1 - q);
            resultado.innerHTML += 'a1 = ' + a1.toFixed(2) + '<br><br>';
        }

        if (isNaN(q)) {            
            resultado.innerHTML += 'S = a1 / (1 - q)<br>';
            resultado.innerHTML += somaInfinita.toFixed(2) +' = ' +a1.toFixed(2) +' / (1 - q )' +'<br>';
            resultado.innerHTML += +a1.toFixed(2)  +' = '+    somaInfinita.toFixed(2) +' x ' +'( 1 - q ) '+'<br>';
            resultado.innerHTML += +a1.toFixed(2)  +' / '+    somaInfinita.toFixed(2)  +' = '+'( 1 - q ) '+'<br>';
            resultado.innerHTML += +a1.toFixed(2)   /     somaInfinita.toFixed(2)  +' = '+' 1 - q  '+'<br>';
            resultado.innerHTML += ' q = '+ '1 - '+ a1soma +'<br>';
            resultado.innerHTML += ' q = '+ (1 -  a1soma )+'<br>';

            if (q < 0) {
                resultado.innerHTML += 'Convertendo q para valor positivo<br>';
                q = Math.abs(q);
                resultado.innerHTML += 'q (positivo) = ' + q.toFixed(2) + '<br><br>';
            } else {
                resultado.innerHTML += '<br>';
            }
        }

        if (isNaN(somaInfinita)) {            
            resultado.innerHTML += 'Sn = a1 / (1 - q)<br>';
            resultado.innerHTML += 'Sn = ' + a1.toFixed(2) + ' / (1 - ' + q + ')<br>';
            somaInfinita = a1 / (1 - q);
            resultado.innerHTML += 'Sn = ' + somaInfinita.toFixed(2) + '<br><br>';
        }
    }
}