function evalua(){
    var cad = document.getElementById("cadena").value;


    if (contieneMayusculas && contieneMinusculas) {
        document.getElementById("parrafo").innerText = "La cadena " +cadena+ " contiene mayúsculas y minúsculas.";
    } else if (contieneMayusculas) {
        document.getElementById("parrafo").innerText = "La cadena " +cadena+ " contiene solo mayúsculas.";
    } else if (contieneMinusculas) {
        document.getElementById("parrafo").innerText = "La cadena " +cadena+ " contiene solo minúsculas.";
    } else {
        document.getElementById("parrafo").innerText = "La cadena " +cadena+ " no contiene ni mayúsculas ni minúsculas.";
    }
}