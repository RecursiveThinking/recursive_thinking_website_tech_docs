function setUpGettingStartedBackEndDeployStack(){
    showSlides2(slideIndex2);
    showSlides1(slideIndex1);
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var imgs = document.querySelectorAll("img");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  
  imgs.forEach(function(img){
      img.addEventListener('click', function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
      });
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
  modal.style.display = "none";
  } 
}


// Refactor
// First Slideshow
var slideIndex1 = 1;

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    if (n > slides.length) {slideIndex1 = 1} 
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex1-1].style.display = "block"; 
}
// Next/previous controls
function plusSlides1(n) {
    document.getElementById('tutorial1').scrollIntoView();
    showSlides1(slideIndex1 += n);
}


// Second Slideshow
var slideIndex2 = 1;

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {slideIndex2 = 1} 
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex2-1].style.display = "block"; 
}
// Next/previous controls
function plusSlides2(n) {
    document.getElementById('tutorial2').scrollIntoView();
    showSlides2(slideIndex2 += n);
}


function expandImg(){
    let button = document.getElementById('scriptImg');
    button.classList.toggle('hideImg')
    let buttonText = document.querySelector('.expand');
    
    if (buttonText.innerHTML === 'Show Image'){
        buttonText.innerHTML = 'Hide Image';
    }
    else if(buttonText.innerHTML === 'Hide Image'){
        buttonText.innerHTML = 'Show Image';
    }
}