var Botonlist4= document.getElementById("listBoton4");
var Boton4=document.getElementById('boton4')


function desplegarBoton4 (){
	Botonlist4.classList.add('mostrar');
	
};

function ocultarBoton4 (){
	Botonlist4.classList.remove('mostrar');
	
};


boton4.addEventListener("mouseover",desplegarBoton4,true);
boton4.addEventListener("mouseout",ocultarBoton4,true);


/*programación menu */

var iconomenumobil= document.getElementById("iconomenu");
var nav = document.getElementById("navs");
var botonesnav= document.getElementById("ulnav");


function desplegarmenumobil(){
nav.classList.add("activarNav");
botonesnav.classList.remove("none");
	
};

iconomenumobil.addEventListener("click",desplegarmenumobil,true);