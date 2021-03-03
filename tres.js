/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:

Nombre,

Obra Social ("PAMI", "OSDE" o "otras"),

edad( solo mayores de edad, mas de 17),

temperatura corporal(validar por favor)

sexo (validar).

NOTA:el precio por pasajero es de $600.

Se debe informar (solo si corresponde):

a) La cantidad de personas con OSDE de mas de 60 años.

b) el nombre y temperatura de la mujer con PAMI mas joven

c) cuanto sale el viaje total sin descuento.

d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde. */


function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let precio = 600 ;
	let seguir;

	//a
	let contPOM = 0;
	let flag=1;
	//b
	let flagMJP=1;
	let mujerMJP;
	let nombreMJP;
	let temperaturaMJP;
	//c
	let ingreso;
	let total;
	//d
	let contPAMI;
	let precioFinal;

	do {
		ingreso++;
		nombre=prompt("ingrese nombre");
		while(isNaN(nombre) == false){ 
			nombre=prompt("Error.ingrese un nombre");
		  }

		obraSocial=prompt("ingrese Obra Social (PAMI, OSDE o otras)");
    	while (obraSocial != 'PAMI' && obraSocial != 'OSDE' && obraSocial != 'otras') {
			obraSocial=prompt("Error.ingrese Obra Social (PAMI, OSDE o otras)");
    	}

		edad=parseInt(prompt("ingrese edad"));
		while(isNaN(edad)|| edad <= 0){
			edad=parseInt(prompt("Error.ingrese edad "));
		}
		temperaturaCorporal=parseInt(prompt("ingrese temperatura corporal"));
		while(isNaN(temperaturaCorporal) || temperaturaCorporal <=0 ){
			temperaturaCorporal=parseInt(prompt("Error.ingrese temperatura corporal"));
		}
		sexo =prompt("ingrese su sexo (f,m)")
		while(sexo!='f' && sexo !='m' ){
			sexo =prompt("Error.ingrese su sexo (f,m)")
		}


		//a + b
		switch(obraSocial){


			case"OSDE":
			if(flag|| ( edad > 60)){
				contPOM++;
			}
			break;
			case"PAMI":
			contPAMI++;
			if (flagMJP|| (sexo == 'f' && mujerMJP < edad)){
				edad=mujerMJP;
				nombreMJP=nombre;
				temperaturaMJP=temperaturaCorporal;
			}
			break;
		}

		//c
		total=ingreso*precio;

		//d

		if ((contPAMI == (ingreso/2)) ){
			precioFinal=(25*total/100);
		}

		seguir= prompt("¿desea ingresar otro producto?").toLowerCase();
	  } while (seguir== 's' || seguir== 'si');

	  console.log("a) La cantidad de personas con OSDE de mas de 60 años. " + contPOM );
	  console.log("b) el nombre y temperatura de la mujer con PAMI mas joven, nombre " +nombreMJP + " temperatura " + temperaturaMJP);
	  console.log("c) cuanto sale el viaje total sin descuento. " + total);


	  if (contPAMI != (ingreso/2)){
		  console.log("no hay descuento");
	  }else{
		console.log("d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25% es " + precioFinal);


		}
	  






}
