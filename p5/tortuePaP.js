var canevas, canvas, nbMaxMouvTortue, nbMouvTortue, gliss, para, vitesse, x, d, a, bouton, y, para2, texte, variable, i, bouton2;


function actions_initiales() {
  document.body.style.paddingLeft="20px";
  createElement("h1",'La tortue pas à pas');
  canevas=creerCanvas(800,600); canvas=canevas; couleurFondC('rgb(200 ,200 ,200)');
  montrerTortue(20,'rgb(255 ,0 ,0)');
  init_environnement();
  initialisation(canevas);
  placerAlaFin();
}

function init_environnement() {
  nbMaxMouvTortue = 0;
  para=createP('Vitesse = ');
  gliss=createSlider(0,60,1,1);
  gliss.parent(para);
  gliss.style('width','300px');
  bouton=createButton('Recommencer');
  bouton.mouseClicked(recommencer);
  bouton2=createButton('Une étape');
  bouton2.mouseClicked(une_etape);
  para2=createP('');
  frameRate(round(1));
}

function placerAlaFin() {
  var monDivPaP = createDiv('');
  para.parent(monDivPaP);
  bouton.parent(monDivPaP);
  bouton2.parent(monDivPaP);
  para2.parent(monDivPaP);
}

function actions_en_boucle() {
  if (fixer_vitesse()) {
    return ;
  }
  initialisationTortue(leGraphicsActif);nbMouvTortue = 0;
  figure();
  nbMaxMouvTortue = nbMaxMouvTortue + 1;
}

function recommencer() {
  nbMaxMouvTortue = 0;
  gliss.value(1);
  para2.html("");
}

function fixer_vitesse() {
  vitesse = traiterNombre(gliss.value());
  if (vitesse > 0) {
    frameRate(round(vitesse));
  }
  return vitesse == 0;
}

function limite_nbMouv_atteinte() {
  nbMouvTortue = nbMouvTortue + 1;
  return nbMouvTortue >= nbMaxMouvTortue;
}

function une_etape() {
  gliss.value(0);
  initialisationTortue(leGraphicsActif);if (nbMaxMouvTortue == 0) {
    nbMaxMouvTortue = 1;
  }
  nbMouvTortue = 0;
  figure();
  nbMaxMouvTortue = nbMaxMouvTortue + 1;
}

function Avance_(d) {
  if (limite_nbMouv_atteinte()) {
    return ;
  }
  avance(d);
  para2.html((String('Avance ') + String(d)));
}

function Recule_(d) {
  if (limite_nbMouv_atteinte()) {
    return ;
  }
  recule(d);
  para2.html((String('Recule  ') + String(d)));
}

function Droite_(a) {
  if (limite_nbMouv_atteinte()) {
    return ;
  }
  droite(a);
  para2.html((String('Droite ') + String(a)));
}

function Gauche_(a) {
  if (limite_nbMouv_atteinte()) {
    return ;
  }
  gauche(a);
  para2.html((String('Gauche ') + String(a)));
}

function Aller_(x, y) {
  if (limite_nbMouv_atteinte()) {
    return ;
  }
  fixePos(x,y);
  para2.html((['Aller (',x,' , ',y,' )'].join('')));
}

function Sauter_(x, y) {
  if (limite_nbMouv_atteinte()) {
    return ;
  }
  sautePos(x,y);
  para2.html((['Sauter (',x,' , ',y,' )'].join('')));
}

function Fixe_Cap_(a) {
  if (limite_nbMouv_atteinte()) {
    return ;
  }
  fixeCap(a);
  para2.html((String('Fixe cap ') + String(a)));
}

function Avis_(texte, variable) {
  if (limite_nbMouv_atteinte()) {
    return ;
  }
  para2.html((String(texte) + String(variable)));
}


