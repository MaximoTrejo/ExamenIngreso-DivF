/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:

el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),

el precio (validar entre 100 y 300),

la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),

Categoria ("desinfectante", "bactericida", "detergente" ) 

el fabricante.

Se debe Informar al usuario lo siguiente:

a) El promedio de cantidad por tipo de producto

b) La categoria con mas cantidad de unidades en total de la compra

c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total

d) el fabricante y Categoria del más caro de los productos */

function mostrar()
{
 let tipo;
 let precio;
 let cantidadUnidades;
 let categoria;
 let fabricante;

 //a
 let acumA=0;
 let acumI=0;
 let acumQ=0;
 let contA=0;
 let contI=0;
 let contQ=0;
 let promedioA;
 let promedioI;
 let promedioQ;

 //b
 let acumD=0;
 let acumB=0;
 let acumDetergente=0;
 let categoriaMCU;

 //c
 let contDM;

 //d
 let acumMCA;
 let acumMCI;
 let acumMCQ;
 let guardarFabricante;
 let guardarCategoria;

 for (let i = 0; i < 5; i++) {
	
	
	tipo = prompt("Ingrese el tipo de producto(ALCOHOL, IAC o QUAT)");
    while (tipo != 'ALCOHOL' && tipo != 'IAC' && tipo != 'QUAT') {
      tipo = prompt("Error. Ingrese el tipo de producto(ALCOHOL, IAC o QUAT)");
    }

	precio=parseInt(parseInt("ingrese el precio (validar entre 100 y 300)"))
	while(isNaN(precio) || precio < 100 && precio > 300 ){
		precio=parseInt(parseInt("Error.ingrese el precio (validar entre 100 y 300)"))
	}
	
	cantidadUnidades = parseInt(prompt("ingresar la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)"));
	while(isNaN(cantidadUnidades) || cantidadUnidades <= 0 && cantidadUnidades > 1000){
		cantidadUnidades = parseInt(prompt("Error.ingresar la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)"));

	}

	categoria=prompt(" elegir categoria (desinfectante, bactericida, detergente ) ");
	while (categoria != 'desinfectante' && categoria != 'bactericida' && categoria != 'detergente') {
		categoria = prompt("Error. elegir categoria (desinfectante, bactericida, detergente ) ");
	}

	fabricante=prompt("ingresa fabricante");


	//a
	switch(tipo){
		case"ALCOHOL":
		acumA=acumA+cantidadUnidades;
		acumMCA=acumMCA+precio;
		contA++;
		break;
		case"IAC":
		acumI=acumI+cantidadUnidades;
		acumMCI=acumMCI+precio;
		contI++;
		break;
		case"QUAT":
		acumQ=acumQ+cantidadUnidades;
		acumMCQ=acumMCQ+precio;
		contQ++;
		break;
	}
	//b + c
	switch(categoria){
		case"bactericida":
		acumB=acumB+ cantidadUnidades;
		break;
		case "desinfectante":
		acumD=acumD+cantidadUnidades;
		break;
		case "detergente":
		acumDetergente=acumDetergente+cantidadUnidades;
		if(cantidadUnidades <= 200){
			contDM++;
		}
		break;
	}

	if (acumB > acumD && acumB> acumDetergente ) {
    	categoriaMCU = "bactericida";
  	} else if ( acumDetergente >= acumD&& acumDetergente> acumB ) {
		categoriaMCU= "detergente";
  	} else {
    	categoriaMCU= "desinfectante";
  	}	

	//d

	
	if (acumMCA > acumMCI && acumMCA> acumMCQ ) {
    	guardarCategoria = "ALCOHOL";
		guardarFabricante = fabricante;
  	} else if ( acumMCI >= acumMCA&& acumMCI > acumMCQ ) {
		guardarCategoria= "IAC";
		guardarFabricante=fabricante;
  	} else {
    	guardarCategoria= "QUAT";
		guardarFabricante=fabricante;
  	}	


}

//a
if (contA != 0) {
	promedioA = acumA / contA;
	console.log("a) El promedio de cantidad por tipo de producto es " + promedioA);
	
}
else {
	console.log ("a) no se ingreso ALCOHOL ");
}
if (contI != 0) {
	promedioI = acumI / contI;
	console.log("a) El promedio de cantidad por tipo de producto es " + promedioI);	
}
else {
	console.log ("a) no se ingreso IAC ");
}
if (contQ != 0) {
	promedioQ = acumQ / contQ;
	console.log("a) El promedio de cantidad por tipo de producto es " + promedioQ);
}
else {
	console.log ("a) no se ingreso QUAT ");
}

//b
	console.log("b) La categoria con mas cantidad de unidades en total de la compra " + categoriaMCU);
//c
	console.log("c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total " + contDM );
//d
	console.log("d) el fabricante y Categoria del más caro de los productos ,fabricante " + guardarFabricante + " categoria " + guardarCategoria);



}
