<?php 
echo '
<aside id="menu">
<section>
	<a href="../memory/index.php"><div class="small icon" style="background-image: url(\'../res/memory.png\')"></div></a>
	<a href="../sudoku/index.php"><div class="small icon" style="background-image: url(\'../res/sudoku.png\')"></div></a>
	<a href="../quiz/index.php"><div class="small icon" style="background-image: url(\'../res/quiz.png\')"></div></a>
</section>
<section style="bottom: 0; position: fixed; color: #fff; text-align: center">
';

	if(isset($_SESSION['logged']) && $_SESSION['logged'] == true){ 
		echo('<a href="../memory/index.php"><div class="small icon" style="background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/People_icon.svg/100px-People_icon.svg.png\')"></div></a>'
		. $_SESSION['login'] . '<br><a href="../index.php?logout=true">wyloguj</div></a></div>');
	}
	else {
		echo '<a href="../manage/login.php">Zaloguj</a>';
	}
	
echo '
</section>
</aside>
';
