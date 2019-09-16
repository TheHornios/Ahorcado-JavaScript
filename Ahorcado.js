var vidas = 7;
var palabras = ["diarrea","cancer","sida","epatitis","cirrosis","neurisma","embolia","zika","malaria","viruela","marburgo","tuberculosis"];
var letrasMalas = new Array();
var letrasBuenas = new Array();
var palabraActual = "";
var reiniciar = false;

function crearJuego(){
    selecionarPAlabra();
    
    
    document.getElementById("rallitas").innerHTML = crearRallitas("-",80);
    document.getElementById("boton").onclick = function(){aletra()};
    document.getElementById("intentos").innerHTML = vidas;
}

function selecionarPAlabra(){
    palabraActual = palabras[Math.floor(Math.random()*(palabras.length - 0)+0)];
}

function historial(){
    var historial = "";
    for(var i = 0;i<letrasBuenas.length;i++){
        historial+="<b>"+letrasBuenas[i]+"</b>";
    }
    for(var i = 0;i<letrasMalas.length;i++){
        historial+=letrasMalas[i];
    }
    document.getElementById("historial").innerHTML = historial;
}

function aletra(){
    
    if(!reiniciar){
        comprobarLetras();
        historial();
        document.getElementById("letra").value = "";
        
    }

    if(vidas==0){
        document.getElementById("Cabecera").innerHTML = "You Lose, F5 to restart";
        reiniciar = true;
    }
    if(palabraActual == crearRallitas()){
        document.getElementById("Cabecera").innerHTML = "You Win, F5 to restart";
        reiniciar = true;
    }
    
    
    
}

function comprobarLetras(){
    var bolean = false;
    for(var i= 0;i<palabraActual.length;i++){
        if(palabraActual.charAt(i)==document.getElementById("letra").value){

            if(letrasBuenas.length==0){
                letrasBuenas[0] = document.getElementById("letra").value;
            }else{
                var bolean1 = false;
                for(var i= 0;i<letrasBuenas.length;i++){
                    if(letrasBuenas[i]==document.getElementById("letra").value){
                        bolean1 = true;
                    }
                }
                if(!bolean1){
                    letrasBuenas[letrasBuenas.length] = document.getElementById("letra").value;
                }
            }

            document.getElementById("rallitas").innerHTML  = crearRallitas(document.getElementById("letra"));
            bolean= true;
        }
    }
    if(!bolean){
        if(letrasMalas.length==0){
            letrasMalas[0] = document.getElementById("letra").value;
            vidas --;
            document.getElementById("intentos").innerHTML = vidas;
        }else{
            var bolean1 = false;
            for(var i= 0;i<letrasMalas.length;i++){
                if(letrasMalas[i]==document.getElementById("letra").value){
                    bolean1 = true;
                }
            }
            if(!bolean1){
                letrasMalas[letrasMalas.length] = document.getElementById("letra").value;
                vidas --;
                document.getElementById("intentos").innerHTML = vidas;
            }
        }
    }
}

function crearRallitas(){
    var rallita = "";
        for(var i =0;i<palabraActual.length;i++){
            var si = false;
            for(var v = 0;v<letrasBuenas.length;v++){
                if(letrasBuenas[v]==palabraActual.charAt(i)){
                    si = true;
                }
            }
            if(si){
                rallita += palabraActual.charAt(i);
            }else{
                rallita += "-"
            }
        }    
    return rallita;
}

 window.onload = crearJuego();