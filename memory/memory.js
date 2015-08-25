function memory(set){

numPairs = set[1];
imageSet = set[0];
imgs = js_format[imageSet];

var startTime = new Date().getTime();
document.getElementById('time').innerHTML = 0;

var canvas = document.getElementById('canvas');
document.getElementById('startButton').style.display='none';

var defPath = 'http://www.kartonista.com/wp-content/uploads/2011/01/van-gogh-vincent-self-portrait.jpg';

var select = [];
var found = 0;
var moves = 0;

var location = document.location.href.replace("memory.html","");
console.log(location);

setBoard();

function setBoard()
{
  maxImgs = 14;
  imgs = shuffle(imgs);

  for(var c=1; c<=numPairs; c++)
  {
    var tile = new Tile(c+"a",imgs[c+"a"]);
    var tile = new Tile(c+"b",imgs[c+"b"]);
	console.log("I work");
  }
}

function Tile(id,url)
{
  this.url=url;
  this.id=id;

  var tile = document.createElement("div");
  tile.setAttribute('id',id);
  tile.setAttribute('class',"tile");
  tile.setAttribute('style','background-image: url(\''+defPath+'\')');

  tile.onclick = function() {
    this.setAttribute('style','background-image: url(\''+url+'\')')
    select.push(this.id);
    if(select.length==2) resolveSelect();
  };
  canvas.appendChild(tile);
  var div = document.getElementById(id);
}

function resolveSelect()
{
  var nowTime = new Date().getTime();
  var time = (nowTime - startTime)/1000;
  moves++;

  document.getElementById('time').innerHTML = time;
  document.getElementById('moves').innerHTML = moves;

  var id1 = select[0];
  var id2 = select[1];
  select = [];

  tile1 = document.getElementById(id1);
  tile2 = document.getElementById(id2);

  console.log(id1 + ' ' + id2);

  if( id1.substring(0,id1.length-1) == id2.substring(0,id2.length-1) ) {
    found++;
    if(found==numPairs) {
      var again = window.confirm("Wygrales! Zapisać wynik?");
      if(again == true) saveResult(time, moves);
    }
    tile1.onclick = function(){};
    tile2.onclick = function(){};
  }
  else {
    setTimeout(function(){
      tile1.setAttribute('style','background-image: url(\''+defPath+'\')');
      tile2.setAttribute('style','background-image: url(\''+defPath+'\')');
    }, 1000);
  }
}

function saveResult(time, moves)
{
  result = {
    "set": imageSet,
    "pairs": numPairs,
    "date": new Date().toLocaleString(),
    "time": time,
    "moves": moves
  }
  console.log(result);
  window.open("save.php?time="+time+"&moves="+moves+"&set="+imageSet);
}


//function from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffle(array)
{
    var counter = array.length, temp, index;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

}
