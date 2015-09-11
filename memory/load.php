<?php
	$sets = [];
	$items = [];
	mysql_connect("localhost","root","");
		mysql_select_db("strefaseniora");
		$check = mysql_query('SELECT * FROM memory_sets WHERE user="'.$_SESSION['id'].'"');
		while($item=mysql_fetch_array($check)) {
			array_push($sets, $item['set']);
			array_push($items, $item);
		}
		$sets = array_unique($sets);
		$inside = array_fill(0, count($sets), []);
		$ready_sets = array_combine($sets, $inside);
		
		while($item=array_pop($items)){
			array_push($ready_sets[$item['set']], $item);
		}
		
	echo '<script>';
	
	echo 'var js_format = { ';
	for($i=0; $i<count($sets); $i++){
			echo '"' . $sets[$i] . '": {';
			$curr_set = $ready_sets[$sets[$i]];
			for($j=0; $j<count($curr_set); $j++){
				echo '"' . $curr_set[$j]['name'] . '": "' . $curr_set[$j]['image'] .'",';
			}
			echo '},';
		}
	echo '}';
		
	echo '

	var sets =
	  [';
		while($set=array_pop($sets)){
			echo '["' . $set . '",' . count($ready_sets[$set])/2 . ']';
		}
	  echo '];
	';
	
	echo '
	var setSelect = document.getElementById("setSelect");

	for(var i=0; i<sets.length; i++)
	{
	  var text = sets[i][0];
	  var option = document.createElement("option");
	  option.text = text;
	  setSelect.add(option);
	}
	';
	?>
	
</script>