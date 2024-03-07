let campoTexto = document.querySelector("#texto"); 
let campoEncriptado = document.querySelector("#campo-encriptado"); 

let matriz_code = [ 
    ["e","enter"], //indice 0
    ["i","imes"], //indice 1
    ["a","ai"], //indice 2
    ["o","ober"], //indice 3
    ["u","ufat"], //indice 4
]; 

function EncriptarTexto() {
    let textoEntrada = encriptar(campoTexto.value); /* el valor campoTexto es el parámetro de la función */    
    campoEncriptado.value = textoEntrada; 
    } 

function encriptar(fraseEncriptada) {
    fraseEncriptada = fraseEncriptada.toLowerCase();      
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0], 
                matriz_code[i][1]); 
        }      
        
    }          
    limpiarCaja();         
    return fraseEncriptada;     
} 

function DesEncriptarTexto() {
    let textoEncriptado = Desencriptar(campoEncriptado.value); 
    campoEncriptado.value = textoEncriptado;  
} 
        
function Desencriptar(fraseNoEncriptada) {
       fraseNoEncriptada = fraseNoEncriptada.toLowerCase();     
        for (let i = 0; i < matriz_code.length; i++) {
            if (fraseNoEncriptada.includes(matriz_code[i][1])) {
                fraseNoEncriptada = fraseNoEncriptada.replaceAll(
                    matriz_code[i][1], 
                    matriz_code[i][0]); 
            }     
                
    }
    
    return fraseNoEncriptada;
}

function limpiarCaja() {
    campoTexto.value = "";  
    
}  

function CopiaTexto() {
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(campoEncriptado.value);
}


            

