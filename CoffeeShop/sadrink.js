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

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik

  // --- Hover Animasi pada Menu Card ---
  const cards = document.querySelectorAll('.menu-items .card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
  });

  // --- Filter Menu Berdasarkan Kategori ---
  const filterButtons = document.querySelectorAll('[data-filter]');
  const menuSection = document.getElementById('menu');
  const headings = menuSection.querySelectorAll('h2');
  const allSections = [];

  // Kumpulkan pasangan heading dan konten
  headings.forEach((heading, i) => {
    const next = heading.nextElementSibling;
    if (next && next.classList.contains('menu-items')) {
      allSections.push({ heading, content: next });
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter').toLowerCase();

      // Aktifkan tombol terpilih
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      if (filter === 'all') {
        allSections.forEach(({ heading, content }) => {
          heading.style.display = '';
          content.style.display = '';
        });
      } else {
        allSections.forEach(({ heading, content }) => {
          const headingText = heading.textContent.toLowerCase();
          if (headingText.includes(filter)) {
            heading.style.display = '';
            content.style.display = '';
          } else {
            heading.style.display = 'none';
            content.style.display = 'none';
          }
        });
      }
    });
    
