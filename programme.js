function installerProgramme() { 
  if (sessionStorage.getItem("donnee") == null) {
  		messageERREUR("Ou bien cette page d'exécution n'a pas été ouverte par l'éditeur p5Visuel, ou bien un programme vide a été transmis par l'éditeur (peut-être parce que l'éditeur p5Visuel et la page d'exécution ne sont pas sur le même domaine web).");}
  eval(sessionStorage.getItem("donnee"));
}

try {installerProgramme();} 
catch(erreur) {
	function actions_initiales() {}
	function actions_en_boucle() {}
}