var canvas, titre1, x, nbCarres;

/**
 * Fonction exécutée une fois, au départ
 */
function actions_initiales() {
  document.body.style.paddingLeft="30px";
  titre1=createElement("h1",'Mon premier programme');
  titre1.style('color',(color(255,0,0,255)));
  canvas=creerCanvas(600,600);
  titre1.parent((select("#p5Visuel")));
  canvas.parent((select("#p5Visuel")));
}

/**
 * Décrire cette fonction…
 */
function figure(nbCarres) {
  for (var count = 0; count < nbCarres; count++) {
    carre();
    droite((360 / nbCarres));
  }
}

/**
 * Décrire cette fonction…
 */
function carre() {
  for (var count2 = 0; count2 < 4; count2++) {
    avance(200);
    droite(90);
  }
}

/**
 * Fonction exécutée périodiquement, de façon répétée
 */
function actions_en_boucle() {
  background((color(255,240,240,255)));figure(30);
  droite(1);
}
