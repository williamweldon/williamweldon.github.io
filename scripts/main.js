var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Arsenal.png') {
      myImage.setAttribute ('src','images/Disney.jpeg');
    } else {
      myImage.setAttribute ('src','images/Arsenal.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Arsenal is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Arsenal is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
