var prefixeCadresGeoGebra = "GGB/";
var stopperApresUneErreur=true; // *** outil de debug AB ***
var canvasP5visuel=null, canvasCree=false, leGraphicsActif=null; //, canvas=null, canevas=null
var fonctionUtilisateurDepotAB, monImageDeposeeAB, listeTableauxListesAB, centrerTableauxAB=false;
var graphicsTortue=null, tortueVisibleAB=false, dimTortueAB=50, couleurTortueAB="rgb(255,0,0)";
var signeAxes = 1; // 1 pour axes info et -1 pour axes maths (standards) --> canevas seulement
var nomCadreGeoGebraCourant="";

//function preload() { try {avant_de_commencer();} catch(erreur) {}}

function setup() {
	noCanvas();
	angleMode(RADIANS);
	listeTableauxListesAB=[];
	actions_initiales();
}
function draw() {axesStandards(false); actions_en_boucle();}

function choixAxes(choix) {if(choix=="MATH") {signeAxes = -1;} else {signeAxes = 1;}; axesStandards(true);}
function annulerToutesTransfos() {leGraphicsActif.resetMatrix(); axesStandards(true);}
function axesStandards(complet) {
	if (leGraphicsActif != canvasP5visuel) {return;}
	if (canvasP5visuel == null) {return;}
	canevas.resetMatrix();
	graphicsTortue.resetMatrix();
	if (signeAxes == -1) {
		canevas.translate(width/2, height/2);
		canevas.scale(1,-1);
		graphicsTortue.translate(width/2, height/2);
		graphicsTortue.scale(1,-1);
	}
	if (complet) {initTortue(canevas);initTortue(graphicsTortue);placerTortueSurCanevas();}
}
function disposerPageExecution(centrer,largeur) {
	if (centrer) {
		centrerTableauxAB=true;
		document.getElementsByTagName("body")[0].style.textAlign="center";}
	if (largeur>0){
		document.getElementsByTagName("body")[0].style.width=(largeur+"px");}
}
function centrerPageExecution(largeur) { disposerPageExecution(true,largeur); }

function trouverPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
	   do {	curleft += obj.offsetLeft;
	   		curtop += obj.offsetTop;
		  } while (obj = obj.offsetParent);
	return [curleft,curtop];
    }
}

function creerCanvas(a,b) {
	var leGraphics;
	if (canvasCree) {
		leGraphicsActif = canvasP5visuel;
		if (!(width==a && height==b)) {resizeCanvas(a,b,true); initTortue(canevas); creerGraphicsTortue(); axesStandards(true);}
		return canvasP5visuel;
	}
	leGraphics = createCanvas(a,b); canvasCree=true; pixelDensity(1);
	canvasP5visuel = leGraphics; canvas = leGraphics;  canevas = leGraphics;
	leGraphicsActif = leGraphics;
	leGraphics.show();
	leGraphics.style('display','inline-block');
	initTortue(leGraphics);
	creerGraphicsTortue();
	axesStandards(true);
	return leGraphics;
}
function creerZoneGraphique(a,b) {
	var leGraphics; 
	leGraphics = createGraphics(a,b); leGraphics.pixelDensity(1);
	leGraphicsActif = leGraphics;
	leGraphics.show();
	leGraphics.style('display','inline-block');
	initTortue(leGraphics);
	return leGraphics;
}
function creerGraphicsTortue() {
	if(canvasP5visuel==null) {return;}
	if(graphicsTortue != null) {graphicsTortue.hide();}
	var posCanAB = trouverPos(canvas.elt); // canvasP5visuel
	graphicsTortue = createGraphics(width,height); //tortueVisibleAB=false;
	graphicsTortue.pixelDensity(1);
	graphicsTortue.clear();
	if(tortueVisibleAB) {graphicsTortue.show();} else {graphicsTortue.hide();}
	graphicsTortue.position(posCanAB[0],posCanAB[1]);
	initTortue(graphicsTortue); placerTortueSurCanevas();
}
window.onresize = creerGraphicsTortue;
function cacherTortue()  {
	tortueVisibleAB=false; if(graphicsTortue != null) {tortueVisibleAB=false; graphicsTortue.hide();}
}
function montrerTortue(taille,couleur) {
	tortueVisibleAB=true; dimTortueAB=taille; couleurTortueAB=couleur;
	if(graphicsTortue != null) {graphicsTortue.show(); placerTortueSurCanevas();}
}
function placerTortueSurCanevas() {
	if((leGraphicsActif!=canevas) || (!tortueVisibleAB)) {return;}
	leGraphicsActif=graphicsTortue;
	if(signeAxes == -1) { // BUG avec ".clear()" quand des transfos ont été appliquées ???
		canevas.resetMatrix();
		canevas.translate(width/2, height/2); canevas.scale(1,-1);
		graphicsTortue.resetMatrix(); graphicsTortue.clear();
		graphicsTortue.translate(width/2, height/2); graphicsTortue.scale(1,-1);
	} else {graphicsTortue.clear();}
	graphicsTortue.tortueX=canevas.tortueX;
	graphicsTortue.tortueY=canevas.tortueY;
	graphicsTortue.tortueAngle=canevas.tortueAngle;
	
	graphicsTortue.stroke(couleurTortueAB);
	graphicsTortue.fill(couleurTortueAB);
  	var c = dimTortueAB;
  	var angleT=radians(graphicsTortue.tortueAngle);
  	var co=cos(angleT); 
  	var si=sin(angleT);
  	var x1 = graphicsTortue.tortueX+3*c*co;
  	var y1 = graphicsTortue.tortueY+3*c*si;
  	var x2 = graphicsTortue.tortueX-c*si;
  	var y2 = graphicsTortue.tortueY+c*co;
  	var x3 = graphicsTortue.tortueX+c*si;
  	var y3 = graphicsTortue.tortueY-c*co;
  	graphicsTortue.triangle(x1,y1,x2,y2,x3,y3);
  	
	leGraphicsActif=canevas;
}
function initialisationTortue(g) {
	initTortue(g);
	if (g==canevas) {initTortue(graphicsTortue); placerTortueSurCanevas();}
}

function choisirZoneGraphique(g) {leGraphicsActif = g;}
function posXsouris() {
	if (leGraphicsActif == null) {return winMouseX;}
	if (leGraphicsActif == canvasP5visuel) {return mouseX;}
	return mouseX + trouverPos(canevas.elt)[0] - trouverPos(leGraphicsActif.elt)[0];
}
function posYsouris() {
	if (leGraphicsActif == null) {return winMouseY;}
	if (leGraphicsActif == canvasP5visuel) {return mouseY;}
	return mouseY + trouverPos(canevas.elt)[1] - trouverPos(leGraphicsActif.elt)[1];
}

function enregistrerCanvas() {saveCanvas();}
function estNombre(x) {return !isNaN(x) && isFinite(x);}
function traiterNombre(val) {if (estNombre(val)) {return Number(val);} else {return val;}}
function degres(x) {return x*180/PI;}
function radians(x) {return x*PI/180;}
function normeVecteur2D(x,y) {return sqrt(x*x+y*y);}
function orientationVecteur2D(x,y) {return degres(atan2(y,x));}
function creerZoneTexte(contenu, lignes, colonnes) {
	var texte="",lien="";
	for(var k=0;k<contenu.length;k++) {
		texte = texte+lien+contenu[k]; lien="\n";
	}
	var zone = createElement('TEXTAREA',texte);
	zone.elt.rows = lignes; zone.elt.cols = colonnes;
	zone.elt.readOnly = true; // sinon, quand modifiée par l'utilisateur, non modifiable par programme
	return zone;
}
function contenuZoneTexte(zone, contenu) {
	var texte="",lien="";
	for(var k=0;k<contenu.length;k++) {
		texte = texte+lien+contenu[k]; lien="\n";
	}
	zone.html(texte);
}

function creerBlocTexteFormat(contenu,largeur,hauteur,disposition,rembourrage,taille,couleur,fond) {
	var blocTexte;
	if (Array.isArray(contenu)) {contenu = contenuBlocTexte(contenu);}
	//largeur=largeur-2*rembourrage; hauteur=hauteur-2*rembourrage;
	blocTexte=createSpan(contenu);
	blocTexte.style("display","inline-block");
	blocTexte.style("vertical-align","top");
	blocTexte.style("overflow-x","auto");
	if (disposition) {blocTexte.style("text-align","center");} else {blocTexte.style("text-align","left");}
	blocTexte.style("width",largeur+"px");
	blocTexte.style("height",hauteur+"px");
	blocTexte.style("padding",rembourrage+"px");
	blocTexte.style("font-size",taille+"px");
	blocTexte.style("color",couleur);
	if (fond.includes("url")) {blocTexte.style("background-image",fond); blocTexte.style("background-size","cover");} 
	else {blocTexte.style("background",fond);}
	return blocTexte;
}
function contenuBlocTexte(contenu) {
	var texte="";
	for(var k=0;k<contenu.length;k++) {
		texte = texte+contenu[k];
		if (k+1 < contenu.length) {texte = texte + "<br />";}
	}
	return texte;
}


function substitution(modele,liste){
  var cmd = modele;
  for (var k=liste.length - 1; k>=0; k--) {
    cmd = cmd.replace(new RegExp('@'+(k+1),'g'),liste[k]);
  }
  return cmd;
}

function refreshMathJax() {
	try { MathJax.Hub.Queue(["Typeset",MathJax.Hub]); }
	catch(error) {setTimeout(refreshMathJax,1000*0.5);}
}

function codeMath(chaine)  {return "`"+chaine+"`";}

 // pour que touchés dans canvas pas interprétés comme des clics (sur tablettes)
function touchEnded()   { 
	if ((0<mouseX) && (mouseX<width) && (0<mouseY) && (mouseY<height)) {return false;};
	return true;
}
function touchStarted()   { 
	if ((0<mouseX) && (mouseX<width) && (0<mouseY) && (mouseY<height)) {return false;};
	return true;
}

 // pour que glissés dans canvas pas interprétés comme mouvements de la page (sur tablettes)
function touchMoved()   { 
	if ((0<mouseX) && (mouseX<width) && (0<mouseY) && (mouseY<height)) {return false;};
	return true;
}

function surMobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
		{ return true;} else {return false;};
}

// **************************************************************

//var tortueX, tortueY, tortueAngle, tortueTrace, tortuePolyEnCours, tortueNbSommetsPoly;
//var av = avance, dr = droite, lc = leveCrayon, bc = baisseCrayon;

function initTortue(g) { // devrait-on retenir l'épaisseur du trait, les couleurs de fond, de remplissage et de tracé ?
  if (g == null) {messageERREUR("On ne peut initialiser la tortue car le <b>graphique actif</b> n'est pas défini"); return;}  // *** outil de debug AB ***
  //pixelDensity(1); // pour faciliter le traitement des images
  rectMode(CORNERS); ellipseMode(RADIUS); g.textAlign(LEFT,TOP);
  if ((signeAxes == -1) && ((g==canevas)||(g==graphicsTortue))) {
  	g.tortueX = 0;
  	g.tortueY = 0;
  	g.tortueAngle = 90;
  } else {
  	g.tortueX = g.width/2;
  	g.tortueY = g.height/2;
  	g.tortueAngle = -90;
  }
  g.tortueTrace = true;
  g.tortuePolyEnCours = false;
  //g.background(255); g.stroke(0); g.strokeWeight(1); // Ne pas effacer ni remettre les couleurs par défaut
}

function avance(d) {
  var g = leGraphicsActif;
  if (g == null) {messageERREUR("On ne peut avancer car le <b>graphique actif</b> n'est pas défini"); return;}  // *** outil de debug AB ***
  var x=g.tortueX, y=g.tortueY;
  g.tortueX = g.tortueX +d*cos(radians(g.tortueAngle));
  g.tortueY = g.tortueY +d*sin(radians(g.tortueAngle));
  if (g.tortueTrace) {segment(x,y,g.tortueX,g.tortueY);}
  placerTortueSurCanevas();
}

function segment(x1,y1,x2,y2) {
    var g = leGraphicsActif;
    if (g == null) {messageERREUR("On ne peut tracer de segment car le <b>graphique actif</b> n'est pas défini"); return;}  // *** outil de debug AB ***
	if (g.tortuePolyEnCours) {
		if (g.tortueNbSommetsPoly==0) {vertex_(x1,y1); g.tortueNbSommetsPoly = g.tortueNbSommetsPoly+1;}
		vertex_(x2,y2); g.tortueNbSommetsPoly = g.tortueNbSommetsPoly+1;
		g.line(x1,y1,x2,y2); // Facultatif : pour voir les contours avant le remplissage en cas de tracé progressif
	} else {
		g.line(x1,y1,x2,y2);
	}
}

function debutPoly() {
    var g = leGraphicsActif;
    if (g == null) {messageERREUR("On ne peut débuter un polygone car le <b>graphique actif</b> n'est pas défini"); return;}  // *** outil de debug AB ***
	g.tortuePolyEnCours = true;
	g.tortueNbSommetsPoly = 0;
	beginShape_();
}

function finPoly() {
    var g = leGraphicsActif;   
    if (g == null) {messageERREUR("On ne peut terminer un polygone car le <b>graphique actif</b> n'est pas défini"); return;}  // *** outil de debug AB ***
	endShape_();
	g.tortuePolyEnCours = false;
}

function sommet(x,y) {
	var g = leGraphicsActif; 
    if (g == null) {messageERREUR("On ne peut définir un sommet car le <b>graphique actif</b> n'est pas défini"); return;}  // *** outil de debug AB ***
	vertex_(x,y); 
	g.tortueNbSommetsPoly = g.tortueNbSommetsPoly+1;
}

function recule(d) {avance(-d)};

function droite(a) {
  var g = leGraphicsActif;
  if (g == null) {messageERREUR("On ne peut tourner car le <b>graphique actif</b> n'est pas défini"); return;}  // *** outil de debug AB ***
  a = g.tortueAngle + signeAxes*a;
  var sgn = 1; if (a<0) {sgn=-1; a=-a;}
  a = (a - 360*floor(a/360))*sgn;
  g.tortueAngle = a;
  placerTortueSurCanevas();
}

function gauche(d) {droite(-d)};

function baisseCrayon() {
  var g = leGraphicsActif;
  if (g == null) {messageERREUR("On ne peut baisser le crayon car le <b>graphique actif</b> n'est pas défini"); return;}  // *** outil de debug AB ***
  g.tortueTrace = true;
}

function leveCrayon() {
  var g = leGraphicsActif;
  if (g == null) {messageERREUR("On ne peut lever le crayon car le <b>graphique actif</b> n'est pas défini"); return;}  // *** debug AB **
  g.tortueTrace = false;
}

function fixePos(x,y) {
  var g = leGraphicsActif;
  if (g == null) {messageERREUR("On ne peut fixer la position car le <b>graphique actif</b> n'est pas défini"); return;}  // *** debug AB **
  var a=g.tortueX, b=g.tortueY;
  g.tortueX = x;
  g.tortueY = y;
  if (g.tortueTrace) {line(a,b,g.tortueX,g.tortueY);} // line OU segment ??? (voir aussi sommet)
  placerTortueSurCanevas();
}

function sautePos(x,y) {
  var g = leGraphicsActif;
  if (g == null) {messageERREUR("On ne peut sauter à la position car le <b>graphique actif</b> n'est pas défini"); return;}  // *** debug AB **
  var a=g.tortueX, b=g.tortueY;
  g.tortueX = x;
  g.tortueY = y;
  placerTortueSurCanevas();
}

function fixeCap(a) {
  var g = leGraphicsActif;
  if (g == null) {messageERREUR("On ne peut fixer le cap car le <b>graphique actif</b> n'est pas défini"); return;}  // *** debug AB **
  var sgn = 1; if (a<0) {sgn=-1; a=-a;}
  a = (a - 360*floor(a/360))*sgn;
  g.tortueAngle = a;
  placerTortueSurCanevas();
}

function vers(x,y) {
   var g = leGraphicsActif;
  if (g == null) {messageERREUR("On ne peut calculer le cap car le <b>graphique actif</b> n'est pas défini"); return;}  // *** debug AB **
   g.tortueAngle = degrees(atan2(y-g.tortueY, x-g.tortueX));
   return g.tortueAngle;
}


// **************************************************************

function pixelsDuCanvas() {return pixels;}
function obtenirPixel(liste,ligne,colonne,compos,valeur) {return liste[4*(ligne*width+colonne)+compos];}
function definirPixel(liste,ligne,colonne,compos,valeur) {liste[4*(ligne*width+colonne)+compos]=valeur;}

function depotImageDansCanvas(nomFonction) {
  	fonctionUtilisateurDepotAB = nomFonction;
  	canvasP5visuel.drop(depotImageDansCanvasAux);
}
function depotImageDansCanvasAux(fichier) {
  	if (fichier.type != "image") {return;}
  	monImageDeposeeAB=createImg(fichier.data,"",imageDeposeeChargeeAB);
}
function imageDeposeeChargeeAB() {
  	fonctionUtilisateurDepotAB(monImageDeposeeAB);
}
function definirPageWebExecution(chemin) {}
function nePasTesterFonctionsDeBase() {}

// *************************** Ajouts pour sauver/ramener des données ***********************************

var nomFichierSaveAs = "Fichier de données";
function enregistrerDonnees(liste) {
	saveTextAsFile(liste.join('|'), '.txt', "Nom du fichier de données");
}  
function saveTextAsFile(xmlText, suffixe, invite)
{	
    var nomFichierTemp = prompt(invite, nomFichierSaveAs);
    if (nomFichierTemp=='' || nomFichierTemp==null) {return;}
    nomFichierSaveAs = nomFichierTemp;
    var textToSave = xmlText;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = nomFichierSaveAs+suffixe;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
function destroyClickedElement(event) { document.body.removeChild(event.target); }

// ***

var callbackTraiterDonnees;	
var fileSelector = document.createElement('input');
fileSelector.setAttribute('type', 'file');
	
function chargerDonnees(fonctionTraitantDonnees) {
	document.body.onfocus = verifierCancelSelectionne;
	fichier = fileSelector.files[0];
	fileSelector.click();
	xmlTextGlobal = 0;
	callbackTraiterDonnees = fonctionTraitantDonnees;
	chargerContenuFichierDonnees();
}  		
function chargerContenuFichierDonnees() {
	loadFileAsText();
	if (xmlTextGlobal==0) {setTimeout(chargerContenuFichierDonnees, 1077); return;}
	if (xmlTextGlobal) { callbackTraiterDonnees(); }
}
function conversionListeListe(liste) {
   for (var k=0;k<liste.length;k++) {liste[k]=traiterNombre(liste[k]);}
   return liste;
}
function donneesChargees() {
	return conversionListeListe(xmlTextGlobal.split('|'));
}

function loadFileAsText()
{
    var fileToLoad = fileSelector.files[0]; 
    if (fileToLoad == fichier) {setTimeout(loadFileAsText, 1000); return;}
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        xmlTextGlobal = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
    
}

function verifierCancelSelectionne() {
	if(fileSelector.value.length == 0) {xmlTextGlobal = "Annulé";}
}

// **************************************************************

/* Ne fonctionne pas
function keyPressed() {
	if (keyCode === ESCAPE) { // on veut arrêter toute exécution JavaScript
		// alert("ALLO");  // pour debug
		throw new Error("Interrompu par l'utilisateur");
	}
}
*/

function evaluerExpressionConstante(chaine) { // Pour bloc "evaluer la fonction f(x) %1 en %2
	try {
		var temp = eval(chaine);
		if (estNombre(temp)) {return temp;} else {return 0/0;}
	} 
	catch(err) {return 0/0;}
}

function evaluerExpressionX(chaine,x) { // Pour bloc "evaluer la fonction f(x) %1 en %2
	try {
		var temp = eval(chaine);
		if (estNombre(temp)) {return temp;} else {return 0/0;}
	} 
	catch(err) {return 0/0;}
}
evaluerFonction = evaluerExpressionX;
function racine(x) {return Math.sqrt(x);}
function puissance(x,y) {return Math.pow(x,y);}
exposant = puissance; puiss = puissance; exp =exposant;
// **************************************************************

function versAdresseWeb(adresse,autreFenetre) {
	if (autreFenetre) { 
		if (null == window.open(adresse,"_blank")) {
			informationsMiseAuPointP5(["Adresse web : ",
										"    "+adresse, "",
										"La page web n'a pu être ouverte dans une autre fenêtre.",
										"Votre navigateur bloque peut-être les fenêtres surgissantes...","",
										"Pour corriger : ",
										"    déclencher l'ouverture suite à une action de l'utilisateur."]);}
	} else { window.open(adresse,"_self"); } //
}

function retourneLien(texte, adresse, autrePage) {
	var creerPage='';
	if (autrePage) {creerPage='" target="_blank';}
	return '<a style= "text-decoration:inherit;color:inherit;" href="'+adresse+creerPage+'">'+texte+'</a>';
}

function creerMenuLocal(liste) {
	var menuLocal;
	menuLocal = createSelect();
	for(var k=0;k<liste.length;k++) {
  		menuLocal.option(liste[k]);
    }
    return menuLocal;
}

var noSelecteurCouleur = 1;
function choisirCouleurAction(couleurDepart,transparence,action,continuellement) {
	var bouton, idBouton, typeCouleur, monSelecteur;
	if (action.indexOf("'")==0) {action = action.substring(1, action.length-1);};
	bouton = createButton("");
	idBouton = 'entreeCouleur'+noSelecteurCouleur;   noSelecteurCouleur = noSelecteurCouleur +1;
	bouton.elt.id = idBouton;
	if (transparence) {typeCouleur='rgba';} else {typeCouleur='rgb';}
	monSelecteur = new JSColor('#'+idBouton, {format:typeCouleur,value:couleurDepart.toString()});
	monSelecteur.option('palette', [
			'#ffffff', '#ffcccc', '#ffcc99', '#ffff99', '#ffffcc', '#99ff99', '#99ffff', '#ccffff', '#ccccff', '#ffccff',
			'#cccccc', '#ff6666', '#ff9966', '#ffff66', '#ffff33', '#66ff99', '#33ffff', '#66ffff', '#9999ff', '#ff99ff',
			'#c0c0c0', '#ff0000', '#ff9900', '#ffcc66', '#33ff33', '#33ff33', '#66cccc', '#33ccff', '#6666cc', '#cc66cc',
			'#999999', '#cc0000', '#ff6600', '#ffcc33', '#ffcc00', '#33cc00', '#00cccc', '#3366ff', '#6633ff', '#cc33cc',
			'#666666', '#990000', '#cc6600', '#cc9933', '#999900', '#009900', '#339999', '#3333ff', '#6600cc', '#993399',
			'#333333', '#660000', '#993300', '#996633', '#666600', '#006600', '#336666', '#000099', '#333399', '#663366',
			'#000000', '#330000', '#663300', '#663333', '#333300', '#003300', '#003333', '#000066', '#330099', '#330033',
		]);	
	monSelecteur.option({
		'width': 200,
		'position': 'right',
		'backgroundColor': '#FFF'
	});
	if (continuellement) {monSelecteur.option('onInput',action+'(this.toRGBAString())');} 
					else {monSelecteur.option('onChange',action+'(this.toRGBAString())');}
	return bouton;
}

function insererVideo(source, controles, depart, repetitions, largeur, hauteur) {
	if (source.toLowerCase().includes("https://youtu.be/")) {
		source=source.replace("https://youtu.be/","https://www.youtube.com/embed/");
		return insererVideoYouTube(source, controles, depart, repetitions, largeur, hauteur);}
	if (source.toLowerCase().includes("https://www.youtu")) {
		return insererVideoYouTube(source, controles, depart, repetitions, largeur, hauteur);}
	if (source.toLowerCase().includes("https://vimeo.com/")) {
		source=source.replace("https://vimeo.com/","https://player.vimeo.com/video/");
		return insererVideoVimeo(source, controles, depart, repetitions, largeur, hauteur);}
	if (source.toLowerCase().includes("vimeo.com/")) {
		return insererVideoVimeo(source, controles, depart, repetitions, largeur, hauteur);}
	if (source.toLowerCase().includes("dai.ly/")) {
		source=source.replace("dai.ly/","dailymotion.com/embed/video/");
		return insererVideoDailyMotion(source, controles, depart, repetitions, largeur, hauteur);}
	if (source.toLowerCase().includes("dailymotion.com/")) {
		return insererVideoDailyMotion(source, controles, depart, repetitions, largeur, hauteur);}
	var video = createVideo(source);
	video.elt.controls=controles;
	video.elt.autoplay=depart;
	video.elt.loop=repetitions;
	if (largeur>0 && hauteur>0) {
  		video.style('width',largeur+'px');
  		video.style('height',hauteur+'px');}
	return video;
}

function insererVideoYouTube(source, controles, depart, repetitions, largeur, hauteur) {
	var prefixe = "?"; if (source.includes("?")) {prefixe = "&";}
	var cadreYouTube=createElement('iframe','');
	cadreYouTube.elt.style.borderStyle = "none";
	if (depart) {source = source + prefixe+"autoplay=1"; prefixe = "&";}
	if (repetitions) {source = source + prefixe+"loop=1"; prefixe = "&";}
	if (!controles) {source = source + prefixe+"controls=0"; prefixe = "&";}
	cadreYouTube.elt.setAttribute("src",source);
	cadreYouTube.elt.setAttribute("allowfullscreen",true);
	if (largeur>0 && hauteur>0) {
		cadreYouTube.elt.width = largeur;
		cadreYouTube.elt.height = hauteur;}
	return cadreYouTube;
}

function insererVideoVimeo(source, controles, depart, repetitions, largeur, hauteur) {
	var prefixe = "?"; if (source.includes("?")) {prefixe = "&";}
	source = source + prefixe + "title=0&byline=0&portrait=0";
	var cadreVimeo=createElement('iframe','');
	cadreVimeo.elt.style.borderStyle = "none";
	if (depart) {source = source + "&autoplay=1";}
	if (repetitions) {source = source + "&loop=1";}
	//if (!controles) {source = source + "&controls=0";}
	cadreVimeo.elt.setAttribute("src",source);
	cadreVimeo.elt.setAttribute("frameborder","0");
	cadreVimeo.elt.setAttribute("allow","autoplay; fullscreen");
	//cadreVimeo.elt.setAttribute("webkitallowfullscreen ",true);
	cadreVimeo.elt.setAttribute("mozallowfullscreen",true);
	cadreVimeo.elt.setAttribute("allowfullscreen",true);
	if (largeur>0 && hauteur>0) {
		cadreVimeo.elt.width = largeur;
		cadreVimeo.elt.height = hauteur;}
	return cadreVimeo;
}

function insererVideoDailyMotion(source, controles, depart, repetitions, largeur, hauteur) {
	if (source.toLowerCase().includes("sv4.dailymotion.com")) {source=source.replace("sv4.dailymotion.com","dailymotion.com");}
	var prefixe = "?"; if (source.includes("?")) {prefixe = "&";}
	var cadreDM=createElement('iframe','');
	cadreDM.elt.style.borderStyle = "none";
	if (depart) {source = source + prefixe+"autoplay=1"; prefixe = "&";}
	if (repetitions) {source = source + prefixe+"loop=1"; prefixe = "&";}
	if (!controles) {source = source + prefixe+"controls=0"; prefixe = "&";}
	cadreDM.elt.setAttribute("src",source);
	cadreDM.elt.setAttribute("allowfullscreen",true);
	if (largeur>0 && hauteur>0) {
		cadreDM.elt.width = largeur;
		cadreDM.elt.height = hauteur;}
	return cadreDM;
}

function insererPageWeb(source, largeur, hauteur, bordEpaisseur, bordCouleur) {
	var cadreP5V=createElement('iframe','');
	cadreP5V.elt.style.borderStyle = "solid";
	cadreP5V.elt.style.borderWidth = bordEpaisseur+"px";
	cadreP5V.elt.style.borderColor = bordCouleur;
	cadreP5V.elt.setAttribute("src",source);
	cadreP5V.elt.setAttribute("allowfullscreen",true);
	if (largeur>0 && hauteur>0) {
		cadreP5V.elt.width = largeur;
		cadreP5V.elt.height = hauteur;}
	return cadreP5V;
}
insererP5Visuel=insererPageWeb;

// **************************************************************

function point_(x,y) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut tracer un point car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){point(x,y);} 
	else {leGraphicsActif.point(x,y);} }

function triangle_(x1,y1,x2,y2,x3,y3) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut tracer un triangle car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){triangle(x1,y1,x2,y2,x3,y3);} 
	else {leGraphicsActif.triangle(x1,y1,x2,y2,x3,y3);} }

function rect_(x1,y1,x2,y2) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut tracer un rectangle car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){rect(x1,y1,x2,y2);} 
	else {leGraphicsActif.rect(x1,y1,x2-x1,y2-y1);} }

function cercle_(x,y,r) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut tracer un cercle car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){ellipse(x,y,r);} 
	else {leGraphicsActif.ellipse(x,y,2*r);} }

function ellipse_(x,y,a,b) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut tracer une ellipse car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){ellipse(x,y,a,b);} 
	else {leGraphicsActif.ellipse(x,y,2*a,2*b);} }

function arc_(x,y,a,b,debut,fin) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut tracer un arc car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){arc(x,y,a,b,debut,fin);} 
	else {leGraphicsActif.arc(x,y,a,b,debut,fin);} }

function couleurFond(r,g,b) {
	if(leGraphicsActif == null) {messageERREUR("Il faut spécifier le canevas ou la zone graphique <b>avant</b> d'en déterminer le fond.");}
	leGraphicsActif.background(r,g,b);
}

function couleurFondC(c) {
	if(leGraphicsActif == null) {messageERREUR("Il faut spécifier le canevas ou la zone graphique <b>avant</b> d'en  déterminer le fond.");}
	leGraphicsActif.background(c);
}

function fill_(c) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut spécifier une couleur de remplissage car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){fill(c);} 
	else {leGraphicsActif.fill(c);} }

function noFill_() {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut spécifier de ne plus remplir car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){noFill();} 
	else {leGraphicsActif.noFill();} }

function stroke_(c) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut spécifier une couleur de trait car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){stroke(c);}
	else {leGraphicsActif.stroke(c);} }

function strokeWeight_(c) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut spécifier l'épaisseur du trait car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){strokeWeight(c);} 
	else {leGraphicsActif.strokeWeight(c);} }

function beginShape_() {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut commencer une forme car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){beginShape();} 
	else {leGraphicsActif.beginShape();} }
	
function endShape_() {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut terminer une forme car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){endShape();} 
	else {leGraphicsActif.endShape();} }
	
function vertex_(x,y) {
  	if (leGraphicsActif == null) {messageERREUR("On ne peut spécifier un sommet car le <b>graphique actif</b> n'est pas défini");}  // *** debug AB **
	if (leGraphicsActif == canvasP5visuel){vertex(x,y);} 
	else {leGraphicsActif.vertex(x,y);} }
	
// Pour communication avec figure GeoGebra intégrée dans la page web

figureGGBchargeeVAR=false;
function ggbAviseP5Visuel() { // appelé par ggbOnInit --> signale que la figure est chargée
	//setTimeout(commandes_initiales_GeoGebra,0.1*1000);
	try { setTimeout(commandes_initiales_GeoGebra,0.1*1000); } catch(err) { }
	setTimeout(function() {figureGGBchargeeVAR=true;},1*1000);
}

function figureGGBchargee() {return figureGGBchargeeVAR;}

// **************************************************************

function enleverElement(liste,numero){var copie=liste.slice(); copie.splice(numero,1); return copie;}
function ajouterElement(liste,numero,element){var copie=liste.slice(); copie.splice(numero,0,element); return copie;}
function creerAffichageListe(liste,largeur,unite,scrollP,hauteur,taillePolice) {
  if(unite=="PIXELS") {unite="px";} else {unite="%";};
  scrollP=(scrollP=="ACTIVEE");
  var objetTable;
  objetTable=createElement('table',contenu_du_tableau_de_la_liste(liste));
  objetTable.class("lignesBleues");
  objetTable.style('font-size',taillePolice+'px');
  objetTable.style('width',"500px");
  if(scrollP){
  	if(unite=="px") {objetTable.style('width',largeur+unite);} 
  	else {objetTable.style('width','100%');}
  	var contenant;
  	contenant=createElement('div','');
  	if(unite=='px') {largeur=largeur+20;}
  	contenant.style('width',largeur+unite);
  	contenant.style('height',hauteur+'px');
  	contenant.style('overflow','scroll');
  	objetTable.parent(contenant);
  	if (centrerTableauxAB) {
  		contenant.style('margin-left','auto');
  		contenant.style('margin-right','auto');
  	}
  	listeTableauxListesAB.push(objetTable);
  	listeTableauxListesAB.push(contenant);
  } else {
  	objetTable.style('width',largeur+unite);
  	if (centrerTableauxAB) {
  		objetTable.style('margin-left','auto');
  		objetTable.style('margin-right','auto');
  	}
  	listeTableauxListesAB.push(objetTable);
  	listeTableauxListesAB.push(objetTable);
  }
  return objetTable;
}
function afficherListe(liste,tableau) {
	tableau.html(contenu_du_tableau_de_la_liste(liste));
}
function creerAffichageListes(listes,largeur,unite,scrollP,hauteur,taillePolice) {
  if(unite=="PIXELS") {unite="px";} else {unite="%";};
  scrollP=(scrollP=="ACTIVEE");
  var objetTable;
  objetTable=createElement('table',contenu_du_tableau_des_listes(listes));
  objetTable.class("lignesBleues");
  objetTable.style('font-size',taillePolice+'px');
  objetTable.style('width',"500px");
  if(scrollP){
  	if(unite=="px") {objetTable.style('width',largeur+unite);} 
  	else {objetTable.style('width','100%');}
  	var contenant;
  	contenant=createElement('div','');
  	if(unite=='px') {largeur=largeur+20;}
  	contenant.style('width',largeur+unite);
  	contenant.style('height',hauteur+'px');
  	contenant.style('overflow','scroll');
  	objetTable.parent(contenant);
  	if (centrerTableauxAB) {
  		contenant.style('margin-left','auto');
  		contenant.style('margin-right','auto');
  	}
  	listeTableauxListesAB.push(objetTable);
  	listeTableauxListesAB.push(contenant);
  } else {
  	objetTable.style('width',largeur+unite);
  	if (centrerTableauxAB) {
  		objetTable.style('margin-left','auto');
  		objetTable.style('margin-right','auto');
  	}
  	listeTableauxListesAB.push(objetTable);
  	listeTableauxListesAB.push(objetTable);
  }
  return objetTable;
}
function afficherListes(listes,tableau) {
  tableau.html(contenu_du_tableau_des_listes(listes));
}
function afficherListesFormat(listes,format,tableau) {
  tableau.html(contenu_du_tableau_des_listesAvecFormat(listes,format));
}
function positionnerObjet(objet,x,y){ // permet d'inclure les tableaux
	for(var k=0; k<listeTableauxListesAB.length;k=k+2){
		if(listeTableauxListesAB[k]==objet) {objet=listeTableauxListesAB[k+1];}
	}
	if (objet instanceof EntreeNommee) {objet=objet.contenant;}
	if (objet instanceof Glissiere) {objet=objet.contenant;}
	objet.position(x,y);
	if ((objet == canvasP5visuel) && (canvasP5visuel != null)) {graphicsTortue.position(x,y);}
}
function positionnerTableauListe(tableau,x,y){
	for(var k=0; k<listeTableauxListesAB.length;k=k+2){
		if(listeTableauxListesAB[k]==tableau) {tableau=listeTableauxListesAB[k+1];}
	}
	tableau.position(x,y);
}
//----------------
function contenu_du_tableau_de_la_liste(listeAAfficher) {
  var Affichage;
  Affichage = '<thead><tr><th>Position</th><th>Valeur</th></tr></thead>';
  for (i = 0; i <= listeAAfficher.length - 1; i += abs(1)) {
    Affichage = [Affichage,'<tr><td>',i,'</td><td>',listeAAfficher[i],'</td></tr>'].join('');
  }
  return Affichage;
}
function contenu_du_tableau_des_listes(listesAafficher) {
  var Affichage;
  var longueurMax;
  var longueurCourante;
  longueurMax = 0;
  for (i = 0; i <= listesAafficher.length - 1; i += abs(1)) {
    longueurCourante = listesAafficher[i].length;
    if (longueurMax < longueurCourante) {
      longueurMax = longueurCourante;
    }
  }
  Affichage = '<thead><tr>';
  for (i = 0; i <= listesAafficher.length - 1; i += abs(1)) {
    Affichage = [Affichage,'<th>',(listesAafficher[i])[0],'</th>'].join('');
  }
  Affichage = String(Affichage) + String('</tr></thead>');
  for (i = 1; i <= longueurMax - 1; i += abs(1)) {
    Affichage = String(Affichage) + String('<tr>');
    for (j = 0; j <= listesAafficher.length - 1; j += abs(1)) {
      Affichage = [Affichage,'<td>',(listesAafficher[j])[i],'</td>'].join('');
    }
    Affichage = String(Affichage) + String('</tr>');
  }
  return Affichage;
}
function contenu_du_tableau_des_listesAvecFormat(listesAafficher,listesFormats) {
  var Affichage;
  var longueurMax;
  var longueurCourante;
  var format;
  longueurMax = 0;
  for (i = 0; i <= listesAafficher.length - 1; i += abs(1)) {
    longueurCourante = listesAafficher[i].length;
    if (longueurMax < longueurCourante) {
      longueurMax = longueurCourante;
    }
  }
  Affichage = '<thead><tr>';
  for (i = 0; i <= listesAafficher.length - 1; i += abs(1)) {
  	if (typeof listesFormats[i][0] == 'undefined' || listesFormats[i][0] == '') {format = '<th>'}
  	else {format = '<th style="'+(listesFormats[i])[0]+'">'}
    Affichage = [Affichage,format,(listesAafficher[i])[0],'</th>'].join('');
  }
  Affichage = String(Affichage) + String('</tr></thead>');
  for (i = 1; i <= longueurMax - 1; i += abs(1)) {
    Affichage = String(Affichage) + String('<tr>');
    for (j = 0; j <= listesAafficher.length - 1; j += abs(1)) {
  		if (typeof listesFormats[j][i] == 'undefined' || listesFormats[j][i] == '') {format = '<td>'}
  		else {format = '<td style="'+(listesFormats[j])[i]+'">'}
      Affichage = [Affichage,format,(listesAafficher[j])[i],'</td>'].join('');
    }
    Affichage = String(Affichage) + String('</tr>');
  }
  return Affichage;
}
function formatElementTableau(couleur,fond,taille,italique,gras,disposition) {
	var description = "";
	if (couleur.length > 0) {description = description+";color:"+couleur;}
	if (fond.length > 0) {description = description+";background:"+fond;}
	if (taille > 0) {description = description+";font-size:"+taille+"pt";}
	if (italique == "oui") {description = description+";font-style:italic";}
	if (gras == "oui") {description = description+";font-weight:bold";}
	if (disposition == "centre") {description = description+";text-align:center";}
	if (disposition == "gauche") {description = description+";text-align:left";}
	if (disposition == "droite") {description = description+";text-align:right";}
	if (description.length > 0) {description = description.slice(1);}
	return description;
}

//------------------------------------------------------------------
function informationsMiseAuPointP5(info) {  // *** outil de debug AB ***
	var texte = "";
	if (Array.isArray(info)) {
		for (var k=0; k<info.length; k++) { texte = texte + info[k] + "\n"; }
	} else { texte=info; }
	if (!confirm(texte)) {fonctionNonDefinieP5Visuel();};
}
//------------------------------------------------------------------
function messageAVERTISSEMENT(message, messageAlt, largeur, marge) {  // *** outil de debug AB ***
		if(messageAlt.length == 0) {messageAlt = message;}
		try { afficherDialogueModalABint("Avertissement",message,"","",largeur, marge); }
		catch(erreur) {  window.alert(messageAlt); } // info_debug(); 
		fonctionNonDefinieP5Visuel();
}

function messageERREUR(message) {  // *** outil de debug AB ***
	console.log("p5Visuel : "+message);
	if (stopperApresUneErreur) {
		try { afficherDialogueModalABint("Message d'erreur",message,"","",0,0); }
		catch(erreur) { message = "Message d'erreur\n**********************\n"+message; window.alert(message); } 
		info_debug(); fonctionNonDefinieP5Visuel();
	}
}

function afficherDialogueModalABint(titre,messageAvant, srcImage, messageApres, largeur, marge) {
	if (largeur == 0) {largeur = 800;}
	document.getElementById("contenantModal").style.width = largeur+"px";
	if (marge == 0) {marge = 200;}
	document.getElementById("contenantModal").style.marginTop = marge+"px";
	document.getElementById("messageModalTitre").innerHTML = titre;
	document.getElementById("messageModalAvant").innerHTML = messageAvant;
	if (srcImage.length == 0) {document.getElementById("messageModalParaImg").style.display="none"} 
	else {document.getElementById("messageModalImage").src = srcImage; document.getElementById("messageModalParaImg").style.display="block";}
	document.getElementById("messageModalApres").innerHTML = messageApres;
	window.location="#messageModalAB";
}

function afficherDialogueModalAB(titre,messageAvant, srcImage, messageApres, largeur, marge) {
	try {afficherDialogueModalABint(titre,messageAvant, srcImage, messageApres, largeur, marge);} 
	catch(error) {window.alert("Message d'erreur\n**********************\n"+"Ancienne version de p5Visuel\ndans laquelle le bloc 'Fenêtre modale...' n'était pas défini.");}
}


//------------------------------------------------------------------
// Gestion des cadres
function creerCadreGGB(dimension,id, forme, largeur, menus) {
	if (id.length == 0) {messageERREUR("Pour créer un cadre, son ID doit être explicité");}
	if (largeur < 400) {largeur = 400;}
	var cadreGGB, source, dimH, dimV, facteur, marge=20;
	cadreGGB=createElement('iframe','');
	cadreGGB.elt.setAttribute("id",id);
	if (forme == "C") {dimH = 800; dimV = 800;}
	if (forme == "SD") {dimH = 800; dimV = 600;}
	if (forme == "HD") {dimH = 800; dimV = 450;}
	cadreGGB.elt.style.width = (largeur+marge)+"px";
	cadreGGB.elt.style.height = round(marge+largeur*dimV/dimH)+"px";
	cadreGGB.elt.style.borderStyle = "none";
	if (menus == "sans") {forme = forme + "0";}
	if (dimension == "d3D") {forme = "d3D_"+forme;}
	source = prefixeCadresGeoGebra+forme+".html"; 
	document.getElementById(id).setAttribute("src",source);
	if (menus == "avec") {facteur = (dimV-72)/dimH;} else {facteur = dimV/dimH;}
	function changerAxes() {
		if (chargementCadreGGBtermine(id)) 
			{cadreGGB.elt.contentWindow.ggbApplet.setWidth(largeur);
			 cadreGGB.elt.contentWindow.ggbApplet.setHeight(round(largeur*dimV/dimH));
			 cadreGGB.elt.contentWindow.ggbApplet.setCoordSystem(-10,10,-10*facteur,10*facteur);}
		else {setTimeout(changerAxes,500);}
	}
	changerAxes();
}
function creerCadreGGBplus(dimension, id, largeur, hauteur, menus) {
	if (id.length == 0) {messageERREUR("Pour créer un cadre, son ID doit être explicité");}
	if (largeur < 400) {largeur = 400;}
	if (hauteur < 400) {hauteur = 400;}
	var cadreGGB, source, dimH, dimV, facteur, forme="C", marge=10;
	cadreGGB=createElement('iframe','');
	cadreGGB.elt.setAttribute("id",id);
	cadreGGB.elt.style.borderStyle = "none";
	if (menus == "sans") {forme = forme + "0";}
	if (dimension == "d3D") {forme = "d3D_"+forme;}
	if (dimension == "TAB") {forme = "TAB_"+forme;}
	if (dimension == "FORM") {forme = "FORM_"+forme;}
	source = prefixeCadresGeoGebra+forme+".html"; 
	document.getElementById(id).setAttribute("src",source);
	if (menus == "avec") {facteur = (hauteur-72)/largeur;} else {facteur = hauteur/largeur;}
	function changerAxes() {
		if (chargementCadreGGBtermine(id)) {
			 cadreGGB.elt.style.width = (largeur+marge)+"px";
			 cadreGGB.elt.style.height = (hauteur+marge)+"px";
			 cadreGGB.elt.contentWindow.ggbApplet.setWidth(largeur);
			 cadreGGB.elt.contentWindow.ggbApplet.setHeight(hauteur);
			 cadreGGB.elt.contentWindow.ggbApplet.setCoordSystem(-10,10,-10*facteur,10*facteur);}
		else {setTimeout(changerAxes,500);}
	}
	changerAxes();
	nomCadreGeoGebraCourant = id;
}
function importerFigureGGB(id, adresseWeb, largeur, hauteur) {
	if (id.length == 0) {
		messageERREUR("Pour utiliser un cadre, son ID doit être explicité");}
	var cadreGGB, marge=10;
	cadreGGB=createElement('iframe','');
	cadreGGB.elt.setAttribute("id",id);
	cadreGGB.elt.style.borderStyle = "none"; 
	document.getElementById(id).setAttribute("src",adresseWeb);
	cadreGGB.elt.style.width = (largeur+marge)+"px";
	cadreGGB.elt.style.height = (hauteur+marge)+"px";
	nomCadreGeoGebraCourant = id;
}

// Test si cadre chargé
function retournerSiCadreCharge(cadre,typeCADRE) {
	if (typeCADRE == "GENERIQUE" || typeCADRE == "SAGE") {return chargementCadreTermine(cadre);}
	if (typeCADRE == "P5VISUEL") {return chargementCadreP5VisuelTermine(cadre);}
	if (typeCADRE == "GEOGEBRA") {return chargementCadreGGBtermine(cadre);}
}

function chargementCadreTermine(cadre) {
	var testOK=true;
	try {document.getElementById(cadre).contentWindow.recevoir_envoi_vers_cadre([]);} catch(erreur) { testOK = false;}
	return testOK;
}

function chargementCadreP5VisuelTermine(cadre) {
	var testOK=true;
	try {document.getElementById(cadre).contentWindow.p5VisuelOnInit();} catch(erreur) { testOK = false;}
	return testOK;
}
function p5VisuelOnInit() {return;}

function chargementCadreGGBtermine(cadre) {
	var testOK=true, temp;
	//try {document.getElementById(cadre).contentWindow.ggbOnInit();} catch(erreur) { testOK = false;}
	try {temp=document.getElementById(cadre).contentWindow.ggbApplet.getMode();
		 document.getElementById(cadre).contentWindow.ggbApplet.evalCommand("abcdefghijklmn=GetTime()");
		 document.getElementById(cadre).contentWindow.ggbApplet.evalCommand("Delete(abcdefghijklmn)");
		 nomCadreGeoGebraCourant = cadre;} 
	catch(erreur) { testOK = false;}
	return testOK;
}

function valeurVarDansCadre(nomVariable,cadreArrivee) {
	var originePageWeb = ( window.location == window.parent.location );
	if (originePageWeb) {return eval('document.getElementById(cadreArrivee).contentWindow.'+nomVariable);}
	else {return eval('parent.document.getElementById(cadreArrivee).contentWindow.'+nomVariable);}
}

// cadres génériques
function transfertListeEntreCadres(liste, cadreDepart, cadreArrivee) { // nom cadre vide --> Page web globale
	if (cadreDepart == "pageWeb") {cadreDepart="";} // pour compatibilité avec version précédente
	if (cadreArrivee == "pageWeb") {cadreArrivee="";} // pour compatibilité avec version précédente
	if (cadreDepart == "") {document.getElementById(cadreArrivee).contentWindow.recevoir_envoi_vers_cadre(liste);}
	else if (cadreArrivee == "") {parent.recevoir_envoi_vers_cadre(liste);} 
	else {parent.document.getElementById(cadreArrivee).contentWindow.recevoir_envoi_vers_cadre(liste);}
}
function transfertListeEntreCadresF(liste, cadreArrivee) {
	var originePageWeb = ( window.location == window.parent.location );
	if (originePageWeb) {document.getElementById(cadreArrivee).contentWindow.recevoir_envoi_vers_cadre(liste);}
	else if (cadreArrivee == "") {parent.recevoir_envoi_vers_cadre(liste);} 
	else {parent.document.getElementById(cadreArrivee).contentWindow.recevoir_envoi_vers_cadre(liste);}
}

// cadres GeoGebra
function choisirFigureGGB(nomFigure) {nomCadreGeoGebraCourant = nomFigure;}
function executerCommandeGeoGebraFCourt(commande) {executerCommandeGeoGebraF(commande, nomCadreGeoGebraCourant);}
function fixerValeurVariableGeoGebraFCourt(nomVariable,valeur) {fixerValeurVariableGeoGebraF(nomVariable,valeur,nomCadreGeoGebraCourant);}
function valeurVariableGeoGebraFCourt(nomVariable) {return valeurVariableGeoGebraF(nomVariable,nomCadreGeoGebraCourant);}
function executerCommandeJSdansGGBCourt(commande) {executerCommandeJSdansGGB(commande, nomCadreGeoGebraCourant);}
function executerCommandeAlgoGGBdansGGBCourt(commande) {executerCommandeAlgoGGBdansGGB(commande, nomCadreGeoGebraCourant);}
function valeurExpressionGGBCourt(expression) {return valeurExpressionGGB(expression, nomCadreGeoGebraCourant);}
function valeurExpressionJSdansGGBCourt(expression) {return valeurExpressionJSdansGGB(expression, nomCadreGeoGebraCourant);}
function valeurExpressionAlgoGGBdansGGBCourt(expression) {return valeurExpressionAlgoGGBdansGGB(expression, nomCadreGeoGebraCourant);}

function executerCommandeGeoGebra(commande,cadre) {
	//if (changerAxesGGB) {continuer();} else {setTimeout(continuer,200); return;}
	document.getElementById(cadre).contentWindow.ggbApplet.evalCommand(commande);
}

function executerCommandeJSdansGGB(commande,cadre) {
	//if (changerAxesGGB) {continuer();} else {setTimeout(continuer,200); return;}
	eval("document.getElementById('"+cadre+"').contentWindow.ggbApplet."+commande);
}

function valeurExpressionJSdansGGB(expression,cadre) {
	//if (changerAxesGGB) {continuer();} else {setTimeout(continuer,200); return;}
	return eval("document.getElementById('"+cadre+"').contentWindow.ggbApplet."+expression);
}

function executerCommandeAlgoGGBdansGGB(commande,cadre) {
	//if (changerAxesGGB) {continuer();} else {setTimeout(continuer,200); return;}
	eval("document.getElementById('"+cadre+"').contentWindow."+commande);
}

function valeurExpressionAlgoGGBdansGGB(expression,cadre) {
	//if (changerAxesGGB) {continuer();} else {setTimeout(continuer,200); return;}
	return eval("document.getElementById('"+cadre+"').contentWindow."+expression);
}

function valeurVariableGeoGebra(nomVariable,cadre) {
	return document.getElementById(cadre).contentWindow.ggbApplet.getValue(nomVariable);
}

function fixerValeurVariableGeoGebra(nomVariable,valeur,cadre) {
	document.getElementById(cadre).contentWindow.ggbApplet.setValue(nomVariable,valeur);
}

function executerCommandeGeoGebra2(commande,cadreDepart,cadreArrivee) {
	if (cadreDepart == "") {document.getElementById(cadreArrivee).contentWindow.ggbApplet.evalCommand(commande);}
	else {parent.document.getElementById(cadreArrivee).contentWindow.ggbApplet.evalCommand(commande);}
}

function valeurVariableGeoGebra2(nomVariable,cadreDepart,cadreArrivee) {
	if (cadreDepart == "") {return document.getElementById(cadreArrivee).contentWindow.ggbApplet.getValue(nomVariable);}
	else {return parent.document.getElementById(cadreArrivee).contentWindow.ggbApplet.getValue(nomVariable);}
}

function fixerValeurVariableGeoGebra2(nomVariable,valeur,cadreDepart,cadreArrivee) {
	if (cadreDepart == "") {document.getElementById(cadreArrivee).contentWindow.ggbApplet.setValue(nomVariable,valeur);}
	else {parent.document.getElementById(cadreArrivee).contentWindow.ggbApplet.setValue(nomVariable,valeur);}
}

function executerCommandeGeoGebraF(commande,cadreArrivee) {
	var originePageWeb = ( window.location == window.parent.location );
	if (originePageWeb) {document.getElementById(cadreArrivee).contentWindow.ggbApplet.evalCommand(commande);}
	else {parent.document.getElementById(cadreArrivee).contentWindow.ggbApplet.evalCommand(commande);}
}

function valeurExpressionGGB(expression,cadreArrivee) {
	var originePageWeb = ( window.location == window.parent.location );
	if (originePageWeb) {document.getElementById(cadreArrivee).contentWindow.ggbApplet.evalCommand("temp1234567AB="+expression);}
	else {parent.document.getElementById(cadreArrivee).contentWindow.ggbApplet.evalCommand("temp1234567AB="+expression);}
	return valeurVariableGeoGebra("temp1234567AB",cadreArrivee);
}

function valeurVariableGeoGebraF(nomVariable,cadreArrivee) {
	var originePageWeb = ( window.location == window.parent.location );
	if (originePageWeb) {return document.getElementById(cadreArrivee).contentWindow.ggbApplet.getValue(nomVariable);}
	else {return parent.document.getElementById(cadreArrivee).contentWindow.ggbApplet.getValue(nomVariable);}
}

function fixerValeurVariableGeoGebraF(nomVariable,valeur,cadreArrivee) {
	var originePageWeb = ( window.location == window.parent.location );
	if (originePageWeb) {document.getElementById(cadreArrivee).contentWindow.ggbApplet.setValue(nomVariable,valeur);}
	else {parent.document.getElementById(cadreArrivee).contentWindow.ggbApplet.setValue(nomVariable,valeur);}
}

function effacerFigureGGbcourante(){
	executerCommandeJSdansGGBCourt('reset()');
}

function rendre_visible(axes, grille) {
  executerCommandeJSdansGGBCourt(('setAxesVisible(@,@)'.replace(new RegExp('@',"g"),axes)));
  executerCommandeJSdansGGBCourt(('setGridVisible(@)'.replace(new RegExp('@',"g"),grille)));
  executerCommandeJSdansGGBCourt(('setAxesVisible(3,@,@,@)'.replace(new RegExp('@',"g"),axes)));
  executerCommandeJSdansGGBCourt(('setVisible("xOyPlane", @)'.replace(new RegExp('@',"g"),grille)));
}

function axesFigureGGB_2D(xmin, xmax, ymin, ymax) {
  executerCommandeJSdansGGBCourt((substitution('setCoordSystem(@1,@2,@3,@4)',[xmin, xmax, ymin, ymax])));
}

function axesFigureGGB_3D(xmin, xmax, ymin, ymax, zmin, zmax) {
  executerCommandeJSdansGGBCourt((substitution('setCoordSystem(@1,@2,@3,@4,@5,@6,false)',[xmin, xmax, ymin, ymax, zmin, zmax])));
}

function rendre_objetGGB_visible(nom,visible){
	var commande ="SetVisibleInView("+nom+",1,"+visible+")";
	executerCommandeGeoGebraF(commande, nomCadreGeoGebraCourant);
	commande ="SetVisibleInView("+nom+",-1,"+visible+")";
	executerCommandeGeoGebraF(commande, nomCadreGeoGebraCourant);
}

function apparenceObjetFigureGGB(nom, rouge, vert, bleu, opacite) {
  executerCommandeGeoGebraFCourt((substitution('SetColor(@1,@2,@3,@4)',[nom, rouge / 255, vert / 255, bleu / 255])));
  executerCommandeGeoGebraFCourt((substitution('SetFilling(@1,@2)',[nom, opacite / 255])));
}

// cadres SAGE

function transmettreCommandeSAGEgen(expression, etatMult, modeSAGE,cadreDepart,cadreArrivee) {
    var expressionSAGE=String(expression);
    if (etatMult) {expressionSAGE = insererSymbMult(expressionSAGE);};
    expressionSAGE = expressionSAGE.replace(new RegExp(' ',"g"),'');
    expressionSAGE = expressionSAGE.replace(new RegExp('π',"g"),'pi');
    if (modeSAGE.length > 0) {expressionSAGE = "("+expressionSAGE+")."+modeSAGE+"()";} 
    	// modeSAGE est simplify, expand, factor
    expressionSAGE = expressionSAGE.replace(new RegExp('!',"g"),'.factorial()');
    expressionSAGE = ajoutEnteteSAGE(expressionSAGE);
    transfertListeEntreCadres(expressionSAGE, cadreDepart,cadreArrivee);
}

function transmettreCommandeSAGE(expression, etatMult, modeSAGE,cadreDepart,cadreArrivee) {
    var expressionSAGE=String(expression)
    if (etatMult == "IMPLICITE") {expressionSAGE = insererSymbMult(expressionSAGE);};;
    expressionSAGE = expressionSAGE.replace(new RegExp(' ',"g"),'');
    expressionSAGE = expressionSAGE.replace(new RegExp('π',"g"),'pi');
    if (modeSAGE == "SIMPLIFICATION") {expressionSAGE = "("+expressionSAGE+").simplify()";}
    if (modeSAGE == "DEVELOPPEMENT") {expressionSAGE = "("+expressionSAGE+").expand()";}
    if (modeSAGE == "FACTORISATION") {expressionSAGE = "("+expressionSAGE+").factor()";}
    expressionSAGE = expressionSAGE.replace(new RegExp('!',"g"),'.factorial()');
    expressionSAGE = ajoutEnteteSAGE(expressionSAGE);
    transfertListeEntreCadres(expressionSAGE, cadreDepart,cadreArrivee);
}

function transmettreCommandeSAGEgenF(expression, etatMult, modeSAGE,cadreArrivee) {
    var expressionSAGE=String(expression);
    if (etatMult) {expressionSAGE = insererSymbMult(expressionSAGE);};
    expressionSAGE = expressionSAGE.replace(new RegExp(' ',"g"),'');
    expressionSAGE = expressionSAGE.replace(new RegExp('π',"g"),'pi');
    if (modeSAGE.length > 0) {expressionSAGE = "("+expressionSAGE+")."+modeSAGE+"()";} 
    	// modeSAGE est simplify, expand, factor
    expressionSAGE = expressionSAGE.replace(new RegExp('!',"g"),'.factorial()');
    expressionSAGE = ajoutEnteteSAGE(expressionSAGE);
    transfertListeEntreCadresF(expressionSAGE,cadreArrivee);
}

function transmettreCommandeSAGEF(expression, etatMult, modeSAGE,cadreArrivee) {
    var expressionSAGE=String(expression)
    if (etatMult == "IMPLICITE") {expressionSAGE = insererSymbMult(expressionSAGE);};;
    expressionSAGE = expressionSAGE.replace(new RegExp(' ',"g"),'');
    expressionSAGE = expressionSAGE.replace(new RegExp('π',"g"),'pi');
    if (modeSAGE == "SIMPLIFICATION") {expressionSAGE = "("+expressionSAGE+").simplify()";}
    if (modeSAGE == "DEVELOPPEMENT") {expressionSAGE = "("+expressionSAGE+").expand()";}
    if (modeSAGE == "FACTORISATION") {expressionSAGE = "("+expressionSAGE+").factor()";}
    expressionSAGE = expressionSAGE.replace(new RegExp('!',"g"),'.factorial()');
    expressionSAGE = ajoutEnteteSAGE(expressionSAGE);
    transfertListeEntreCadresF(expressionSAGE,cadreArrivee);
}

function ajoutEnteteSAGE(texte){ return "var('a,b,c,d,m,n,p,q,r,s,t,u,v,w,x,y,z')"+"\n"+texte; }
//function recevoir_envoi_vers_cadre(texte) {recevoir_reponse_de_SAGE(texte);} // ???

function insererSymbMult(texte) {
	var listeFonctions = ["asin","acos","atan","sin","cos","tan","ln","log","arccot","arccsc","cot","csc"];
	for (var k=0; k<listeFonctions.length; k++) {texte = texte.replace(new RegExp(listeFonctions[k],"g"),listeFonctions[k].toUpperCase());}
	texte = texte.replace(new RegExp(' ',"g"),'');
	var texteMult=""; texte=texte+" ";
	for (var k=0; k<texte.length; k++) {
		texteMult=texteMult+texte.slice(k,k+1);
		if (testChiffreOUlettre(texte.slice(k,k+1),texte.slice(k+1,k+2)))
				{texteMult=texteMult+"*";} 
	}
	for (var k=0; k<listeFonctions.length; k++) {texteMult = texteMult.replace(new RegExp(listeFonctions[k].toUpperCase(),"g"),listeFonctions[k]);}
	return texteMult; //+texte.slice(texte.length - 1,texte.length);
}

function testChiffreOUlettre(carG,carD) {
	var test = ('0123456789abcdefghijklmnopqrstuvwxyzπ)!'.indexOf(carG) >= 0)&&('abcdefghijklmnopqrstuvwxyzπ(ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(carD)>=0);
	test = test || (('abcdefghijklmnopqrstuvwxyz)'.indexOf(carG) >= 0)&&('0123456789('.indexOf(carD)>=0));
	return test;
}

// **************************************************************

function EntreeNommee(nom,valeur) {
	this.contenant = createSpan('');
	this.nom = createSpan(nom+"   ");
	this.entree = createInput(valeur);
	this.nom.parent(this.contenant);
	this.entree.parent(this.contenant);
}

function creerEntreeNommee(nom,valeur) {
	var monEntreeNommee = new EntreeNommee(nom,valeur);
	return monEntreeNommee;
}

function Glissiere(texte, minG, maxG, valG, pasG) {
	this.contenant = createSpan('');
	this.texteG = createSpan(texte);
	this.gliss = createSlider(minG, maxG, valG, pasG);
	this.valeur = createSpan("  "+valG+"  ");
	this.texteG.parent(this.contenant);
	this.gliss.parent(this.contenant);
	this.valeur.parent(this.contenant);
}

function nouvelleGlissiereValeur(texte,minG,maxG,valG,pasG) {
	var maGliss = new Glissiere(texte, minG, maxG, valG, pasG);
	maGliss.gliss.input(function () {maGliss.valeur.html("  "+traiterNombre(maGliss.gliss.value())+"  ")});
	return maGliss;
}

//------------------------------------------------------------------
// Pour DEBUG

function faireDelaiPrudent(nom,valeur,delai) {
	if(!(typeof(valeur) === 'function')) {messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>Faire ... dans ... secondes</b> doit être une fonction.");}
	setTimeout(valeur,delai*1000);
}
function valeurPrudent(nom,valeur) {
	if(!(typeof(valeur) === 'object')) {messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>valeur de</b> doit être un objet (entrée ou glissière).");}
	if (valeur instanceof EntreeNommee) {valeur=valeur.entree;}
	if (valeur instanceof Glissiere) {valeur=valeur.gliss;}
	//if (!(["INPUT","SELECT"].includes(valeur.elt.tagName)))  {messageERREUR("Le paramètre    "+nom+"    du bloc 'valeur de' doit être une entrée, une glissière ou un menu local.");}
	return traiterNombre(valeur.value());
}
function contenuPrudent(nom,valeur) {
	if(!(typeof(valeur) === 'object')) {messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>contenu de</b> doit être un objet (texte, paragraphe ou titre).");}
	if (valeur instanceof EntreeNommee) {valeur=valeur.nom;}
	if (valeur instanceof Glissiere) {valeur=valeur.texteG;}
	return valeur.html();
}
function etatCasePrudent(nom,valeur) {
	if(!(typeof(valeur) === 'object')) {messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>état de la case à cocher</b> doit être un objet (case à cocher).");}
	return valeur.checked();
}
function cacherObjetPrudent(nom,valeur) {
	if(!(typeof(valeur) === 'object')) {messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>Cacher l'objet</b> doit être un objet.");}
	if (valeur instanceof EntreeNommee) {valeur=valeur.contenant;}
	if (valeur instanceof Glissiere) {valeur=valeur.contenant;}
	valeur.hide();
}
function montrerObjetPrudent(nom,valeur) {
	if(!(typeof(valeur) === 'object')) {messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>Montrer l'objet</b> doit être un objet.");}
	if (valeur instanceof EntreeNommee) {valeur=valeur.contenant;}
	if (valeur instanceof Glissiere) {valeur=valeur.contenant;}
	valeur.show();
}
function fixeValeurPrudent(nom,objet,valeur) {
	if(!(typeof(objet) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>Fixe la valeur de ... à ...</b> doit être un objet  (entrée ou glissière).");}
	if (objet instanceof EntreeNommee) {objet=objet.entree;}
	if (objet instanceof Glissiere) {objet.valeur.html("  "+valeur+"  "); objet=objet.gliss;}
	objet.value(valeur);
	//try {objet.value(valeur);} catch(erreur) {messageERREUR("L'objet    "+nom+"    du bloc 'Fixe la valeur de ... à ...' n'est ni une entrée, ni une glissière).");}
}
function fixeContenuPrudent(nom,objet,contenu) {
	if(!(typeof(objet) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>Fixe le contenu de ... à ...</b> doit être un objet  (texte, paragraphe ou titre).");}
	if (objet instanceof EntreeNommee) {objet=objet.nom; contenu=contenu+"   "}
	if (objet instanceof Glissiere) {objet=objet.texteG;}
	objet.html(contenu);
}
function contenuZoneTextePrudent(nomZone,zone,nomContenu,contenu) {
	if(!(typeof(zone) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nomZone+"</i>    du bloc <b>Fixe le contenu de la zone de texte ...</b> doit être un objet zone de texte.");}
	if(!(typeof(contenu) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nomContenu+"</i>    du bloc <b>Fixe le contenu de la zone de texte ...</b> doit être une liste.");}
	var texte="",lien="";
	for(var k=0;k<contenu.length;k++) {
		texte = texte+lien+contenu[k]; lien="\n";
	}
	zone.html(texte);
}
function siClicPrudent(nomObjet, objet, nomProc, proc) {
	if(!(typeof(objet) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nomObjet+"</i>    du bloc <b>si clic sur ...</b> doit être un objet.");}
	if(!(typeof(proc) === 'function')) {
		messageERREUR("Le paramètre    <i>"+nomProc+"</i>    du bloc <b>si clic sur ...</b> doit être une fonction.");}
	if (objet instanceof EntreeNommee) {objet=objet.contenant;}
	if (objet instanceof Glissiere) {objet=objet.contenant;}
	objet.mouseClicked(proc);
}
function siRetourPrudent(nomObjet, objet, nomProc, proc) {
	if(!(typeof(objet) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nomObjet+"</i>    du bloc <b>si clic sur ...</b> doit être un objet.");}
	if(!(typeof(proc) === 'function')) {
		messageERREUR("Le paramètre    <i>"+nomProc+"</i>    du bloc <b>si clic sur ...</b> doit être une fonction.");}
	if (objet instanceof EntreeNommee) {objet=objet.entree;}
	objet.elt.addEventListener("keyup",function(event){ if(event.keyCode === 13){proc();};});
}
function siChangementPrudent(nomObjet, objet, nomProc, proc) {
	if(!(typeof(objet) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nomObjet+"</i>    du bloc <b>si l'état de ... change ...</b> doit être un objet (glissière ou case à cocher).");}
	if(!(typeof(proc) === 'function')) {
		messageERREUR("Le paramètre    <i>"+nomProc+"</i>    du bloc <b>si l'état de ... change ...</b> doit être une fonction.");}
	if (objet instanceof Glissiere) {objet=objet.gliss;}
	objet.changed(proc);
}
function assignerParentPrudent(nomObjet,objet,nomParent,par) {
	if(!(typeof(objet) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nomObjet+"</i>    du bloc <b>... aura ... pour parent</b> doit être un objet.");}
	if(!(typeof(par) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nomParent+"</i>    du bloc <b>... aura ... pour parent</b> doit être unobjet.");}
	if (objet instanceof EntreeNommee) {objet=objet.contenant;}
	if (objet instanceof Glissiere) {objet=objet.contenant;}
	if (par instanceof EntreeNommee) {par=par.contenant;}
	if (par instanceof Glissiere) {par=par.contenant;}
	objet.parent(par);
	if (objet == canvasP5visuel) {creerGraphicsTortue();}
}
function stylerObjetPrudent(nom, objet, propriete, valeurProp) {
	if(!(typeof(objet) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>Pour l'objet ... style ...</b> doit être un objet.");}
	var anglais = ['height','width','font-size','color','background-color'];
	var francais = ['hauteur','largeur','taille-caractère','couleur','couleur-fond'];
	for (kZythum=0; kZythum<francais.length; kZythum++) { if (propriete == francais[kZythum]) {propriete = anglais[kZythum];} }
	if (objet instanceof EntreeNommee) {objet.entree.style(propriete,valeurProp); objet.nom.style(propriete,valeurProp);}
	else if (objet instanceof Glissiere) {objet.gliss.style(propriete,valeurProp); objet.valeur.style(propriete,valeurProp); objet.texteG.style(propriete,valeurProp);}
	else {objet.style(propriete,valeurProp);}
}
function positionnerObjetPrudent(nom,objet,x,y){ // permet d'inclure les tableaux
	if(!(typeof(objet) === 'object')) {
		messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>Placer l'élément ... en position ...</b> doit être un objet.");}
	for(var kZythum=0; kZythum<listeTableauxListesAB.length;kZythum=kZythum+2){
		if(listeTableauxListesAB[kZythum]==objet) {objet=listeTableauxListesAB[kZythum+1];}
	}
	if (objet instanceof EntreeNommee) {objet=objet.contenant;}
	if (objet instanceof Glissiere) {objet=objet.contenant;}
	objet.position(x,y);
	if ((objet == canvasP5visuel) && (canvasP5visuel != null)) {graphicsTortue.position(x,y);}
}
function posAbsPrudent(nom,valeur) {
	if(!(typeof(valeur) === 'object')) {messageERREUR("Le paramètre    <i>"+nom+"</i>    du bloc <b>position absolue</b> doit être un objet.");}
	return trouverPos(valeur.elt);
}
function tempsEcouleVideoPrudent(nomVideo,video) {
	if(!(typeof(video) === 'object')) {messageERREUR("Le paramètre    <i>"+nomVideo+"</i>    du bloc <b>temps écoulé de la vidéo ...</b> doit être une vidéo.");}
	return video.time();
}
function dureeTotaleVideoPrudent(nomVideo,video) {
	if(!(typeof(video) === 'object')) {messageERREUR("Le paramètre    <i>"+nomVideo+"</i>    du bloc <b>durée totale de la vidéo ...</b> doit être une vidéo.");}
	return video.duration();
}
function paramsVideoPrudent(nomVideo, video, boucle, vitesse, controles) {
	if(!(typeof(video) === 'object')) {messageERREUR("Le paramètre    <i>"+nomVideo+"</i>    du bloc <b>La vidéo ... jouera ... à la vitesse ... avec les contrôles ...</b> doit être une vidéo.");}
	video.elt.defaultPlaybackRate=vitesse;
	video.elt.playbackRate=vitesse;
	video.elt.loop=boucle;
	video.elt.controls=controles
}


//Pour fins de compatibilité
faireDelaiDebug=faireDelaiPrudent;
valeurDebug=valeurPrudent;
contenuDebug=contenuPrudent;
etatCaseDebug=etatCasePrudent;
cacherObjetDebug=cacherObjetPrudent;
montrerObjetDebug=montrerObjetPrudent;
fixeValeurDebug=fixeValeurPrudent;
fixeContenuDebug=fixeContenuPrudent;
contenuZoneTexteDebug=contenuZoneTextePrudent;
siClicDebug=siClicPrudent;
siChangementDebug=siChangementPrudent;
assignerParentDebug=assignerParentPrudent;
stylerObjetDebug=stylerObjetPrudent;
positionnerObjetDebug=positionnerObjetPrudent;
