function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
  carousel.scrollBy({ left: direction * itemWidth, behavior: 'smooth' });
}

const profileUpload = document.getElementById('profileUpload');
const profileImage = document.getElementById('profileImage');

if (profileUpload && profileImage) {
  profileUpload.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      profileImage.src = URL.createObjectURL(file);
    }
  });
}


const images = [
  "Assets/Sedan1-removebg-preview.png",
  "Assets/van1-removebg-preview.png",
  "Assets/SUV1-removebg-preview.png",
];

let index = 0;
const slideshow = document.getElementById("carSlideshow");

if (slideshow) {
  setInterval(() => {
    slideshow.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % images.length;
      slideshow.src = images[index];
      slideshow.style.opacity = 1;
    }, 500);
  }, 3000);
}
