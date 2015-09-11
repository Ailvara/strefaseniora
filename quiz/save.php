<?php 
if(!isset($_SESSION)){
	session_start();
}
if(isset($_GET['correct'])) {

	mysql_connect("localhost","root","");
	mysql_select_db("strefaseniora");

	$check = mysql_query('SELECT id FROM users WHERE email="'.$_SESSION['login'].'"');
	$id = mysql_fetch_array($check)['id'];
	
	echo "ok";
	$query = mysql_query("
	INSERT INTO quiz_results(`user`, `correct`) VALUES (".$id.",".$_GET['correct'].");"
	);
	header("location: index.php");
}
?>