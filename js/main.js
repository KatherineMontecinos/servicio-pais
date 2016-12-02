//function validarCodigo() {
	// rescatar el valor del input

/*$(function() {
  $('#codeselector').change(function(){
    $('.code').hide();
    $('#' + $(this).val()).show();
  });
});*/

var paises = [
	{
		nombre: "Chile",
		codigo: "+569",
		bandera: "img/chile.png"
	},
	{
		nombre: "Mexico",
		codigo: "+529",
		bandera: "img/mexico.png"
	},
	{
		nombre: "Peru",
		codigo: "+519",
		bandera: "img/peru.png"
	},
	{
		nombre: "Estados Unidos",
		codigo: "+1",
		bandera: "img/eeuu.png"
	},
	{
		nombre: "Argentina",
		codigo: "+549",
		bandera: "img/argentina.png"
	},
];

// traer el nombre del pais desde localStorage
var nombrePais = window.localStorage.getItem("nombrePais") || "Chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombrePais) {
		pais = paises[i];
		break;
	}
}
// Modificar el DOM
$('#pais img').attr('src', pais.bandera);
$('#codigo').html(pais.codigo);


//Funcion que solo valida numeros 
 /* $(document).ready(function (){
    $('#numeros').keyup(function (){
    	this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
   });
*/


// Funcion que valida numero de telefono del input 
$(document).ready(function(){
	$('#nextbtn').click(function(){
		if ($('#numeros').val().length != 9 || isNaN($('#numeros').val())) {
			alert('Debe ser un número de 9 digitos');
			return false;
		}

 	});
})


// Funcion que valida email 
/*$(document).ready(function(){
	$('.next2').click(function(){
		if($('#email').val().length < 50 || 
            alert('Ingresar correo valido');
            return false;
        }

    });
})*/

$('.next2').on('click', function(){
	var nombre = $('#name').val();

// Esto es para guardar los datos 
	localStorage.setItem('nombre_user', nombre);
	});


 
// Funcion random 
/*function numerorandom(){
var length = 3,
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
retVal = "";
	for (var i = 0, n = charset.length; i < length; ++i) {
	retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    alert('LAB -' + retVal,3000);

  }*/



 //function funcion() {
 //	var x = document.getElementById("demo");
 	//x.innerHTML = 'LAB - ' + Math.floor((Math.random() * 900) + 99); 


 //}


 $('#nextbtn').on('click', function(){
	var fono = $('#numeros').val();

// Esto es para guardar los datos 
	localStorage.setItem('fono_user', fono);
	});