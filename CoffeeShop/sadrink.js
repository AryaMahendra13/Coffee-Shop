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

  
  document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault(); // mencegah reload halaman

    const nama = document.getElementById('nama').value;
    const menu = document.getElementById('menu').value;
    const jumlah = document.getElementById('jumlah').value;
    const catatan = document.getElementById('catatan').value;

    // Tampilkan data di console
    console.log('Nama:', nama);
    console.log('Menu yang dipesan:', menu);
    console.log('Jumlah:', jumlah);
    console.log('Catatan:', catatan);

    // Contoh feedback di halaman
    const pesan = `Terima kasih, ${nama}. Pesanan Anda (${jumlah}x ${menu}) telah dikirim.`;
    const hasil = document.createElement('p');
    hasil.innerText = pesan;
    document.body.appendChild(hasil);
  });
  
