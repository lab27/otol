// Gallery
var openPhotoSwipe = function () {
  var pswpElement = document.querySelectorAll('.pswp')[0];
  console.log(pswpElement)

  // build items array
  var items = [
    {
      src: 'https://drive.google.com/open?id=1crbI4cE23k6hZ8w_Mxw1_UNsq_SI441V',
      w: 964,
      h: 1024
    },
    {
      src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
      w: 1024,
      h: 683
    }
  ];

  // define options (if needed)
  var options = {
    // optionName: 'option value'
    // for example:
    index: 0, // start at first slide
    history: false,
    focus: false
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
}
var galleryBtn = document.getElementById('galleryBtn')
if (galleryBtn) gallerBtn.onclick = openPhotoSwipe;
