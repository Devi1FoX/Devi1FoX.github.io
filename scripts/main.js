var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/unnamed.jpg') {
      myImage.setAttribute ('src','images/unnamed1.jpg');
    } else {
      myImage.setAttribute ('src','images/unnamed.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Wellcome to foxs hole' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Wellcome to Foxs hole '+ storedName;
}

myButton.onclick = function() {
  setUserName();
}