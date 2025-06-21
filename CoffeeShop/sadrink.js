// --- Slideshow di Halaman Home ---
let currentSlide = 0;
const slides = [
  'assets/interior1.jpg',
  'assets/interior2.jpg',
  'assets/interior3.jpg'
];

function showSlide(index) {
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.style.backgroundImage = `url('${slides[index]}')`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
