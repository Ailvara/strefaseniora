<?php

$all_questions = "[";
$num_questions = 0;

mysql_connect("localhost","root","");
mysql_select_db("strefaseniora");
$check = mysql_query('SELECT * FROM quiz_questions WHERE user="'.$_SESSION['id'].'"');

while($item=mysql_fetch_array($check)) {
	$all_questions = $all_questions . 
			"[\"" . $item['question'] . 
			"\",\"" . $item['answer_A'] . 
			"\",\"" . $item['answer_B'] . 
			"\",\"" . $item['answer_C'] .
			"\",\"" . $item['correct'] . "\"],";
	$num_questions++;
}
$all_questions .= "]";

echo '
<script charset="UTF-8">

id = Math.floor(Math.random() * '.$num_questions.');
id2 = Math.floor(Math.random() * '.$num_questions.');
id3 = Math.floor(Math.random() * '.$num_questions.');
id4 = Math.floor(Math.random() * '.$num_questions.');
id5 = Math.floor(Math.random() * '.$num_questions.');
id6 = Math.floor(Math.random() * '.$num_questions.');
id7 = Math.floor(Math.random() * '.$num_questions.');
id8 = Math.floor(Math.random() * '.$num_questions.');
id9 = Math.floor(Math.random() * '.$num_questions.');

var all_questions = '.$all_questions.';
var questions = [];

questions.push(all_questions[id]);
questions.push(all_questions[id2]);
questions.push(all_questions[id3]);
questions.push(all_questions[id4]);
questions.push(all_questions[id5]);
questions.push(all_questions[id6]);
questions.push(all_questions[id7]);
questions.push(all_questions[id8]);
questions.push(all_questions[id9]);

console.log(questions);
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0, copyQuestion1, id = 0;

function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>Masz "+correct+" z "+questions.length+" poprawnych odpowiedzi</h2>";
		_("test_status").innerHTML = "Test Zakończony";
		saveResult(correct);
		pos = 0;
		correct = 0;
		var again = window.confirm("Koniec! Jeszcze raz?");
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
	test.innerHTML += "<input type=\'radio\' name=\'choices\' value=\'A\'> "+chA+"<br>";
	test.innerHTML += "<input type=\'radio\' name=\'choices\' value=\'B\'> "+chB+"<br>";
	test.innerHTML += "<input type=\'radio\' name=\'choices\' value=\'C\'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick=\'checkAnswer()\'>Zatwierdź odpowiedź</button>";
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

function saveResult(correct)
{
  window.open("save.php?correct="+correct);
}

window.addEventListener("load", renderQuestion, false);
</script>
'
?>