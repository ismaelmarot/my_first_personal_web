function validarDatos(){
	var nombre = document.getElementById('name')
	var mail = document.getElementById('email')
	
	if(nombre.value ==''){
		alert('Inserte un nombre')	
    } 
    if(mail.value == ''){
    	alert('Inserte un email')
    } 	
}

