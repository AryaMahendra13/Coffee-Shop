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
  });

  // --- Promo Expand ---
  const togglePromo = document.getElementById('togglePromo');
  const promoContent = document.getElementById('promoContent');
  if (togglePromo && promoContent) {
    togglePromo.addEventListener('click', () => {
      promoContent.classList.toggle('expanded');
      promoContent.classList.toggle('hidden');
    });
  }

  // --- Validasi Reservasi ---
  const reservationForm = document.getElementById('reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value.trim();
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const people = document.getElementById('resPeople').value;

      if (!name || !date || !time || !people) {
        alert('Harap isi semua kolom reservasi.');
        return;
      }

      alert(`Terima kasih, ${name}. Reservasi Anda untuk ${people} orang pada ${date} pukul ${time} telah kami terima.`);
      reservationForm.reset();
    });
  }
});
