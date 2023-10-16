function calcular() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var q = parseFloat(document.getElementById('q').value);
    var qntdnum = parseFloat(document.getElementById('qntdnum').value);
    var soma = parseFloat(document.getElementById('soma').value);

    document.getElementById('res').innerHTML += '<br> Sn = a1 * (q^(n - 1)) / (q - 1)  ' + '<br><br>';

    var a1Calculated = soma * (q - 1) / num1;
    var qCalculated = Math.pow(soma / a1, 1 / (qntdnum - 1));
    var nCalculated = Math.log(soma / a1) / Math.log(q) + 1;

    if (isNaN(a1)) {
        if (isNaN(q) || isNaN(qntdnum) || isNaN(soma)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            document.getElementById('res1').innerHTML += 'a1 = ' + soma + ' * (' + q + '^' + (qntdnum - 1) + ' - 1) / (' + q + ' - 1)' + '<br><br>';
            document.getElementById('res').innerHTML += 'a1 = ' + soma + ' * ' + num1 + ' / (' + q + ' - 1)' + '<br><br>';
            document.getElementById('res').innerHTML += 'a1 = ' + a1Calculated.toFixed(2) + '<br><br>';
        }

    } else if (isNaN(q)) {
        if (isNaN(a1) || isNaN(qntdnum) || isNaN(soma)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            document.getElementById('res').innerHTML += 'q = (' + soma + ' / ' + a1 + ') ^ (1 / (' + qntdnum + ' - 1))' + '<br><br>';
            document.getElementById('res').innerHTML += 'q = ' + qCalculated.toFixed(2) + '<br><br>';
        }

    } else if (isNaN(qntdnum)) {
        if (isNaN(q) || isNaN(a1) || isNaN(soma)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            document.getElementById('res').innerHTML += 'n = log(' + soma + ' / ' + a1 + ') / log(' + q + ') + 1' + '<br><br>';
            document.getElementById('res').innerHTML += 'n = ' + nCalculated.toFixed(2) + '<br><br>';
        }

    } else if (isNaN(soma)) {
        if (isNaN(q) || isNaN(qntdnum) || isNaN(a1)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            var num1 = Math.pow(q, qntdnum) - 1;
            var snCalculated = a1 * num1 / (q - 1);

            document.getElementById('res').innerHTML += 'S' + qntdnum + ' = ' + a1 + ' * (' + q + '^' + qntdnum + ' - 1) / (' + q + ' - 1)' + '<br><br>';
            document.getElementById('res').innerHTML += 'S' + qntdnum + ' = ' + a1 + ' * ' + num1 + ' / (' + q + ' - 1)' + '<br><br>';
            document.getElementById('res').innerHTML += 'S' + qntdnum + ' = ' + snCalculated.toFixed(2) + '<br><br>';
        }
    }
}