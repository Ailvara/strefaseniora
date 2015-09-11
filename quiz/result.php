<?php include "../res/header.php"?>
    <title>Quiz</title>
	<style>
		* {
			font-size: 1em;
		}
		td {
			padding: 0.5em;
		}
    </style>
  </head>
  <body>
    <div class="container">
		<?php
			mysql_connect("localhost","root","");
			mysql_select_db("strefaseniora");
			$check = mysql_query('SELECT * FROM users WHERE caretaker="'.$_SESSION['id'].'"');
			while($result=mysql_fetch_array($check)) {
				echo '
				<table>
				<h2>Wyniki: ' . $result['email']. '</h2>
				<tr>
					<td>Liczba poprawnych</td>
					<td>Data</td>
				</tr>
				';
				$list = mysql_query('SELECT * FROM quiz_results WHERE user="'.$result['id'].'"');
				while($res=mysql_fetch_array($list)) {
					echo 	'<tr>
							<td>' . $res['correct'] . '</td>
							<td>' . $res['date'] . '</td>';
				}
				echo '</table>';
			}
		?>
    </div>
    <?php include "../res/menu.php"?>
  </body>
</html>
