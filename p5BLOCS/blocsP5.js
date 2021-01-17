
/**
 * @fileoverview Math blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

//goog.provide('Blockly.Blocks.tortue');  // Deprecated
//goog.provide('Blockly.Constants.tortue');

goog.require('Blockly.Blocks');
goog.require('Blockly');

if (typeof(prefixeDOCU)=="undefined") {var prefixeDOCU = "";}

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
{
  "type": "repeter_tantque",
  "message0": "répéter %1 faire %2 %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "INSTRUCTIONS"
    },
    {
      "type": "field_dropdown",
      "name": "OPTION",
      "options": [
        [
          "jusqu'à",
          "JUSQUA"
        ],
        [
          "tant que",
          "TANTQUE"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "CONDITION",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Répétition avec test à la fin",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#boucleFin"
},
// Texte --> Retourne le texte avec indications de formatage
{
  "type": "texte_format",
  "message0": "texte en %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "OPTION",
      "options": [
        [
          "gras",
          "b"
        ],
        [
          "italique",
          "i"
        ],
        [
          "souligné",
          "ins"
        ],
        [
          "surligné",
          "mark"
        ],
        [
          "barré",
          "del"
        ],
        [
          "petit",
          "small"
        ],
        [
          "indice",
          "sub"
        ],
        [
          "exposant",
          "sup"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": 160,
  "tooltip": "Applique le style choisi au texte.",
  "helpUrl": ""
},
//LISTES (modification de Blockly
// Obtenir valeur de liste
{
  "type": "listes_obtenir",
  "message0": "élément numéro %2 de la liste %1",
  "args0": [
    {
      "type": "input_value",
      "name": "liste",
      "check": "Array",
    },
    {
      "type": "input_value",
      "name": "indice",
      "check": "Number",
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 260,
  "tooltip": "Retourne un élément d'une liste",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#obtenirListe"
},
// Changer valeur de liste
{
  "type": "listes_changer",
  "message0": "Donner à l'élément %2 de la liste %1 la valeur %3",
  "args0": [
    {
      "type": "input_value",
      "name": "liste",
      "check": "Array",
    },
    {
      "type": "input_value",
      "name": "indice",
      "check": "Number",
    },
    {
      "type": "input_value",
      "name": "valeur",
      "check": ["Number", "String", "Array", "Colour"],
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "Change un élément d'une liste",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#definirListe"
},
// Duplicata d'une liste
{
  "type": "listes_duplicata",
  "message0": "copie de la liste %1",
  "args0": [
    {
      "type": "input_value",
      "name": "liste",
      "check": "Array",
    }
  ],
  "inputsInline": true,
  "output": "Array",
  "colour": 260,
  "tooltip": "Retourne une copie de la liste. Les changements apportés à la copie n'affectent pas la liste originale.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#duplicata"
},
//Nouveaux blocs sur lises
{
  "type": "listes_enlever_extremites",
  "message0": "la liste %1 avec le %2 élément enlevé",
  "args0": [
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    },
    {
      "type": "field_dropdown",
      "name": "POSITION",
      "options": [
        [
          "dernier",
          "DERNIER"
        ],
        [
          "premier",
          "PREMIER"
        ]
      ]
    }
  ],
  "output": "Array",
  "colour": 260,
  "tooltip": "La liste initiale n'est pas modifiée",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#enleverPD"
},
{
  "type": "listes_ajouter_extremites",
  "message0": "la liste %1 avec %2 ajouté %3",
  "args0": [
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "ELEMENT"
    },
    {
      "type": "field_dropdown",
      "name": "POSITION",
      "options": [
        [
          "à la fin",
          "FIN"
        ],
        [
          "au début",
          "DEBUT"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Array",
  "colour": 260,
  "tooltip": "La liste initiale n'est pas modifiée",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#ajouterPD"
},
{
  "type": "listes_element_extremites",
  "message0": "%1 %2 élément de la liste %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "POSITION",
      "options": [
        [
          "dernier",
          "DERNIER"
        ],
        [
          "premier",
          "PREMIER"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 260,
  "tooltip": "Retourne l'élément décrit",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#obtenirPD"
},
{
  "type": "listes_ajouter",
  "message0": "la liste %1 avec l'élément %2 ajouté en position %3",
  "args0": [
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "ELEMENT"
    },
    {
      "type": "input_value",
      "name": "POSITION",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Array",
  "colour": 260,
  "tooltip": "Pour insérer un élément dans une liste",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#ajouter"
},
{
  "type": "listes_enlever",
  "message0": "la liste %1 avec l'élément en position %2 enlevé",
  "args0": [
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "POSITION",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Array",
  "colour": 260,
  "tooltip": "La liste initiale n'est pas modifiée",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#enlever"
},
{
  "type": "listes_empiler",
  "message0": "Empiler la valeur %1 dans la liste %2",
  "args0": [
    {
      "type": "input_value",
      "name": "VALEUR"
    },
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2FC1FF",
  "tooltip": "Attention : ce bloc modifie la liste",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#empiler"
},
{
  "type": "listes_depiler",
  "message0": "Dépiler une valeur de la liste %1",
  "args0": [
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#2FC1FF",
  "tooltip": "Attention : ce bloc modifie la liste",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#depiler"
},
{
  "type": "listes_afficher_liste_depart",
  "message0": "Créer un tableau %1 pour afficher la liste %2 avec largeur %3 %4 %5 , hauteur %6 %7 %8 et taille de police %9",
  "args0": [
    {
      "type": "input_value",
      "name": "TABLEAU",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "LARGEUR",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "UNITE",
      "options": [
        [
          "pixels",
          "PIXELS"
        ],
        [
          "%",
          "POURCENT"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "HAUTEUR",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "ACTIVE",
      "options": [
        [
          "inactivée",
          "INACTIVEE"
        ],
        [
          "activée",
          "ACTIVEE"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "TAILLE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2FC1FF",
  "tooltip": "Premier affichage d'une liste",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#tableau"
},
{
  "type": "listes_afficher_liste",
  "message0": "Afficher la liste %1 dans le tableau %2",
  "args0": [
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "TABLEAU",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2FC1FF",
  "tooltip": "Le format a été via le bloc <i>Créer un tableau pour afficher la liste...</i>",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#afficher"
},
{
  "type": "listes_afficher_listes_depart",
  "message0": "Créer un tableau %1 pour afficher plusieurs listes %2 avec largeur %3 %4 %5 hauteur %6 %7 %8 et taille de police %9",
  "args0": [
    {
      "type": "input_value",
      "name": "TABLEAU",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "LISTES",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "LARGEUR",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "UNITE",
      "options": [
        [
          "pixels",
          "PIXELS"
        ],
        [
          "%",
          "POURCENT"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "HAUTEUR",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "ACTIVE",
      "options": [
        [
          "inactivée",
          "INACTIVEE"
        ],
        [
          "activée",
          "ACTIVEE"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "TAILLE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2FC1FF",
  "tooltip": "On doit fournir la liste des listes à afficher",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#tableauMult"
},
{
  "type": "listes_afficher_listes",
  "message0": "Afficher plusieurs listes %1 dans le tableau %2",
  "args0": [
    {
      "type": "input_value",
      "name": "LISTES",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "TABLEAU",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2FC1FF",
  "tooltip": "Le tableau a été prédéfini via le bloc <i>Créer un tableau pour afficher plusieurs listes...</i>",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#afficherMult"
},
{
  "type": "listes_afficher_listes_format",
  "message0": "Afficher plusieurs listes %1 avec format %2 dans le tableau %3",
  "args0": [
    {
      "type": "input_value",
      "name": "LISTES",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "FORMAT",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "TABLEAU",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2FC1FF",
  "tooltip": "Le tableau a été prédéfini via le bloc <i>Créer un tableau pour afficher plusieurs listes...</i>",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#afficherMultFormat"
},
{
  "type": "tableaux_format",
  "message0": "format %1 couleur %2 fond %3 taille des caractères %4 pt %5 italique %6 %7 gras %8 %9 disposition %10",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "couleur",
      "check": ["String","Colour"]
    },
    {
      "type": "input_value",
      "name": "fond",
      "check": ["String","Colour"]
    },
    {
      "type": "input_value",
      "name": "taille",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "italique",
      "options": [
        [
          "non",
          "non"
        ],
        [
          "oui",
          "oui"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "gras",
      "options": [
        [
          "non",
          "non"
        ],
        [
          "oui",
          "oui"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "disposition",
      "options": [
        [
          "inchangé",
          "inchange"
        ],
        [
          "centré",
          "centre"
        ],
        [
          "gauche",
          "gauche"
        ],
        [
          "droite",
          "droite"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": "#2FC1FF",
  "tooltip": "Pour décrire le format d'un élément d'un tableau",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#formatElement"
},
{
  "type": "listes_positionner",
  "message0": "Positionner le tableau %1 en ( %2 , %3 )",
  "args0": [
    {
      "type": "input_value",
      "name": "TABLEAU"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2FC1FF",
  "tooltip": "On parle du tableau servant à afficher une ou plusieurs listes",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#position"
},
//----------------------
//Programmation
//----------------------
//Commentaire
{
  "type": "programmation_commentaire",
  "message0": "Commentaire %1",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "Un commentaire est un texte utile au programmeur. Il n'est jamais exécuté.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#commentaire"
},
//Lien vers une adresse web
{
  "type": "programmation_vers_lien",
  "message0": "Aller à l'adresse web %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "adresse",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "destination",
      "options": [
        [
          "dans la même fenêtre",
          "MEME"
        ],
        [
          "dans une autre fenêtre",
          "AUTRE"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "Ouvre une page web à l'adresse spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#versLien"
},
// Faire
{
  "type": "programmation_faire",
  "message0": "Faire %1",
  "args0": [
    {
      "type": "input_value",
      "name": "fonction",
      "check": ["Number", "String", "Array"]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "Permet d'oublier la valeur retournée par une fonction.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#faire"
},
// Faire après délai
{
  "type": "programmation_faireDelai",
  "message0": "Faire %1 dans %2 secondes",
  "args0": [
    {
      "type": "input_value",
      "name": "fonction",
      "check": ["Number", "String", "Array"],
    },
    {
      "type": "input_value",
      "name": "delai",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "Très peu utilisé. N'utiliser que si vous savez ce que vous faites.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#faireDelai"
},
//----------------------
//Variable locale
{
  "type": "programmation_varLocale",
  "message0": "variable locale %1",
  "args0": [
    {
      "type": "input_value",
      "name": "VARIABLE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "Déclare une variable locale à une fonction.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#varLocale"
},
// Block pour boucle 'for' (croissant).
  {
    "type": "programmation_pourCroiss",
    "message0": "boucle %1 de min %2 à max %3 avec pas %4",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": null
      },
      {
        "type": "input_value",
        "name": "FROM",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "TO",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "BY",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Boucle avec compteur croissant.",
    "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#boucleAsc",
    "extensions": [
      "contextMenu_newGetVariableBlock",
      "controls_for_tooltip"
    ]
  },
// Block pour boucle 'for' (décroissant).
  {
    "type": "programmation_pourDecroiss",
    "message0": "boucle %1 de max %2 à min %3 avec pas %4",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": null
      },
      {
        "type": "input_value",
        "name": "FROM",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "TO",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "BY",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Boucle avec compteur décroissant.",
    "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/adaptations.html#boucleDesc",
    "extensions": [
      "contextMenu_newGetVariableBlock",
      "controls_for_tooltip"
    ]
  },   
//quitter la procédure
{
  "type": "programmation_quitter",
  "message0": "quitter la fonction (en retournant %1 )",
  "args0": [
    {
      "type": "input_value",
      "name": "VALEUR"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "Termine l'exécution de la fonction courante, en retournant éventuellement une valeur.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#quitter"
}, 
//tester si chaine est un nombre
{
  "type": "programmation_estNombre",
  "message0": "est un nombre ? %1",
  "args0": [
    {
      "type": "input_value",
      "name": "CHAINE",
      "check": "String"
    }
  ],
  "output": "Boolean",
  "colour": "#00AA00",
  "tooltip": "Retourne 'vrai' si c'est un nombre, et 'faux' sinon.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#nombreP"
},
// Afficher le nombre avec nb de décimales
{
  "type": "programmation_afficherdecimales",
  "message0": "afficher %1 avec %2 décimales",
  "args0": [
    {
      "type": "input_value",
      "name": "NOMBRE",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "DECIMALES",
      "check": "Number"
    }
  ],
  "output": "String",
  "colour": "#00AA00",
  "tooltip": "Retourne un texte correspondant au nombre avec le nombre de décimales spécifié.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#afficherDecimales"
},
//convertir une chaîne en nombre
{
  "type": "programmation_evaluer",
  "message0": "évaluer %1",
  "args0": [
    {
      "type": "input_value",
      "name": "CHAINE",
      "check": "String"
    }
  ],
  "output": "Number",
  "colour": "#00AA00",
  "tooltip": "Retourne le nombre calculé, ou 'NaN' en cas d erreur",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#evaluer"
},
//conversion en radians
{
  "type": "programmation_radians",
  "message0": "radians( %1 )",
  "args0": [
    {
      "type": "input_value",
      "name": "ANGLE",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": "#00AA00",
  "tooltip": "Conversion de degrés à radians.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#radians"
},
//conversion en degrés
{
  "type": "programmation_degres",
  "message0": "degres( %1 )",
  "args0": [
    {
      "type": "input_value",
      "name": "ANGLE",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": "#00AA00",
  "tooltip": "Conversion de radians à degrés.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#degres"
},
//Clic sur bouton de la souris
{
  "type": "programmation_clicSouris",
  "message0": "le bouton de la souris est enfoncé",
  "output": "Boolean",
  "colour": "#00AA00",
  "tooltip": "Retourne 'vrai' si c'est le bouton de la souris est enfoncé, et 'faux' sinon.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#boutonPresse"
},
//Retourne l'ancienne position en X de la souris
{
  "type": "programmation_EXsourisX",
  "message0": "ancienne position en X de la souris",
  "output": "Number",
  "colour": "#00AA00",
  "tooltip": "",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/"
},
//Retourne l'ancienne position en Y de la souris
{
  "type": "programmation_EXsourisY",
  "message0": "ancienne position en Y de la souris",
  "output": "Number",
  "colour": "#00AA00",
  "tooltip": "",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/"
},
//Retourne la position en X de la souris
{
  "type": "programmation_sourisX",
  "message0": "position en X de la souris",
  "output": "Number",
  "colour": "#00AA00",
  "tooltip": "Retourne la position en X de la souris, 0 correspondant à la gauche du canevas.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#sourisX"
},
//Retourne la position en Y de la souris
{
  "type": "programmation_sourisY",
  "message0": "position en Y de la souris",
  "output": "Number",
  "colour": "#00AA00",
  "tooltip": "Retourne la position en X de la souris, 0 correspondant au haut du canevas.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#sourisY"
},
//remplacement
{
  "type": "programmation_remplacement",
  "message0": "dans le texte %1 remplacer %2 par %3",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "DEPART",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "ARRIVEE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": "#00AA00",
  "tooltip": "Dans un texte, remplacer toutes les occurence d'un bloc de texte par un autre.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#remplacer"
},
//substitution
{
  "type": "programmation_substitution",
  "message0": "substituer dans %1 les valeurs %2",
  "args0": [
    {
      "type": "input_value",
      "name": "MODELE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "LISTEVALEURS",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": "#00AA00",
  "tooltip": "Dans un texte, substituer les expressions @1, @2, ... par des valeurs prises dans une liste.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#substituer"
},
//code mathématique
{
  "type": "programmation_codeMath",
  "message0": "code math %1",
  "args0": [
    {
      "type": "input_value",
      "name": "CHAINE",
      "check": ["String","Number"]
    }
  ],
  "output": "String",
  "colour": "#00AA00",
  "tooltip": "Conversion d'une chaîne AsciiMath en une forme reconnaissable par MathJax. MathJax n'en fait pas encore le rendu.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#codeMath"
},
//Crée les formules mathématiques
{
  "type": "programmation_refreshMathJax",
  "message0": "Finaliser les expressions mathématiques",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "Demande à MathJax de faire le rendu de toutes les expressions mathématiques de la page.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#finaliserMaths"
},
// Choix des axes du canevas : info (par défaut) ou math
{
  "type": "programmation_axes",
  "message0": "Axes du canevas de type %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "informatique (origine en haut à gauche)",
          "INFO"
        ],
        [
          "mathématique (origine au centre)",
          "MATH"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "L'axe des y pointe vers le bas (type informatique) ou vers le haut (type mathématique)",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#axes"
},
//Info débogage
{
  "type": "programmation_infoDEBUG",
  "message0": "Info débogage %1",
  "args0": [
    {
      "type": "input_value",
      "name": "INFO",
      "check": ["Number", "String", "Array"]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "Après l'affichage, on continue si clic sur OK, on s'arrête si clic sur ANNULER.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#infoDEBUG"
},
// try ...  catch ...
{
  "type": "essai_erreur",
  "message0": "Essayer de faire %1 %2 et en cas d'erreur faire %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "instructions"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "si_erreur"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00AA00",
  "tooltip": "Pour gérer l'exécution en cas d'erreur",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/programmation.html#essai_erreur"
},
//Enregistrer la liste %1
{
  "type": "programmation_enregistrerListe",
  "message0": "Enregistrer la liste %1",
  "args0": [
    {
      "type": "input_value",
      "name": "LISTE",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2FC1FF",
  "tooltip": "Enregistrer la liste spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#enregistrer"
},
//Ramener une liste, puis faire %1 quand c'est prêt
{
  "type": "programmation_chargerListe",
  "message0": "Ramener une liste, puis faire %1 quand c'est prêt",
  "args0": [
    {
      "type": "input_value",
      "name": "FONCTION",
      "check": ""
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2FC1FF",
  "tooltip": "Enregistrer la liste spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#charger"
},
//Retourne la liste chargée
{
  "type": "programmation_retournerListe",
  "message0": "la liste venant d'être chargée",
  "output": "Array",
  "colour": "#2FC1FF",
  "tooltip": "Retourne la liste venant d'être chargée",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/donnees.html#retournerListe"
},
//p5.js
//----------------------
// Créer une marge dans la page d'exécution
{
  "type": "catégorie_margeGauche",
  "message0": "Marge gauche %1 pixels",
  "args0": [
    {
      "type": "input_value",
      "name": "NB_PIXELS",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Spécifie une marge pour toute la page web.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#margeG"
},
// Centrer les objets web de la page d'exécution
{
  "type": "catégorie_centrerP5",
  "message0": "Centrer les objets dans une page web de largeur %1 pixels",
  "args0": [
    {
      "type": "input_value",
      "name": "LARGEUR",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Pour centrer les objets web dans la page d'exécution.\nUne largeur de zéro centre par rapport à la largeur (variable) de la fenêtre.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#centrerP5"
},
//Créer canevas
{
  "type": "p5_js_creerCanvas",
  "message0": "Canevas : dim horizontale %1 dimension verticale %2",
  "args0": [
    {
      "type": "input_value",
      "name": "HORIZ",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "VERT",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Crée le canevas, et place la référence à cet objet dans la variable 'canevas'.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#dimCanvas"
},
// Créer zone graphique
{
  "type": "p5_zoneGraphique",
  "message0": "Créer une zone graphique %1 de dimensions %2 par %3",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_ZONE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "HORIZ",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "VERT",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Crée une zone graphique et la rend 'active'.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#zoneGraphique"
},
// Choisir zone graphique
{
  "type": "p5_choixZoneGraphique",
  "message0": "Choisir la zone graphique %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_ZONE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Rendre 'active' la zone graphique choisie.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#choixZoneGraphique"
},
//Retourne la largeur du canevas (width)
{
  "type": "p5_js_largeurCanvas",
  "message0": "largeur du graphique",
  "output": "Number",
  "colour": "#FF0066",
  "tooltip": "Retourne la largeur du graphique.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#largeurCanvas"
},
//Retourne la hauteur du canevas (height)
{
  "type": "p5_js_hauteurCanvas",
  "message0": "hauteur du graphique",
  "output": "Number",
  "colour": "#FF0066",
  "tooltip": "Retourne la hauteur du graphique.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#hauteurCanvas"
},
//enregistre l'image du canevas
{
  "type": "p5_js_enregistrerCanvas",
  "message0": "Enregistrer l'image du canevas",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Enregistre le canevas en format 'png'.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#enregistrerCanvas"
},
//noCanvas
{
  "type": "p5_js_noCanvas",
  "message0": "Pas de canevas",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#sansCanvas"
},
//noLoop
{
  "type": "p5_js_noLoop",
  "message0": "'actions en boucle' appelée une seule fois",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Empêche la fonction 'actions en boucle' de s'exécuter plus d'une fois.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#drawSansBoucle"
},
// vitesse de boucle "draw" (en pourcentage)
{
  "type": "p5_js_vitesseDraw",
  "message0": "'actions en boucle' appelée  %1 fois par seconde",
  "args0": [
    {
      "type": "input_value",
      "name": "VITESSE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Spécifie à quelle fréquence la fonction 'actions en boucle' sera appelée (maximum : 60 fois par secondes).",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#vitesseDraw"
},
// fenêtre modale
{
  "type": "p5_js_fenetreModale",
  "message0": "Fenêtre modale : titre %1 message (à gauche) %2 chemin vers une image %3 message (centré) %4 largeur (en pixels) %5 marge du haut (pixels) %6",
  "args0": [
    {
      "type": "input_value",
      "name": "titre",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "gauche",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "image",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "centre",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "largeur",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "marge",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Une fenêtre modale montre de l'information tout en prenant le contrôle du clavier et de l'écran.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#fenetreModale"
},
//----------------------
//Expression   --> modifié et à tester : output est null au lieu de "Number"
{
  "type": "p5_js_expression",
  "message0": "expression p5 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    }
  ],
  "output": null,
  "colour": "#FF0066",
  "tooltip": "Évalue une expression JavaScript. À n'utiliser que si vous savez ce que vous faites.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#expressionP5"
},
//----------------------
//Commande
{
  "type": "p5_js_commande",
  "message0": "commande p5 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Exécute une commande JavaScript. À n'utiliser que si vous savez ce que vous faites.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#commandeP5"
},
//programme spécial (sans fonctions de base)
{
  "type": "p5_js_progSpecial",
  "message0": "Programme p5Visuel spécial%1(sans fonctions de base)",
  "args0": [
    {
      "type": "input_dummy"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Permet de déplacer les fonctions de base dans du code JavaScript.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#progSpecial"
},
//----------------------
//Page web d'exécution
{
  "type": "p5_js_definirPageWebExecution",
  "message0": "Le programme s'exécutera dans la page web %1",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF0066",
  "tooltip": "Permet au programme p5Visuel de s'exécuter dans une page web choisie par le programmeur.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/p5js.html#definirPageWebExecution"
},
//***********************************************************
//Couleurs
//----------------------
//couleur du fond de la page web
{
  "type": "couleurs_fond_pageWeb_C",
  "message0": "fond de la page web %1",
  "args0": [
    {
      "type": "input_value",
      "name": "C",
      "check": ["String","Colour"]
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "Colore le fond de la page web avec la couleur spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#fondPageWeb"
},
// couleur de fond --> background(r,g,b)
{
  "type": "couleurs_fond",
  "message0": "couleur du fond : rouge %1 vert %2 bleu %3",
  "args0": [
    {
      "type": "input_value",
      "name": "R",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "G",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "B",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#fond"
},
// couleur du trait --> stroke(r,g,b)
{
  "type": "couleurs_trait",
  "message0": "couleur du trait : rouge %1 vert %2 bleu %3",
  "args0": [
    {
      "type": "input_value",
      "name": "R",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "G",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "B",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#trait"
},
// couleur de remplissage --> fill(r,g,b)
{
  "type": "couleurs_remplissage",
  "message0": "couleur de remplissage : rouge %1 vert %2 bleu %3 opacité %4",
  "args0": [
    {
      "type": "input_value",
      "name": "R",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "G",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "B",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "A",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#remplissage"
},
//retourne couleur associée
{
  "type": "couleurs_couleur",
  "message0": "couleur rouge %1 vert %2 bleu %3 opacité %4",
  "args0": [
    {
      "type": "input_value",
      "name": "R",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "V",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "B",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "A",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 15,
  "tooltip": "Retourne une couleur définie par son format RVB.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#couleur"
},
//couleur du fond
{
  "type": "couleurs_fond_C",
  "message0": "fond %1",
  "args0": [
    {
      "type": "input_value",
      "name": "C",
      "check": ["String","Colour"]
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "Efface le canevas en le remplissant avec la couleur spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#fond"
},
//couleur du trait
{
  "type": "couleurs_trait_C",
  "message0": "trait %1",
  "args0": [
    {
      "type": "input_value",
      "name": "C",
      "check": ["String","Colour"]
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "Spécifie la couleur des tracés futurs.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#trait"
},
//couleur du remplissage
{
  "type": "couleurs_remplissage_C",
  "message0": "remplissage %1",
  "args0": [
    {
      "type": "input_value",
      "name": "C",
      "check": ["String","Colour"]
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "Spécifie la couleur des remplissages futurs.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#remplissage"
},
//Fixer la taille du crayon
{
  "type": "couleurs_tailleCrayon",
  "message0": "Fixer la taille du crayon à %1",
  "args0": [
    {
      "type": "input_value",
      "name": "TAILLE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "Spécifie l'épaisseur des traits.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#tailleCrayon"
},
//Rendre la zone graphique courante transparente 
{
  "type": "apparence_graphiqueTransparent",
  "message0": "Rendre transparente la zone graphique courante",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "La zone graphique courante sera transparente.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#zoneTransparente"
},
//***********************************************************
//Objets web
//----------------------

//Créer un texte %1 de contenu %2
{
  "type": "catégorie_objetsWebTexte",
  "message0": "Créer un texte %1 de contenu %2",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "CONTENU",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'texte', sans faire de saut de ligne.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#texte"
},


//Créer un zone de texte %1 de contenu %2
{
  "type": "objetsWeb_zoneTexte",
  "message0": "Créer une zone de texte %1 de contenu %2 nb lignes %3 nb colonnes %4",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "CONTENU",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "LIGNES",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "COLONNES",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'zone de texte' dont les dimensions sont spécifiées.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#zoneTexte"
},

// Créer une entrée %1 de contenu initial %2 --- Pour fins de compatibilité
{
  "type": "catégorie_objetsWebEntree",
  "message0": "Créer une entrée %1 de contenu initial %2",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "CONTENU",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'entrée' dans lequel l'utilisateur pourra entrer du texte ou un nombre.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#entree"
},

// Créer une entrée %1 de contenu initial %2
{
  "type": "objetsWeb_entree",
  "message0": "Créer une entrée %1 de contenu initial %2",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "CONTENU",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'entrée' dans lequel l'utilisateur pourra entrer du texte ou un nombre.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#entree"
},

// Créer une entrée %1 de nom %2 et de contenu initial %3
{
  "type": "objetsWeb_entreeNommee",
  "message0": "Créer une entrée %1 de nom %2 et de contenu initial %3",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "NOM",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "CONTENU",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'entrée' dans lequel l'utilisateur pourra entrer du texte ou un nombre.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#entreePlus"
},

// Créer glissière
{
  "type": "objetsWeb_glissiere",
  "message0": "Créer une glissière %1 minimum %2 maximum %3 valeur initiale %4 pas %5",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_VAR",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "MIN",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "MAX",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "VALEUR",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "PAS",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'glissière' dotée des caractéristiques spécifiées.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#glissiere"
},
// Créer glissière valeur
{
  "type": "objetsWeb_glissiereValeur",
  "message0": "Créer glissière+valeur %1 titre %2 minimum %3 maximum %4 valeur initiale %5 pas %6",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_VAR",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "TITRE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "MIN",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "MAX",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "VALEUR",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "PAS",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'glissière' dotée des caractéristiques spécifiées.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#glissierePlus"
},
//Créer bouton
{
  "type": "objetsWeb_bouton",
  "message0": "Créer un bouton %1 affichant %2",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_VAR",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'bouton'.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#bouton"
},
//Créer un menu local %1 de contenu %2
{
  "type": "objetsWeb_menuLocal",
  "message0": "Créer un menu local %1 à partir de la liste %2",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "CONTENU",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'menu local' dont le contenu est spécifié.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#menuLocal"
},
//Création d'une case à cocher
{
  "type": "objetsWeb_caseCocher",
  "message0": "Créer une case à cocher %1 affichant %2 avec coche %3",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "COCHE",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#caseAcocher"
},
//Créer paragraphe
{
  "type": "objetsWeb_paragraphe",
  "message0": "Créer un paragraphe %1 contenant %2",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_VAR",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'paragraphe', avec les sauts de lignes appropriés.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#paragraphe"
},
//Créer titre
{
  "type": "objetsWeb_titre",
  "message0": "Créer un titre %1 contenant %2",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_VAR",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'titre', avec les sauts de lignes appropriés.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#titre"
},
// Insérer un saut de ligne
{
  "type": "objetsWeb_sautLigne",
  "message0": "Insérer un saut de ligne %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_VAR",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un objet 'saut de ligne'. Utile pour séparer les objets non dotés de sauts de lignes automatiques.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#sautLigne"
},
// Insérer un espacement de pixels
{
  "type": "objetsWeb_espacement",
  "message0": "Insérer %1 un espace de %2 pixels",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_VAR",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "NBPIX",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Crée un espacement entre deux objets.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#espacement"
},
//Créer élément
{
  "type": "objetsWeb_element",
  "message0": "Créer élément %1 type %2 texte %3",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_VAR",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "TYPE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Si vous savez ce que vous faites, ce bloc vous permettra de créer certains types d'objets web non définis dans p5Visuel.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#elementGenerique"
},
//Retourner un lien
{
  "type": "objetsWeb_lien",
  "message0": "lien de texte %1 et d'adresse %2 dans une autre page %3",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "ADRESSE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "autrePAGE",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#CC0000",
  "tooltip": "Retourne un lien HTML qu'on peut ensuite insérer dans du texte.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#lien"
},
//objet correspondant à ID
{
  "type": "objetsWeb_viaID",
  "message0": "élément dont l'ID est %1",
  "args0": [
    {
      "type": "input_value",
      "name": "ID",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": "#CC0000",
  "tooltip": "Retourne une référence à un objet défini dans une page web qui n'a pas été créée uniquement avec p5Visuel.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#elementViaID"
},
// Charger une image simple
{
  "type": "objetsWeb_image_charger",
  "message0": "charger une image %1 depuis l'adresse %2",
  "args0": [
    {
      "type": "input_value",
      "name": "NOM_VAR",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "nomImage",
      "check": "String"
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Charge en mémoire un fichier image simple. Elle apparaît alors sur notre page web.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#chargerFichier"
},
// Charger une vidéo
{
  "type": "objetsWeb_video_charger",
  "message0": "Charger une vidéo %1 depuis l'adresse %2 avec contrôles %3 %4 départ %5 %6 en jouant %7 %8 largeur %9 hauteur %10",
  "args0": [
    {
      "type": "input_value",
      "name": "nom"
    },
    {
      "type": "input_value",
      "name": "adresse",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "controles",
      "options": [
        [
          "visibles",
          "VISIBLES"
        ],
        [
          "invisibles",
          "INVISIBLES"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "depart",
      "options": [
        [
          "manuel",
          "MANUEL"
        ],
        [
          "automatique",
          "AUTOMATIQUE"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "repetitions",
      "options": [
        [
          "une fois",
          "UNE"
        ],
        [
          "en boucle",
          "PLUSIEURS"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "largeur",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "hauteur",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC0000",
  "tooltip": "Insère une vidéo (YouTube ou autre) avec les caractéristiques spécifiées",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/objetsWeb.html#insererVideo"
},
//***********************************************************
//Formes
//----------------------
//Tracer un point
{
  "type": "formes_point",
  "message0": "Tracer le point ( %1 , %2 )",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Trace un point à l'endroit spécifié.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#point"
},
//Tracer un segment
{
  "type": "formes_segment",
  "message0": "Tracer un segment de ( %1 , %2 ) à ( %3 , %4 )",
  "args0": [
    {
      "type": "input_value",
      "name": "X1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "X2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y2",
      "check": "Number"
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Trace un segment joignant les points spécifiés.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#segment"
},
  //tracer triangle de sommets donnés
{
  "type": "formes_triangle",
  "message0": "triangle de sommets ( %1 , %2 ) , ( %3 , %4 ) et ( %5 , %6 )",
  "args0": [
    {
      "type": "input_value",
      "name": "X1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "X2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "X3",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y3",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Trace un triangle joignant les points spécifiés.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#triangle"
},
//Tracer un rectangle
{
  "type": "formes_rectangle",
  "message0": "Tracer un rectangle de diag ( %1 , %2 ) à ( %3 , %4 )",
  "args0": [
    {
      "type": "input_value",
      "name": "X1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "X2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y2",
      "check": "Number"
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Trace un rectangle de diagonale spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#rectangle"
},
//Tracer un cercle
{
  "type": "formes_cercle",
  "message0": "Cercle de centre ( %1 , %2 ) et de rayon %3",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "R",
      "check": "Number"
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Trace un cercle.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#cercle"
}, 
//Tracer une ellipse
{
  "type": "formes_ellipse",
  "message0": "Ellipse de centre ( %1 , %2 ) et de demi-axes %3 et %4",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "A",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "B",
      "check": "Number"
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Trace une ellipse. Trace un cercle si les deux demi-axes sont égaux au rayon.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#ellipse"
},  
//Tracer un arc d'ellipse
{
  "type": "formes_arc",
  "message0": "Arc de centre ( %1 , %2 ) et demi-axes %3 et %4 , allant de %5 à %6",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "A",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "B",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "DEBUT",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "FIN",
      "check": "Number"
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Trace un arc d'ellipse joignant le premier angle au second, dans le sens des aiguilles d'une montre.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#arc"
},    
//débuter polygone
{
  "type": "formes_debutPoly",
  "message0": "Débuter le polygone",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Annonce que l'on va spécifier les sommets d'un polygone.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#debutPoly"
},    
//ajouter un sommet au polygone
{
  "type": "formes_sommet",
  "message0": "sommet ( %1 , %2 )",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Spécifie un sommet du polygone courant.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#sommet"
}, 
//finir polygone
{
  "type": "formes_finPoly",
  "message0": "Terminer le polygone",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Annonce que l'on a fini de spécifier les sommets d'un polygone.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#finPoly"
},  
//Écrire du texte dans le canevas
{
  "type": "formes_texteCanvas",
  "message0": "Écrire %1 dans le canevas en position (%2,%3)",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Écrire le texte dans le canevas en position spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#texteCanvas"
},
//Taille du texte dans le canevas
{
  "type": "formes_tailleTexteCanvas",
  "message0": "Taille du texte du canevas : %1 pixels",
  "args0": [
    {
      "type": "input_value",
      "name": "TAILLE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6600DD",
  "tooltip": "Spécifie la taille du texte qui sera placé dans le canevas.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#tailleTexteCanvas"
},
//Annule toutes les transformations du système de coordonnées
{
  "type": "formes_annulerTransfos",
  "message0": "Annule toutes les transformations précédentes",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6655DD",
  "tooltip": "Annule toutes les transformations précédentes (translations, rotations, mises à l'échelle).",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#annulerTransfos"
},
//Translation du système de coordonnées
{
  "type": "formes_translation",
  "message0": "Translation de l'origine des coordonnées par ( %1 , %2 )",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6655DD",
  "tooltip": "Déplace l'origine du système de coordonnées.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#translation"
},
//Rotation du système de coordonnées  --> autour de l'origine, sens horaire, en degrés
{
  "type": "formes_rotation",
  "message0": "Rotation des axes autour de l'origine de %1 degrés",
  "args0": [
    {
      "type": "input_value",
      "name": "ALPHA",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#6655DD",
  "tooltip": "Tourne le système de coordonnées autour de l'origine.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/formes.html#rotation"
},
//***********************************************************
//Géométrie de la tortue
//----------------------

//Initialise la tortue
{
  "type": "tortue_initTortue",
  "message0": "Initialiser les paramètres tortue",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "Efface le canevas et place la tortue dans son état initial",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#init"
},

//Lève le crayon de la tortue
{
  "type": "tortue_leveCrayon",
  "message0": "Lever le crayon de la tortue",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "À partir de ce moment, la tortue se déplace sans laisser de trace.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#leverCrayon"
},

//Ne pas remplir
{
  "type": "tortue_sansRemplissage",
  "message0": "Sans remplissage",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "Les figures seront tracées sans remplissage.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#sansRemplissage"
},

//Baisse le crayon de la tortue
{
  "type": "tortue_baisseCrayon",
  "message0": "Baisser le crayon de la tortue",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "À partir de ce moment, la tortue se déplace en laissant une trace.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/apparence.html#baisserCrayon"
},

// avance(d)
{
  "type": "tortue_avance",
  "message0": "avance d'une distance %1",
  "args0": [
    {
      "type": "input_value",
      "name": "distance",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "La tortue avance d'une distance (en pixels).",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#avance"
},

// recule(d)
{
  "type": "tortue_recule",
  "message0": "recule d'une distance %1",
  "args0": [
    {
      "type": "input_value",
      "name": "distance",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "La tortue recule d'une distance (en pixels).",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#recule"
},

//droite(angle)
{
  "type": "tortue_droite",
  "message0": "tourne à droite de %1 degrés",
  "args0": [
    {
      "type": "input_value",
      "name": "alpha",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "La tortue tourne à droite d'un angle (en degrés).",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#droite"
},
//gauche(angle)
{
  "type": "tortue_gauche",
  "message0": "tourne à gauche de %1 degrés",
  "args0": [
    {
      "type": "input_value",
      "name": "alpha",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "La tortue tourne à gauche d'un angle (en degrés).",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#gauche"
},
// posX()
{
    "type": "tortue_posX",
    "message0": "coordonnée en x de la tortue",
    "output": "Number",
    "colour": "#0000DD",
    "tooltip": "Retourne la coordonnée en X de la position actuelle de la tortue.",
    "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#coordX"
},
//posY()
{
    "type": "tortue_posY",
    "message0": "coordonnée en y de la tortue",
    "output": "Number",
    "colour": "#0000DD",
    "tooltip": "Retourne la coordonnée en Y de la position actuelle de la tortue.",
    "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#coordY"
},
//fixePos(x,y)
{
  "type": "tortue_fixePos",
  "message0": "aller au point ( %1 , %2 )",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "Déplace la tortue à la position spécifiée. Laisse une trace si le crayon est baissé.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#allerPos"
},
//sautePos(x,y)
{
  "type": "tortue_sautePos",
  "message0": "sauter au point ( %1 , %2 )",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "Déplace la tortue à la position spécifiée, sans laisser de trace, que le crayon soit levé ou non.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#sauterPos"
},
//cap()
{
    "type": "tortue_cap",
    "message0": "cap de la tortue",
    "output": "Number",
    "colour": "#0000DD",
    "tooltip": "Retourne le cap actuel de la tortue.",
    "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#cap"
},
//fixeCap(angle)
{
  "type": "tortue_fixeCap",
  "message0": "fixer le cap à %1 ",
  "args0": [
    {
      "type": "input_value",
      "name": "ALPHA",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "Fixe de cap de la tortue à l'angle spécifié.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#fixeCap"
},
//vers(x,y)
{
  "type": "tortue_vers",
  "message0": "angle vers ( %1 , %2 )",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": "#0000DD",
  "tooltip": "Retourne quel devrait être le cap de la tortue pour qu'elle pointe vers le point spécifié.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#angleVers"
},

//Cacher la tortue
{
  "type": "tortue_cacher",
  "message0": "Cacher la tortue",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "Cache la tortue du canevas",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#cacher"
},
//Montrer la tortue
{
  "type": "tortue_montrer",
  "message0": "Montrer la tortue de taille %1 et de couleur %2",
  "args0": [
    {
      "type": "input_value",
      "name": "D",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "COULEUR",
      "check": ["String","Colour"]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0000DD",
  "tooltip": "Montre la tortue du canevas en spécifiant taille et couleur",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/tortue.html#montrer"
},

//***********************************************************
//Propriétés
//----------------------

// valeur de la glissière et des boites de texte/input
{
  "type": "proprietes_valeur",
  "message0": "valeur de %1",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJ",
      "check": "String"
    }
  ],
  "output": ["String","Number"],
  "colour": "#CC6600",
  "tooltip": "Retourne la valeur actuelle de l'objet spécifié (entrée, glissière ou menu local).",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#valeur"
},
// contenu d'un élément
{
  "type": "proprietes_contenu",
  "message0": "contenu de %1",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJ",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": "#CC6600",
  "tooltip": "Retourne un texte, qui est le contenu de l'objet en question (texte, paragraphe, titre)",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#contenu"
},
// état de la case à cocher
{
  "type": "proprietes_etatCC",
  "message0": "état de la case à cocher %1",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJ",
      "check": "String"
    }
  ],
  "output": "Boolean",
  "colour": "#CC6600",
  "tooltip": "Retourne 'vrai' si la case est cochée, et 'faux' sinon",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#etatCoche"
},
//cacher l'objet
{
  "type": "proprietes_cacher",
  "message0": "Cacher l'objet %1",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Fait disparaître l'objet spécifié.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#cacher"
},
//montrer l'objet
{
  "type": "proprietes_montrer",
  "message0": "Montrer l'objet %1",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Fait apparaître l'objet spécifié.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#montrer"
},

//----------------------
//Fixe la valeur (glissière <-- nombre)
{
  "type": "proprietes_fixeValeur",
  "message0": "Fixe la valeur de %1 à %2",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "VALEUR",
      "check": ["String","Number"]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Le nombre ou le texte devient la valeur de l'objet en question (entrée, glissière, menu local)",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#fixerValeur"
},

//----------------------
//Fixe le contenu HTML
{
  "type": "proprietes_fixeContenu",
  "message0": "Fixe le contenu de %1 à %2",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": ["String","Number"]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Le texte devient le contenu de l'objet en question (texte, paragraphe, titre)",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#fixerContenu"
},

//----------------------
//Fixe le contenu d'une zone de texte
{
  "type": "proprietes_fixeContenuZone",
  "message0": "Fixe le contenu de la zone de texte %1 à %2",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "TEXTE",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Les éléments de la liste deviennent les lignes successives de la zone de texte",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#fixerContenuZone"
},
//----------------------
//associe procédure à bouton
{
  "type": "proprietes_boutonClic",
  "message0": "si clic sur %1 faire  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "VAR_BOUTON",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "PROC",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "En cas de clic sur l'objet (bouton, canevas, etc) exécuter la fonction spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#siClic"
},
//----------------------
//associe procédure à entrée
{
  "type": "proprietes_entreeRetour",
  "message0": "si on tape 'retour' dans %1 faire  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "VAR_ENTREE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "PROC",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Si on tape 'retour' dans l'entrée, exécuter la fonction spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#siRetour"
},
//----------------------
//associe procédure à changement
{
  "type": "proprietes_etatChange",
  "message0": "si l'état de %1 change faire  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "VAR_OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "PROC",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "En cas de changement de l'objet (glissière, case à cocher, menu local) exécuter la fonction spécifiée.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#siChangement"
},
//----------------------
//associe parent à un objet
{
  "type": "proprietes_parent",
  "message0": "l'objet %1 aura l'ID %2 pour parent",
  "args0": [
    {
      "type": "input_value",
      "name": "VAR_OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "ID",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Spécifie que l'objet doit être contenu dans le parent spécifié.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#parent"
},
//associe parent à un objet 2
{
  "type": "proprietes_parent2",
  "message0": "l'objet %1 aura l'objet %2 pour parent",
  "args0": [
    {
      "type": "input_value",
      "name": "VAR_OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "PAR",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Spécifie que l'objet doit être contenu dans le parent spécifié.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#parent"
},
//style
{
  "type": "proprietes_style",
  "message0": "Pour l'objet %1 style %2 valeur %3",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "ITEM",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "VALEUR",
      "check": ["String","Colour"]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Permet de changer certaines caractéristiques de l'objet.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#propriete"
},
//fixer position absolue
{
  "type": "proprietes_positionAbs",
  "message0": "Placer l'élément %1 en position absolue ( %2 , %3 )",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJET",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC6600",
  "tooltip": "Fixe la position de l'objet. L'origine est en haut à gauche de la fenêtre (et non du canevas).",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#position"
},
// obtenir position absolue
{
  "type": "proprietes_posAbs",
  "message0": "position de %1 dans la fenêtre",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJ",
      "check": "String"
    }
  ],
  "output": "Array",
  "colour": "#CC6600",
  "tooltip": "Retourne la position absolue de l'objet spécifié dans la fenêtre.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/proprietes.html#posAbs"
},
// Charger une image
{
  "type": "image_charger",
  "message0": "Charger le fichier image de nom %1",
  "args0": [
    {
      "type": "input_value",
      "name": "nomImage",
      "check": "String",
    }
  ],
  "output": "String",
  "colour": "#FF8800",
  "tooltip": "Charge en mémoire un fichier image. Elle n'apparaît pas encore sur notre page web.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/images.html#chargerFichier"
},
// Placer une image
{
  "type": "image_placer",
  "message0": "Placer image %1 dans canevas en position (%2,%3) en taille originale %4",
  "args0": [
    {
      "type": "input_value",
      "name": "nomImage",
      "check": "String",
    },
    {
      "type": "input_value",
      "name": "posX",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "posY",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "memeTaille",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF8800",
  "tooltip": "Place une image en mémoire dans le canevas.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/images.html#placerImage"
},
// Retourne la liste pixels
{
  "type": "image_pixelsDuCanvas",
  "message0": "PIXELS",
  "args0": [],
  "inputsInline": true,
  "output": "Array",
  "colour": "#FF8800",
  "tooltip": "Retourne la liste des pixels du canevas (initiale ou modifiée).",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/images.html#initialiserPixels"
},
// Charger les pixels du canevas
{
  "type": "image_chargerPixels",
  "message0": "Transfert des pixels du canevas dans PIXELS",
  "args0": [],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF8800",
  "tooltip": "Charge les pixels du canevas dans une liste, que l'on pourra récupérer et modifier via le bloc PIXELS.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/images.html#chargerPixels"
},
// Modifier les pixels
{
  "type": "image_modifier",
  "message0": "Transfert de PIXELS dans les pixels du canevas",
  "args0": [],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF8800",
  "tooltip": "Redéfinir le canevas à partir de notre liste de pixels.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/images.html#miseAjour"
},
// Obtenir valeur d'une composante de pixel
{
  "type": "image_obtenirPixel",
  "message0": "Lire info dans %1 ligne %2 colonne %3 composante %4",
  "args0": [
    {
      "type": "input_value",
      "name": "bloc",
      "check": "Array",
    },
    {
      "type": "input_value",
      "name": "ligne",
      "check": "Number",
    },
    {
      "type": "input_value",
      "name": "colonne",
      "check": "Number",
    },
    {
      "type": "input_value",
      "name": "composante",
      "check": "Number",
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#FF8800",
  "tooltip": "Obtenir la composante spécifiée de la liste des pixels.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/images.html#lirePixel"
},
// Définir valeur d'une composante de pixel
{
  "type": "image_definirPixel",
  "message0": "Écrire info dans %1 ligne %2 colonne %3 composante %4 valeur %5",
  "args0": [
    {
      "type": "input_value",
      "name": "bloc",
      "check": "Array",
    },
    {
      "type": "input_value",
      "name": "ligne",
      "check": "Number",
    },
    {
      "type": "input_value",
      "name": "colonne",
      "check": "Number",
    },
    {
      "type": "input_value",
      "name": "composante",
      "check": "Number",
    },
    {
      "type": "input_value",
      "name": "valeur",
      "check": "Number",
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF8800",
  "tooltip": "Modifier la composante spécifiée de la liste des pixels.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/images.html#ecrirePixel"
},
// Dépôt d'une image dans le canevas
{
  "type": "image_depot",
  "message0": "Si image déposée dans canevas, faire %1",
  "args0": [
    {
      "type": "input_value",
      "name": "nomFonction",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FF8800",
  "tooltip": "Spécifie une fonction pour gérer un glisser-déposer dans le canevas.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/images.html#depot"
},
// Charger une vidéo
{
  "type": "video_charger",
  "message0": "Charger vidéo %1 puis faire %2 quand c'est prêt",
  "args0": [
    {
      "type": "input_value",
      "name": "nomVideo",
      "check": "String",
    },
    {
      "type": "input_value",
      "name": "fonction",
      "check": ["Number", "String", "Array"]
    }
  ],
  "output": "String",
  "colour": "#FFAA00",
  "tooltip": "Charge en mémoire la vidéo contenue dans le fichier spécifié, et l'affiche dans notre page web",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/videos.html#charger"
},
// Vidéo en marche
{
  "type": "video_marche",
  "message0": "Mettre la vidéo %1 en marche",
  "args0": [
    {
      "type": "input_value",
      "name": "objetVideo",
      "check": "String",
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FFAA00",
  "tooltip": "Mettre la vidéo en marche.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/videos.html#marche"
},
// Vidéo en pause
{
  "type": "video_pause",
  "message0": "Mettre la vidéo %1 en pause",
  "args0": [
    {
      "type": "input_value",
      "name": "objetVideo",
      "check": "String",
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FFAA00",
  "tooltip": "Mettre la vidéo en pause.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/videos.html#pause"
},
// Fixer temps de la vidéo
{
  "type": "video_fixePos",
  "message0": "Amener la vidéo %1 au temps %2",
  "args0": [
    {
      "type": "input_value",
      "name": "objetVideo",
      "check": "String",
    },
    {
      "type": "input_value",
      "name": "temps",
      "check": "Number",
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FFAA00",
  "tooltip": "Faire sauter la vidéo au temps donné.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/videos.html#sauter"
},
// Action vidéo au temps donné
{
  "type": "video_signal",
  "message0": "Définir action %1 avec paramètre %2 au temps %3 secondes de la vidéo %4",
  "args0": [
    {
      "type": "input_value",
      "name": "action",
      "check": "String",
    },
    {
      "type": "input_value",
      "name": "param",
      "check": ["Number", "String", "Array"],
    },
    {
      "type": "input_value",
      "name": "temps",
      "check": "Number",
    },
    {
      "type": "input_value",
      "name": "objetVideo",
      "check": "String",
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#FFAA00",
  "tooltip": "Définir une action à réaliser quand la vidéo arrivera à un temps donné.",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/videos.html#action"
},
// Categorie CADRES
{
  "type": "cadres_transfert",
  "message0": "Transfert de la liste %1 du cadre %2 vers le cadre %3",
  "args0": [
    {
      "type": "input_value",
      "name": "liste",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "cadre1",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadre2",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00CCAA",
  "tooltip": "Si l'un des cadres est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#transfert"
},
{
  "type": "cadres_transfertF",
  "message0": "Transfert de la liste %1 vers le cadre %2",
  "args0": [
    {
      "type": "input_value",
      "name": "liste",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "cadre2",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00CCAA",
  "tooltip": "Si le cadre est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#transfert"
},
{
  "type": "creer_cadre_ggb",
  "message0": "Cadre GeoGebra %1 avec ID %2 de forme %3 %4 de largeur %5 et %6 interface",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "DIMENSION",
      "options": [
        [
          "2D",
          "d2D"
        ],
        [
          "3D",
          "d3D"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "ID",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "FORME",
      "options": [
        [
          "1:1",
          "C"
        ],
        [
          "4:3",
          "SD"
        ],
        [
          "16:9",
          "HD"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "LARGEUR",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "MENUS",
      "options": [
        [
          "avec",
          "avec"
        ],
        [
          "sans",
          "sans"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00CCAA",
  "tooltip": "Crée un cadre GeoGebra avec les caractéristiques spécifiées",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#creerCadreGGB"
},
{
  "type": "creer_cadre_ggb_plus",
  "message0": "Cadre GeoGebra %1 avec ID %2 de largeur %3 de hauteur %4 et %5 interface",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "DIMENSION",
      "options": [
        [
          "2D",
          "d2D"
        ],
        [
          "3D",
          "d3D"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "ID",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "LARGEUR",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "HAUTEUR",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "MENUS",
      "options": [
        [
          "avec",
          "avec"
        ],
        [
          "sans",
          "sans"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Crée un cadre GeoGebra avec les caractéristiques spécifiées",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#creerCadreGGB"
},
{
  "type": "geogebra_importerFigure",
  "message0": "Importer figure avec ID %1 : adresse %2  largeur %3  hauteur %4",
  "args0": [
    {
      "type": "input_value",
      "name": "id",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "adresse",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "LARGEUR",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "HAUTEUR",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Importer une figure GeoGebra (au format html) placé sur le même serveur",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#importerFigure"
},
{
  "type": "cadres_chargement",
  "message0": "Le chargement du cadre %1 de type %2 est terminé",
  "args0": [
    {
      "type": "input_value",
      "name": "cadre",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "indéterminé",
          "GENERIQUE"
        ],
        [
          "p5Visuel",
          "P5VISUEL"
        ],
        [
          "GeoGebra",
          "GEOGEBRA"
        ],
        [
          "SAGE",
          "SAGE"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": "#00CCAA",
  "tooltip": "Retourne vrai si le chargement du cadre est terminé, et faux sinon",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#chargement"
},
{
  "type": "geogebra_choisir",
  "message0": "Choisir la figure GeoGebra %1",
  "args0": [
    {
      "type": "input_value",
      "name": "figure",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Les prochaines commandes viseront la figure choisie",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#choisirGGB"
},
{
  "type": "geogebra_chargement",
  "message0": "Le chargement du cadre GeoGebra %1 est terminé",
  "args0": [
    {
      "type": "input_value",
      "name": "cadre",
      "check": "String"
    }
  ],
  "output": "Boolean",
  "colour": "#857DF7",
  "tooltip": "Retourne vrai si le chargement du cadre est terminé, et faux sinon",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#chargement"
},
{
  "type": "cadres_variableJS",
  "message0": "valeur de la variable JavaScript %1 du cadre %2",
  "args0": [
    {
      "type": "input_value",
      "name": "nomVar",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#00CCAA",
  "tooltip": "Attention : on parle ici de variable JavaScript (et non GeoGebra)",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#variableJS"
},
{
  "type": "cadres_commandeggb",
  "message0": "Exécuter la commande GeoGebra %1 dans le cadre %2 (Demande originant du cadre %3 )",
  "args0": [
    {
      "type": "input_value",
      "name": "commande",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreD",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Si l'un des cadres est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#commandeGGB"
},
{
  "type": "jsdansggb",
  "message0": "%1 Exécuter le code JavaScript %2 dans le cadre GeoGebra %3",
  "args0": [
    {
      "type": "field_image",
      "src": prefixeDOCU+"p5BLOCS/images/javascript.png",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "CODE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "CADRE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Transmettre une instruction JavaScript à un cadre GeoGebra",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#JSdansGGB"
},
{
  "type": "jsdansggbCourt",
  "message0": "%1 Exécuter le code JavaScript %2",
  "args0": [
    {
      "type": "field_image",
      "src": prefixeDOCU+"p5BLOCS/images/javascript.png",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "CODE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Transmettre une instruction JavaScript à un cadre GeoGebra",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#JSdansGGB"
},
{
  "type": "geogebra_expressionJS",
  "message0": "%1 valeur de l'expression JavaScript %2 dans le cadre %3",
  "args0": [
    {
      "type": "field_image",
      "src": prefixeDOCU+"p5BLOCS/images/javascript.png",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "expression",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#857DF7",
  "tooltip": "Valeur d'une expression JavaScript dans un cadre GeoGebra",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#expressionJSdansGGB"
},
{
  "type": "geogebra_expressionJSCourt",
  "message0": "%1 valeur de l'expression JavaScript %2",
  "args0": [
    {
      "type": "field_image",
      "src": prefixeDOCU+"p5BLOCS/images/javascript.png",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "expression",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#857DF7",
  "tooltip": "Valeur d'une expression JavaScript dans un cadre GeoGebra",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#expressionJSdansGGB"
},
{
  "type": "geogebra_expressionAlgo",
  "message0": "%1 valeur de l'expression algoGGB %2 dans le cadre %3",
  "args0": [
    {
      "type": "field_image",
      "src": prefixeDOCU+"p5BLOCS/images/algoGGB.png",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "expression",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#857DF7",
  "tooltip": "Valeur d'une expression algoGGB dans un cadre GeoGebra",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#expressionALGOdansGGB"
},
{
  "type": "geogebra_expressionAlgoCourt",
  "message0": "%1 valeur de l'expression algoGGB %2",
  "args0": [
    {
      "type": "field_image",
      "src": prefixeDOCU+"p5BLOCS/images/algoGGB.png",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "expression",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#857DF7",
  "tooltip": "Valeur d'une expression algoGGB dans un cadre GeoGebra",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#expressionALGOdansGGB"
},
{
  "type": "geogebra_algoGGB",
  "message0": "%1 Exécuter le code algoGGB %2 dans le cadre GeoGebra %3",
  "args0": [
    {
      "type": "field_image",
      "src": prefixeDOCU+"p5BLOCS/images/algoGGB.png",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "CODE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "CADRE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Transmettre une instruction algoGGB à un cadre GeoGebra",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#algoGGB"
},
{
  "type": "geogebra_algoGGBCourt",
  "message0": "%1 Exécuter le code algoGGB %2",
  "args0": [
    {
      "type": "field_image",
      "src": prefixeDOCU+"p5BLOCS/images/algoGGB.png",
      "width": 15,
      "height": 15,
      "alt": "*"
    },
    {
      "type": "input_value",
      "name": "CODE",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Transmettre une instruction algoGGB à un cadre GeoGebra",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#algoGGB"
},
{
  "type": "cadres_commandeggbF",
  "message0": "Exécuter la commande GeoGebra %1 dans le cadre %2",
  "args0": [
    {
      "type": "input_value",
      "name": "commande",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Si le cadre est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#commandeGGB"
},    
{
  "type": "geogebra_expressionGGB",
  "message0": "valeur de l'expression GeoGebra %1",
  "args0": [
    {
      "type": "input_value",
      "name": "expression",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#857DF7",
  "tooltip": "Valeur d'une expression GeoGebra dans un cadre GeoGebra",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#expressionGGB"
},
{
  "type": "cadres_commandeggbFCourt",
  "message0": "Exécuter la commande GeoGebra %1",
  "args0": [
    {
      "type": "input_value",
      "name": "commande",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Si le cadre est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#commandeGGB"
},
{
  "type": "cadres_obtenirvarggb",
  "message0": "Obtenir la valeur de la variable GeoGebra %1 dans le cadre %2 (Demande originant du cadre %3 )",
  "args0": [
    {
      "type": "input_value",
      "name": "nomVar",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreD",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#857DF7",
  "tooltip": "Si l'un des cadres est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#obtenirVarGGB"
},
{
  "type": "cadres_obtenirvarggbF",
  "message0": "Obtenir la valeur de la variable GeoGebra %1 dans le cadre %2",
  "args0": [
    {
      "type": "input_value",
      "name": "nomVar",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#857DF7",
  "tooltip": "Si le cadre est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#obtenirVarGGB"
},
{
  "type": "cadres_obtenirvarggbFCourt",
  "message0": "Obtenir la valeur de la variable GeoGebra %1",
  "args0": [
    {
      "type": "input_value",
      "name": "nomVar",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#857DF7",
  "tooltip": "Si le cadre est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#obtenirVarGGB"
},
{
  "type": "cadres_changervarggb",
  "message0": "Donner à la variable GeoGebra %1 du cadre %2 la valeur %3 (Demande originant du cadre %4 )",
  "args0": [
    {
      "type": "input_value",
      "name": "nom_var",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "valeur"
    },
    {
      "type": "input_value",
      "name": "cadreD",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Si l'un des cadres est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#changerVarGGB"
},
{
  "type": "cadres_changervarggbF",
  "message0": "Donner à la variable GeoGebra %1 du cadre %2 la valeur %3",
  "args0": [
    {
      "type": "input_value",
      "name": "nom_var",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "valeur"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Si le cadre est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#changerVarGGB"
},
{
  "type": "cadres_changervarggbFCourt",
  "message0": "Donner à la variable GeoGebra %1 la valeur %2",
  "args0": [
    {
      "type": "input_value",
      "name": "nom_var",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "valeur"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Si le cadre est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#changerVarGGB"
},
{
  "type": "cadres_sage",
  "message0": "Transmettre la commande %2 au cadre SAGE %1 avec multiplication %3 %4 et en mode %5 %6 --- Demande originant du cadre %7",
  "args0": [
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "commande",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "mult",
      "options": [
        [
          "explicite",
          "EXPLICITE"
        ],
        [
          "sous-entendue",
          "IMPLICITE"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "Évaluation",
          "EVALUATION"
        ],
        [
          "Simplification",
          "SIMPLIFICATION"
        ],
        [
          "Développement",
          "DEVELOPPEMENT"
        ],
        [
          "Factorisation",
          "FACTORISATION"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "cadreD",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00CCAA",
  "tooltip": "Si l'un des cadres est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#SAGE"
},
{
  "type": "cadres_sageF",
  "message0": "Transmettre la commande %2 au cadre SAGE %1 avec multiplication %3 %4 et en mode %5 %6",
  "args0": [
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "commande",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "mult",
      "options": [
        [
          "explicite",
          "EXPLICITE"
        ],
        [
          "sous-entendue",
          "IMPLICITE"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "Évaluation",
          "EVALUATION"
        ],
        [
          "Simplification",
          "SIMPLIFICATION"
        ],
        [
          "Développement",
          "DEVELOPPEMENT"
        ],
        [
          "Factorisation",
          "FACTORISATION"
        ]
      ]
    },
    {
      "type": "input_dummy"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00CCAA",
  "tooltip": "Si le des cadre est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#SAGE"
},
{
  "type": "cadres_sage_gen",
  "message0": "Transmettre la commande %1 au cadre SAGE %2 avec multiplication sous-entendue %3 et en mode %4 --- Demande originant du cadre %5",
  "args0": [
    {
      "type": "input_value",
      "name": "commande",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "multSE",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "mode",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreD",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00CCAA",
  "tooltip": "Si l'un des cadres est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#SAGE2"
},
{
  "type": "cadres_sage_genF",
  "message0": "Transmettre la commande %1 au cadre SAGE %2 avec multiplication sous-entendue %3 et en mode %4",
  "args0": [
    {
      "type": "input_value",
      "name": "commande",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cadreA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "multSE",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "mode",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00CCAA",
  "tooltip": "Si le cadre est en fait la page web elle-même, laisser vide son nom",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/cadres.html#SAGE2"
},
{
  "type": "geogebra_effacer",
  "message0": "Effacer la figure",
  "args0": [],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Efface la figure GeoGebra courante",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#effacer"
},   
{
  "type": "geogebra_visibles",
  "message0": "Figure avec axes %1 et grille %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "axes",
      "options": [
        [
          "visibles",
          "VISIBLE"
        ],
        [
          "invisibles",
          "INVISIBLE"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "grille",
      "options": [
        [
          "visible",
          "VISIBLE"
        ],
        [
          "invisible",
          "INVISIBLE"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Montrer ou cacher les axes et la grille de la figure",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#visibles"
},
{
  "type": "geogebra_axes2D",
  "message0": "Axes 2D : xmin %1 xmax %2 ymin %3 ymax %4",
  "args0": [
    {
      "type": "input_value",
      "name": "xmin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "xmax",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "ymin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "ymax",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Valeurs minimales et maximales des axes visibles",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#axes2D"
},
{
  "type": "geogebra_axes3D",
  "message0": "Axes 3D : xmin %1 xmax %2 ymin %3 ymax %4 zmin %5 zmax %6",
  "args0": [
    {
      "type": "input_value",
      "name": "xmin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "xmax",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "ymin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "ymax",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "zmin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "zmax",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Valeurs minimales et maximales des axes visibles",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#axes3D"
},
{
  "type": "geogebra_objetVisible",
  "message0": "Objet %1  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "nom",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "visible",
      "options": [
        [
          "visible",
          "VISIBLE"
        ],
        [
          "invisible",
          "INVISIBLE"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Montrer ou cacher un objet de la figure courante",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#objetVisible"
},
{
  "type": "geogebra_couleur",
  "message0": "Objet nom %1 de couleur rouge %2 vert %3 bleu %4 et opacité %5",
  "args0": [
    {
      "type": "input_value",
      "name": "nom",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "rouge",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "vert",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "bleu",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "opacite",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#857DF7",
  "tooltip": "Modifier la couleur d'un objet existant",
  "helpUrl": prefixeDOCU+"p5BLOCS/DOCU/geogebra.html#couleur"
}
]);  // END JSON EXTRACT (Do not delete this comment.)

