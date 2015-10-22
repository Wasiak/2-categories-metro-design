var categoryPics = [
  'index0',
  'http://lorempixel.com/g/500/250/',
  'http://lorempixel.com/g/500/250/?2'
];

var setCategoryImages = function() {
  for (i = 1; i < categoryPics.length; i++) {
    var picDiv = document.getElementById('cat-' + i + '-img');
    var pic = picDiv.getElementsByTagName('img')[0];
    pic.src = categoryPics[i];
  }
}
setCategoryImages();

var pictures = [
  'index0',
  'http://lorempixel.com/800/300/?3',
  'http://lorempixel.com/400/300/?4',
  'http://lorempixel.com/400/300/?3',
  'http://lorempixel.com/800/300/?4',
  'http://lorempixel.com/800/300/?3',
  'http://lorempixel.com/400/300/?4',
  'http://lorempixel.com/400/300/?3',
  'http://lorempixel.com/800/300/?4'
];

var setImages = function() {
  for (i = 1; i < pictures.length; i++) {
    var picDiv = document.getElementById('pic-' + i);
    var pic = picDiv.getElementsByTagName('img')[0];
    pic.src = pictures[i];
  }
}
setImages();
