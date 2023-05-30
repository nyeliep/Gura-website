const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.display = 'flex';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.style.display = 'none';
    menuOpen = false;
  }
});
// search
const searchBtn = document.querySelector('.searchBtn');
const closeBtn = document.querySelector('.closeBtn');
const searchBox = document.querySelector('.searchBox');
let searchOpen = false;
searchBtn.addEventListener('click', () => {
  if (!searchOpen) {
    searchBtn.classList.add('active');
    searchBox.classList.add('active');
    closeBtn.style.display = 'inline-block';
    searchOpen = true;
  }
});
closeBtn.addEventListener('click', () => {
  searchBtn.classList.remove('active');
  searchBox.classList.remove('active');
  closeBtn.style.display = 'none';
  searchOpen = false;
});
// video bg
document.addEventListener('DOMContentLoaded', function() {
  const backgroundVideo = document.querySelector('#background-video video');
  const videos = document.querySelectorAll('#video-container video');
  backgroundVideo.play();
  backgroundVideo.addEventListener('ended', function() {
    backgroundVideo.style.display = 'none';
    document.getElementById('video-section').style.display = 'block';
    let delay = 0;
    for (let i = 0; i < videos.length; i++) {
      setTimeout(function() {
        videos[i].style.opacity = 1;
        videos[i].play();
      }, delay);
      delay += 1000;
    }
  });
});
window.addEventListener('scroll', function () {
  const parallaxSections = document.querySelectorAll('[data-speed]');
  for (const section of parallaxSections) {
    const speed = section.getAttribute('data-speed');
    section.style.transform = `translateY(${window.pageYOffset * speed}px)`;
  }
});