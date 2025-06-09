// Fungsi scroll ke menu dari halaman utama
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Tangani pengiriman formulir pemesanan
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const menu = document.getElementById('menu').value;
      const qty = document.getElementById('qty').value;
      const notes = document.getElementById('notes').value;
      document.getElementById('orderStatus').textContent = `Terima kasih, ${name}. Pesanan Anda (${qty}x ${menu}) telah dikirim.`;
      orderForm.reset();
    });
  }
  
  // Tangani pengiriman formulir kontak
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('message').value;
      document.getElementById('contactStatus').textContent = `Pesan dari ${name} telah terkirim. Kami akan membalas ke ${email}.`;
      contactForm.reset();
    });
  }
  