var distancia;

		distancia=prompt('Ingrese cuantos metros debe recorrer:','');


		distancia=parseInt(distancia); 

        
		if (distancia>0 && distancia<1000){
            document.write('<h2>La distancia es menor a los 1000 metros</h2>'  );
		  document.write('<h1>Se recomienda ir a pie</h1>');
		}
		if (distancia>1001 && distancia<10000){
		  document.write('<h2>Se recomienda ir en bicicleta</h2>');
		}
		if (distancia>=10000 && distancia<30000){
		  document.write('<h2>Se recomienda ir en colectivo</h2>');
		}
		if (distancia>=30000 && distancia<100000){
		  document.write('<h2>Se recomienda ir en auto</h2>');
		}
		if (distancia>=100000){
		  document.write('<h2>Se recomienda ir en avion</h2>');
		}
		if (distancia<0) {
		  document.write('<h2>Distancia no valida.</h2>');
		}