function calcular() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var q = parseFloat(document.getElementById('q').value);
    var n = parseFloat(document.getElementById('qntdnum').value);
    var termo = parseFloat(document.getElementById('soma').value);

    document.getElementById('res').innerHTML = '<br> Termo Geral da PG: An = a1 * (q ^ (n - 1)) ' + '<br><br>';
    document.getElementById('res').innerHTML += 'Termo ' + n + ': An = ' + a1 + ' * (' + q + '^(' + n + ' - 1))' + '<br><br>';
 

    if (isNaN(a1)) {
        if (isNaN(q)|| isNaN (termo) || isNaN(n)) {
            document.getElementById('res').innerHTML = "Preencha todos os campos necessarios, por favor"
        }
        else {
        var a1Calculado = termo / (Math.pow(q, n - 1));
        document.getElementById('res').innerHTML = 'a1 = ' + termo + ' / (' + q + '^(' + n + ' - 1))' + '<br><br>';
        document.getElementById('res1').innerHTML = 'a1 = ' + termo + ' / ' + Math.pow(q, n - 1) + '<br><br>';
        document.getElementById('res2').innerHTML = 'a1 = ' + a1Calculado.toFixed(2) + '<br><br>';
        }
    } else if (isNaN(q)) {
        if (isNaN(a1)|| isNaN (termo) || isNaN(n)) {
            document.getElementById('res').innerHTML = "Preencha todos os campos necessarios, por favor"
        }
        else {
        var qCalculado = Math.pow(termo / a1, 1 / (n - 1));
        document.getElementById('res').innerHTML = ' An = a1 * (q ^ (n - 1)) ' + '<br><br>';
        document.getElementById('res1').innerHTML = 'q = log(' + termo + ' / ' + a1 + ') ^ log(1 / (' + n + ' - 1))' + '<br><br>';
        document.getElementById('res2').innerHTML = 'q = ' + qCalculado.toFixed(2) + '<br><br>';
        }
    } else if (isNaN(n)) {
        if (isNaN(q)|| isNaN (termo) || isNaN(a1)) {
            document.getElementById('res').innerHTML = "Preencha todos os campos necessarios, por favor"
        } else {
        var nCalculado = Math.log(termo / a1) / Math.log(q) + 1;
        document.getElementById('res').innerHTML = ' An = a1 * (q ^ (n - 1)) ' + '<br><br>';
        document.getElementById('res1').innerHTML = 'n = (' + termo + ' / ' + a1 + ') / (' + q + ') + 1' + '<br><br>';
        document.getElementById('res2').innerHTML = 'n = ' + nCalculado.toFixed(2) + '<br><br>';
        }
    } else if (isNaN(termo)) {
        if (isNaN(q)|| isNaN (a1) || isNaN(n)) {
            document.getElementById('res').innerHTML = "Preencha todos os campos necessarios, por favor"
        } else {
        var termoGeral = a1 * Math.pow(q, n - 1);
   
        document.getElementById('res').innerHTML = 'Termo ' + n + ' = ' + a1 + ' * (' + q + '^(' + n + ' - 1))' + '<br><br>';
        document.getElementById('res1').innerHTML = 'Termo ' + n + ' = ' + a1 + ' * ' + Math.pow(q, n - 1) + '<br><br>';
        document.getElementById('res2').innerHTML = 'Termo ' + n + ' = ' + termoGeral.toFixed(2) + '<br><br>';
        }
    }
}