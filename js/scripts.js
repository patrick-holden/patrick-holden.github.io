function script(){
  if (window.innerWidth < 800) {
    showText1();
    showText2();
    showText3();
    showText4();
  }
}

function showText1(){
    document.getElementById("hover-wine").innerHTML =
      '<div class="overlay">' +
      '<div class="text-flex">' +
      '<div>' +
      '<h3 class="project-title">\'VinoVero\'</h3>' +
      '<p class="project-text">A Wine Collection App Built With PHP</p>' +
      '</div>' +
      '<div>' +
      '<p class="project-desc">My first site built using PHP, with a 7 table many-to-many MySQL database on the back-end; a simple insert form for new entries is against malicious injection.</p>' +
      '</div>' +
      '<div class="project-competencies">' +
      '<h4>Competencies:</h4>' +
      '<ul class="project-competencies-list">' +
      '<li>PHP</li>' +
      '<li>MySQL</li>' +
      '</ul>' +
      '</div>' +
      '</div>';
}

function hide1(){
  document.getElementById("hover-wine").innerHTML="";
}

function showText2(){
  document.getElementById("hover-carpe").innerHTML=
    '<div class="overlay">' +
    '<div class="text-flex">' +
    '<div>' +
    '<h3 class="project-title">\'CarPe - Diem\'</h3>' +
    '<p class="project-text">An OOP Car Collection App</p>' +
    '</div>' +
    '<div>' +
    '<p class="project-desc">An object-oriented project, including hydrator classes, the singleton pattern, and a Data Access Layer, I added a sanitised, validated search function, allowing partial searches, and protecting against malicious injection on both the front-end (via Regex) and back (with prepared statements).</p>' +
    '</div>' +
    '<div class="project-competencies">' +
    '<h4>Competencies:</h4>' +
    '<ul class="project-competencies-list">' +
    '<li>PHP</li>' +
    '<li>SOLID</li>' +
    '<li>MySQL</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</div>';
}

function hide2(){
  document.getElementById("hover-carpe").innerHTML="";
}

function showText3(){
  document.getElementById("hover-scran").innerHTML=
    '<div class="overlay">' +
    '<div class="text-flex">' +
    '<div>' +
    '<h3 class="project-title">\'ScranMaster\'</h3>' +
    '<p class="project-text">A Food Delivery App (react.js)</p>' +
    '</div>' +
    '<div>' +
    '<p class="project-desc">A bootstrap-styled food delivery app, created in react, using an aynchornous fetch to access an API, object destructing to distribute through the component tree, ultimately placing an order via POST request.</p>' +
    '</div>' +
    '<div class="project-competencies">' +
    '<h4>Competencies:</h4>' +
    '<ul class="project-competencies-list">' +
    '<li>React.js</li>' +
    '<li>Bootstrap</li>' +
    '<li>Postman</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</div>';
}

function hide3(){
  document.getElementById("hover-scran").innerHTML="";
}

function showText4(){
  document.getElementById("hover-wordrunner").innerHTML=
    '<div class="overlay">' +
    '<div class="text-flex">' +
    '<div>' +
    '<h3 class="project-title">\'WordRunner\'</h3>' +
    '<p class="project-text">JavaScript Wordguessing Game</p>' +
    '</div>' +
    '<div>' +
    '<p class="project-desc">A simple game made with vanilla JavaScript, and built in a six person scrum team; the app uses a JSON fetch request, to display synonyms so players can attempt to guess the next word.</p>' +
    '</div>' +
    '<div class="project-competencies">' +
    '<h4>Competencies:</h4>' +
    '<ul class="project-competencies-list">' +
    '<li>JavaScript</li>' +
    '<li>CSS</li>' +
    '<li>HTML</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</div>';
}

function hide4(){
  document.getElementById("hover-wordrunner").innerHTML="";
}
