window.addEventListener('resize', function(event){
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  console.log(newWidth, newHeight);
});

function script(){
  if (window.innerWidth < 900) {
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
        '<h4 class="project-title">\'VinoVero\'</h4>' +
        '<p class="project-text">A Wine Collection App Built With PHP</p>' +
      '</div>' +
      '<div>' +
      '<p class="project-desc">My first site built using PHP, with a 7 table many-to-many MySQL database on the back-end; a simple insert form for new entries is validated against malicious injection.</p>' +
      '</div>' +
      '<div class="github-live-links">' +
        '<a href="https://github.com/patrick-holden/collection" target="_blank">' +
          '<img src="./Images/GitHub-Mark-Light-120px-plus.png" class="github-live-logo-sml" alt="A link to my projects listed GitHub">' +
        '</a>' +
      '</div>'+
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
  if (window.innerWidth > 800) {
    document.getElementById("hover-wine").innerHTML = "";
  }
}

function showText2(){
  document.getElementById("hover-carpe").innerHTML=
    '<div class="overlay">' +
    '<div class="text-flex">' +
    '<div>' +
      '<h4 class="project-title">\'CarPe - Diem\'</h4>' +
      '<p class="project-text">An OOP Car Collection App</p>' +
    '</div>' +
    '<div>' +
    '<p class="project-desc">Built in OOP, with hydrators, the singleton pattern, and a Data Access Layer, I added a search function, allowing partial searches and protecting against malicious injection via both Regex and prepared statements.</p>' +
    '</div>' +
    '<div class="github-live-links">' +
      '<div class="github-links">' +
        '<a href="https://github.com/iO-Academy/2022-mar-carcollection" target="_blank">' +
          '<img src="./Images/GitHub-Mark-Light-120px-plus.png" class="github-live-logo-sml" alt="A link to my projects listed GitHub">' +
        '</a>' +
      '</div>' +
      '<div class="live-links">' +
        '<a href="https://dev.io-academy.uk/projects/2022-march/2022-mar-carcollection/index.php" target="_blank">' +
          '<img src="./Images/live-site.svg" class="live-site-logo-sml" alt="A link to the live hosting of my car collection OOP build, CarPe-Diem">' +
        '</a>' +
      '</div>' +
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
  if (window.innerWidth > 800) {
    document.getElementById("hover-carpe").innerHTML = "";
  }
}

function showText3(){
  document.getElementById("hover-scran").innerHTML=
    '<div class="overlay">' +
    '<div class="text-flex">' +
    '<div>' +
      '<h4 class="project-title">\'ScranMaster\'</h4>' +
      '<p class="project-text">A Food Delivery App (react.js)</p>' +
    '</div>' +
    '<div>' +
    '<p class="project-desc">A bootstrap-styled food delivery app, created in react, using an asynchronous fetch to access an API, object destructing to distribute through the component tree, handling orders via POST request.</p>' +
    '</div>' +
    '<div class="github-live-links">' +
      '<div class="github-links">' +
        '<a href="https://github.com/iO-Academy/2022-mar-scranmaster" target="_blank">' +
          '<img src="./Images/GitHub-Mark-Light-120px-plus.png" class="github-live-logo-sml" alt="A link to my projects listed GitHub">' +
        '</a>' +
      '</div>'+
      '<div class="live-links">' +
        '<a href="https://2022-mar-scranmaster.dev.io-academy.uk/" target="_blank">' +
          '<img src="./Images/live-site.svg" class="live-site-logo-sml" alt="A link to the live hosting of my Food Delivery build in react.js, which we called Scran-Master, internally">' +
        '</a>' +
      '</div>' +
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
  if (window.innerWidth > 800) {
    document.getElementById("hover-scran").innerHTML = "";
  }
}

function showText4(){
  document.getElementById("hover-wordrunner").innerHTML=
    '<div class="overlay">' +
    '<div class="text-flex">' +
    '<div>' +
      '<h4 class="project-title">\'WordRunner\'</h4>' +
      '<p class="project-text">JavaScript Wordguessing Game</p>' +
    '</div>' +
    '<div>' +
    '<p class="project-desc">A simple game made with vanilla JavaScript, and built in a six person scrum team; the app uses a JSON fetch request, to display synonyms so players can attempt to guess the next word.</p>' +
    '</div>' +
    '<div class="github-live-links">' +
      '<div class="github-links">' +
        '<a href="https://github.com/iO-Academy/2022-mar-word-finder" target="_blank">' +
          '<img src="./Images/GitHub-Mark-Light-120px-plus.png" class="github-live-logo-sml" alt="A link to my projects listed GitHub">' +
        '</a>' +
      '</div>' +
      '<div class="live-links">' +
        '<a href="https://dev.io-academy.uk/projects/2022-march/wordrunner/" target="_blank">' +
          '<img src="./Images/live-site.svg" class="live-site-logo-sml" alt="A link to the live hosting of my Food Delivery build in react.js, which we called Scran-Master, internally">' +
        '</a>' +
      '</div>' +
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
  if (window.innerWidth > 800) {
    document.getElementById("hover-wordrunner").innerHTML = "";
  }
}
