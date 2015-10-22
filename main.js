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
var cat1Pictures = [
  'index0',
  'http://lorempixel.com/400/300/?3',
  'http://lorempixel.com/800/300/?3',
  'http://lorempixel.com/400/300/?3',
  'http://lorempixel.com/800/300/?3'    
];
var cat2Pictures = [
  'index0',
  'http://lorempixel.com/800/300/?4',
  'http://lorempixel.com/400/300/?4',
  'http://lorempixel.com/800/300/?4',
  'http://lorempixel.com/400/300/?4'
];

var createPicturesRows = function() {
  var mainContent = document.getElementById('main-content');
  var numberOfPics = pictures.length - 1;
  var currentPic = 1;
  // how many rows to create if 0 pictures => pictures.length = 1 => floor(0.5) = 0
  // if 1 picture => pictures.length =2 => floor(1) = 1
  var numberOfRows = Math.floor(pictures.length / 2);
  for (i = 1; i <= numberOfRows; i++) {
    var row = document.createElement('div');
    mainContent.appendChild(row);
    row.classList.add('row');
    var pic = document.createElement('div');
    row.appendChild(pic);
    //odd row (1,3,5)
    if (i % 2 !== 0) {
      pic.classList.add('col-xs-8');
    } else {
      pic.classList.add('col-xs-4');
    }
    pic.classList.add('pictures');
    pic.id = 'pic-' + currentPic;
    var image = document.createElement('img');
    pic.appendChild(image);
    image.src = pictures[currentPic];

    if (pictures[currentPic + 1]) {
      var pic = document.createElement('div');
      row.appendChild(pic);
      if (i % 2 !== 0) {
        pic.classList.add('col-xs-4');
      } else {
        pic.classList.add('col-xs-8');
      }
      pic.classList.add('pictures')      
      pic.id = 'pic-' + (currentPic + 1);
      var image = document.createElement('img');
      pic.appendChild(image);
      image.src = pictures[currentPic + 1]; 
    }
    currentPic += 2;
  } 
}
createPicturesRows();

var categoryToShow = 'main';

var setImages = function() {
  console.log(categoryToShow);
  if  (categoryToShow === 'main') {
    for (i = 1; i < pictures.length; i++) {
      var picDiv = document.getElementById('pic-' + i);
      var pic = picDiv.getElementsByTagName('img')[0];
      pic.src = pictures[i];
    }
  } else if (categoryToShow === 'first') {
    for (i = 2; i < pictures.length; i += 2) {
      var picDiv = document.getElementById('pic-' + i);
      var pic = picDiv.getElementsByTagName('img')[0];
      pic.src = cat1Pictures[i/2];
    }
  } else if (categoryToShow === 'second') {
    for (i = 1; i < pictures.length; i += 2) {
      var picDiv = document.getElementById('pic-' + i);
      var pic = picDiv.getElementsByTagName('img')[0];
      pic.src = cat2Pictures[Math.ceil(i/2)];
    }
  }
}
setImages(); 

var displayCat1 = function() {
  if (categoryToShow !== 'first') {
    categoryToShow = 'main';
    setImages();
    categoryToShow = 'first';
  } else {
    categoryToShow = 'main';
  }
  setImages();
}
var displayCat2 = function() {
  if (categoryToShow !== 'second') {  
    categoryToShow = 'main';
    setImages();
    categoryToShow = 'second';
  } else {
    categoryToShow = 'main';
  }
  setImages();
} 
var cat1Button = document.getElementById('cat-1');
var cat2Button = document.getElementById('cat-2');
cat1Button.addEventListener('click', displayCat1);
cat2Button.addEventListener('click', displayCat2);
