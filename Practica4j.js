function genera_rfc(){
    var n = document.getElementById('nombre').value;
    var ap = document.getElementById('ap').value;
    var am = document.getElementById('am').value;
    var anio = document.getElementById('anio').value;
    var m = document.getElementById('mes').value;
    var d = document.getElementById('dia').value;


    var rfc =  ap.substring(0,2) + am.substring(0,1) + n.charAt(0) + anio.substring(2,4) + m + d;
    document.getElementById('resultado').value = rfc.toUpperCase() ;
}