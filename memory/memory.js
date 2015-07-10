function memory(set){

numPairs = set[1];
imageSet = set[0]

var startTime = new Date().getTime();
document.getElementById('time').innerHTML = 0;

var canvas = document.getElementById('canvas');
document.getElementById('startButton').style.display='none';

var defPath = imageSet+'/0.png';

var select = [];
var found = 0;
var moves = 0;

var imgs = [];

var location = document.location.href.replace("memory.html","");
console.log(location);

setBoard();

function setBoard()
{
  maxImgs = 14;

  for(var i=1; i<=numPairs; i++)
  {
    imgA = new Image();
    imgA.src = imageSet+"/"+i.toString()+"a.png";
    imgB = new Image();
    imgB.src = imageSet+"/"+i.toString()+"b.png";
    imgs.push(imgA);
    imgs.push(imgB);
  }
  imgs = shuffle(imgs);

  while(imgs.length>0)
  {
    var tile = new Tile(i,imgs.pop().src);
  }
}

function Tile(id,url)
{
  this.url=url;
  var id=url.substring(0, url.length - 4);
  var id = id.replace(location, "");

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
      saveResult(time, moves);
      var again = window.confirm("Wygrales! Jeszcze raz?");
      if(again == true) document.location.reload(true);
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
  WriteDemo(result);
}

function WriteDemo(text)
{
 var fso, f, r;
 var ForReading = 1, ForWriting = 2;
 fso = new ActiveXObject("Scripting.FileSystemObject");
 f = fso.OpenTextFile("results.json", ForWriting, true);
 f.Write(text);
 f.Close();
 f = fso.OpenTextFile("results.json", ForReading);
 r = f.ReadLine();
 return(r);
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
