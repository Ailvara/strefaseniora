<?php include "../res/header.php"?>
<title>SUDOKU</title>
  <style>
* {
font-size: 1.2em;
font-weight: bold;
}
</style>

</head>
<body>

<h1><center>SUDOKU</center></h1>
<center>
<table id="table" border="5">
	<tr>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT11" />	
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT12" />	
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT13" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT14" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT15" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT16" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT17" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT18" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT19" />
		</td>
	</tr>
	<tr>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT21" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT22" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT23" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT24" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT25" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT26" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT27" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT28" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT29" />
		</td>
	</tr>
	<tr id="tr3">
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT31" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT32" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT33" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT34" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT35" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT36" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT37" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT38" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT39" />
		</td>
	</tr>
	<tr>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT41" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT42" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT43" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT44" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT45" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT46" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT47" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT48" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT49" />
		</td>
	</tr>
	<tr>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT51" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT52" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT53" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT54" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT55" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT56" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT57" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT58" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT59" />
		</td>
	</tr>
	<tr>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT61" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT62" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT63" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT64" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT65" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT66" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT67" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT68" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT69" />
		</td>
	</tr>
	<tr>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT71" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT72" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT73" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT74" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT75" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT76" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT77" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT78" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT79" />
		</td>
	</tr>
	<tr>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT81" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT82" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT83" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT84" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT85" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT86" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT87" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT88" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT89" />
		</td>
	</tr>
	<tr>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT91" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT92" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT93" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT94"  />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT95" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;" type="text" id="INPUT96" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT97" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT98" />
		</td>
		<td>
			<input style="width:60px;height:60px;text-align:center;border-color:red;" type="text" id="INPUT99" />
		</td>
	</tr>

</table>
<br>
<button onclick="setTable()">NOWA GRA</button>
<button onclick="checkAll()">SPRAWDZ</button>

</center>

    <?php include "../res/menu.php"?>
	<script src="sudoku.js"></script>

</body>
</html>