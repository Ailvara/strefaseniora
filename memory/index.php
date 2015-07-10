<?php include "../res/header.php"?>
    <title>Memory</title>
    <style>
    .tile {
      width: 150px;
      height: 150px;
      margin: 10px;
      display: inline-block;
      background-size: contain;
    }
    </style>
  </head>
  <body>
    <div class="container">
    <div class="col-md-2" style="padding: 10px">
      <h4>Liczba ruchów:</h4>
      <span id="moves">0</span><br><br>
      <h4>Czas:</h4>
      <span id="time"></span><br>
      <h4>Zestaw obrazkow</h4>
      <select name="setSelect" id="setSelect"></select>
    </div>

    <div id="canvas" class="col-md-10">
      <button id="startButton" onclick="javascript:memory(sets[setSelect.selectedIndex])" style="margin: 20%; width: 60%">Start!</button>
    </div>
    </div>

    <?php include "../res/menu.php"?>

  </body>

  <script src="config.js"></script>
  <script src="memory.js"></script>

</html>
