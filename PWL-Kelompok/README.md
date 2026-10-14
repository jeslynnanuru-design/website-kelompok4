# Website Pemrograman Web Lanjutan — Kelompok 4

Website akademik satu halaman untuk memperkenalkan mata kuliah Pemrograman Web Lanjutan dan anggota kelompok Universitas Kristen Indonesia Maluku. Dibuat dengan HTML5, CSS3, dan JavaScript ES6 murni.

## Struktur Folder

```text
PWL-Kelompok/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── logo-kampus.png
│   ├── bella.jpeg
│   ├── cika.jpeg
│   ├── grace.jpeg
│   ├── jeslyn.jpeg
│   └── jeysen.jpeg
└── README.md
```

Logo kampus dan foto seluruh anggota sudah tersedia di folder `images`.

## Menjalankan

1. Buka folder `PWL-Kelompok` di Visual Studio Code.
2. Buka `index.html` langsung di peramban, atau jalankan dengan ekstensi Live Server.
3. Tidak ada paket yang perlu dipasang dan tidak diperlukan proses build.

Google Fonts digunakan jika internet tersedia. Font cadangan tetap digunakan saat luring.

## Mengganti Informasi

Identitas kampus saat ini mengikuti informasi yang diberikan:

- Universitas: Universitas Kristen Indonesia Maluku
- Fakultas: Ilmu Komputer
- Jurusan: Aplikasi
- Program studi: Informatika
- Mata kuliah: Pemrograman Web Lanjutan
- Dosen: ganti `[NAMA DOSEN]` di `index.html` dengan nama yang sudah dipastikan.

Data anggota berada di array `members` pada awal `js/script.js`. Perbarui `npm`, `hobby`, `description`, atau `role` sesuai informasi dari anggota. NPM dan hobi ditampilkan pada kartu serta profil; deskripsi kontribusi digunakan pada profil dan daftar tugas.

Foto anggota dipasangkan melalui array `members` di `js/script.js`: Beldelina memakai `bella.jpeg`, Grace memakai `grace.jpeg`, Jeslyn memakai `jeslyn.jpeg`, Joysen memakai `jeysen.jpeg`, dan Yiska memakai `cika.jpeg`. Gunakan foto potret; `object-fit: cover` menjaga bingkai tetap seragam. Jika gambar tidak dapat dimuat, inisial anggota digunakan sebagai pengganti.

## Bagian Kode

- `index.html`: struktur semantik, navigasi, konten akademik, formulir, dialog, dan footer.
- `css/style.css`: palet putih-hijau-hitam, tata letak, komponen responsif, dan animasi.
- `js/script.js`: data materi dan anggota, pembuatan kartu, modal, navigasi, animasi, counter, serta validasi formulir.

Formulir kontak hanya menampilkan konfirmasi pada halaman dan tidak mengirim pesan ke server.
