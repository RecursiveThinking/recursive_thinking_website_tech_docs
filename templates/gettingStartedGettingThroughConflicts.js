function setUpGettingStartedGettingThroughConflicts()
{
    showSlides(slideIndex);

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

var slideIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block"; 
}

// Next/previous controls
function plusSlides(n) {
    // document.getElementById('tutorial').scrollIntoView();
    showSlides(slideIndex += n);
}
