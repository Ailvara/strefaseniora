<?php 
	if(!isset($_SESSION)){
		session_start();
	}
	if(isset($_GET['logout'])){
		if($_GET['logout']=='true') {
			$_SESSION['logged']=false;
		}
	}
?>

<!DOCTYPE html>
<html>
  <html lang="pl">
  <head>
    <meta charset="utf-8"/>
	<link rel="stylesheet" href="/bootstrap3/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/res/style.css"/>
	<title>Strona główna</title>
    <style>
      * {
          font-size: 1em;
      }
      div.index {
        margin-top: 10%;
      }
      div.big {
        width: 30%;
        height: 20em;
        padding: 1em;
        display: inline-block;
		background-size: contain;
        background-repeat: no-repeat;
		background-position: center;
      }
    </style>
  </head>
  <body>
    <div class="container index">
      <a href="memory/index.php"><div class="big icon" style="background-image: url('res/memory.png')"></div></a>
      <a href="sudoku/index.php"><div class="big icon" style="background-image: url('res/sudoku.png')"></div></a>
      <a href="quiz/index.php"><div class="big icon" style="background-image: url('res/quiz.png')"></div></a>
    </div>
  </body>
</html>
