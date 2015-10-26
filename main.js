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
// cat 1 big - cat 2 small
// cat 1 small - cat 2 big
// cat 1 big - cat 2 small
//
// cat [1,2,1,2,1,2]
var pictures = [
  'index0',
  'http://lorempixel.com/g/800/300/?3',
  'http://lorempixel.com/400/300/?4',
  'http://lorempixel.com/g/400/300/?3',
  'http://lorempixel.com/800/300/?4',
  'http://lorempixel.com/g/800/300/?3',
  'http://lorempixel.com/400/300/?4',
  'http://lorempixel.com/g/400/300/?3',
  'http://lorempixel.com/800/300/?4'
];
//right pictures of category 1
var cat1Pictures = [
  'http://lorempixel.com/g/400/300/?3',
  'http://lorempixel.com/g/800/300/?3',
  'http://lorempixel.com/g/400/300/?3',
  'http://lorempixel.com/g/800/300/?3'    
];
//left pictures of category 2
var cat2Pictures = [
  'http://lorempixel.com/800/300/?4',
  'http://lorempixel.com/400/300/?4',
  'http://lorempixel.com/800/300/?4',
  'http://lorempixel.com/400/300/?4'
];

var createPicturesRows = function() {
  var mainContent = $('#main-content');
  var numberOfPics = pictures.length - 1;
  var currentPic = 1;
  // how many rows to create if 0 pictures => pictures.length = 1 => floor(0.5) = 0
  // if 1 picture => pictures.length =2 => floor(1) = 1
  var numberOfRows = Math.floor(pictures.length / 2);
  for (i = 1; i <= numberOfRows; i++) {
    var row = document.createElement('div');
    mainContent.append(row);
    row.classList.add('row');
    var pic = document.createElement('div');
    row.appendChild(pic);
    //odd row (1,3,5)
    if (i % 2 !== 0) {
      pic.classList.add('col-xs-8');
    } else {
      pic.classList.add('col-xs-4');
    }
    pic.classList.add('pictures', 'left');
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
      pic.classList.add('pictures', 'right');      
      pic.id = 'pic-' + (currentPic + 1);
      var image = document.createElement('img');
      pic.appendChild(image);
      image.src = pictures[currentPic + 1]; 
    }
    currentPic += 2;
  } 
}
createPicturesRows();

var displayCat1 = function() {
  $.each($('.right'), function(index, element) {
    $(element).find('img').attr('src', cat1Pictures[index]);
  });
}
var displayCat2 = function() {
  $.each($('.left'), function(index, element) {
    $(element).find('img').attr('src', cat2Pictures[index]);
  });
}

// var categoryToShow = 'main';
var showRightPictures = function() {
  $('.right-hide').removeClass('right-hide');
}
var hideRightPictures = function() {
  $('.right').addClass('right-hide');
  $('.right').on('transitionend', displayCat1);
  $('.right').find('img').on('load', showRightPictures);
}

var showLeftPictures = function() {
  $('.left-hide').removeClass('left-hide');
}
var hideLeftPictures = function() {
  $('.left').addClass('left-hide');
  $('.left').on('transitionend', displayCat2);
  $('.left').find('img').on('load', showLeftPictures);
}


var setMainImages = function() {
  for (i = 1; i < pictures.length; i++) {
    var picDiv = document.getElementById('pic-' + i);
    var pic = picDiv.getElementsByTagName('img')[0];
    pic.src = pictures[i]; 
  }   
}

setMainImages();
// var setImages = function() {
//   console.log(categoryToShow);
//   if  (categoryToShow === 'main') {
//     for (i = 1; i < pictures.length; i++) {
//       var picDiv = document.getElementById('pic-' + i);
//       var pic = picDiv.getElementsByTagName('img')[0];
      
//       pic.src = pictures[i];
//     }
//   } else if (categoryToShow === 'first') {
//     for (i = 2; i < pictures.length; i += 2) {
//       var picDiv = document.getElementById('pic-' + i);
//       var pic = picDiv.getElementsByTagName('img')[0];
//       hideRightPictures(picDiv);
      
//       picDiv.addEventListener('transitionend', function(){
//         // showRightPictures(picDiv);
//         console.log('transition finish');
//         var hiddenPics = document.getElementsByClassName('right-hide');
//         for (i = 0; i < hiddenPics.length; i++) {
//           hiddenPics[i].classList.remove('right-hide');
//         }
//       });
//       pic.src = cat1Pictures[i/2];
//       // picDiv.addEventListener('transitionend', showRightPictures(picDiv));
      
//     }
//   } else if (categoryToShow === 'second') {
//     for (i = 1; i < pictures.length; i += 2) {
//       var picDiv = document.getElementById('pic-' + i);
//       var pic = picDiv.getElementsByTagName('img')[0];
//       hideLeftPictures(picDiv);
      
//       picDiv.addEventListener('transitionend', function(){
//         console.log('transition finish');
//         var hiddenPics = document.getElementsByClassName('left-hide');
//         for (i = 0; i < hiddenPics.length; i++) {
//           hiddenPics[i].classList.remove('left-hide');
//         }
//       });
//       pic.src = cat2Pictures[Math.ceil(i/2)];
//     }
//   }
// }
// setImages(); 
 
$('#cat-1').on('click', hideLeftPictures);
$('#cat-2').on('click', hideRightPictures);
