/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:

nombre

situcación laboral ("buscando" , "trabajando" o "solo estudiante")

cantidad de materias( mas de cero y menos de 8)

Sexo ( femenino , masculino , no binario)

Nota promedio (entre 0 y 10)

edad (validar)

se debe informar de existir, o informar que no existe , en el caso que corresponda.

a) El nombre del mejor promedio que no de los que tarbajan o estan buscando

b) El nombre del mas viejo de los alumnos que solo sea estudiantes

c) El promedio de nota por situacion laboral

d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo */



function mostrar()
{
  let nombre;
  let situacionLaboral;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let seguir;

  //a
  let flagMP=1
  let mejorPromedio;
  let nombreMP;
  //b
  let masViejo;
  let nombreMasViejo;
  let flagViejo=1;
  //c
  let acumB=0;
  let acumT=0;
  let acumSE=0;
  let contB=0;
  let contT=0;
  let contSE=0;
  let promedioB;
  let promedioT;
  let promedioSE;
  //d
  let edadMCM;
  let nombreMCM;
  let menosCantidad;
  let flagCM=1;


  do {
    nombre = promp("ingresa nombre");
    while(isNaN(nombre) == false){ 
			nombre=prompt("Error.ingrese un nombre");
		}

    situacionLaboral = prompt("Ingrese el tipo de situcación laboral(buscando , trabajando o solo estudiante)");
    while (situacionLaboral != 'buscando' && situacionLaboral != 'trabajando' && situacionLaboral != 'solo estudiantes') {
      situacionLaboral = prompt("Error.Ingrese el tipo de situcación laboral(buscando , trabajando o solo estudiante)");
    }
    
    cantidadMaterias=parseInt(prompt("ingresa cantidad de matieriales( mas de cero y menos de 8)"));
    while(isNaN(cantidadMaterias) || cantidadMaterias<=0 && cantidadMaterias > 8 ){
      cantidadMaterias=parseInt(prompt("Error.ingresa contidad de matieriales( mas de cero y menos de 8)"));
    }

    sexo = prompt("ingrese el sexo(m,f)");
    while(sexo != 'm' && sexo != 'f'){
      sexo = prompt("Error.ingrese el sexo(m,f)");
    }

    notaPromedio=parseInt(prompt("Nota promedio (entre 0 y 10)"));
    while(isNaN(notaPromedio)|| notaPromedio < 0 && notaPromedio > 10){
      notaPromedio=parseInt(prompt("Error.Nota promedio (entre 0 y 10)"));
    }
    edad = parseInt(prompt("ingrese edad "));
    while(isNaN(edad) || edad < 0 ){
      edad = parseInt(prompt("Error.ingrese edad "));
    }

    //a
    if((flagMP ||  mejorPromedio < notaPromedio) && situacionLaboral=='solo estudiantes'){ // 
      mejorPromedio=notaPromedio ;
      nombreMP=nombre;
      flagMP=0;

    }
    //b
    if((flagViejo|| masViejo< edad) && situacionLaboral=='solo estudiantes'){
      masViejo= edad;
      nombreMasViejo=nombre;
      flagViejo=0;

    }
    //c
    switch(situacionLaboral){
      case"buscando":
      acumB=acumB+notaPromedio;
      contB++;
      break;
      case"solo estudiantes":
      acumSE=acumSE+notaPromedio;
      contSE++;
      break;
      case"trabajando":
      acumT=acumT+notaPromedio;
      contT++;
      break;
    }

    //d
    if((flagCM || menosCantidad > cantidadMaterias) && situacionLaboral=='buscando'){
      menosCantidad=cantidadMaterias;//primero va la variable que cree para guardar el dato y despues la que pedi con promp
      edadMCM=edad;
      nombreMCM=nombre;
      flagCP=0;
      
    }

    seguir= prompt("¿desea ingresar otro producto?").toLowerCase();
  } while (seguir== 's' || seguir== 'si');

  //a
  console.log("a) El nombre del mejor promedio que no de los que tarbajan o estan buscando " + nombreMP);
  //b
  console.log("b) El nombre del mas viejo de los alumnos que solo sea estudiantes " + nombreMasViejo);
  //c
  if (contB != 0) {
		promedioB = acumB / contB;
    console.log("c) El promedio de nota por situacion laboral " + promedioB);
	}
	else {
    console.log("c) no hay gente buscando trabajo ");
		
	}
	if (contT != 0) {
		promedioT= acumT / contT;
    console.log("c) El promedio de nota por situacion laboral " + promedioT);
	}
	else {
    console.log("c) no hay gente trabajando ");
	}
	if (contSE!= 0) {
		promedioSE = acumSE / contSE;
		console.log("c) El promedio de nota por situacion laboral " + promedioSE);
	}
	else {
		console.log("c) no hay estudiantes");
	}


  //d
  console.log("d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo , nombre " + nombreMCM +" edad " + edadMCM);
  
}
