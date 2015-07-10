var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0, copyQuestion1, id = 0;
var biologia = [
[ "Ile kości ma dorosły człowiek?", "189", "206", "225", "B" ],
	[ "Z czego zbudowana jest ściana komórkowa?", "z tłuszczów i cukrów", "	z białka", "z celulozy", "C" ],
	[ "Ile zębów posiada dorosły człowiek?", "32", "36", "38", "A" ],
	[ "Która kość jest największa", "promieniowa", "ramienna", "udowa", "C" ],
	[ "W jakiej części komórki roślinnej zachodzi proces oddychania?", "w chromosomach", "w chloroplastach", "w mitochondriach", "C" ],
	["Kim jest Pustułka?", "Ptak – nielot","To choroba genetyczna", "To drapieżny ptak","C"],
	["Osoba która choruje na anemię powinna spożywać","Orzechy oraz mleko","Ciemne pieczywo, ryż, makarony","Sporo mięsa oraz szpinaku","C"],
	["Najszybsze zwierzę na świecie to :","Wole","Gepard","Lew","B"],
	["Wsród podanych poniżej sposobów obrony organizmu przed patogenami (A-D) zaznacz ten, który jest odpowiedzią swoistą:","Fagocytowanie patogenów przez granulocyty obojętnochłonne i kwasochłonne","Obecność w płynach ciała np. Łzach, mleku, ślinie lizozymu uszkadzającego bakterie","Wytwarzanie przeciwciał przez limfocyty B, które zetknęły się z patogenami","C"],
	["Ile włosów traci człowiek w ciągu całego roku? (przeciętnie)","5000","3500","30000","C"],
	["Która witamina rozpuszczalna jest w wodzie?","C","A","E","A"],
	["Chełbia modra należy do :","Pierścienic","Parzydełkowców","Nicieni","B"],
	["Układ krwionośny parzydełkowców jest:","Zamknięty","Otwarty","Parzydełkowce nie mają układu krwionośnego","C"],
	["DNA nie skłąda się z :","Reszty kwasy fosforowego","Rybozy ","Tyminy","B"],
	["Dżdżownica należy do :","Pierścienic","Mięczaków","Mięczaków","A"],
	["Jak nazywa się barwnik skóry?","Melatonina","Melanina","Chlorofil","B"],
	["Hemoglobina łączy się :","Trwale z tlenkiem węgla","Trwale z tlenem","Trwale z dwutlenkiem węgla","A"],
	["Współżycie grzybów z korzeniami roślin wyższych to :","Mikoryza","Komensalizm","Protokooperacja","A"],
	["Jak nazywają się krwinki czerwone?","Erytrocyty","Leukocyty","Trombocyty","A"],
	["Do zewnętrznej budowy okaz zaliczamy:","Tęczówkę, naczyniówkę, twardówkę","Źrenicę, rogówkę, siatkówkę","Rogówkę, źrenicę, tęczówkę","C"],
	];
var geografia = [
[ "Najdalej wysunięty na zachód punkt lądu stałego Europy to:", "Przylądek Św. Wincentego", "Przylądek Igielny", "Przylądek Roca", "C" ],
	[ "Organizacja krajów eksportujących ropę to:", "OPA", "OPEC", "OECD", "B" ],
	[ "Gejzery możemy podziwiać:", "Na Kamczatce", "W Irlandii", "Urugwaju", "A" ],
	[ "Państwa nie należącym do Unii Europejskiej jest:", "Bułgaria", "Norwegia", "Austria", "B" ],
	[ "Prowansja znajduje się we:", "Francji", "Grecji", "Hiszpanii", "A" ],
	[ "Stolicą tego państwa jest Nassau:", "Barbados", "Bahamy", "Seszele", "B" ],
	[ "Która z wymienionych nauk zajmuje się badaniem gleb?", "Pedologia", "Geomorfologia", "Geologia", "A" ],
	[ "Teren położony poniżej poziomu morza:", "Depresja", "Kryptodepresja", "Nizina", "A" ],
	[ "Półwysep Labrador znajduje się w:", "Kanadzie", "Australii", "USA", "A" ],
	[ "Stolica kraju „kwitnącej wiśni” to :", "Manila", "Pekin", "Tokio", "C" ],
	[ "Lessy w Polsce występują na :", "Podkarpaciu", "Wszystkie odpowiedzi są poprawne", "Wyżynie Lubelskiej", "B" ],
	[ "Forma krasu, miejsce gdzie wody wpływają pod powierzchnię terenu to:", "Ponor", "Żadna z odpowiedzi nie jest poprawna", "Wywierzysko", "A" ],
	[ "Patagonia leży w:", "Afryce", "Ameryce południowej", "Ameryce Północnej", "B" ],
	[ "Największe sztuczne jezioro świata:", "Czorsztyńskie", "Wolta", "Kariba ", "B" ],
	[ "Najmłodszym Parkiem Narodowym w Polse jest:", "Pieniński Park Noroddowy", "Roztoczański Park Narodowy", "Ujście Warty", "C" ],
	[ "Najwyższy szczyt Tatr to:", "Gerlach", "Giewont", "Rysy", "A" ],
	[ "Serir to pustynia:", "Kamienista", "Żwirowa", "Piaskowa", "B" ],

	[ "Dubrownik znajduje się w :", "Słowacjii", "Chorwacji", "Bułgarii", "B" ],
	[ "Portugalski jest językiem urzędowym w:", "Argentynie", "Chile", "Brazylii", "C" ],
	[ "Produktem erupcji wulkanu jest:", "Barchany", "Lapille", "Lapiszcze", "B" ],



];

var historia = [
[ "Który z zakonów rekrutował kandydatów wyłącznie z jednej narodowości?", "Templariusze", "Krzyżacy", "Joanici", "B" ],
	[ "Zimna wojna to określenie stosunków, które wywiązały się na świecie po zakończeniu:", "Wojny japońsko-rosyjskiej", "Wojny polsko-bolszewickiej", "II Wojny Światowej", "C" ],
	[ "Plan Marschalla zakładał:", "Atak USA na ZSRR", "Podział Niemien na strefy okupacyjne", "Udzielenie pomocy zniszczonym państwom europejskim", "C" ],
	[ "Która partia w 2005 roku wygrała wybory parlamentarne w Polsce?", "PSL", "SLD", "PIS", "C" ],
	[ "W którym roku Kolonie brytyjskie w Ameryce Pn ogłosiły swoją niepodległość?", "5.02.1776", "4.05.1776", "4.07.1776", "C" ],
	[ "Podaj datę wojny stuletniej", "1337-1453", "1342-1431", "1227-1327", "A" ],
	[ "Zmiany ustrojowe w Rzymie, wybierz poprawną kolejność:", "Monarchia, republika, dominat, pryncypat", "Monarchia, republika, pryncypat, dominat", "Republika, monarchia, dominat, pryncypat", "B" ],
	[ "W którym roku Sejm w Polsce został zerwany po raz pierwszy przez Liberum Veto?", "1652", "1731", "1731", "A" ],
	[ "Po II wojnie Światowej wzrasta pozycja dwóch państw. Jakich ?", "ZSRR i Japonii", "USA i Wielkiej Brytanii", "USA i ZSRR", "C" ],
	[ "Który Polski Władca wystawił dokument Dagome Iudex?", "Mieszko II", "Mieszko I", "Bolesław Chrobry", "B" ],
	[ "Kto był przeciwny zawarciu Unii realnej pomiędzy Polską, a Litwą?", "Chłopi Polscy", "Szlachta Litewska", "Możnowładcy Litewscy", "C" ],
	[ "Krucjata chłopska miała miejsce w :", "1096", "1112", "966", "A" ],
	[ "Za którego cesarza Imperium Romanum osiągnęło największe rozmiary terytorialne?", "Trojana", "Hadriana", "Marka Aureliusza", "A" ],
	[ "Kto został prezydentem Polski w 1989 roku?", "Aleksander Kwaśniewski", "Wojciech Jaruzelski", "Lech Wałęsa", "B" ],
	[ "W którym roku miał miejsce chrzest Polski?", "996", "1000", "966", "A" ],

	[ "W okresie międzywojennm 1918-1939 istniały w Europie trzy państwa totalitarne. Wybierz państwo które w tej grupie się nie znalazło:", "ZSRR", "Niemcy", "Francja", "C" ],
	[ "Anschluss Austrii dokonany przez III Rzeszę łamał postanowienia:", "Konferencji w Monachium", "Traktatu pokojowego w Compiegne", "Traktatu rosyjskiego", "B" ],
	[ "W którym roku miała muejsce koronacja cesarska Karola Wielkiego?", "476", "800", "732", "B" ],
	[ "Kto był autorem dzieła „Książę”?", "Nicollo Machiavelli", "Thomas Hobbes", "Jean Bodin", "A" ],
	[ "Na których terenach w początku nowożytnej Europy tworzono małe gospodarstwa chłopskie i zmniejszano obciążenia chłopów, a zamiast tego zawierano umowy krótkoterminowe?:", "Na wschód od Łaby", "Na zachód od Łaby", "Na południe od Łaby", "B" ],





];


id = Math.floor(Math.random() * 20);
id2 = Math.floor(Math.random() * 20);
id3 = Math.floor(Math.random() * 20);
id4 = Math.floor(Math.random() * 20);
id5 = Math.floor(Math.random() * 20);
id6 = Math.floor(Math.random() * 20);
id7 = Math.floor(Math.random() * 20);
id8 = Math.floor(Math.random() * 20);
id9 = Math.floor(Math.random() * 20);



var questions = [
    [ biologia[id][0], biologia[id][1], biologia[id][2], biologia[id][3], biologia[id][4]],
	[ biologia[id2][0], biologia[id2][1], biologia[id2][2], biologia[id2][3], biologia[id2][4]],
	[ biologia[id3][0], biologia[id3][1], biologia[id3][2], biologia[id3][3], biologia[id3][4]],
	[ geografia[id4][0], geografia[id4][1], geografia[id4][2], geografia[id4][3], geografia[id4][4]],
	[ geografia[id5][0], geografia[id5][1], geografia[id5][2], geografia[id5][3], geografia[id5][4]],
	[ geografia[id6][0], geografia[id6][1], geografia[id6][2], geografia[id6][3], geografia[id6][4]],
	[ historia[id7][0], historia[id7][1], historia[id7][2], historia[id7][3], historia[id7][4]],
	[ historia[id8][0], historia[id8][1], historia[id8][2], historia[id8][3], historia[id8][4]],
	[ historia[id9][0], historia[id9][1], historia[id9][2], historia[id9][3], historia[id9][4]],
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>Masz "+correct+" z "+questions.length+" poprawnych odpowiedzi</h2>";
		_("test_status").innerHTML = "Test Zakończony";
		pos = 0;
		correct = 0;
		var again = window.confirm("Wygrales! Jeszcze raz?");
		if(again == true) location.reload();
		return false;
	}
	_("test_status").innerHTML = "Pytanie "+(pos+1)+" z "+questions.length;

	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+id+"</h3>";
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Zatwierdź odpowiedź</button>";
}

function checkAnswer(){
	test = _("test");
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
		if (correct == 1){
		test.innerHTML = "<h2>Masz "+correct+" punkt </h2>";
		_("test_status").innerHTML = "";
		alert("Dobrze! Masz teraz " + correct + "punkt");
		}
		else{
		test.innerHTML = "<h2>Masz "+correct+" punkty </h2>";
		_("test_status").innerHTML = "";
		alert("Dobrze! Masz teraz " + correct + "punkty");
		}

	}
	else{
	alert("Niepoprawnie!")
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
