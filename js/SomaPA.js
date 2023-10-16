function calcular() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var an = parseFloat(document.getElementById('an').value);
    var n = parseFloat(document.getElementById('n').value);
    var Sn = parseFloat(document.getElementById('Sn').value);



    
    if (isNaN(a1)) {
        if (isNaN(an) || isNaN(n) || isNaN(Sn)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            Calca1 = 2 * Sn
            Calca1_2 = Calca1 / n
            Calca1_3 = Calca1_2 - an 
            document.getElementById('res').innerHTML = 'Sn = n * (a1 + an) / 2' + '<br> <br>';
            document.getElementById('res1').innerHTML =  Sn + ' = ' + n + ' * ( a1   + ' + an + ') / 2' + '<br> <br>';
            document.getElementById('res2').innerHTML = '2 * '  + Sn + ' = ' + '[a1 + ' + an + '] * ' + n + '<br> <br>';
            document.getElementById('res3').innerHTML =  Calca1 + ' = ' + '(a1 + ' + an + ')' + n + '<br> <br>';
            document.getElementById('res4').innerHTML =  Calca1  + ' / ' + n + ' = ' + 'a1 + ' + an + '<br> <br>';
            document.getElementById('res5').innerHTML =  'a1 = ' + Calca1_2 + ' - ' + an+ '<br> <br>';
            document.getElementById('res6').innerHTML = 'a1 = ' + Calca1_3 + '<br> <br>';

        }


    //Calcular n
    } else if (isNaN(n)) {
        if (isNaN(a1) || isNaN(Sn) || isNaN(an)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            
            Calcn = 2 * Sn 
            Calcn_2 = a1 + an;
            Calcn_3 = Calcn / Calcn_2
            document.getElementById('res').innerHTML = 'Sn = n * (a1 + an) / 2' + '<br> <br>';
            document.getElementById('res1').innerHTML =  Sn + ' =  n   * ( ' + a1   + ' + ' +  an + ') / 2' + '<br> <br>';
            document.getElementById('res2').innerHTML = '2 * '  + Sn + ' = ' + Calcn_2 + 'n' + '<br> <br>';;
            document.getElementById('res3').innerHTML = Calcn + ' = ' + Calcn_2 + 'n' + '<br> <br>';
            document.getElementById('res3').innerHTML = 'n  = ' + Calcn + ' / ' + Calcn_2 + '<br> <br>';
            document.getElementById('res5').innerHTML = 'n = ' + Calcn_3  + '<br> <br>';
        }


    //Calcular an
    } else if (isNaN(an)) {

        if (isNaN(a1) || isNaN(Sn) || isNaN(n)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            Calcan = 2 * Sn
            Calcan_2 = Calcan / n
            Calcan_3 = Calcan_2 - a1

            document.getElementById('res').innerHTML = 'Sn = n * (a1 + an) / 2' + '<br> <br>';
            document.getElementById('res1').innerHTML =  Sn + ' = ' + n + ' * ( ' + a1   + ' +    an  )' + ' / 2' + '<br> <br>';
            document.getElementById('res2').innerHTML = '2 * '  + Sn + ' = (' + a1 + ' + an) * ' + n + '<br> <br>';
            document.getElementById('res3').innerHTML =  Calcan + ' = ' + a1 + ' + an '  + n + '<br> <br>';
            document.getElementById('res4').innerHTML =  Calcan  + ' / ' + n + ' = ' + a1 + ' + an  ' + '<br> <br>';
            document.getElementById('res5').innerHTML =  'an = ' + Calcan_2  + ' - ' + a1 + '<br> <br>';

            document.getElementById('res6').innerHTML = 'an = ' + Calcan_3 + '<br> <br>';

          
        }

    //calcular sn
    } else if (isNaN(Sn)) {
        if (isNaN(a1) || isNaN(an) || isNaN(n)) {

            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
       
           CalcSn = [n * (a1 + an)] / 2
           CalcSn_2 = a1 + an;
           CalcSn_3 = CalcSn_2 * n; 


           document.getElementById('res').innerHTML = 'Sn = n * (a1 + an) / 2' + '<br> <br>';
           document.getElementById('res1').innerHTML = 'Sn = ' + n + ' * (' + a1 + ' + ' + an + ') / 2' + '<br> <br>';
           document.getElementById('res2').innerHTML = 'Sn = ' + CalcSn_2 + ' * ' + n + ' / 2' + '<br> <br>';
           document.getElementById('res3').innerHTML = 'Sn = ' + CalcSn_3 + ' / 2' + '<br> <br>';

           document.getElementById('res5').innerHTML = 'Sn = ' + CalcSn;
            
        }
    } else {
        document.getElementById('res').innerHTML = 'preencha os campos.';

    }

}