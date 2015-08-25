<?php 

if($_SESSION['caretaker'] != NULL) {	
	echo '
	<aside id="menu">
	<section>
		<a href="../memory/index.php"><div class="small icon" style="background-image: url(\'../res/memory.png\')"></div></a>
		<a href="../sudoku/index.php"><div class="small icon" style="background-image: url(\'../res/sudoku.png\')"></div></a>
		<a href="../quiz/index.php"><div class="small icon" style="background-image: url(\'../res/quiz.png\')"></div></a>
	</section>
	<section style="bottom: 0; position: fixed; color: #fff; text-align: center">
	';
}

else {
	echo '
	<aside id="menu">
	<section>
		<a href="../memory/result.php"><div class="small icon" style="background-image: url(\'../res/memory.png\')"></div></a>
		<a href="../sudoku/result.php"><div class="small icon" style="background-image: url(\'../res/sudoku.png\')"></div></a>
		<a href="../quiz/result.php"><div class="small icon" style="background-image: url(\'../res/quiz.png\')"></div></a>
	</section>
	<section style="bottom: 0; position: fixed; color: #fff; text-align: center">
	';
}

	if(isset($_SESSION['logged']) && $_SESSION['logged'] == true){ 
		echo('Witaj: <br>' . $_SESSION['login'] . '<br><a href="../index.php?logout=true">wyloguj</div></a></div>');
	}
	else {
		echo '<a href="../manage/login.php">Zaloguj</a>';
	}
	
echo '
</section>
</aside>
';
