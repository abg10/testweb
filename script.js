// ====== Parallax Layers ======
let layerOne = document.getElementById('layerOne');
let layerTwo = document.getElementById('layerTwo');
let layerThree = document.getElementById('layerThree');
let heroheading = document.getElementById('heroheading');
let layerGraph = document.getElementById('layerGraph');
let comSecImg = document.getElementById('comSecImg');

const maxScroll = 100;

const section = document.querySelector('.scroll-section');
const image = document.querySelector('.scroll-image');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  let scrollY = window.scrollY;

  if (layerOne) layerOne.style.marginBottom = value * -0.6 + 'px';
  if (layerTwo) layerTwo.style.marginBottom = value * 0.1 + 'px';
  if (layerThree) layerThree.style.marginBottom = value * 0.05 + 'px';
  if (layerGraph) layerGraph.style.marginBottom = value * -1.5 + 'px';

  if (heroheading) {
    let opacity = 1 - (scrollY / maxScroll);
    opacity = Math.max(0, Math.min(1, opacity));
    heroheading.style.opacity = opacity;
    heroheading.style.marginBottom = scrollY * -1.5 + 'px';
  }

  if (section && image) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const startScroll = sectionTop;
    const endScroll = sectionTop + sectionHeight - window.innerHeight;

    if (scrollY >= startScroll && scrollY <= endScroll) {
      const progress = (scrollY - startScroll) / (endScroll - startScroll);

      const maxTranslateX = image.offsetWidth - section.offsetWidth;
      const translateX = progress * maxTranslateX;
      image.style.transform = `translateX(-${translateX}px)`;
    }

    if (scrollY < startScroll) {
      image.style.transform = `translateX(0px)`;
    }

    if (scrollY > endScroll) {
      const maxTranslateX = image.offsetWidth - section.offsetWidth;
      image.style.transform = `translateX(-${maxTranslateX}px)`;
    }
  }
});

var toggleBtn = document.getElementById('toggleBtn');
var toggleMenu = document.getElementById('toggleMenu');
var closeMenu = document.getElementById('closeMenu');

toggleBtn.addEventListener('click', () => {
  toggleMenu.classList.add('s-h-menu');
});

closeMenu.addEventListener('click', () => {
  toggleMenu.classList.remove('s-h-menu');
});

function parallax(e) {
  document.querySelectorAll('.elements').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 100;

    layer.style.transform = `translateX(${x}px)`;
  });
}

document.addEventListener('mousemove', parallax);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-faq");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function uploadVideo() {
  const input = document.getElementById('videoUpload');
  const videoPlayer = document.getElementById('productVideo');

  if (input.files && input.files[0]) {
    const file = input.files[0];
    const url = URL.createObjectURL(file);

    // Replace the video source with the uploaded one
    videoPlayer.src = url;
    videoPlayer.load();
    videoPlayer.play();
  } else {
    alert('Please select a video file to upload.');
  }
}



