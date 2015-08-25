<?php include "../res/header.php"?>
    <title>Memory</title>
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
					<td>Zestaw</td>
					<td>Data</td>
					<td>Czas</td>
					<td>Liczba ruchów</td>
				</tr>
				';
				$list = mysql_query('SELECT * FROM memory_results WHERE user="'.$result['id'].'"');
				while($res=mysql_fetch_array($list)) {
					echo 	'<tr>
							<td>' . $res['set'] . '</td>
							<td>' . $res['date'] . '</td>
							<td>' . $res['time_taken'] . '</td>
							<td>' . $res['moves'] . '</td>';
				}
				echo '</table>';
			}
		?>
    </div>
    <?php include "../res/menu.php"?>
  </body>
</html>
