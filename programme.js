function installerProgramme() {
  eval(sessionStorage.getItem("donnee"));
}

try {installerProgramme();} 
catch(erreur) {
	function actions_initiales() {}
	function actions_en_boucle() {}
}