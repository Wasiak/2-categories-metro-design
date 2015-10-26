var categoryPics = [
  'index0',
  'http://lorempixel.com/g/500/250/',
  'http://lorempixel.com/500/250/?2'
];

var setCategoryImages = function() {
  for (i = 1; i < categoryPics.length; i++) {
    var picDiv = document.getElementById('cat-' + i + '-img');
    var pic = picDiv.getElementsByTagName('img')[0];
    pic.src = categoryPics[i];
  }
}
setCategoryImages();

// main page left pics of cat 1
var mainPicCatOne = [
  'http://lorempixel.com/g/800/300/?3',
  'http://lorempixel.com/g/400/300/?3',
  'http://lorempixel.com/g/800/300/?3',
  'http://lorempixel.com/g/400/300/?3'
];
//main page right pics of cat 2
var mainPicCatTwo = [
  'http://lorempixel.com/400/300/?4',
  'http://lorempixel.com/800/300/?4',
  'http://lorempixel.com/400/300/?4',
  'http://lorempixel.com/800/300/?4'
]
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
  var currentPic = 1;
  var numberOfRows = mainPicCatOne.length -1;
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
    pic.classList.add('pictures', 'left', 'cat-1');
    pic.id = 'pic-' + currentPic;
    var image = document.createElement('img');
    pic.appendChild(image);
    image.src = mainPicCatOne[i-1];

    var pic = document.createElement('div');
    row.appendChild(pic);
    if (i % 2 !== 0) {
      pic.classList.add('col-xs-4');
    } else {
      pic.classList.add('col-xs-8');
    }
    pic.classList.add('pictures', 'right', 'cat-2');      
    pic.id = 'pic-' + (currentPic + 1);
    var image = document.createElement('img');
    pic.appendChild(image);
    image.src = mainPicCatTwo[i-1]; 

    currentPic += 2;
  } 
}
createPicturesRows();

var displayCat1 = function() {
  $.each($('.right'), function(index, element) {
    $(element).find('img').attr('src', cat1Pictures[index]);
    $(element).removeClass('cat-2');
    $(element).addClass('cat-1');
  });
}
var displayCat2 = function() {
  $.each($('.left'), function(index, element) {
    $(element).find('img').attr('src', cat2Pictures[index]);
    $(element).removeClass('cat-1');
    $(element).addClass('cat-2');
  });
}
var displayCat3 = function() {
  $.each($('.left'), function(index, element) {
    $(element).find('img').attr('src', mainPicCatOne[index]);
    $(element).removeClass('cat-2');
    $(element).addClass('cat-1');
  });
}
var displayCat4 = function() {
  $.each($('.right'), function(index, element) {
    $(element).find('img').attr('src', mainPicCatTwo[index]);
    $(element).removeClass('cat-1');
    $(element).addClass('cat-2');
  });
}
var runRightDisplayFunction = function(x) {
  if (x === 1) {displayCat1();}
  else if (x === 2) {displayCat2();}
  else if (x === 3) {displayCat3();}
  else if (x === 4) {displayCat4();}
}

var showRightPictures = function() {
  $('.right-hide').removeClass('right-hide');
}
var hideRightPictures = function(c) {
  $('.right').addClass('right-hide');
  $('.right').on('transitionend', function() {
     runRightDisplayFunction(c);
  });
  $('.right').find('img').on('load', showRightPictures);
}

var showLeftPictures = function() {
  $('.left-hide').removeClass('left-hide');
}
var hideLeftPictures = function(c) {
  $('.left').addClass('left-hide');
  $('.left').on('transitionend', function() {
    runRightDisplayFunction(c);
  });
  $('.left').find('img').on('load', showLeftPictures);
}

// var setMainImages = function() {
//   for (i = 1; i < mainPicCatOne.length; i += 2) {
//     var picDiv = document.getElementById('pic-' + i);
//     var pic = picDiv.getElementsByTagName('img')[0];
//     pic.src = mainPicCatOne[i];
//     var picDiv2 = document.getElementById('pic-' + i + 1);
//     var pic2 = picDiv2.getElementsByTagName('img')[0]; 
//     pic2.src = mainPicCatTwo[i];
//   }   
// }

// setMainImages();

var showCategoryOne = function() {
  if ($('.left').hasClass('cat-1') && $('.right').hasClass('cat-2')) {
    hideRightPictures(1);
  } else if ($('.right').hasClass('cat-1')) {
  } else {
    hideRightPictures(1);
    hideLeftPictures(3);
  }
}
var showCategoryTwo = function() {
  if ($('.right').hasClass('cat-2') && $('.left').hasClass('cat-1')) {
    hideLeftPictures(2);
  } else if ($('.left').hasClass('cat-2')){
  } else {
    hideLeftPictures(2);
    hideRightPictures(4);
  }
}
 
$('#cat-1').on('click', showCategoryOne);
$('#cat-2').on('click', showCategoryTwo);
