function encriptar() {

const remueveAcentos = (str) => {
 return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}

var mensaje = document.getElementById("mensaje-enc").value.toLowerCase();
var mensajemin = remueveAcentos(mensaje);
var txtencriptado = mensajemin 				   
				   .replaceAll("e","enter")
            	   .replaceAll("o","ober")
            	   .replaceAll("i","imes")
                   .replaceAll("a","ai")
                   .replaceAll("u","ufat");

document.getElementById("img-munieco").style.display = "none";
document.getElementById("anuncio").style.display = "none";
document.getElementById("mensajedes").innerHTML = txtencriptado;
document.getElementById("mensaje-enc").value =" ";
document.getElementById("btn-copy").style.visibility = "visible";

}

function desencriptar() {
var txtdesencriptar = document.getElementById("mensaje-enc").value.replaceAll("enter","e")
            	   .replaceAll("ober","o")
            	   .replaceAll("imes","i")
                   .replaceAll("ai","a")
                   .replaceAll("ufat","u");

document.getElementById("img-munieco").style.display = "none";
document.getElementById("anuncio").style.display = "none";
document.getElementById("mensajedes").innerHTML = txtdesencriptar;
//document.getElementById("mensaje-enc").value =" ";
document.getElementById("btn-copy").style.visibility = "visible";

}

function copiar(){
            mensajedes.select();
            document.execCommand("copy");            
            alert("Mensaje copiado");
        }


   

