import type { NewsItem } from '../types/news'

export const iranArticle = `Jakarta, CNBC Indonesia - Pemerintahan Iran tengah menghadapi perpecahan internal terkait arah kebijakan setelah Presiden Amerika Serikat (AS) Donald Trump memperpanjang gencatan senjata dengan Teheran tanpa batas waktu. Di satu sisi, kelompok garis keras mendorong kelanjutan perang, sementara kubu moderat menyerukan dialog dan deeskalasi.
Media pemerintah Iran dan elite militer menegaskan kesiapan melanjutkan konflik dengan AS dan Israel. Demonstrasi kekuatan pun digelar di Teheran, bertepatan dengan berakhirnya gencatan senjata dua pekan yang kini diperpanjang.
Di Lapangan Enghelab, rudal balistik Khorramshahr-4 dipamerkan di hadapan massa. Sementara di Lapangan Vanak, pria bertopeng membawa senapan berdiri di atas peluncur rudal Ghadr, diiringi teriakan anti-AS.
"Apa lagi yang harus dilakukan AS agar itu dianggap pelanggaran gencatan senjata?" ujar penyanyi religi Hossein Taheri dalam sebuah aksi, seraya menegaskan bahwa pendukung pemerintah akan terus turun ke jalan hingga dapat "membalas dendam".
Televisi pemerintah turut memperkuat narasi keras. Seorang pembawa acara bahkan mengklaim, tanpa menyebut sumber, bahwa 87% warga Iran lebih memilih kembali berperang dibanding memberikan konsesi dalam negosiasi.
Di sisi lain, tekanan militer terus meningkat. Markas militer Khatam al-Anbiya menyatakan pasukan siap "menembak kapan saja" untuk merespons agresi. Korps Garda Revolusi Islam (IRGC) juga dilaporkan menyita dua kapal di Selat Hormuz.
"Jika wilayah mereka digunakan untuk menyerang Iran, mereka harus mengucapkan selamat tinggal pada produksi minyak di Timur Tengah," kata Komandan kedirgantaraan IRGC, Majid Mousavi, memperingatkan negara-negara tetangga, seperti dikutip Al Jazeera, Kamis (23/4/2026).
Ketegangan juga merambah ke ranah digital. Kantor berita Tasnim menyebut kabel internet bawah laut bisa menjadi target berikutnya, yang berpotensi memicu "bencana digital" di kawasan.
Sementara itu, dari New York, Duta Besar Iran untuk PBB Saeed Iravani menegaskan negosiasi hanya bisa dilanjutkan jika AS mencabut blokade terhadap Iran.
Trump sendiri menyebut perpanjangan gencatan senjata dilakukan karena pemerintah Iran dinilai terpecah dan belum mampu menyusun proposal terpadu. Ia juga mengklaim Iran tengah mengalami "keruntuhan finansial".
Di tengah tekanan tersebut, Ketua Parlemen Mohammad Bagher Ghalibaf menegaskan Iran tidak akan menyerah. Namun ia mengakui ketimpangan kekuatan militer.
"Kita tidak lebih kuat dari AS secara militer. Mereka punya lebih banyak sumber daya. Tapi kita adalah pemenang di medan ini," ujarnya.
Ghalibaf menambahkan bahwa tujuan utama Iran adalah memperjuangkan hak rakyat, bukan sekadar kemenangan absolut, serta menyebut negosiasi sebagai "metode pertempuran".
Perbedaan sikap juga muncul dari Presiden Masoud Pezeshkian. Meski mendukung militer, ia menilai konflik berkepanjangan tidak menguntungkan. "Solusi bukan pada eskalasi, tetapi akal sehat, dialog, dan menghindari kehancuran lebih lanjut," katanya.
Selama 40 hari konflik, ribuan amunisi dilaporkan menghantam berbagai infrastruktur Iran, mulai dari fasilitas energi hingga transportasi. Banyak rumah sakit, sekolah, dan permukiman mengalami kerusakan.`

export const fallbackNews: NewsItem[] = [
  {
    id: '1',
    title: 'Iran Terbelah Usai Trump Perpanjang Gencatan Senjata',
    date: '2026-04-23',
    author: 'Redaksi CNBC Indonesia',
    url: '#',
    summary:
      'Kelompok garis keras mendorong kelanjutan perang, sementara kubu moderat menyerukan dialog dan deeskalasi.',
    category: 'Internasional',
    body: iranArticle,
  },
  {
    id: '2',
    title: 'Jakarta Transit Tambah Layanan Malam di Koridor Padat',
    date: '2026-04-27',
    author: 'Rafi Nugroho',
    url: '#',
    summary:
      'Operator transportasi memperluas jadwal di beberapa koridor setelah permintaan komuter meningkat pada kuartal pertama.',
    category: 'Metro',
    body: `Jakarta, Newsroom - Operator transportasi publik di Jakarta menambah layanan malam pada sejumlah koridor padat setelah data perjalanan menunjukkan kenaikan penumpang pada jam pulang kerja.
Penyesuaian jadwal dilakukan bertahap agar petugas lapangan bisa memantau kepadatan halte, waktu tunggu, dan kebutuhan armada tambahan.
Sejumlah pengguna menyambut langkah itu karena perjalanan selepas pukul 21.00 selama ini masih bergantung pada rute terbatas.
Pemerintah daerah menyebut evaluasi akan dilakukan setiap pekan, terutama pada koridor yang terhubung dengan kawasan perkantoran, kampus, dan pusat belanja.`,
  },
  {
    id: '3',
    title: 'UMKM Mulai Pakai Dasbor Arus Kas untuk Tekan Risiko',
    date: '2026-04-26',
    author: 'Dina Prameswari',
    url: '#',
    summary:
      'Pemilik usaha ritel menggunakan dasbor ringan untuk memantau stok, penjualan harian, dan pembayaran pemasok.',
    category: 'Ekonomi',
    body: `Bandung, Newsroom - Pelaku UMKM mulai memakai aplikasi pencatatan arus kas untuk membaca perubahan biaya bahan baku dan menjaga stok tetap terkendali.
Di beberapa toko ritel, laporan harian kini dipakai bukan hanya untuk menghitung penjualan, tetapi juga menentukan kapan pesanan ke pemasok harus dilakukan.
"Kalau telat lihat stok, uangnya sering terkunci di barang yang tidak bergerak," kata seorang pemilik toko kelontong di Bandung.
Asosiasi pedagang menilai kebiasaan membaca data sederhana bisa membantu UMKM bertahan ketika biaya distribusi berubah cepat.`,
  },
  {
    id: '4',
    title: 'Kampus Perluas Akses Perpustakaan Digital',
    date: '2026-04-25',
    author: 'Alvin Putra',
    url: '#',
    summary:
      'Langganan baru dan kerja sama arsip terbuka memberi mahasiswa akses lebih luas ke jurnal dan dataset.',
    category: 'Pendidikan',
    body: `Yogyakarta, Newsroom - Sejumlah universitas memperluas akses perpustakaan digital melalui langganan jurnal, repositori data, dan koleksi arsip lokal.
Kebijakan ini membuat mahasiswa dapat membaca materi riset dari luar kampus tanpa harus menunggu akses manual dari pustakawan.
Pengelola perpustakaan mengatakan penggunaan koleksi digital naik sejak perkuliahan hybrid menjadi kebiasaan baru.
Tantangan berikutnya adalah literasi sumber, sebab akses yang luas tetap membutuhkan kemampuan memilih rujukan yang kredibel.`,
  },
  {
    id: '5',
    title: 'Tim Kesehatan Siapkan Kampanye Waspada Cuaca Panas',
    date: '2026-04-24',
    author: 'Nadia Larasati',
    url: '#',
    summary:
      'Klinik dan dinas kota menyiapkan peringatan, titik hidrasi, dan panduan bagi pekerja luar ruangan.',
    category: 'Kesehatan',
    body: `Surabaya, Newsroom - Dinas kesehatan menyiapkan kampanye kewaspadaan cuaca panas untuk mengurangi risiko dehidrasi dan kelelahan pada pekerja luar ruangan.
Materi kampanye akan disebarkan melalui puskesmas, sekolah, dan kantor kelurahan dalam bentuk jadwal minum, tanda bahaya, serta anjuran istirahat.
Petugas juga menyiapkan titik hidrasi di area dengan aktivitas publik tinggi.
Dokter menyarankan warga tidak menunggu haus untuk minum dan segera mencari tempat teduh saat mulai pusing atau lemas.`,
  },
  {
    id: '6',
    title: 'Simulasi Keamanan Siber Fokus pada Rantai Pasok',
    date: '2026-04-23',
    author: 'Kevin Halim',
    url: '#',
    summary:
      'Perusahaan logistik dan manufaktur menggelar latihan bersama untuk menekan dampak serangan digital.',
    category: 'Teknologi',
    body: `Batam, Newsroom - Perusahaan manufaktur dan logistik menggelar simulasi keamanan siber untuk menguji kesiapan menghadapi gangguan pada rantai pasok.
Latihan berfokus pada phishing, pemulihan data, dan koordinasi ketika sistem pemesanan tidak bisa diakses.
Pelaku industri menilai risiko serangan tidak lagi hanya berdampak pada bagian teknologi informasi, tetapi juga pengiriman barang.
Hasil simulasi akan dipakai untuk memperbaiki alur komunikasi antara vendor, gudang, dan pelanggan besar.`,
  },
  {
    id: '7',
    title: 'Klub Sepak Bola Lokal Investasi Analitik Pemain Muda',
    date: '2026-04-22',
    author: 'Sinta Wardani',
    url: '#',
    summary:
      'Pelatih menggabungkan video pertandingan, data kebugaran, dan catatan pemandu bakat untuk akademi.',
    category: 'Olahraga',
    body: `Malang, Newsroom - Klub sepak bola lokal mulai menggunakan analitik sederhana untuk memantau perkembangan pemain akademi.
Data yang dikumpulkan mencakup menit bermain, intensitas latihan, pemulihan cedera, dan catatan teknik dari staf pelatih.
Pendekatan ini membantu pelatih memberi program berbeda untuk tiap pemain, terutama saat jadwal turnamen padat.
Manajemen klub berharap investasi data bisa membuat proses promosi pemain muda ke tim utama lebih terukur.`,
  },
  {
    id: '8',
    title: 'Pameran Tekstil Kontemporer Buka Ruang Baru Seniman',
    date: '2026-04-21',
    author: 'Tara Kusuma',
    url: '#',
    summary:
      'Pameran mempertemukan desainer dan seniman visual lewat karya tenun, pewarnaan, dan instalasi.',
    category: 'Budaya',
    body: `Solo, Newsroom - Pameran tekstil kontemporer mempertemukan perajin, desainer, dan seniman visual dalam satu ruang yang menyoroti teknik tradisional serta pendekatan baru.
Karya yang ditampilkan mencakup tenun eksperimental, pewarna alami, hingga instalasi besar dari kain bekas produksi.
Kurator mengatakan pameran ini ingin menunjukkan bahwa tekstil tidak hanya hadir sebagai produk pakai.
Pengunjung juga dapat mengikuti lokakarya singkat tentang pewarnaan dan perawatan kain.`,
  },
  {
    id: '9',
    title: 'Startup Energi Uji Platform Pemantau Baterai',
    date: '2026-04-20',
    author: 'Bimo Aditya',
    url: '#',
    summary:
      'Proyek percontohan menguji pemeliharaan prediktif untuk baterai rumah dan bangunan komersial.',
    category: 'Ekonomi',
    body: `Denpasar, Newsroom - Startup energi menguji platform pemantau baterai untuk membantu pengguna membaca performa penyimpanan listrik secara real time.
Sistem ini memberi peringatan ketika suhu, siklus pengisian, atau kapasitas baterai menunjukkan pola tidak normal.
Pengembang berharap data tersebut dapat menekan biaya perawatan dan memperpanjang umur perangkat.
Uji coba dilakukan pada rumah tinggal, toko kecil, dan beberapa bangunan komersial yang memakai panel surya.`,
  },
  {
    id: '10',
    title: 'Rumah Sakit Perbaiki Informasi Antrean Pasien',
    date: '2026-04-19',
    author: 'Lestari Wibowo',
    url: '#',
    summary:
      'Sistem tampilan dan pengingat janji temu membantu mengurangi kepadatan pada jam rawat jalan.',
    category: 'Kesehatan',
    body: `Semarang, Newsroom - Rumah sakit memperbaiki informasi antrean pasien dengan layar jadwal, pengingat pesan singkat, dan pembaruan estimasi waktu tunggu.
Perubahan ini diterapkan di poli rawat jalan yang sering mengalami penumpukan pasien pada pagi hari.
Manajemen menyebut sistem baru membantu petugas menjelaskan keterlambatan tanpa harus memanggil pasien satu per satu.
Evaluasi awal menunjukkan pasien lebih mudah mengatur waktu kedatangan ketika estimasi antrean tersedia sejak awal.`,
  },
  {
    id: '11',
    title: 'Portal Data Iklim Tambah Peta Level Kelurahan',
    date: '2026-04-18',
    author: 'Fajar Mahendra',
    url: '#',
    summary:
      'Pembaruan portal membantu perencana melihat pola hujan, risiko banjir, dan suhu permukaan kota.',
    category: 'Lingkungan',
    body: `Makassar, Newsroom - Portal data iklim menambahkan peta level kelurahan agar pemerintah daerah bisa membaca risiko lingkungan dengan lebih rinci.
Data baru mencakup pola hujan, tutupan lahan, paparan banjir, dan suhu permukaan pada siang hari.
Perencana kota mengatakan peta mikro membantu menentukan prioritas drainase dan ruang terbuka hijau.
Portal tersebut juga disiapkan untuk publik agar warga dapat memahami kondisi lingkungan di sekitar tempat tinggalnya.`,
  },
  {
    id: '12',
    title: 'Sekolah Uji Pelajaran Literasi Digital Berbasis Proyek',
    date: '2026-04-17',
    author: 'Putri Anggraini',
    url: '#',
    summary:
      'Guru memadukan riset online, pengecekan fakta, evaluasi sumber, dan publikasi singkat siswa.',
    category: 'Pendidikan',
    body: `Depok, Newsroom - Sekolah menengah menguji pelajaran literasi digital berbasis proyek agar siswa tidak hanya mengenal perangkat, tetapi juga memahami cara menilai informasi.
Dalam satu tugas, siswa diminta mencari sumber, membandingkan klaim, lalu menulis ringkasan dengan rujukan yang jelas.
Guru mengatakan pendekatan proyek membuat diskusi kelas lebih hidup karena siswa membawa contoh dari ruang digital yang mereka temui sehari-hari.
Materi ini akan diperluas ke mata pelajaran lain jika evaluasi semester menunjukkan hasil positif.`,
  },
]
