// create youtube player
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        width: '640',
        height: '390',
        videoId: kwdikos[f],
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}
// autoplay video
function onPlayerReady(event) {
    event.target.playVideo();
}
// when video ends
function onPlayerStateChange(event) {        
    if(event.data === 0) {         
        location.reload(true);
    }
}
	
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
		
var kallitexnhs = ["keno","Τζούλια Αλεξανδράτου" ,"Θέλξη"                     ,"Γιώργος Μαζωνάκης",	"Αγαπούλα μου",		"Λευτέρης Πανταζής",		 "Σάσα Μπάστα",		"Έλενα Παπαρίζου",		"Σώτης Βολάνης",	 "Νότης Χριστοδούλου","Γιώργος Μαζωνάκης",		        "Αντώνης Ρέμος",		"Γιαννούλης - Βαζαίος",				 "Μπίγαλης",						"Ominus & dj s",						  "Βασιλείου",						"Γιώργος Μαζωνάκης",			"Σώτης Βολάνης",					  "Shaya",				  "Δέσποινα Βανδή",						"ΓΙΩΡΓΟΣ ΞΑΝΘΙΩΤΗΣ",				"Ελένη Φουρέιρα",					"Λεμπέσης Γιώργος",						"Goin' Through",						"Hi-5",						"ΔΑΚΗΣ",		"Γιώργος Μαζωνάκης",						"Γιώργος Μαζωνάκης",						"Τάσος Μπουγάς",					"Ανδρέας Στάμος",				"Άντζυ Σαμίου",						"Τάσος Μπουγάς",						"Άντζυ Σαμίου",				"ΓΙΑΝΝΗΣ ΒΑΣΙΛΕΙΟΥ",						"Γιώργος Μαζωνάκης",						"ΤΑΣΟΣ ΜΠΟΥΓΑΣ",						"Γιώργος Τσαλίκης",						"Σάκης Ρουβάς",						"Πάνος Κιάμος",						"Tamta & Stereo Mike",						"Μαριάντα Πιερίδη",						"Θηρίο",						           "Γιώργος Τουλούμης",					"Γιάννης Βασιλείου",						"Έλλη Κοκκίνου",			"Άντζυ Σαμίου",						"Τάσος Μπουγάς",						"Δυτικές Συνοικίες",						"Βικτώρια Χαλκίτη",			"Δημήτρης Σταρόβας",			"Καίτη Γαρμπή",						"Γιώργος Χριστέλης",						"Χρήστος Πάζης",			"Ειρήνη Μερκούρη",						"Hi-5",						"Ένα μπουκάλι johnnie",						"Χρήστος Δάντης",						"OtherView",						"Master Tempo - Vip",						"Έρωτα μου τοκογλύφε",						"Στέλλα Μπεζαντάκου",						"Άντζυ Σαμίου",						"Βιβή Μαστραλέξη",						"Κέλλυ Κελεκίδου",						"Έφη Σαρρή",										"ΤΑΣΟ ΜΠΟΥΓΑΣ",								"ΕΦΗ ΣΑΡΡΗ",						"Άννα Γούλα",						"Ροζ Ακρίδες",						"???",						"Φανή Δρακοπούλου",						"ΠΕΠΗ ΤΣΕΣΜΕΛΗ",						"Σάκης Κούκος",				"Πέπη Τσεσμελή",						"???",						"Λευτέρης Πανταζής",						"Σώτης Βολάνης",						"Μαρία Καρλάκη",			"Έφη Σαρρή",						"Λευτέρης Πανταζής",						"Έφη Σαρρή",						"Βιβή Μαστραλέξη",						"Έφη Σαρρή",						"Σταύρος Ζούμπας",						"Έλενα Βέντη",						"Ζαφείρης Μελάς",					"ΠΕΠΗ ΤΣΕΣΜΕΛΗ",						"ΕΦΗ ΣΑΡΡΗ",						"Δημήτρης Σταρόβας",			"Στέλλα Μπεζαντάκου",						"ΣΟΥΛΑ ΔΑΝΕΖΗ",						"ΣΤΕΛΛΑ ΓΕΩΡΓΙΑΔΟΥ",			"Έλενα Παπαρίζου",	"Άννα Βίσση & Καίτη Γαρμπή",						"ΒΑΝΔΗ / ΛΕΜΠΕΣΗΣ",						"ΜΙΧΑΛΗΣ ΡΑΚΙΤΖΗΣ",						"Ειρήνη Μερκούρη",						"Άννα Βίσση",						"Λένα Παπαδοπούλου",						"Χρύσπα",						"ΗΜΙΣΚΟΥΜΠΡΙΑ",						"Χρύσπα",						      "Υποχθόνιος",						"Άντζυ Σαμίου",						"Λίτσα Γιαγκούση",						"Σάκης Ρουβάς",						"Σταμάτης Γονιδης",						"Άντζυ Σαμίου",						"ΑΝΤΥΠΑΣ",						"ΗΜΙΣΚΟΥΜΠΡΙΑ",						"Ειρήνη Μερκούρη",						"Χρύσπα",                  "Νίκος Κουρκούλης"		,           "Δέσποινα Βανδή",           "Δέσποινα Βανδή",           "ΧΡΗΣΤΟΣ ΔΑΝΤΗΣ",           "ΤΑΣΣΙΟΣ ΓΙΑΝΝΗΣ",           "Ειρήνη Μερκούρη",        				   "Βαλάντης",           "Εύα Μιλλή",                  "Λένα Παπαδοπούλου"	    ,"Σαμπρίνα"    ,"Πάνος Κιάμος"                     ,"Πέγκυ Ζήνα",	        "Γιώργος Τσαλίκης",		"Τζούλια Αλεξανδράτου" ,     "Γιώργος Αλκαίος",		"Χατζηνάσιος & Αλεξιάδη",		"Νίκος Καρβέλας",		     "Γιώργος Χρήστου",		            "NINO",		                   "ΓΙΩΡΓΟΣ ΛΕΜΠΕΣΗΣ",			"Λένα Παπαδοπούλου",		           "Λίτσα Γιαγκούση",		"Μαριάντα Πιερίδη",		"ΠΩΛΙΝΑ & ΧΡΗΣΤΟΣ ΔΑΝΤΗΣ",		                  "Τριαντάφυλλος",		                       "Σώτης Βολάνης",		"Νατάσα Θεοδωρίδου",  "Γιώργος Τσαλίκης",   "Λευτέρης Πανταζής"             ,   "Λευτέρης Πανταζής"  ,  "Ανδρέας Ευαγγελόπουλος"   ,  "Ανδρέας Ευαγγελόπουλος" ,  "Σαλαμπάσης"    ,  "Μπάμπης Παπαδόπουλος"       ,  "Τάκης Πλακιάς"  ,  "Γιάννης Φλωρινιώτης"              ,  "Έλενα Βέντη"              ,  "Ανδρέας Λάμπρου"  ,  "Ανδρέας Ευαγγελόπουλος"    ];
var titlos =      ["keno","Στόχος είναι τα λεφτά","Έχεις τα μάτια που λατρεύω","Ζηλεύω"           ,	  "Άννα Βίσση",			   	  "Άπιστος",	"Μου 'μαθες έρωτα",		     "Κάτσε Καλά",	   "Πόσο μου λύπει","Και όλο χάλαγε το αμάξι",	"To Gucci Φόρεμα","Μόνος μου το πέρασα κι αυτό",		 "Αγαπώ μια πιτσιρίκα",			"Ρίνα Κατερίνα",						 "Κάντε πανικό",						  "Καμπριολέ",						 "Τι σου έχω κάνει", "Μωρό μου θέλω να γλεντάς",					   "Λένε",				"Τι κάνω μόνη μου",						"ΤΣΙΚΟΥΛΑΤΑ",						"Ραντεβού στην παραλία",		    "Προδιαγραφές",						   "Γυναίκες",						"Ξέρω τι ζητάω",			"ΤΣΑΙ ΜΕ ΛΕΜΟΝΙ",						"Είσαι Φοβερή",						"Το λάθος μου το τελευταίο","Βάλε το μαύρο σου το string",				"Φταις",						"Αγοράκι μου",						"Έλα στον παππού",						"Ασπιρίνη",						"ΠΡΩΤΟ ΣΟΥ ΦΙΛΙ",						"Summer In Greece",						"ΠΑΡΕ ΜΟΥ ΜΙΑ ΠΙΠΑ",						"Ο τέλειος άνδρας",						"Θέλεις ή δε θέλεις",		"Απόψε φόρα τα καλά σου",						"Σ΄όποιον αρέσει",						"Βάλε φαντασία",						"Γουστάρω τα κορίτσια",						"Όλα τα χάπια είναι ίδια",			"Με καις με καις",						"Sex",						         "Παράλληλη Αγάπη",	"Θέλω να σε πάρω από πίσω",						"Καλοκαιρινά ραντεβού",						"Τέλεια",						"Αγλέορας",						"Το κάτι",						"Τα μπαλάκια του τέννις",						"Το τζίνι",						"Μικρή μου Αρχόντισσα",				"Άλλο αγάπη, άλλο σεξ",						"Γιάννης Κόλλιας",	"Maya Maya",						           "Κάνε Με",						"Βεντέτα",						            "Βασίλης Παπαβασιλείου",						"Σαν Μπλουζάκι",						"Μία σου και μία μου",						"Είσαι Νινί Ακόμα",						"Γλύκα γλύκα γλυκειά μου",					"Γυμνός μεσ' στην Ελλάδα",						"ΜΕ ΤΗΝ ΚΟΙΛΙΤΣΑ ΕΞΩ",					"ΣΤΑ ΚΡΕΒΑΤΙΑ ΤΑ ΞΕΝΑ",						"Τα πίνω όλα",						"Είμαι Πουτάνα",					"Το εργαλείο",						"Θέλω να τα πιω",		"ΜΠΟΤΕΣ",						"Red Bull",						"Σκανδαλίζομαι",						"Έλα να κάνουμε sex",				"Τζουτζούκα",						"Σαν το τσιγάρο",						"Καζάνι",						"Μη μου πεις το ζωδιό σου",						"Είμαι φερέγγυος",				"Θα κλειστώ σε μοναστήρι",			"Λιώνω",						"Σταυρώστε με",						"Να ζήσουν οι κομμώτριες",						"Μ' αρέσει το σεξ","Θέλω τα ξανθά σου τα μαλλιά",						"ΔΙΠΛΑ",						"ΗΛΕΚΤΡΟΠΛΗΞΙΑ",						"Είναι μύθος",						"Θέλεις τραλαλά",						"ΘΕΛΕΙ ΚΑΙ ΛΙΓΗ ΠΟΥΤΑΝΙΑ",			"ΤΩΡΑ ΜΟΥ ΜΙΛΑΕΙ",						"Gigolo",					"Καλύτερα οι δυο μας",		"ΚΑΤΑΛΛΗΛΕΣ ΠΡΟΥΠΘΕΣΕΙΣ",						"ΠΗΓΑΙΝΕ ΣΤΑ ΜΠΑΡ",						"Πού να φανταστώ",						"Magava Tout",						"Θέλω τρέλα",						"Φεύγω για το εφτά",						"GREEK LOVER ",						"Μου κάνει πλάκα ο θεός",						"Κάνε ντου",	"Πιο χαμηλά",						"`Οταν Βλέπω Αεροπλάνο",						"Άντεξα",						"Εισαι μια πληγη ακομα",						"Κάφτρα",						"ΜΩΡΟ ΜΟΥ ΚΑΛΗΣΠΕΡΑ",						"ΤΟ ΣΕΞ",				"Έμαθα να ζω χωρίς εσένα",						"`Αντρες 100%",     "ΟΜΟΡΦΗ ΣΑΝ ΑΜΑΡΤΙΑ"	,           "Μη μου κλείνεις το φως",           "Α πα πα",           "Beautiful",           "ΟΥΤΕ ΣΤΟΝ ΕΧΘΡΟ ΜΟΥ",           "Κάτι έχω πάθει με τα μάτια σου",           "Στο ασανσέρ",           "ΚΑΨΤΕ ΤΑ ΟΛΑ",           "Αλεξίσφαιρο γιλέκο"	,"Μπούμ-Μπούμ" ,"Απόψε φόρα τα καλά σου"          ,"Βρες έναν τρόπο",	    "Δυναμιτης",		    "Μόνο για 'σένα"        ,        "Da Da Da" ,     "Κακομαθημένο",                     "Τα εσώρουχα σου",           "Δεξιώσεις",                        "SEXY",                 "H ΑΓΑΠΗ ΒΛΑΠΤΕΙ ΣΟΒΑΡΑ", 		 "Θαύμα",                               "Απιστία",               "Άμπρα Κατάμπρα",  "PUSH UPS",                                             "Έλα όμως που δεν περνάει",            "Θέλω να δω",         "Καταζητείται",           "Ξενυχτάω" ,       "Βρήκες το ευαίσθητο σημείο μου"   ,  "Καρδιοπάθειες"       ,  "Χαλάρωσε"               ,  "Ο Εθνικός Σταρ"         ,  "Μις Ελλάς"       ,  "Του κουμπάρου το κουνέλι"   ,  "Μανεκέν"       ,  "Πειράζει που είσαι μεγάλη φίρμα"  ,  "Σ' έπιασα να κάνεις τρίο" ,  "`Οσκαρ"           ,  "ΚΑΛΗΜΕΡΑ ΗΛΙΕ"             ];
var kwdikos =     ["keno", "HzoJEiKh0TE"         ,"reCUdZVs64Q"               ,"kKmXyGNrmXI"      ,	 "g1Oj43Lde3g",			  "g8G7oisqqO0",		 "n5ix0-agWP4",			"uXWUbWRoGAk",		  "k9k4NUA1FsE",			"R87SD4jTEjA",		"rcMcCAYIEWs",				  "sybkxu9WpkY",				 "aAGQJEfaIUM",			  "2Cb6Ng5o1iw",						  "ZY5fqlT6rgQ",						"cXGG3Iis8_k",						      "O1z9R_E3M10",			  "DqAvD-g9Gnk",				"Vh30RmBiGu8",					 "RpgzbQXVrAs",						"J5SNFown0fg",						"BFbrjvxaiT4",						"53nU82DT_UA",						  "AlNltwHLhZk",						"loyuEbD_Gho",				"lVTqdNFVonM",						"Kstetnbsk4M",						"iuz7uFZ5R_o",						"XYe-51n1y1E",						  "NjO-oST5VPU",					"HX4qr7QA-rs",						"roPONac4fXg",						"--yMuPfKD_k",						"JqWFUF0R0U0",						"AKTVmF4IcCU",						"Xs61fbKO7UM",						          "DNcE9gwe7_w",						"bK6lVVP8ISA",						"Vnmde0ztUFQ",						"Tv6PcAyHO5w",						            "J-gohMT69j4",						"wJie3-_goVA",					               	"c4ElE1H-EQQ",						    "F9o4GZN8ONo",						"S0Q8nNkxWB0",						"i7_I2K9oprA",						"__c_WEvKxpA",						"0592ba7iVG0",						"EgJDJBzA8xE",						"2HWUakp-S7Q",						"5iTsMlykyf8",						"tTeaSUJOezU",						"NKQRg9P7YSU",						"n8SjFaatPE4",						"FFk4DoFNrlI",						"Y61kBTwcHBI",						"SI7zI2pniB4",					        	"am6atGUOP0c",						"kzPh9AcOx8A",						"K1A-zz59f-w",									"xdNM-I25Mks",						"cGRUu7g0AGQ",									"qp9mBOgat0Y",						"QFKEZtd0TH0",										"sBOyrmdCU3U",									"GmicEbptXJI",							"1pfrCTfE7dI",						"2uH_ricAz84",						"Zu1D8Z3r9VQ",						"C89lm0xymkc",						"ie2MFBfyCTc",						"UKrLafJjSn8",						"XbIwxxi8yCc",				"YWJbo95qEMQ",						"7oT0Oy4UABo",						"FrKmfVSbjAs",						"QjAud0maB-I",						"ynIe-7ONOp4",						"aLQnSYB06bg",						"uOg10sKQN7g",						"SgJHylbgzuY",						"bMr2DJJ-fOQ",						"m_znEKSLyBI",						"zz2AsZl5d3w",						        "9FBkMaljeFE",						"zIgU_GmSW6U",						"yznDFp0xkCw",						"v9eAEELo38U",						"0zzoalx3QJc",						"e2qW6PXB6DQ",						"YgkQzQYJx34",						      "LhMDHA6yRYk",						"THs0VNE8XUQ",					"dlqQQJBqYj8",						"hPdTbDd1rIk",						"HcHNgtqp810",						"N36PzpVORQw",						   "S00fXG560yE",						"qaNOdlbAaGo",						"t39htwWOoTI",						        "PkmCoXe4Br4",						"6SHYcETdKnQ",						             "ufgxUSauJts",						"M0djq02bghM",			"60LUqXlQDXM",						"CVCfaOaqCj4",						"hMwBojgFiQU",						               "wWulnvPJdYM",						"M71ka_wgeTs",						"zT6PxeKSdBU",						"swJgMAF9zPs",						"AZXI63dQI7U",                "Ja5J5fe92cg"		,           "2KWUXndA5PI",           "6P21De1fbhg",                     "yxN2F9TZ16I",           "88CAtA5nJyI",           "8O3kkGt_pfM",    					    		   "qeOvZ6D1IQE",           "bBwLU27Aug4",           "G_jgnZ2phPo"	        ,"3EevVXK9xCc" ,"nu9gkF5ej_M"                     ,"64VAl-Kct3g",	          "HmbEoU6TwRs",		"aV3CJ87-A2E"           ,       "Mi5b-U8UEuc" ,         "tlh-M5oGxC0"              ,         "BSd7_dsAdaQ"  ,         "tmQjMCTl-QM"              ,         "HtMceNwCGm4"              ,    "wfQuLGB91mY"  	 ,         "gNMxr19LyY8"              ,         "GMccLBJRGfI"    ,         "Y11XvPgiTEY"   ,         "_df_JqSMHG4"              ,                  "A7fyA95YqUg"              ,         "1Es2HH_ovfk"     ,         "aiTlhrTqFMc"  ,    "Ofx4S5osOZc",  "z6wiQOCIJLg"                        ,  "e1rkcIIHLiI"         ,  "CT5EiN7Y2xk"             ,  "pLprEF8w2ik"             ,  "Z15qPMDq1eo"   ,  "CT4EMLupZeE"                 ,  "q6bkLP3Mz9M"   ,  "dqjI7ZrwrYU"                      ,  "fWXxGfLbZDk"              ,  "sAKtOs7kUOg"     ,  "erzu3-PVhIg"               ];
var f = getRndInteger(1, 150); 

var adr = "https://www.youtube-nocookie.com/embed/";
var adr2;
function iframer(sel) {
	for (i = (1+(sel -1)*6); i < (7+(sel -1)*6); i++) {
		adr2 = adr.concat(kwdikos[i]);
		document.getElementById("v"+(i-(sel -1)*6)).setAttribute("src", adr2);
		document.getElementById("t"+(i-(sel -1)*6)).innerHTML = "<span>"+titlos[i]+"</span>"+"<br>"+"<span>"+kallitexnhs[i]+"</span>";
	}
}


