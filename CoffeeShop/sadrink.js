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
    e.preventDefault(); // Mencegah reload

  
  // Ambil inputan berdasarkan ID yang benar
    const nama = document.getElementById('nama').value;
    const menu = document.getElementById('menuSelect').value;
    const jumlah = document.getElementById('jumlah').value;
    const catatan = document.getElementById('catatan').value;

     // Cetak ke console untuk debug
    console.log('Nama:', nama);
    console.log('Menu yang dipesan:', menu);
    console.log('Jumlah:', jumlah);
    console.log('Catatan:', catatan);

    // Tampilkan pesan ke pengguna
    const pesan = Terima kasih, ${nama}. Pesanan Anda (${jumlah}x ${menu}) telah dikirim.;
    const statusEl = document.getElementById('orderStatus');
    if (statusEl) {
      statusEl.textContent = pesan;
    }
   // Reset form
    orderForm.reset();
  });
}
