<?php 
if(!isset($_SESSION)){
	session_start();
}
if(isset($_GET['time'])&& isset($_GET['moves']) &&isset($_GET['set'])) {

	mysql_connect("localhost","root","");
	mysql_select_db("strefaseniora");

	$check = mysql_query('SELECT id FROM users WHERE email="'.$_SESSION['login'].'"');
	$id = mysql_fetch_array($check)['id'];
		
	$query = mysql_query("
	INSERT INTO memory_results(`user`, `set`, `time_taken`, `moves`) VALUES ("
		.$id
		.","
		."'".$_GET['set']."'"
		.","
		.$_GET['time']
		.","
		.$_GET['moves']
		.");"
	);
	header("location: index.php");
}
?>