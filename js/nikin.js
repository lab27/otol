function scatterLeaves() {
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
  }
}

// checks to see if the window is tall enough to display the donate-group
// if not, it inlines the donate-group
function checkButtonPlacement() {
  const windowHeight = window.innerHeight||e.clientHeight||g.clientHeight;
  const donateGroupInlineClass = 'donate-group--inline'
  const buttonGroup = document.querySelectorAll('.donate-group')[0]

  if (windowHeight <= buttonGroup.clientHeight) {
    buttonGroup.classList.add(donateGroupInlineClass)
  } else {
    buttonGroup.classList.remove(donateGroupInlineClass)
  }
}

function adjustView() {
  scatterLeaves()
  checkButtonPlacement()
}

window.addEventListener("resize", adjustView);
window.onload = adjustView

// Accepts any class name
var rellax = new Rellax('.rellax');


//   social
var twitter = function (e) {
  e.preventDefault()
  social_url = "https://twitter.com/intent/tweet?source=webclient&text=" +
    encodeURI(window.location + " Spende oder verschenke Setzlinge und erlebe, wie Dein Engagement in Borneo Wurzeln schlägt! #OneTreeOneLife").replace(/#/g, "%23");
  window.open(social_url, "_blank").focus();
}

var facebook = function (e) {
    e.preventDefault()
    social_url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(window.location);
    window.open(social_url, "_blank").focus();
}

var setShareHandler = function(className, handler) {
  var nodes = document.getElementsByClassName(className);
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].onclick = handler;
  }
}

setShareHandler('twitter-share', twitter);
setShareHandler('facebook-share', facebook);
document.getElementsByClassName('site-header')[0].style.display = 'block'
