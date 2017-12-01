function scatterLeaves() {
  //console.log('scattering leaves...')
  var leaves = document.getElementsByClassName("leaf");
  var body = document.body,
      html = document.documentElement,
      width = window.innerWidth||e.clientWidth||g.clientWidth;

  var height = Math.max( body.scrollHeight, body.offsetHeight,
			 html.clientHeight, html.scrollHeight, html.offsetHeight );

  for(var i = 0; i < leaves.length; i++) {
    var horOffset = width * (leaves[i].getAttribute('data-hor')/100)
    var vertOffset = height * (leaves[i].getAttribute('data-vert')/100)
    var randoRot = Math.random()
    var myHeight = leaves[i].offsetHeight
    leaves[i].style.left = horOffset + 'px';
    leaves[i].style.top = vertOffset - myHeight + 'px';
    // rotate it
    // leaves[i].style.transform="rotate(" + (360 * randoRot) + "deg)";
    //    leaves[i].classList()
    //console.log('leaf #' + i)
    //console.log(horOffset)
    //console.log(vertOffset)
  }
}

window.addEventListener("resize", scatterLeaves);
scatterLeaves()

// Accepts any class name
var rellax = new Rellax('.rellax');


//   social
var twitter = function (e) {
    console.log('tweeting!')
    e.preventDefault()
    social_url = "https://twitter.com/intent/tweet?source=webclient&text=" + encodeURI(window.location + " Spende oder verschenke Setzlinge und erlebe, wie Dein Engagement in Borneo Wurzeln schlägt! ") + "%23OneTreeOneLife";
    window.open(social_url, "_blank").focus();
}

var facebook = function (e) {
    console.log('facing!')
    console.log(e)
    e.preventDefault()
    social_url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(window.location);
    window.open(social_url, "_blank").focus();
}

document.getElementsByClassName('twitter-share')[0].onclick = twitter;
document.getElementsByClassName('facebook-share')[0].onclick = facebook;
document.getElementsByClassName('twitter-share')[1].onclick = twitter;
document.getElementsByClassName('facebook-share')[1].onclick = facebook;


// routing
const route = Rlite(notFound, {
  'game': function () { // #game
    document.getElementsByClassName('page-content')[0].style.display = 'none'
    document.getElementsByClassName('game')[0].style.display = 'block'
  },
  'campaign': function () { // #campaign
    document.getElementsByClassName('page-content')[0].style.display = 'block'
    document.getElementsByClassName('game')[0].style.display = 'none'
  }
});

function notFound() {
  // redirect to #game
  // TODO change to 'game'
  routeTo('campaign');
}

// Hash-based routing
function processHash() {
  const hash = location.hash || '#';
  route(hash.slice(1));
}

function routeTo(target) {
  window.location.hash = '#' + target;
}

window.addEventListener('hashchange', processHash);
processHash();


// game callbacks

function gameOn() {
  console.log("The game is on!")
}

function gameOver(score) {
  console.log("What? Only "+score+" point?")
}
