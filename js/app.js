function scatterLeaves() {
    console.log('scattering leaves...')
    var leaves = document.getElementsByClassName("leaf");
    var body = document.body,
    html = document.documentElement,
    width = window.innerWidth||e.clientWidth||g.clientWidth;
    
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
        
        for(var i = 0; i < leaves.length; i++)
        {
            var horOffset = width * (leaves[i].getAttribute('data-hor')/100)
            var vertOffset = height * (leaves[i].getAttribute('data-vert')/100)
            var randoRot = Math.random()
            var myHeight = leaves[i].offsetHeight
            leaves[i].style.left = horOffset + 'px';
            leaves[i].style.top = vertOffset - myHeight + 'px';
            // rotate it
            // leaves[i].style.transform="rotate(" + (360 * randoRot) + "deg)";
            //    leaves[i].classList()
            console.log('leaf #' + i)
            console.log(horOffset)
            console.log(vertOffset)
        }
        
    }

    window.addEventListener("resize", function(){

        scatterLeaves()
    });
    scatterLeaves()

// Accepts any class name
  var rellax = new Rellax('.rellax');