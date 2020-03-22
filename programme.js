function installerProgramme() { 
  if (sessionStorage.getItem("donnee") == null) {afficherMessageAvertissement();}
  eval(sessionStorage.getItem("donnee"));
}

function afficherMessageAvertissement() {
	messageAVERTISSEMENT(
		"Cette page web ne fonctionnera correctement que si l'éditeur <b><i>p5Visuel</i></b> l'a ouverte en lui transmettant un programme.<br /><br />"+
		"De plus, la transmission du programme ne pourra se faire que si l'éditeur <b><i>p5Visuel</i></b> et la page web d'exécution partagent un même domaine.<br /><br />"+
		"Ceci veut dire qu'il faut que leurs adresses sur le serveur web commencent par le même préfixe (par exemple :  <i>http://profmath.uqam.ca/</i>   ou   <i>http://localhost:8090/</i> ).",
		
		"Cette page web ne fonctionnera correctement que si l'éditeur p5Visuel l'a ouverte en lui transmettant un programme.\n\n"+
		"De plus, la transmission du programme ne pourra se faire que si l'éditeur p5Visuel et la page web d'exécution partagent un même domaine.\n\n"+
		"Ceci veut dire qu'il faut que leurs adresses sur le serveur web commencent par le même préfixe, par exemple \n  \"http://profmath.uqam.ca/\"   ou   \"http://localhost:8090/\" .", 
		
		600, 200);
}

try {installerProgramme();} 
catch(erreur) {
	function actions_initiales() {}
	function actions_en_boucle() {}
}