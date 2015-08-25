<?php include "../res/header.php"?>
	<title>Logowanie</title>
	<style>
	* {
		font-size: 1.1em;
	}
	h1,form {
		padding: 20px;
		padding-top: 0px;
	}
	</style>
	<link rel="stylesheet" href="http://static.tumblr.com/dxiv9ge/6JTnjrhrn/bootstrap.min.css">
</head>
<body>
	<div class="container">
	
	<?php
	
	mysql_connect("localhost","root","");
	mysql_select_db("strefaseniora");

	$form = '
		<h1>Logowanie</h1>
		<form method="POST" action="login.php" class="form-horizontal">
			<div class="form-group">
				<label for="form_mail">email</label>
				<input type="text" name="login" value="" id="form_mail"/>
			</div>
			<div class="form-group">
				<label for="form_password">hasło</label>
				<input type="text" name="password" value="" id="form_password"/>
			</div>
			<input type="submit" value="Wyślij" name="log_in" />
		</form>
		
		<h1>Rejestracja</h1>
		<form method="POST" action="login.php" class="form-horizontal">
			<div class="form-group">
				<label for="reg_mail">email</label>
				<input type="text" name="mail" value="" id="reg_mail"/>
			</div>
			<div class="form-group">
				<label for="reg_password">hasło</label>
				<input type="text" name="pass" value="" id="reg_password"/>
			</div>
			<div class="form-group">
				<label for="reg_caretaker">opiekun</label>
				<input type="text" name="caretaker" value="" id="reg_caretaker"/>
			</div>
			<input type="submit" value="Wyślij" name="register" />
		</form>
			';

	if(isset($_POST['log_in'])) {

		$check = mysql_query('SELECT * FROM users WHERE email="'.$_POST['login'].'"');
		$query = mysql_fetch_array($check);
		$pass = $query['password'];
		
		if($pass==$_POST['password']) {
			echo 'Zalogowano';
			$_SESSION['logged'] = true;
			$_SESSION['login'] = $_POST['login'];
			$_SESSION['id'] = $query['id'];
			$_SESSION['password'] = $_POST['password'];
			$_SESSION['caretaker'] = $query['caretaker'];
			//header('Location: ../index.php');
		} else echo "Niewłaściwy login lub hasło.".$form;
		
	} else echo($form);
	
	if(isset($_POST['register'])) {
		$caretaker = $_POST['caretaker'];
		if($caretaker=="") $caretaker="NULL";
		else {
			$check = mysql_query('SELECT id FROM users WHERE email="'.$caretaker.'"');
			$caretaker = mysql_fetch_array($check)['id'];
		}
		$q = "INSERT INTO `users` (`email`, `password`, `caretaker`) VALUES ('".$_POST['mail']."', '".$_POST['pass']."', ".$caretaker.");";
		$post = mysql_query($q);
		//echo $q;
	}

	?>
	</div>
	<?php include "../res/menu.php"?>
</body>
</html>
