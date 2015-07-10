var sets =
  [
    ["def",7],
    ["own",4]
  ];


//Nie ruszać:
var setSelect = document.getElementById("setSelect");

for(var i=0; i<sets.length; i++)
{
  var text = sets[i][0];
  var option = document.createElement("option");
  option.text = text;
  setSelect.add(option);
}
