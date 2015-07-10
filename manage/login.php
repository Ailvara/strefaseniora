<?php include "../res/header.php"?>
	<title>Logowanie</title>
	<style>
	</style>
</head>
<body>
	<div class="container">
	
	<?php
	
	mysql_connect("localhost","root","");
	mysql_select_db("strefaseniora");

	$form = '
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
			';

	if(isset($_POST['log_in'])) {

		$check = mysql_query('SELECT password FROM users WHERE email="'.$_POST['login'].'"');
		$pass = mysql_fetch_array($check)['password'];
		
		if($pass==$_POST['password']) {
			echo 'Zalogowano';
			$_SESSION['logged'] = true;
			$_SESSION['login'] = $_POST['login'];
			$_SESSION['password'] = $_POST['password'];
			header('Location: ../index.php');
		} else echo "Niewłaściwy login lub hasło.".$form;
		
	} else echo($form);

	?>
	</div>
	<?php include "../res/menu.php"?>
</body>
</html>
