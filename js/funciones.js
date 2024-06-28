jQuery(document).ready(listo);
jQuery(document).ready(function() {
const videoModal = document.getElementById('videoModal');
const playTrailerButton = document.getElementById('playTrailerButton');
const closeButton = document.querySelector('#videoModal .close');
const trailerVideo = document.getElementById('trailerVideo');
const infoModal = document.getElementById('infoModal');
const infoButton = document.getElementById('infoButton');
const infoCloseButton = document.querySelector('#infoModal .close');

playTrailerButton.addEventListener('click', function() {
    const trailerURL = '../img/trailer.mp4'; 
    trailerVideo.src = trailerURL;

    videoModal.style.display = 'block';
    trailerVideo.play();
});

closeButton.addEventListener('click', function() {
    videoModal.style.display = 'none';
      trailerVideo.src = ''; // Detener el video
  });

  videoModal.addEventListener('click', function(event) {
      if (event.target === videoModal) {
          videoModal.style.display = 'none';
          trailerVideo.src = ''; // Detener el video
      }
  });

  infoButton.addEventListener('click', function() {
      infoModal.style.display = 'block';
  });

  infoCloseButton.addEventListener('click', function() {
      infoModal.style.display = 'none';
  });

  infoModal.addEventListener('click', function(event) {
      if (event.target === infoModal) {
          infoModal.style.display = 'none';
      }
  });
});

function listo()
{
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-x");

    });

    jQuery("header .container nav a").click(function(){

        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-x");

        var dev = jQuery(this).attr("href");

        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top() - 76
        })
    })
}