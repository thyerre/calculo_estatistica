function getValoresForCalculo(){
    var valores = document.getElementById("valoresInput").value;
    var valorFre = valores.split("/");
    
    valorFre = OrdenarArray(valorFre);
    var k = numeroClasses(valorFre);
    var At = amplitudeTotal(valorFre);
    var Ac = amplitudeClasse(At,k["k"]);
    console.log("N = "+k["n"]);
    console.log("K = "+k["k"]);
    console.log("At = "+At);
    console.log("Ac = "+Ac);
    
    montarTabela(valorFre,k["k"],At,Ac,k["n"]);
    
    
}
function amplitudeClasse(At,k){
    k = Math.round(k);
    var Ac = parseFloat(At) / parseFloat(k); 
    return Ac.toFixed(2); 
}

function amplitudeTotal(valores){
    var aux = valores[0][0];
    var aux2 = valores[0][0];
    for(var i = 0;i < valores.length;i++){
        for(var j = 0; j < valores.length;j++){
            if(parseFloat(valores[i][0]) > aux ){
                aux = valores[i][0];
            }
            else if(parseFloat(valores[i][0]) < aux2){
                aux2 = valores[i][0];
            }
        }
    }
    console.log(aux +" ---- "+ aux2);
    return parseFloat(aux) - parseFloat(aux2);

}
function OrdenarArray(valores){
    var ar = Array();
    for(var i = 0;i < valores.length ;i++){
        ar[i] = valores[i].split(",");
    }
    ar = ar.sort(function(a, b) {
        return parseFloat(a[0]) - parseFloat(b[0]);
    });
    return ar;
}

function numeroClasses(valores){
    var n = 0;
    var k = [];
    for(var i= 0;i < valores.length;i++){
        n +=  parseFloat(valores[i][1]);
    }
    
    k["k"] = 1 + 3.3 * Math.log10(n);
    k["k"] = parseFloat(k["k"].toFixed(2))
    k["n"] = n;
    return k;
}
function classEmedias(valorFre,k,Ac,n){
    var a = 1;
    k = Math.round(parseFloat(k));
    k = parseInt(k);
    // if(valorFre.length % 2 == 0){
        
    // }else{

    //     k = parseInt(k);
    //     a = 0;
    // }
    var clas = parseFloat(valorFre[0][0]); 
    var ar = [];
    var aux =0,media = [];
    var freg = [],per = [],propor = [];
    var f = 0;
console.log(valorFre[valorFre.length - 2][0]);
    for(var i = 0;i < k;i++){
        console.log(clas);
        if(clas <= valorFre[valorFre.length - 1][0]){

            f = 0;
            aux = parseFloat(clas)+parseFloat(Ac);
            aux = x?x:aux;  
            ar[i] = clas.toFixed(2)+ " |-- "+aux.toFixed(2);
            
            for(var j = 0; j < valorFre.length; j++){
                if(parseFloat(valorFre[j][0]) >= clas && parseFloat(valorFre[j][0]) <= aux){
                    f += parseInt(valorFre[j][1]);
                }
            }
            freg[i] = f;
            per[i] = (f/n*100).toFixed(2);    
            media[i] = ((parseFloat(clas)+parseFloat(aux))/2).toFixed(2);
            clas = parseFloat(clas)+parseFloat(Ac);  
            
            /**
             *   Essa parte não faz sentido (Depois eu dou um jeito)
             * 
             * */

            if(i == k-2){
                aux = parseFloat(clas)+parseFloat(Ac);
                    if(aux <= valorFre[valorFre.length-1][0]){
                        var x = aux;
                        // var x = Math.round(aux);
                    }else{
                        var x = aux;
                        // var x = Math.trunc(aux);
                    }

            }
        }
    }
    ar['media'] = media;
    ar['freSimple'] = freg;
    ar['percentagem'] = per;
    console.log(ar);
    console.log(valorFre);
    return ar;
    
}

function montarTabela(valorFre,k,At,Ac,n){
    var arClass = classEmedias(valorFre,k,Ac,n);


    var tabela='';
    tabela = '<table class="tabela">'
    tabela += ` 
        <tr>
            <th>Classes</th>
            <th>freguência</th>
        </tr> 
    `;
    // valorFre = valorFre.sort(sortfunction);
    for(var i = 0;i < valorFre.length;i++){
        
        tabela +=`<tr>
            <td>`+valorFre[i][0]+`</td>
            <td>`+valorFre[i][1]+`</td>`;
    }
    var element = document.getElementById('tabeladiv');
    element.innerHTML = tabela;
//-------------------------------------------------------------------------
    var tabela2='';
    tabela2 = '<table class="tabela2">'
    tabela2 += ` 
        <tr>
            <th>Classes</th>
            <th>fi</th>
            <th>Fa</th>
            <th>Media</th>
            <th>Fr %</th>

        </tr> 
    `;
    var fa = 0;
    // valorFre = valorFre.sort(sortfunction);
    for(var i = 0;i < arClass.length;i++){
        fa += parseFloat(arClass["freSimple"][i]);
        tabela2 +=`<tr>
            <td>`+arClass[i]+`</td>
            <td>`+arClass["freSimple"][i]+`</td>
            <td>`+fa+`</td>
            <td>`+arClass["media"][i]+`</td>
            <td>`+arClass["percentagem"][i]+`%</td>`;

    }
    var element = document.getElementById('tabela2div');
    element.innerHTML = tabela2;
    var element = document.getElementById('calh3');
    element.innerHTML = "Calculo";
    return tabela;
}
function rol(arValores){
    // var html = montarHTMLRol(arValores);
    document.getElementById("rol").append(arValores);

}
function montarHTMLRol(ar){
    for(var i = 0;i < ar.length;i++){
        ar[i] = " "+ar[i];
    }

    return ar;

}