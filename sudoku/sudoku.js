function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

var board = Create2DArray(10);

function setTable(){
	board[1][1]=5;
	board[1][2]=3;
	board[1][5]=7;
	board[2][1]=6;
	board[2][4]=1;
	board[2][5]=9;
	board[2][6]=5;
	board[3][2]=9;
	board[3][3]=8;
	board[3][8]=6;
	board[4][1]=8;
	board[4][5]=6;
	board[4][9]=3;
	board[5][1]=4;
	board[5][4]=8;
	board[5][6]=3;
	board[5][9]=1;
	board[6][1]=7;
	board[6][5]=2;
	board[6][9]=6;
	board[7][2]=6;
	board[7][7]=2;
	board[7][8]=8;
	board[8][4]=4;
	board[8][5]=1;
	board[8][6]=9;
	board[8][9]=5;
	board[9][5]=8;
	board[9][8]=7;
	board[9][9]=9;
	
	
	document.getElementById('INPUT11').value = board[1][1];
	document.getElementById('INPUT12').value = board[1][2];
	document.getElementById('INPUT13').value = "";
	document.getElementById('INPUT14').value = "";
	document.getElementById('INPUT15').value = board[1][5];
	document.getElementById('INPUT16').value = "";
	document.getElementById('INPUT17').value = "";
	document.getElementById('INPUT18').value = "";
	document.getElementById('INPUT19').value = "";
	document.getElementById('INPUT21').value = board[2][1];
	document.getElementById('INPUT22').value = "";
	document.getElementById('INPUT23').value = "";
	document.getElementById('INPUT24').value = board[2][4];
	document.getElementById('INPUT25').value = board[2][5];
	document.getElementById('INPUT26').value = board[2][6];
	document.getElementById('INPUT27').value = "";
	document.getElementById('INPUT28').value = "";
	document.getElementById('INPUT29').value = "";
	document.getElementById('INPUT31').value = "";
	document.getElementById('INPUT32').value = board[3][2];
	document.getElementById('INPUT33').value = board[3][3];
	document.getElementById('INPUT34').value = "";
	document.getElementById('INPUT35').value = "";
	document.getElementById('INPUT36').value = "";
	document.getElementById('INPUT37').value = "";
	document.getElementById('INPUT38').value = board[3][8];
	document.getElementById('INPUT39').value = "";
	document.getElementById('INPUT41').value = board[4][1];
	document.getElementById('INPUT42').value = "";
	document.getElementById('INPUT43').value = "";
	document.getElementById('INPUT44').value = "";
	document.getElementById('INPUT45').value = "";
	document.getElementById('INPUT46').value = "";
	document.getElementById('INPUT47').value = "";
	document.getElementById('INPUT48').value = "";
	document.getElementById('INPUT49').value = board[4][9];
	document.getElementById('INPUT51').value = board[5][1];
	document.getElementById('INPUT52').value = "";
	document.getElementById('INPUT53').value = "";
	document.getElementById('INPUT54').value = board[5][4];
	document.getElementById('INPUT55').value = "";
	document.getElementById('INPUT56').value = board[5][6];
	document.getElementById('INPUT57').value = "";
	document.getElementById('INPUT58').value = "";
	document.getElementById('INPUT59').value = board[5][9];
	document.getElementById('INPUT61').value = board[6][1];
	document.getElementById('INPUT62').value = "";
	document.getElementById('INPUT63').value = "";
	document.getElementById('INPUT64').value = "";
	document.getElementById('INPUT65').value = board[6][5];
	document.getElementById('INPUT66').value = "";
	document.getElementById('INPUT67').value = "";
	document.getElementById('INPUT68').value = "";
	document.getElementById('INPUT69').value = board[6][9];
	document.getElementById('INPUT71').value = "";
	document.getElementById('INPUT72').value = board[7][2];
	document.getElementById('INPUT73').value = "";
	document.getElementById('INPUT74').value = "";
	document.getElementById('INPUT75').value = "";
	document.getElementById('INPUT76').value = "";
	document.getElementById('INPUT77').value = board[7][7];
	document.getElementById('INPUT78').value = board[7][8];
	document.getElementById('INPUT79').value = "";
	document.getElementById('INPUT81').value = "";
	document.getElementById('INPUT82').value = "";
	document.getElementById('INPUT83').value = "";
	document.getElementById('INPUT84').value = board[8][4];
	document.getElementById('INPUT85').value = board[8][5];
	document.getElementById('INPUT86').value = board[8][6];
	document.getElementById('INPUT87').value = "";
	document.getElementById('INPUT88').value = "";
	document.getElementById('INPUT89').value = board[8][9];
	document.getElementById('INPUT91').value = "";
	document.getElementById('INPUT92').value = "";
	document.getElementById('INPUT93').value = "";
	document.getElementById('INPUT94').value = "";
	document.getElementById('INPUT95').value = board[9][5];
	document.getElementById('INPUT96').value = "";
	document.getElementById('INPUT97').value = "";
	document.getElementById('INPUT98').value = board[9][8];
	document.getElementById('INPUT99').value = board[9][9];
}

function readBoard(){
	
	board[1][1] = parseInt(document.getElementById('INPUT11').value);
	board[1][2] = parseInt(document.getElementById('INPUT12').value);
	board[1][3] = parseInt(document.getElementById('INPUT13').value);
	board[1][4] = parseInt(document.getElementById('INPUT14').value);
	board[1][5] = parseInt(document.getElementById('INPUT15').value);
	board[1][6] = parseInt(document.getElementById('INPUT16').value);
	board[1][7] = parseInt(document.getElementById('INPUT17').value);
	board[1][8] = parseInt(document.getElementById('INPUT18').value);
	board[1][9] = parseInt(document.getElementById('INPUT19').value);
	board[2][1] = parseInt(document.getElementById('INPUT21').value);
	board[2][2] = parseInt(document.getElementById('INPUT22').value);
	board[2][3] = parseInt(document.getElementById('INPUT23').value);
	board[2][4] = parseInt(document.getElementById('INPUT24').value);
	board[2][5] = parseInt(document.getElementById('INPUT25').value);
	board[2][6] = parseInt(document.getElementById('INPUT26').value);
	board[2][7] = parseInt(document.getElementById('INPUT27').value);
	board[2][8] = parseInt(document.getElementById('INPUT28').value);
	board[2][9] = parseInt(document.getElementById('INPUT29').value);
	board[3][1] = parseInt(document.getElementById('INPUT31').value);
	board[3][2] = parseInt(document.getElementById('INPUT32').value);
	board[3][3] = parseInt(document.getElementById('INPUT33').value);
	board[3][4] = parseInt(document.getElementById('INPUT34').value);
	board[3][5] = parseInt(document.getElementById('INPUT35').value);
	board[3][6] = parseInt(document.getElementById('INPUT36').value);
	board[3][7] = parseInt(document.getElementById('INPUT37').value);
	board[3][8] = parseInt(document.getElementById('INPUT38').value);
	board[3][9] = parseInt(document.getElementById('INPUT39').value);
	board[4][1] = parseInt(document.getElementById('INPUT41').value);
	board[4][2] = parseInt(document.getElementById('INPUT42').value);
	board[4][3] = parseInt(document.getElementById('INPUT43').value);
	board[4][4] = parseInt(document.getElementById('INPUT44').value);
	board[4][5] = parseInt(document.getElementById('INPUT45').value);
	board[4][6] = parseInt(document.getElementById('INPUT46').value);
	board[4][7] = parseInt(document.getElementById('INPUT47').value);
	board[4][8] = parseInt(document.getElementById('INPUT48').value);
	board[4][9] = parseInt(document.getElementById('INPUT49').value);
	board[5][1] = parseInt(document.getElementById('INPUT51').value);
	board[5][2] = parseInt(document.getElementById('INPUT52').value);
	board[5][3] = parseInt(document.getElementById('INPUT53').value);
	board[5][4] = parseInt(document.getElementById('INPUT54').value);
	board[5][5] = parseInt(document.getElementById('INPUT55').value);
	board[5][6] = parseInt(document.getElementById('INPUT56').value);
	board[5][7] = parseInt(document.getElementById('INPUT57').value);
	board[5][8] = parseInt(document.getElementById('INPUT58').value);
	board[5][9] = parseInt(document.getElementById('INPUT59').value);
	board[6][1] = parseInt(document.getElementById('INPUT61').value);
	board[6][2] = parseInt(document.getElementById('INPUT62').value);
	board[6][3] = parseInt(document.getElementById('INPUT63').value);
	board[6][4] = parseInt(document.getElementById('INPUT64').value);
	board[6][5] = parseInt(document.getElementById('INPUT65').value);
	board[6][6] = parseInt(document.getElementById('INPUT66').value);
	board[6][7] = parseInt(document.getElementById('INPUT67').value);
	board[6][8] = parseInt(document.getElementById('INPUT68').value);
	board[6][9] = parseInt(document.getElementById('INPUT69').value);
	board[7][1] = parseInt(document.getElementById('INPUT71').value);
	board[7][2] = parseInt(document.getElementById('INPUT72').value);
	board[7][3] = parseInt(document.getElementById('INPUT73').value);
	board[7][4] = parseInt(document.getElementById('INPUT74').value);
	board[7][5] = parseInt(document.getElementById('INPUT75').value);
	board[7][6] = parseInt(document.getElementById('INPUT76').value);
	board[7][7] = parseInt(document.getElementById('INPUT77').value);
	board[7][8] = parseInt(document.getElementById('INPUT78').value);
	board[7][9] = parseInt(document.getElementById('INPUT79').value);
	board[8][1] = parseInt(document.getElementById('INPUT81').value);
	board[8][2] = parseInt(document.getElementById('INPUT82').value);
	board[8][3] = parseInt(document.getElementById('INPUT83').value);
	board[8][4] = parseInt(document.getElementById('INPUT84').value);
	board[8][5] = parseInt(document.getElementById('INPUT85').value);
	board[8][6] = parseInt(document.getElementById('INPUT86').value);
	board[8][7] = parseInt(document.getElementById('INPUT87').value);
	board[8][8] = parseInt(document.getElementById('INPUT88').value);
	board[8][9] = parseInt(document.getElementById('INPUT89').value);
	board[9][1] = parseInt(document.getElementById('INPUT91').value);
	board[9][2] = parseInt(document.getElementById('INPUT92').value);
	board[9][3] = parseInt(document.getElementById('INPUT93').value);
	board[9][4] = parseInt(document.getElementById('INPUT94').value);
	board[9][5] = parseInt(document.getElementById('INPUT95').value);
	board[9][6] = parseInt(document.getElementById('INPUT96').value);
	board[9][7] = parseInt(document.getElementById('INPUT97').value);
	board[9][8] = parseInt(document.getElementById('INPUT98').value);
	board[9][9] = parseInt(document.getElementById('INPUT99').value);
}


function checkRow(rowNumber) {
	readBoard();
	var sum=0;
	
	for (i=1;i<10;i++) {
		sum = sum + board[rowNumber][i];
	}
	
	console.log(sum);
	return sum;
}

function checkColumn(columnNumber) {
	readBoard();
	var sum=0;
	
	for (i=1;i<10;i++) {
		sum = sum + board[i][columnNumber];
	}
	
	console.log(sum);
	return sum;
}

function checkSquare(rNumber,cNumber){
	readBoard();
	var sum=0;
	
	for (i=0;i<3;i++){
		for(j=0;j<3;j++){
			console.log(board[rNumber+i][cNumber+j]);
			sum=sum + board[rNumber+i][cNumber+j];
		}
	}
	console.log(rNumber,cNumber,sum);
	return sum;
}


function checkAll(){
	var res;
	
	for (r=1;r<9;r++){
		
		res = checkRow(r);
		if (res!=45) {
			alert("Blad w wierszu " + r);
		}
	}
	for (c=1;c<9;c++){
		res = checkColumn(c);
		if (res!=45) {
			alert("Blad w kolumnie " + r);
		}
	}
	
	
	for (r=0;r<2;r++){
		for (c=0;c<2;c++){
			res = checkSquare(3*r+1,3*c+1);
			
			//res = checkSquare(7,7);
			if (res!=45) {
				alert("blad w kwadracie " + 3*r+1,3*c+1 );
				//alert(res);
			}
		}	
	}

}