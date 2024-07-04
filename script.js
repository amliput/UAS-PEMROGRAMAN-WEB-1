// script.js
document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari form
    let formData = new FormData(this);
    let transactionData = {
        nama: formData.get('nama'),
        email: formData.get('email'),
        jumlah: formData.get('jumlah'),
        tanggal: formData.get('tanggal')
    };

    // Kirim data transaksi ke server atau simpan secara lokal (contoh menggunakan localStorage)
    saveTransaction(transactionData);
});

function saveTransaction(data) {
    // Simpan data ke localStorage atau kirim ke server
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(data);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    // Tampilkan pesan sukses atau lakukan tindakan lanjutan (seperti redirect atau notifikasi)
    alert('Transaksi berhasil disimpan!');

    // Contoh redirect ke halaman lain setelah transaksi berhasil disimpan
    window.location.href = 'index.html';
}
