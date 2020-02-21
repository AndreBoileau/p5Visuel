
'use strict';

//goog.provide('Blockly.JavaScript.tortue');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['repeter_tantque'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'INSTRUCTIONS');
  var dropdown_option = block.getFieldValue('OPTION');
  var value_name = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
  if (dropdown_option == 'JUSQUA') {value_name = '!'+value_name;}
  var code = 'do {\n'+statements_name+'\n} while ('+value_name+');\n';
  return code;
};

// Listes (Blockly modifié)
//-------------------------
// Obtenir valeur de liste
Blockly.JavaScript['listes_obtenir'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'liste', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur2 = Blockly.JavaScript.valueToCode(block, 'indice', Blockly.JavaScript.ORDER_ATOMIC);
  //var valeur3 = Blockly.JavaScript.valueToCode(block, 'valeur', Blockly.JavaScript.ORDER_ATOMIC);
  var code = valeur1+'['+valeur2+']'; 
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste avant de récupérer la valeur en position donnée");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
// Changer valeur de liste
Blockly.JavaScript['listes_changer'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'liste', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur2 = Blockly.JavaScript.valueToCode(block, 'indice', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur3 = Blockly.JavaScript.valueToCode(block, 'valeur', Blockly.JavaScript.ORDER_ATOMIC);
  var code = valeur1+'['+valeur2+'] = '+valeur3+';\n';  
  if (valeur1.length == 0 || valeur3.length == 0) {
  		code = 'messageERREUR("Il faut spécifier une liste et une valeur pour faire le changement en position donnée");\n';}
  return code;
};
// Dublicata d'une liste
Blockly.JavaScript['listes_duplicata'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'liste', Blockly.JavaScript.ORDER_ATOMIC);
  var code = valeur1+'.slice()'; 
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste à copier");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
// Nouveaux blocs sur listes
Blockly.JavaScript['listes_enlever_extremites'] = function(block) {
  var value_liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_position = block.getFieldValue('POSITION');
  var code = 'enleverElement('+value_liste+',(("'+dropdown_position+'" == "PREMIER") ? 0 : '+value_liste+'.length-1))'; 
  if (value_liste.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste avant d\'enlever un élément au début ou à la fin");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER]; // ORDER_NONE --> ORDER_MEMBER ???
};
Blockly.JavaScript['listes_ajouter_extremites'] = function(block) {
  var value_liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_element = Blockly.JavaScript.valueToCode(block, 'ELEMENT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_position = block.getFieldValue('POSITION');
  var code = 'ajouterElement('+value_liste+',(("'+dropdown_position+'" == "DEBUT") ? 0 : '+value_liste+'.length),'+value_element+')'; 
  if (value_liste.length == 0  || value_element.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste et la valeur avant d\'ajouter cette valeur au début ou à la fin");\n';}
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['listes_element_extremites'] = function(block) {
  var dropdown_position = block.getFieldValue('POSITION');
  var value_liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '(("'+dropdown_position+'" == "PREMIER") ? '+value_liste+'[0] : '+value_liste+'['+value_liste+'.length-1] )'; 
  if (value_liste.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste avant d\'obtenir un élément au début ou à la fin");\n';}
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['listes_ajouter'] = function(block) {
  var value_liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_element = Blockly.JavaScript.valueToCode(block, 'ELEMENT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'ajouterElement('+value_liste+','+value_position+','+value_element+')'; 
  if (value_liste.length == 0 || value_element.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste et la valeur avant d\'ajouter cette valeur à une position donnée");\n';}
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['listes_enlever'] = function(block) {
  var value_liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'enleverElement('+value_liste+','+value_position+')'; 
  if (value_liste.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste avant de retrancher un élément de la position spécifiée");\n';}
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['listes_empiler'] = function(block) {
  var value_valeur = Blockly.JavaScript.valueToCode(block, 'VALEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_liste+'.push('+value_valeur+');\n'; 
  if (value_liste.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste avant d\'empiler une valeur");\n';}
  return code;
};
Blockly.JavaScript['listes_depiler'] = function(block) {
  var value_liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_liste+'.pop()';
  if (value_liste.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste avant de dépiler une valeur");\n';}
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['listes_afficher_liste_depart'] = function(block) {
  var value_tableau = Blockly.JavaScript.valueToCode(block, 'TABLEAU', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_tableau.length != 0) {value_tableau=value_tableau+"=";}
  var value_liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_largeur = Blockly.JavaScript.valueToCode(block, 'LARGEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_unite = block.getFieldValue('UNITE');
  var value_hauteur = Blockly.JavaScript.valueToCode(block, 'HAUTEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_active = block.getFieldValue('ACTIVE');
  var value_taille = Blockly.JavaScript.valueToCode(block, 'TAILLE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_tableau+'creerAffichageListe('+value_liste+','+value_largeur+',"'+dropdown_unite+'","'+dropdown_active+'",'+value_hauteur+','+value_taille+');\n';
  if (value_liste.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste avant de pouvoir l\'afficher");\n';}
  return code;
};
Blockly.JavaScript['listes_afficher_liste'] = function(block) {
  var value_liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tableau = Blockly.JavaScript.valueToCode(block, 'TABLEAU', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'afficherListe('+value_liste+','+value_tableau+');\n';
  if (value_liste.length == 0 || value_tableau.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste et le tableau avant de pouvoir l\'afficher");\n';}
  return code;
};
Blockly.JavaScript['listes_afficher_listes_depart'] = function(block) {
  var value_tableau = Blockly.JavaScript.valueToCode(block, 'TABLEAU', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_tableau.length != 0) {value_tableau=value_tableau+"=";}
  var value_listes = Blockly.JavaScript.valueToCode(block, 'LISTES', Blockly.JavaScript.ORDER_ATOMIC);
  var value_largeur = Blockly.JavaScript.valueToCode(block, 'LARGEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_unite = block.getFieldValue('UNITE');
  var value_hauteur = Blockly.JavaScript.valueToCode(block, 'HAUTEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_active = block.getFieldValue('ACTIVE');
  var value_taille = Blockly.JavaScript.valueToCode(block, 'TAILLE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_tableau+'creerAffichageListes('+value_listes+','+value_largeur+',"'+dropdown_unite+'","'+dropdown_active+'",'+value_hauteur+','+value_taille+');\n';
  if (value_listes.length == 0) {
  		code = 'messageERREUR("Il faut spécifier les listes avant de pouvoir les afficher");\n';}
  return code;
};
Blockly.JavaScript['listes_afficher_listes'] = function(block) {
  var value_listes = Blockly.JavaScript.valueToCode(block, 'LISTES', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tableau = Blockly.JavaScript.valueToCode(block, 'TABLEAU', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'afficherListes('+value_listes+','+value_tableau+');\n';
  if (value_listes.length == 0 || value_tableau.length == 0) {
  		code = 'messageERREUR("Il faut spécifier les listes et le tableau avant de pouvoir les afficher");\n';}
  return code;
};
Blockly.JavaScript['listes_positionner'] = function(block) {
  var value_tableau = Blockly.JavaScript.valueToCode(block, 'TABLEAU', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'positionnerTableauListe('+value_tableau+','+value_x+','+value_y+');\n';
  if (value_tableau.length == 0) {
  		code = 'messageERREUR("Il faut spécifier le tableau avant de pouvoir l\'afficher");\n';}
  return code;
};
//Programmation
//----------------------
//Commentaire
Blockly.JavaScript['programmation_commentaire'] = function(block) {
  var value_comment = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '// '+value_comment+'\n';
  return code;
};
// Faire
Blockly.JavaScript['programmation_faire'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'fonction', Blockly.JavaScript.ORDER_ATOMIC);
  if (valeur1.length > 4) {if (valeur1.slice(0,1) == "(" && valeur1.slice(-3,-1) == "()") {valeur1 = valeur1.slice(1,-3);}}
  var code = 'faireDebug('+nomVal(valeur1)+');\n';
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut préciser ce qu\'on veut faire");\n';}
  return code;
};
// Faire après délai
Blockly.JavaScript['programmation_faireDelai'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'fonction', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur2 = Blockly.JavaScript.valueToCode(block, 'delai', Blockly.JavaScript.ORDER_ATOMIC);
  if (valeur1.length > 4) {if (valeur1.slice(0,1) == "(" && valeur1.slice(-3,-1) == "()") {valeur1 = valeur1.slice(1,-3);}}
  var code = 'faireDelaiDebug('+nomVal(valeur1)+','+valeur2+');\n'; 
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut préciser ce qu\'on veut faire après le délai spécifié");\n';}
  return code;
};
//Variable locale
Blockly.JavaScript['programmation_varLocale'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'VARIABLE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'var '+nom_var+';\n';
  if (nom_var.length == 0) {
  		code = 'messageERREUR("Il faut préciser la variable qu\'on veut rendre locale");\n';}
  return code;
};
// boucle POUR croissant
Blockly.JavaScript['programmation_pourCroiss'] = function(block) {
  // For loop.
  var variable0 = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'FROM',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.JavaScript.valueToCode(block, 'BY',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code;
  code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + ' <= ' + argument1 + '; ' +
        variable0 + ' += abs(' + increment + ')) {\n' +
        branch + '}\n';
  return code;
};
// boucle POUR décroissant
Blockly.JavaScript['programmation_pourDecroiss'] = function(block) {
  // For loop.
  var variable0 = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'FROM',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.JavaScript.valueToCode(block, 'BY',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code;
  code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + ' >= ' + argument1 + '; ' +
        variable0 + ' -= abs(' + increment + ')) {\n' +
        branch + '}\n';
  return code;
};
//quitter la procédure
Blockly.JavaScript['programmation_quitter'] = function(block) {
  var valeur = Blockly.JavaScript.valueToCode(block, 'VALEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'return '+valeur+';\n'; 
  return code;
};
//tester si chaine est un nombre
Blockly.JavaScript['programmation_estNombre'] = function(block) {
  var chaine = Blockly.JavaScript.valueToCode(block, 'CHAINE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'estNombre('+chaine+')'; 
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//évaluer une chaîne en un nombre
Blockly.JavaScript['programmation_evaluer'] = function(block) {
  var chaine = Blockly.JavaScript.valueToCode(block, 'CHAINE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'evaluerExpressionConstante('+chaine+')'; 
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//conversion en radians
Blockly.JavaScript['programmation_radians'] = function(block) {
  var alpha = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'radians('+alpha+')'; 
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//conversion en degres
Blockly.JavaScript['programmation_degres'] = function(block) {
  var alpha = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'degres('+alpha+')'; 
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//Clic sur bouton de la souris
Blockly.JavaScript['programmation_clicSouris'] = function(block) {
  var code = 'mouseIsPressed';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//Retourne l'ancienne position en X de la souris
Blockly.JavaScript['programmation_EXsourisX'] = function(block) {
  var code = 'pmouseX';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//Retourne l'ancienne position en Y de la souris
Blockly.JavaScript['programmation_EXsourisY'] = function(block) {
  var code = 'pmouseY';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//Retourne la position en X de la souris
Blockly.JavaScript['programmation_sourisX'] = function(block) {
  var code = 'posXsouris()';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//Retourne la position en Y de la souris
Blockly.JavaScript['programmation_sourisY'] = function(block) {
  var code = 'posYsouris()';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//remplacement
Blockly.JavaScript['programmation_remplacement'] = function(block) {
  var texte = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var depart = Blockly.JavaScript.valueToCode(block, 'DEPART', Blockly.JavaScript.ORDER_ATOMIC);
  var arrivee = Blockly.JavaScript.valueToCode(block, 'ARRIVEE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = texte+'.replace(new RegExp('+depart+',"g"),'+arrivee+')'; 
  if (texte.length == 0) {
  		code = 'messageERREUR("Il faut spécifier le texte où le remplacement doit s\'effectuer");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//substitution
Blockly.JavaScript['programmation_substitution'] = function(block) {
  var modele = Blockly.JavaScript.valueToCode(block, 'MODELE', Blockly.JavaScript.ORDER_ATOMIC);
  var listeValeurs = Blockly.JavaScript.valueToCode(block, 'LISTEVALEURS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'substitution('+modele+','+listeValeurs+')';
  if (listeValeurs.length == 0) {
  		code = 'messageERREUR("Il faut donner une liste contenant les valeurs à substituer");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//Crée les formules mathématiques
Blockly.JavaScript['programmation_refreshMathJax'] = function(block) {
  var code = 'refreshMathJax();'; 
  return code;
};
//code mathématique
Blockly.JavaScript['programmation_codeMath'] = function(block) {
  var chaine = Blockly.JavaScript.valueToCode(block, 'CHAINE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'codeMath('+chaine+')'; 
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.JavaScript['programmation_axes'] = function(block) {
  var nom = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'choixAxes("'+nom+'");\n';
  return code;
};
Blockly.JavaScript['essai_erreur'] = function(block) {
  var statements_instructions = Blockly.JavaScript.statementToCode(block, 'instructions');
  var statements_si_erreur = Blockly.JavaScript.statementToCode(block, 'si_erreur');
  var code = 'try {\n'+statements_instructions+'  }\n catch(erreur) {\n'+statements_si_erreur+' };\n';
  return code;
};
//enregistrer une liste
Blockly.JavaScript['programmation_enregistrerListe'] = function(block) {
  var liste = Blockly.JavaScript.valueToCode(block, 'LISTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'enregistrerDonnees('+liste+');\n'; 
  if (liste.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la liste à enregistrer");\n';}
  return code;
};
//charger une liste
Blockly.JavaScript['programmation_chargerListe'] = function(block) {
  var fonction = Blockly.JavaScript.valueToCode(block, 'FONCTION', Blockly.JavaScript.ORDER_ATOMIC);
  fonction=fonction.slice(1,-3);
  var code = 'chargerDonnees('+fonction+');\n';  
  if (fonction.length == 0) {
  		code = 'messageERREUR("Il faut spécifier ce qu\'on fera quand la liste sera chargée");\n';}
  return code;
};
//retourner la liste chargée
Blockly.JavaScript['programmation_retournerListe'] = function(block) {
  var code = 'donneesChargees()'; 
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//p5.js
//----------------------
// Créer une entrée %1 de contenu initial %2
Blockly.JavaScript['catégorie_margeGauche'] = function(block) {
  var nbPixels = Blockly.JavaScript.valueToCode(block, 'NB_PIXELS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.body.style.paddingLeft="'+nbPixels+'px";\n';
  return code;
};
//Créer le canvas (ancienne version)
//Blockly.JavaScript['p5_js_creerCanvas'] = function(block) {
//  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
//  if (nom_var.length != 0) {nom_var=nom_var+"=";}
//  var horiz = Blockly.JavaScript.valueToCode(block, 'HORIZ', Blockly.JavaScript.ORDER_ATOMIC);
//  var vert = Blockly.JavaScript.valueToCode(block, 'VERT', Blockly.JavaScript.ORDER_ATOMIC);
//  var code = nom_var+'createCanvas('+horiz+','+vert+');\n'+'creerTortue();\n';
//  return code;
//};
// Centrer les objets dans la page d'exécution
Blockly.JavaScript['catégorie_centrerP5'] = function(block) {
  var largeur = Blockly.JavaScript.valueToCode(block, 'LARGEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'centrerPageExecution('+largeur+');\n';
  return code;
};
//Créer le canvas (ancienne version)
//Blockly.JavaScript['p5_js_creerCanvas'] = function(block) {
//  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
//  if (nom_var.length != 0) {nom_var=nom_var+"=";}
//  var horiz = Blockly.JavaScript.valueToCode(block, 'HORIZ', Blockly.JavaScript.ORDER_ATOMIC);
//  var vert = Blockly.JavaScript.valueToCode(block, 'VERT', Blockly.JavaScript.ORDER_ATOMIC);
//  var code = nom_var+'createCanvas('+horiz+','+vert+');\n'+'creerTortue();\n';
//  return code;
//};
//Créer le canvas
Blockly.JavaScript['p5_js_creerCanvas'] = function(block) {
  var horiz = Blockly.JavaScript.valueToCode(block, 'HORIZ', Blockly.JavaScript.ORDER_ATOMIC);
  var vert = Blockly.JavaScript.valueToCode(block, 'VERT', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'canvas=createCanvas('+horiz+','+vert+');\n'+'initTortue();\n';
  var code = 'canevas=creerCanvas('+horiz+','+vert+'); canvas=canevas;\n';
  return code;
};
// Créer zone graphique
Blockly.JavaScript['p5_zoneGraphique'] = function(block) {
  var nom_zone = Blockly.JavaScript.valueToCode(block, 'NOM_ZONE', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_zone.length != 0) {nom_zone=nom_zone+"=";}
  var val_horiz = Blockly.JavaScript.valueToCode(block, 'HORIZ', Blockly.JavaScript.ORDER_ATOMIC);
  var val_vert = Blockly.JavaScript.valueToCode(block, 'VERT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = nom_zone+'creerZoneGraphique('+val_horiz+','+val_vert+');\n';
  if (nom_zone.length == 0) {
  		code = 'messageERREUR("Il faut nommer la zone graphique à créer");\n';}
  return code;
};
// Choisir zone graphique
Blockly.JavaScript['p5_choixZoneGraphique'] = function(block) {
  var nom_zone = Blockly.JavaScript.valueToCode(block, 'NOM_ZONE', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_zone.length == 0 || nom_zone == "''") {nom_zone = 'null';}
  var code = 'choisirZoneGraphique('+nom_zone+');\n';
  //if (nom_zone.length == 0) {code = 'messageERREUR("Il faut choisir la zone graphique à créer");\n';}
  return code;
};
//Lève le crayon de la tortue
Blockly.JavaScript['tortue_leveCrayon'] = function(block) {
  var code = 'leveCrayon();\n'; 
  return code;
};
//Baisse le crayon de la tortue
Blockly.JavaScript['tortue_baisseCrayon'] = function(block) {
  var code = 'baisseCrayon();\n'; 
  return code;
};
//Sans remplissage
Blockly.JavaScript['tortue_sansRemplissage'] = function(block) {
  var code = 'noFill_();\n'; 
  return code;
};
//Rendre la zone graphique courante transparente
Blockly.JavaScript['apparence_graphiqueTransparent'] = function(block) {
  var code = 'leGraphicsActif.clear();\n'; 
  return code;
};
//Retourne la largeur du canvas (width)
Blockly.JavaScript['p5_js_largeurCanvas'] = function(block) {
  var code = 'leGraphicsActif.width';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//Retourne la hauteur du canvas (height)
Blockly.JavaScript['p5_js_hauteurCanvas'] = function(block) {
  var code = 'leGraphicsActif.height';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//enregistre l'image du canvas
Blockly.JavaScript['p5_js_enregistrerCanvas'] = function(block) {
  var code = 'enregistrerCanvas();'; 
  return code;
};
//noCanvas
Blockly.JavaScript['p5_js_noCanvas'] = function(block) {
  var code = '//noCanvas();\n'; 
  return code; 
};
//noLoop
Blockly.JavaScript['p5_js_noLoop'] = function(block) {
  var code = 'noLoop();\n'; 
  return code; 
};
// vitesse de boucle "draw" (en pourcentage)
Blockly.JavaScript['p5_js_vitesseDraw'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'VITESSE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'frameRate(round('+valeur1+'));\n'; 
  return code;
};
//----------------------
//Expression p5
Blockly.JavaScript['p5_js_expression'] = function(block) {
  var commande = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "eval("+commande+")";
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//----------------------
//Commande
Blockly.JavaScript['p5_js_commande'] = function(block) {
  var commande = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'eval('+commande+');\n';
  return code;
};
//----------------------
//Page web d'exécution
Blockly.JavaScript['p5_js_definirPageWebExecution'] = function(block) {
  var chemin = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "definirPageWebExecution(" + chemin + ");\n";
  return code;
};
//******************************************************
//Objets web
//----------------------
//Créer un texte %1 de contenu %2
Blockly.JavaScript['catégorie_objetsWebTexte'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  if (objet.length != 0) {objet=objet+"=";}
  var contenu = Blockly.JavaScript.valueToCode(block, 'CONTENU', Blockly.JavaScript.ORDER_ATOMIC);
  var code = objet+"createSpan("+contenu+");\n";
  return code;
};
//----------------------
//Créer une zone de texte %1 de contenu %2
Blockly.JavaScript['objetsWeb_zoneTexte'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  if (objet.length != 0) {objet=objet+"=";}
  var contenu = Blockly.JavaScript.valueToCode(block, 'CONTENU', Blockly.JavaScript.ORDER_ATOMIC);
  var lignes = Blockly.JavaScript.valueToCode(block, 'LIGNES', Blockly.JavaScript.ORDER_ATOMIC);
  var colonnes = Blockly.JavaScript.valueToCode(block, 'COLONNES', Blockly.JavaScript.ORDER_ATOMIC);
  var code = objet+"creerZoneTexte("+contenu+","+lignes+","+colonnes+");\n";
  if (contenu.length == 0) {
  		code = 'messageERREUR("Il faut spécifier un tableau des lignes de la zone de texte");\n';}
  return code;
};
// Créer une entrée %1 de contenu initial %2
Blockly.JavaScript['catégorie_objetsWebEntree'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  if (objet.length != 0) {objet=objet+"=";}
  var contenu = Blockly.JavaScript.valueToCode(block, 'CONTENU', Blockly.JavaScript.ORDER_ATOMIC);
  var code = objet+"createInput("+contenu+");\n";
  return code;
};
//Glissière
Blockly.JavaScript['objetsWeb_glissiere'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_var.length != 0) {nom_var=nom_var+"=";}
  var val_min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var val_max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  var val_valeur = Blockly.JavaScript.valueToCode(block, 'VALEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var val_pas = Blockly.JavaScript.valueToCode(block, 'PAS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = nom_var+'createSlider('+val_min+','+val_max+','+val_valeur+','+val_pas+');\n';
  return code;
};
//bouton
Blockly.JavaScript['objetsWeb_bouton'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_var.length != 0) {nom_var=nom_var+"=";}
  var texte = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = nom_var+'createButton('+texte+');\n';
  return code;
};
//Créer un menu local %1 de contenu %2
Blockly.JavaScript['objetsWeb_menuLocal'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  if (objet.length != 0) {objet=objet+"=";}
  var contenu = Blockly.JavaScript.valueToCode(block, 'CONTENU', Blockly.JavaScript.ORDER_ATOMIC);
  var code = objet+"creerMenuLocal("+contenu+");\n";
  if (contenu.length == 0) {
  		code = 'messageERREUR("Il faut spécifier une liste des options du menu local");\n';}
  return code;
};
//Création d'une case à cocher
Blockly.JavaScript['objetsWeb_caseCocher'] = function(block) {
  var nom = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom.length != 0) {nom=nom+"=";}
  var texte = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur = Blockly.JavaScript.valueToCode(block, 'COCHE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = nom+"createCheckbox("+texte+","+valeur+");\n"; 
  if (valeur.length == 0) {
  		code = 'messageERREUR("Il faut entrer une valeur booléenne pour la case à cocher");\n';}
  return code;
};
//----------------------
//Paragraphe
Blockly.JavaScript['objetsWeb_paragraphe'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_var.length != 0) {nom_var=nom_var+"=";}
  var contenu = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = nom_var+'createP('+contenu+');\n';
  return code;
};
//----------------------
//Titre
Blockly.JavaScript['objetsWeb_titre'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_var.length != 0) {nom_var=nom_var+"=";}
  var contenu = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = nom_var+'createElement("h1",'+contenu+');\n';
  return code;
};
//----------------------
// Insérer un saut de ligne
Blockly.JavaScript['objetsWeb_sautLigne'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_var.length != 0) {nom_var=nom_var+"=";}
  var code = nom_var+'createSpan("<br>");\n';
  return code;
};
//----------------------
// Insérer un espacement
Blockly.JavaScript['objetsWeb_espacement'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_var.length != 0) {nom_var=nom_var+"=";}
  var nbPixels = Blockly.JavaScript.valueToCode(block, 'NBPIX', Blockly.JavaScript.ORDER_ATOMIC);
  var code = nom_var+'createSpan("").style("display","inline-block").style("width","'+nbPixels+'px");\n';
  return code;
};
//----------------------
//Élément
Blockly.JavaScript['objetsWeb_element'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_var.length != 0) {nom_var=nom_var+"=";}
  var type = Blockly.JavaScript.valueToCode(block, 'TYPE', Blockly.JavaScript.ORDER_ATOMIC);
  var contenu = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = nom_var+'createElement('+type+','+contenu+');\n';
  return code;
};
//----------------------
//Lien
Blockly.JavaScript['objetsWeb_lien'] = function(block) {
  var texte = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var adresse = Blockly.JavaScript.valueToCode(block, 'ADRESSE', Blockly.JavaScript.ORDER_ATOMIC);
  var autrePage = Blockly.JavaScript.valueToCode(block, 'autrePAGE', Blockly.JavaScript.ORDER_ATOMIC);
  var code ='retourneLien('+texte+','+adresse+','+autrePage+')'; 
  if (autrePage.length == 0) {
  		code = 'messageERREUR("Il faut entrer une valeur booléenne pour spécifier si le lien s\'ouvre dans une autre page web");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//----------------------
//Objet correspondant à ID
Blockly.JavaScript['objetsWeb_viaID'] = function(block) {
  var nom_ID = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  //nom_ID = nom_ID.slice(1,-1); var code = 'select("#'+nom_ID+'")'; 
  //   --> version fonctionnant pas si nom_ID est un nom de variable contenant la chaîne
  var code = 'select(\'#\'+'+nom_ID+')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
// Charger une image simple
Blockly.JavaScript['objetsWeb_image_charger'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'NOM_VAR', Blockly.JavaScript.ORDER_ATOMIC);
  if (nom_var.length != 0) {nom_var=nom_var+"=";}
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'nomImage', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createImg('+valeur1+')'; 
  var code = nom_var+'createImg('+valeur1+');\n';
  return code;
};
//******************************************************
//Couleurs
//----------------------
//couleur du fond de la page web
Blockly.JavaScript['couleurs_fond_pageWeb_C'] = function(block) {
  var c = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.body.style.backgroundColor = '+c+';\n';  
  return code; 
};
//couleur de fond
Blockly.JavaScript['couleurs_fond'] = function(block) {
  var value_R = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
  var value_G = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
  var value_B = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'leGraphicsActif.background('+value_R+','+value_G+','+value_B+');\n';
  return code;
};
//couleur du trait
Blockly.JavaScript['couleurs_trait'] = function(block) {
  var value_R = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
  var value_G = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
  var value_B = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'leGraphicsActif.stroke('+value_R+','+value_G+','+value_B+');\n';
  return code;
};
//couleur de remplissage
Blockly.JavaScript['couleurs_remplissage'] = function(block) {
  var value_R = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
  var value_G = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
  var value_B = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var value_A = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'leGraphicsActif.fill('+value_R+','+value_G+','+value_B+','+value_A+');\n';
  return code;
};
//retourne couleur associée
Blockly.JavaScript['couleurs_couleur'] = function(block) {
  var r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
  var v = Blockly.JavaScript.valueToCode(block, 'V', Blockly.JavaScript.ORDER_ATOMIC);
  var b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'color('+r+','+v+','+b+','+a+')';
  return [code, Blockly.JavaScript.ORDER_MEMBER]; 
};
//couleur du fond
Blockly.JavaScript['couleurs_fond_C'] = function(block) {
  var c = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'leGraphicsActif.background('+c+');\n'; 
  return code; 
};
//couleur du trait
Blockly.JavaScript['couleurs_trait_C'] = function(block) {
  var c = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'stroke_('+c+');\n'; 
  return code; 
};
//couleur du remplissage
Blockly.JavaScript['couleurs_remplissage_C'] = function(block) {
  var c = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fill_('+c+');\n'; 
  return code; 
};
//Fixer taille crayon
Blockly.JavaScript['couleurs_tailleCrayon'] = function(block) {
  var taille = Blockly.JavaScript.valueToCode(block, 'TAILLE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'strokeWeight_('+taille+');\n'; 
  return code;
};
//******************************************************
//Formes
//----------------------
//Tracer un point
Blockly.JavaScript['formes_point'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'point_('+x+','+y+');\n'; 
  return code;
};
//Tracer un segment
Blockly.JavaScript['formes_segment'] = function(block) {
  var x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'segment('+x1+','+y1+','+x2+','+y2+');\n'; 
  return code;
};
//tracer triangle de sommets donnés
Blockly.JavaScript['formes_triangle'] = function(block) {
  var x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  var x3 = Blockly.JavaScript.valueToCode(block, 'X3', Blockly.JavaScript.ORDER_ATOMIC);
  var y3 = Blockly.JavaScript.valueToCode(block, 'Y3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'triangle_('+x1+','+y1+','+x2+','+y2+','+x3+','+y3+');\n'; 
  return code;
};
//Tracer un rectangle
Blockly.JavaScript['formes_rectangle'] = function(block) {
  var x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_ATOMIC);
  var y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_ATOMIC);
  var x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_ATOMIC);
  var y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'rect_('+x1+','+y1+','+x2+','+y2+');\n'; 
  return code;
};
//----------------------
//Tracer un cercle
Blockly.JavaScript['formes_cercle'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'ellipse_('+x+','+y+','+r+','+r+');\n'; 
  var code = 'cercle_('+x+','+y+','+r+');\n'; 
  return code;
};
//----------------------
//Tracer une ellipse
Blockly.JavaScript['formes_ellipse'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'ellipse_('+x+','+y+','+a+','+b+');\n'; 
  return code;
};
//----------------------
//Tracer un arc
Blockly.JavaScript['formes_arc'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  var debut = Blockly.JavaScript.valueToCode(block, 'DEBUT', Blockly.JavaScript.ORDER_ATOMIC);
  var fin = Blockly.JavaScript.valueToCode(block, 'FIN', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'arc_('+x+','+y+','+a+','+b+',radians('+debut+'),radians('+fin+'),OPEN);\n'; 
  return code;
};
//Débuter un polygone
Blockly.JavaScript['formes_debutPoly'] = function(block) {
  var code = 'debutPoly();\n'; 
  return code;
};
//Ajouter un sommet au polygone
Blockly.JavaScript['formes_sommet'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sommet('+x+','+y+');\n'; 
  return code;
};
//Terminer un polygone
Blockly.JavaScript['formes_finPoly'] = function(block) {
  var code = 'finPoly();\n'; 
  return code;
};
//Écrire du texte dans le canvas
Blockly.JavaScript['formes_texteCanvas'] = function(block) {
  var texte = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'leGraphicsActif.text('+texte+','+x+','+y+');\n'; 
  return code;
};
//Taille du texte dans le canvas
Blockly.JavaScript['formes_tailleTexteCanvas'] = function(block) {
  var taille = Blockly.JavaScript.valueToCode(block, 'TAILLE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'leGraphicsActif.textSize('+taille+');\n'; 
  return code;
};
//Annule toutes les transformations du système de coordonnées
Blockly.JavaScript['formes_annulerTransfos'] = function(block) {
  var code = 'leGraphicsActif.resetMatrix();\n'; 
  return code;
};
//Translation du systàme de coordonnées
Blockly.JavaScript['formes_translation'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'leGraphicsActif.translate('+x+','+y+');\n'; 
  return code;
};
//Rotation du systàme de coordonnées
Blockly.JavaScript['formes_rotation'] = function(block) {
  var alpha = Blockly.JavaScript.valueToCode(block, 'ALPHA', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'leGraphicsActif.rotate(radians('+alpha+'));\n';  //car angleMode(RADIANS) par défaut
  return code;
};
//******************************************************
//Géométrie de la tortue
//----------------------
//Initialise la tortue
Blockly.JavaScript['tortue_initTortue'] = function(block) {
  var code = 'initialisationTortue(leGraphicsActif);'; 
  return code;
};
//avance(distance)
Blockly.JavaScript['tortue_avance'] = function(block) {
  var value_distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'avance('+value_distance+');\n';
  return code;
};
//recule(distance)
Blockly.JavaScript['tortue_recule'] = function(block) {
  var value_distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'recule('+value_distance+');\n';
  return code;
};
//droite(angle)
Blockly.JavaScript['tortue_droite'] = function(block) {
  var value_alpha = Blockly.JavaScript.valueToCode(block, 'alpha', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'droite('+value_alpha+');\n';
  return code;
};
//gauche(angle)
Blockly.JavaScript['tortue_gauche'] = function(block) {
  var value_alpha = Blockly.JavaScript.valueToCode(block, 'alpha', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'gauche('+value_alpha+');\n';
  return code;
};
//posX()
Blockly.JavaScript['tortue_posX'] = function(block) {
  var code = 'leGraphicsActif.tortueX';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//posY()
Blockly.JavaScript['tortue_posY'] = function(block) {
  var code = 'leGraphicsActif.tortueY';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//fixePos(x,y)
Blockly.JavaScript['tortue_fixePos'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fixePos('+value_x+','+value_y+');\n';
  return code;
};
//sautePos(x,y)
Blockly.JavaScript['tortue_sautePos'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sautePos('+value_x+','+value_y+');\n';
  return code;
};
//cap()
Blockly.JavaScript['tortue_cap'] = function(block) {
  var code = 'leGraphicsActif.tortueAngle';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//fixeCap(angle)
Blockly.JavaScript['tortue_fixeCap'] = function(block) {
  var value_alpha = Blockly.JavaScript.valueToCode(block, 'ALPHA', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fixeCap('+value_alpha+');\n';
  return code;
};
//vers(x,y)
Blockly.JavaScript['tortue_vers'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'vers('+value_x+','+value_y+')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//Cache la tortue
Blockly.JavaScript['tortue_cacher'] = function(block) {
  var code = 'cacherTortue();\n'; 
  return code;
};
//Montrer la tortue
Blockly.JavaScript['tortue_montrer'] = function(block) {
  var value_d = Blockly.JavaScript.valueToCode(block, 'D', Blockly.JavaScript.ORDER_ATOMIC);
  var value_couleur = Blockly.JavaScript.valueToCode(block, 'COULEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'montrerTortue('+value_d+','+value_couleur+');\n'; 
  return code;
};
//******************************************************
//Propriétés d'objets web
//----------------------
//valeur de la glissière
Blockly.JavaScript['proprietes_valeur'] = function(block) {
  var value_obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'valeurDebug('+nomVal(value_obj)+')';
  if (value_obj.length == 0) {
  		code = 'messageERREUR("L\'objet dont on veut la valeur n\'est pas spécifié");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//contenu de l'élément
Blockly.JavaScript['proprietes_contenu'] = function(block) {
  var value_obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'contenuDebug('+nomVal(value_obj)+')';
  if (value_obj.length == 0) {
  		code = 'messageERREUR("L\'objet dont on veut le contenu n\'est pas spécifié");\n';} 
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//état de la case à cocher
Blockly.JavaScript['proprietes_etatCC'] = function(block) {
  var value_obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'etatCaseDebug('+nomVal(value_obj)+')'; 
  if (value_obj.length == 0) {
  		code = 'messageERREUR("La case à cocher dont on veut la valeur n\'est pas spécifiée");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
//cacher l'objet
Blockly.JavaScript['proprietes_cacher'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "cacherObjetDebug("+nomVal(objet)+");\n";  
  if (objet.length == 0) {
  		code = 'messageERREUR("L\'objet qu\'on veut cacher n\'est pas spécifié");\n';}
  return code;
};
//montrer l'objet
Blockly.JavaScript['proprietes_montrer'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "montrerObjetDebug("+nomVal(objet)+");\n"; 
  if (objet.length == 0) {
  		code = 'messageERREUR("L\'objet qu\'on veut montrer n\'est pas spécifié");\n';}
  return code;
};
//Fixe la valeur (glissière <-- nombre)
Blockly.JavaScript['proprietes_fixeValeur'] = function(block) {
  var obj = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur = Blockly.JavaScript.valueToCode(block, 'VALEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fixeValeurDebug('+nomVal(obj)+','+valeur+');\n';  
  if (obj.length == 0) {
  		code = 'messageERREUR("L\'objet dont on veut fixer la valeur n\'est pas spécifié");\n';}
  return code;
};
//Fixe le contenu HTML
Blockly.JavaScript['proprietes_fixeContenu'] = function(block) {
  var obj = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var texte = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fixeContenuDebug('+nomVal(obj)+','+texte+');\n';
  if (obj.length == 0) {
  		code = 'messageERREUR("L\'objet dont on veut fixer le contenu n\'est pas spécifié");\n';}
  return code;
};
//Fixe le contenu d'une zone de texte
Blockly.JavaScript['proprietes_fixeContenuZone'] = function(block) {
  var obj = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var contenu = Blockly.JavaScript.valueToCode(block, 'TEXTE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'contenuZoneTexte('+obj+','+contenu+');\n';   
  if (obj.length == 0) {
  		code = 'messageERREUR("La zone de texte dont on veut fixer la valeur n\'est pas spécifiée");\n';}
  return code;
};
//associe procédure à bouton
Blockly.JavaScript['proprietes_boutonClic'] = function(block) {
  var bouton = Blockly.JavaScript.valueToCode(block, 'VAR_BOUTON', Blockly.JavaScript.ORDER_ATOMIC);
  var proc = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC);
  proc=proc.slice(1,-3);
  var code = bouton+'.mouseClicked('+proc+');\n';  
  if (bouton.length == 0 || proc.length == 0) {
  		code = 'messageERREUR("Erreur en spécifiant une action quand on clique sur un objet (l\'objet ou l\'action n\'est pas spécifié)");\n';}
  return code;
};
//associe procédure à changement
Blockly.JavaScript['proprietes_etatChange'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'VAR_OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var proc = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_ATOMIC);
  proc=proc.slice(1,-3);
  var code = objet+'.changed('+proc+');\n';  
  if (objet.length == 0 || proc.length == 0) {
  		code = 'messageERREUR("Erreur en spécifiant une action quand l\'état de l\'objet change (l\'objet ou l\'action n\'est pas spécifié)");\n';}
  return code;
};
//associe parent à objet
Blockly.JavaScript['proprietes_parent'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'VAR_OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  id = id.slice(1,-1);
  var code = objet+'.parent("#'+id+'");';  // variable.parent("#nomID");
  return code;
};
//associe parent à objet
Blockly.JavaScript['proprietes_parent2'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'VAR_OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var par = Blockly.JavaScript.valueToCode(block, 'PAR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = objet+'.parent('+par+');\n';  
  if (objet.length == 0 || par.length == 0) {
  		code = 'messageERREUR("Erreur en spécifiant le parent d\'un objet (le parent ou l\'objet n\'est pas spécifié)");\n';}
  return code;
};
//style
Blockly.JavaScript['proprietes_style'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var item = Blockly.JavaScript.valueToCode(block, 'ITEM', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur = Blockly.JavaScript.valueToCode(block, 'VALEUR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = objet+'.style('+item+','+valeur+');\n';   
  if (objet.length == 0) {
  		code = 'messageERREUR("L\'objet à qui on veut attribuer un style n\'est pas spécifié");\n';}
  return code; 
};
//position absolue -- modifié pour inclure tableaux
Blockly.JavaScript['proprietes_positionAbs'] = function(block) {
  var objet = Blockly.JavaScript.valueToCode(block, 'OBJET', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = objet+'.position('+x+','+y+');\n';    
  var code = 'positionnerObjet('+objet+','+x+','+y+');\n';
  if (objet.length == 0) {
  		code = 'messageERREUR("L\'objet à qui on veut attribuer une position n\'est pas spécifié");\n';}
  return code; 
};
// Charger une image
Blockly.JavaScript['image_charger'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'nomImage', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'loadImage('+valeur1+')\n'; 
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
// Placer une image
Blockly.JavaScript['image_placer'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'nomImage', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur2 = Blockly.JavaScript.valueToCode(block, 'posX', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur3 = Blockly.JavaScript.valueToCode(block, 'posY', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur4 = Blockly.JavaScript.valueToCode(block, 'memeTaille', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'if ('+valeur4+') {image('+valeur1+','+valeur2+','+valeur3+
  					')} else {image('+valeur1+','+valeur2+','+valeur3+',width,height)}\n'; 
  if (valeur1.length == 0 || valeur4.length == 0) {
  		code = 'messageERREUR("Il faut spécifier l\'image à placer et si on veut conserver sa taille originale");\n';}
  return code;
};
// Retourne la liste pixels
Blockly.JavaScript['image_pixelsDuCanvas'] = function(block) {
  var code = 'pixelsDuCanvas()'; 
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
// Charger les pixels
Blockly.JavaScript['image_chargerPixels'] = function(block) {
  var code = 'loadPixels();\n'; 
  return code;
};
// Modifier les pixels
Blockly.JavaScript['image_modifier'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'pixelsCanvas', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'updatePixels();\n'; 
  return code;
};
// Obtenir valeur d'une composante de pixel
Blockly.JavaScript['image_obtenirPixel'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'bloc', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur2 = Blockly.JavaScript.valueToCode(block, 'ligne', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur3 = Blockly.JavaScript.valueToCode(block, 'colonne', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur4 = Blockly.JavaScript.valueToCode(block, 'composante', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'obtenirPixel('+valeur1+','+valeur2+','+valeur3+','+valeur4+')'; 
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut spécifier le bloc de pixels où la lecture sera faite");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
// Définir valeur d'une composante de pixel
Blockly.JavaScript['image_definirPixel'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'bloc', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur2 = Blockly.JavaScript.valueToCode(block, 'ligne', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur3 = Blockly.JavaScript.valueToCode(block, 'colonne', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur4 = Blockly.JavaScript.valueToCode(block, 'composante', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur5 = Blockly.JavaScript.valueToCode(block, 'valeur', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'definirPixel('+valeur1+','+valeur2+','+valeur3+','+valeur4+','+valeur5+');\n'; 
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut spécifier le bloc de pixels où l\'écriture sera faite");\n';}
  return code;
};
// Dépôt d'une image dans le canvas
Blockly.JavaScript['image_depot'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'nomFonction', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'depotImageDansCanvas('+enleverParentheses(valeur1)+');\n';
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut spécifier l\'action à accomplir après le dépôt de l\'image dans le canevas");\n';} 
  return code;
};
// Charger une vidéo
Blockly.JavaScript['video_charger'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'nomVideo', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur2 = Blockly.JavaScript.valueToCode(block, 'fonction', Blockly.JavaScript.ORDER_ATOMIC);
  valeur2 = valeur2.slice(1,-3);
  var code = 'createVideo('+valeur1+','+valeur2+');\n'; 
  if (valeur2.length == 0) {
  		code = 'messageERREUR("Il faut spécifier l\'action à accomplir après le chargement de la vidéo");\n';}
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
// Vidéo en marche
Blockly.JavaScript['video_marche'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'objetVideo', Blockly.JavaScript.ORDER_ATOMIC);
  var code = valeur1+'.play();\n'; 
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la vidéo à mettre en marche");\n';}
  return code;
};
// Vidéo en pause
Blockly.JavaScript['video_pause'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'objetVideo', Blockly.JavaScript.ORDER_ATOMIC);
  var code = valeur1+'.pause();\n'; 
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la vidéo à mettre en pause");\n';}
  return code;
};
// Fixer temps de la vidéo
Blockly.JavaScript['video_fixePos'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'objetVideo', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur2 = Blockly.JavaScript.valueToCode(block, 'temps', Blockly.JavaScript.ORDER_ATOMIC);
  var code = valeur1+'.time('+valeur2+');\n'; 
  if (valeur1.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la vidéo qu\'on veut amener au temps donné");\n';}
  return code;
};
// Action vidéo au temps donné
Blockly.JavaScript['video_signal'] = function(block) {
  var valeur1 = Blockly.JavaScript.valueToCode(block, 'action', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur2 = Blockly.JavaScript.valueToCode(block, 'param', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur3 = Blockly.JavaScript.valueToCode(block, 'temps', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur4 = Blockly.JavaScript.valueToCode(block, 'objetVideo', Blockly.JavaScript.ORDER_ATOMIC);
  valeur1=enleverParentheses(valeur1); //valeur1 = valeur1.slice(1,-3);
  var code = valeur4+'.addCue('+valeur3+','+valeur1+','+valeur2+');\n'; 
  if (valeur1.length == 0 || valeur2.length == 0 || valeur4.length == 0) {
  		code = 'messageERREUR("Il faut spécifier la vidéo, le moment et l\'action");\n';}
  return code;
};

function enleverParentheses(liste) {
	liste = liste.slice(1,-1);
	var pos = liste.indexOf('(');
	return liste.slice(0,pos);
}

// Catégorie CADRES ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

Blockly.JavaScript['cadres_transfert'] = function(block) {
  var liste = Blockly.JavaScript.valueToCode(block, 'liste', Blockly.JavaScript.ORDER_ATOMIC);
  var cadre1 = Blockly.JavaScript.valueToCode(block, 'cadre1', Blockly.JavaScript.ORDER_ATOMIC);
  var cadre2 = Blockly.JavaScript.valueToCode(block, 'cadre2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'transfertListeEntreCadres('+liste+','+cadre1+','+cadre2+');\n';
  return code;
};

Blockly.JavaScript['cadres_transfertF'] = function(block) {
  var liste = Blockly.JavaScript.valueToCode(block, 'liste', Blockly.JavaScript.ORDER_ATOMIC);
  var cadre2 = Blockly.JavaScript.valueToCode(block, 'cadre2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'transfertListeEntreCadresF('+liste+','+cadre2+');\n';
  return code;
};

Blockly.JavaScript['cadres_chargement'] = function(block) {
  var cadre = Blockly.JavaScript.valueToCode(block, 'cadre', Blockly.JavaScript.ORDER_ATOMIC);
  var typeCADRE = block.getFieldValue('NAME');
  var code = 'retournerSiCadreCharge('+cadre+',"'+typeCADRE+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cadres_variableJS'] = function(block) {
  var nomVar = Blockly.JavaScript.valueToCode(block, 'nomVar', Blockly.JavaScript.ORDER_ATOMIC);
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'valeurVarDansCadre('+nomVar+','+cadrea+')\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cadres_commandeggb'] = function(block) {
  var commande = Blockly.JavaScript.valueToCode(block, 'commande', Blockly.JavaScript.ORDER_ATOMIC);
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  var cadred = Blockly.JavaScript.valueToCode(block, 'cadreD', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'executerCommandeGeoGebra2('+commande+','+cadred+','+cadrea+')\n';
  return code;
};

Blockly.JavaScript['cadres_commandeggbF'] = function(block) {
  var commande = Blockly.JavaScript.valueToCode(block, 'commande', Blockly.JavaScript.ORDER_ATOMIC);
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'executerCommandeGeoGebraF('+commande+','+cadrea+')\n';
  return code;
};

Blockly.JavaScript['cadres_obtenirvarggb'] = function(block) {
  var nomvar = Blockly.JavaScript.valueToCode(block, 'nomVar', Blockly.JavaScript.ORDER_ATOMIC);
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  var cadred = Blockly.JavaScript.valueToCode(block, 'cadreD', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'valeurVariableGeoGebra2('+nomvar+','+cadred+','+cadrea+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cadres_obtenirvarggbF'] = function(block) {
  var nomvar = Blockly.JavaScript.valueToCode(block, 'nomVar', Blockly.JavaScript.ORDER_ATOMIC);
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'valeurVariableGeoGebraF('+nomvar+','+cadrea+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cadres_changervarggb'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'nom_var', Blockly.JavaScript.ORDER_ATOMIC);
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur = Blockly.JavaScript.valueToCode(block, 'valeur', Blockly.JavaScript.ORDER_ATOMIC);
  var cadred = Blockly.JavaScript.valueToCode(block, 'cadreD', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fixerValeurVariableGeoGebra2('+nom_var+','+valeur+','+cadred+','+cadrea+');\n';
  return code;
};

Blockly.JavaScript['cadres_changervarggbF'] = function(block) {
  var nom_var = Blockly.JavaScript.valueToCode(block, 'nom_var', Blockly.JavaScript.ORDER_ATOMIC);
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  var valeur = Blockly.JavaScript.valueToCode(block, 'valeur', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fixerValeurVariableGeoGebraF('+nom_var+','+valeur+','+cadrea+');\n';
  return code;
};

Blockly.JavaScript['cadres_sage'] = function(block) {
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  var commande = Blockly.JavaScript.valueToCode(block, 'commande', Blockly.JavaScript.ORDER_ATOMIC);
  var mult = block.getFieldValue('mult');
  var mode = block.getFieldValue('mode');
  var cadred = Blockly.JavaScript.valueToCode(block, 'cadreD', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'transmettreCommandeSAGE('+commande+',"'+mult+'","'+mode+'",'+cadred+','+cadrea+');\n';
  return code;
};

Blockly.JavaScript['cadres_sageF'] = function(block) {
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  var commande = Blockly.JavaScript.valueToCode(block, 'commande', Blockly.JavaScript.ORDER_ATOMIC);
  var mult = block.getFieldValue('mult');
  var mode = block.getFieldValue('mode');
  var code = 'transmettreCommandeSAGEF('+commande+',"'+mult+'","'+mode+'",'+cadrea+');\n';
  return code;
};

Blockly.JavaScript['cadres_sage_gen'] = function(block) {
  var commande = Blockly.JavaScript.valueToCode(block, 'commande', Blockly.JavaScript.ORDER_ATOMIC);
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  var multSE = Blockly.JavaScript.valueToCode(block, 'multSE', Blockly.JavaScript.ORDER_ATOMIC);
  var mode = Blockly.JavaScript.valueToCode(block, 'mode', Blockly.JavaScript.ORDER_ATOMIC);
  var cadred = Blockly.JavaScript.valueToCode(block, 'cadreD', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'transmettreCommandeSAGEgen('+commande+','+multSE+','+mode+','+cadred+','+cadrea+');\n';
  return code;
};

Blockly.JavaScript['cadres_sage_genF'] = function(block) {
  var commande = Blockly.JavaScript.valueToCode(block, 'commande', Blockly.JavaScript.ORDER_ATOMIC);
  var cadrea = Blockly.JavaScript.valueToCode(block, 'cadreA', Blockly.JavaScript.ORDER_ATOMIC);
  var multSE = Blockly.JavaScript.valueToCode(block, 'multSE', Blockly.JavaScript.ORDER_ATOMIC);
  var mode = Blockly.JavaScript.valueToCode(block, 'mode', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'transmettreCommandeSAGEgenF('+commande+','+multSE+','+mode+','+cadrea+');\n';
  return code;
};
//-------------------------
function nomVal(param) { return '"'+param+'",'+param; }