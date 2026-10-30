# HANDOFF — Portfolio update session (30 Oct 2026)

Dokumen ini ditulis supaya sesi Hermes baru bisa melanjutkan tanpa riwayat chat.
Baca ini dulu, lalu cek file yang disebut.

## Status

Selesai dan sudah diuji jalan:
- Halaman detail experience: /experience/[slug] (4 peran), kartu di homepage bisa diklik.
- Section AWARDS & ORGANIZATION di homepage (setelah Education), baris bisa diklik.
- Halaman detail award: /awards/[slug]
  - /awards/genbi-balikpapan-environment  (galeri strip 3 foto + sertifikat PDF)
  - /awards/hmsi-itk-student-welfare      (hero poster HMSI, strip 6 publikasi, strip 4 published proof, sertifikat PDF)
- Background word section (EDUCATION / RECOGNITION) di-anchor ke blok judul masing-masing section, center vertikal + horizontal.
- Semua project yang punya aset sekarang punya strip galeri di /projects/[slug]:
  EIS (4 layar mobile + blok MEASURED RESULT UEQ), Chremate (4), Serenity Booth (5),
  Company Profile Boilerplate (2), MiniZoo (5). Personnel Dashboard + Sweetelle sengaja tanpa galeri.
- Project interface: `galleryLabel?`, `gallery?: AwardImage[]`, `gallerySize?: 'default'|'large'`,
  `metricsLabel?`, `metrics?: {label,value}[]`, `metricsFootnote?`.
- Project KKN (MiniZoo Balikpapan) masuk section Projects: /projects/minizoo-balikpapan-wildlife-park-website
  - 5 layar di strip galeri, cover 1440x1014 (rasio kartu 1.42 supaya tidak ter-crop)
  - Project interface sekarang punya `galleryLabel?` + `gallery?: AwardImage[]`, dan /projects/[slug] punya useHead.

## Lokasi kerja

- Folder kerja + dev server: C:\Users\USER\portfolio-experience  (node_modules sudah ada)
  - npm run dev  -> http://localhost:3000
  - npm run build
- Clone repo untuk diff/patch: C:\Users\USER\AppData\Local\hermes\cache\scratch\porto
  - base commit pembanding: d337cf5
- Patch TIDAK memuat blob PNG lama yang dihapus (webdev/teacher/uiuxmeeting/infra.png, ~40 MB) supaya
  ukurannya wajar (9,4 MB). Setelah apply, hapus manual 4 file itu dari public/.
- Patch siap pakai (di portfolio-experience):
  - experience-detail.patch            kode saja, teks
  - awards-and-experience-full.patch   binary, termasuk semua gambar + PDF (sudah diuji git apply --check)
- Aset sumber mentah: D:\Project\Raw\{Genbi,HMSI}  (JPG/PNG/PDF asli, jangan diubah)
- CV sumber kebenaran: D:\Project\CV\main copy.typ

## Struktur kode yang relevan

- app/data/portfolio.ts        -> experiences[], awards[] (interface Award: slug, kind, role, summary, context,
                                  contributions, skills, hero?, galleryLabel, gallery[], proofLabel?, proof?, credential?)
- app/components/awards/AwardGallery.vue   -> filmstrip: tinggi kartu seragam, lebar ikut rasio, scroll-snap,
                                  counter berbasis progres scroll (mentok kanan = nomor terakhir), panah disabled di ujung,
                                  prop `size="large"` untuk section proof, lightbox (klik, panah, Esc)
- app/pages/awards/[slug].vue  -> hero (pakai award.hero kalau ada, else gallery[0]), What I Did, Context,
                                  galeri, PUBLISHED PROOF, CREDENTIAL (thumbnail + link PDF tab baru), prev/next
- app/components/sections/AwardsSection.vue -> baris homepage = NuxtLink ke /awards/[slug]
- app/pages/experience/[slug].vue, app/pages/experience/index.vue, app/components/sections/ExperienceSection.vue

## Pipeline aset gambar

Tidak ada ImageMagick/poppler di mesin ini. Pakai Python 3.13:
  C:\Users\USER\AppData\Local\Programs\Python\Python313\python.exe   (ada pip; pypdfium2 + Pillow terpasang)
Skrip yang dipakai ada di scratch: prep_images.py, prep_images2.py, prep_images3.py, pdf_render.py
- PDF sertifikat: render halaman 1 dengan pypdfium2 scale 2.4 -> JPG 2200px; PDF aslinya ikut disalin ke public/awards/credentials/
- Foto: resize lebar maks 2000 (JPG q84 progresif), EXIF di-transpose (satu foto GenBI tersimpan rotasi 90 derajat)
- Slide desain 2160x2700 -> JPG 1200x1500 q88
- Output akhir: public/awards/*.jpg + public/awards/credentials/*.{jpg,pdf}  (~4,9 MB total, semua lazy-load)

## Isi konten yang sudah final

GenBI (SHOLARSHIP, MAY 2024 - MAY 2025)
- role: Member, Environment Division (Divisi Lingkungan Hidup), Komisariat ITK
- 5 bullet; sertifikat BI 14 Feb 2025, ttd Robi Ariadi (Deputi Direktur), tanpa nomor sertifikat
- Foto: Eco Action grup, capacity building Kodim 0905/BPP 22 Sep 2024, Eco Action penanaman
  (foto portrait IMG_6802 dibuang dari galeri — boleh dikembalikan kalau diminta)

HMSI (ORGANISATION, AUG 2023 - AUG 2024)
- org: HMSI ITK, Kabinet Synergia 2023/2024; bullet menyebut 300 SK2PM
- sertifikat no. 499/SFT/BPH/SYNERGIA/HMSI/VII/2024, ttd Sri Rahayu Natasia (NIP dibiarkan terlihat atas permintaan user)
- hero: HMSI.png (poster organisasi) 718x908
- strip publikasi: KEFO x2, STAMP x2, photo recap, workshop Android
- published proof: Meet Our Team (11 Okt 2023, nama Jein tercantum), MSIB, My Digital Academy, Sidang TA
- SIFCOM (Valorant, Dept. Minat Bakat) SENGAJA tidak dimasukkan — departemen berbeda, belum dikonfirmasi karya sendiri

## Galeri project + data hasil EIS

- Sumber: D:\Project\Raw\Projects\<slug>\ (folder sudah disiapkan; README.txt berisi aturan format)
- Aset web: public/projects/<slug>/NN-nama.jpg, lebar 1600 (mobile EIS tetap 414x809 asli)
- Screenshot hasil mental (sudah dipakai): UEQ 6 skala semua Excellent (Attractiveness 2.82,
  Perspicuity 2.82, Efficiency 2.93, Dependability 2.78, Stimulation 2.82, Novelty 2.71),
  Completion Rate 100%, Time Based Efficiency 0.03686 goal/sec, 17 responden (angka responden dari CV).
- Tabel bernomor "Tabel 4.21" -> data ini dari skripsi, artinya project EIS = objek skripsi.
  KONFIRMASI ke user apakah thesis = project EIS (masih terbuka di bagian keputusan).
- Data hasil ditampilkan sebagai teks/tabel HTML (blok MEASURED RESULT), bukan screenshot tabel,
  karena screenshot-nya cuma 604x273 px dan akan blur saat diperbesar.

## Performa + SEO + positioning (dirapikan)

- Foto pengalaman 12-14 MP (webdev.png 13,5 MB, teacher.png 12,8 MB, uiuxmeeting.png 12,1 MB, infra.png 1,7 MB)
  diganti JPEG max 1400 px: ~190-284 KB masing-masing. PNG aslinya DIHAPUS, referensi di portfolio.ts sudah .jpg.
  Hasil: payload gambar homepage 40 MB -> 1,6 MB (no-cache, 6 request karena lazy-load).
- ExperienceSection img: loading="lazy" decoding="async". ProjectsSection: kartu pertama eager, sisanya lazy.
- favicon 1024 px 372 KB -> 256 px 46 KB.
- nuxt.config: title "Jein Ananda — Technology Infrastructure Engineer", titleTemplate fungsi (hindari duplikasi),
  description/OG/Twitter/canonical, lang="en". OG image: public/og-cover.jpg (1200x630, dibuat dengan PIL).
- Halaman sekarang set title pendek saja ('Projects', title project, role at company, award title) karena
  titleTemplate menambahkan "· Jein Ananda". JANGAN menulis "| Jein Ananda" lagi di useHead halaman.
- robots.txt: Allow + Sitemap. scripts/generate-sitemap.mjs menghasilkan public/sitemap.xml (16 URL) dan
  dijalankan otomatis lewat "prebuild" di package.json. JALANKAN ULANG kalau ada project/experience/award baru
  (npm run sitemap).
- HeroSection: urutan roles sekarang ['IT Infrastructure Engineer', 'Full-Stack Web Developer', 'UI/UX Designer']
  supaya posisi sekarang muncul lebih dulu.

## Section Projects di homepage (dirapikan)

- Titik-titik "slideshow" palsu di bawah thumbnail DIHAPUS (dulu 3 titik statis, tidak berfungsi).
  Diganti badge `N SCREENS` yang hanya muncul kalau project punya galeri.
- HIGHLIGHTS tidak lagi template "<tag> implementation and integration"; sekarang ambil 3 item
  pertama dari `contributions` project (fallback ke tags kalau kosong).
- Tombol SEE MORE/SHOW LESS diganti link `ALL N PROJECTS ->` ke /projects.
- Halaman baru /projects (index): dikelompokkan per kategori, jumlah project per grup, thumbnail,
  stats, tags, badge SCREENS. Homepage tetap menampilkan 3 project unggulan (FEATURED = 3).
- Gambar kartu: kartu pertama eager, sisanya loading=lazy.

## KKN / MiniZoo

- Sumber export: D:\Project\Raw\KKN (5 layar 4320px + 1 screenshot full-page 1440x6532)
- Aset web: public/projects/kkn-{minizoo-cover,animals,animal-detail,news-detail,documentary}.jpg
- Isi mockup memakai lorem ipsum dan logo penghargaan template (Tripadvisor / Singapore Tourism Awards),
  jadi di situs TIDAK diklaim sebagai pencapaian — hanya struktur, alur, dan sistem desainnya yang diceritakan.
- demoUrl dan repoUrl masih '#' (belum ada link publik). Kalau ada link Figma/prototype atau hasil deploy, isi di sini.
- Peran, jumlah anggota tim, lokasi KKN, dan apakah ikut dibangun jadi aplikasi: BELUM dikonfirmasi user.

## Keputusan yang masih terbuka

1. Halaman /experience (index daftar 4 peran) dipertahankan atau dihapus? User sempat bilang tidak perlu.
2. Bullet backup di Maybank masih generik + ada TODO di portfolio.ts: butuh detail (apa yang di-backup, jadwal, pernah uji restore?) atau dihapus.
3. Urutan strip publikasi HMSI: slide KEFO Pertamina di posisi pertama terasa paling lemah; user belum memutuskan dibalik atau tidak.
4. Caption proof HMSI masih bahasa Inggris (mengikuti bahasa situs); versi Indonesia belum diminta.
5. Meta/OG/sitemap masih kosong; tiga gambar besar lama di homepage (webdev.png 13,5 MB, teacher.png 12,8 MB, uiuxmeeting.png 12,1 MB) masih eager-load -> homepage ~5 detik. Belum dikerjakan.
6. Work output organisasi lain bisa ditambah kalau user kirim ke D:\Project\Raw.
7. Angka "17 responden" diambil dari CV, bukan dari file hasil. Kalau skripsi menyebut jumlah lain
   (misal 20), ganti di portfolio.ts baris metricsFootnote.
8. Kartu project di homepage menampilkan "HIGHLIGHTS" hasil template: "<tag> implementation and integration"
   untuk SEMUA project (7 kartu). Perlu field `highlights?: string[]` per project supaya bisa ditulis manual.
9. Education page (lulusan terbaik, thesis, luar prodi) belum dibangun; menunggu jawaban user:
   predikat persis, apakah thesis = project EIS, detail KKN, dan daftar partisipasi luar prodi.
10. Perlu keputusan: /experience index dipertahankan atau dihapus (lihat poin 1).

## Catatan teknis / jebakan

- `npx nuxt typecheck` gagal exit 1 di proyek ini (tanpa pesan TS yang jelas). Pakai `npm run build` sebagai gate.
- write_file bisa menolak menimpa file .vue yang baru dipatch; tulis lewat Python (execute_code) kalau perlu replace penuh.
- Section background word harus tetap: position absolute di dalam blok head section (bukan di section), top 50% + translate(-50%,-50%).
- Jangan publikasikan screenshot core banking/ITSM/internal Maybank atau EIS Komatsu tanpa izin.
- Nama/identitas orang lain ada di foto grup dan sertifikat; user bilang biarkan.

## Foto di detail experience (31 Okt)

`Experience` sekarang punya `galleryLabel`, `gallery`, `gallerySize` — sama seperti `Project`.
Section galeri dirender sebelum SKILLS GAINED; kalau `gallery` kosong, section hilang sendiri.

Terisi:
- `komatsu-ui-ux-design-intern` → IN THE ROOM, 2 foto (review meeting, working session).
- `komatsu-web-developer-intern` → ON SITE, 2 foto (aerial plant, dirinya di depan gedung Komatsu).
- Foto: `public/experience/<slug>/NN-nama.jpg`, 1400x933 (3:2), q82, tanpa EXIF.

Sengaja TIDAK dipasang:
- **Teaching Assistant** — 4 foto semuanya foto kelas berkelompok dengan puluhan wajah mahasiswa
  yang bisa dikenali, tanpa artefak mengajar. Disepakati dilewati.
- **Satu foto Komatsu** (dashboard "List of Overtime" di monitor besar) — pada resolusi penuh
  tabelnya memuat nama & kode pegawai serta status lembur. Itu data pribadi orang lain, bukan
  cuma urusan izin perusahaan. Versi yang hanya memblur area tabel bisa dibuat kalau diminta.

Maybank (revisi 31 Okt, setelah user menyatakan semua foto boleh dipublikasikan):
- `maybank-it-infrastructure-engineer` → label IN THE RACK ROOM, 4 foto crop 3:2 (899x599):
  rak cabang, patch panel, terminal EDC, ruang rack. Tidak ada nama nasabah, nomor rekening,
  atau data pribadi; yang terbaca hanya label teknis (`HORIZONTAL LT.2`, `KTP-e1`).
- Video `WhatsApp Video ...mp4` (1,7 MB) belum dipakai — belum ada komponen video.

Catatan: di 2 foto Komatsu yang dipakai ada wajah rekan kerja. Publikasi butuh izin mereka —
kalau tidak ada, ganti dengan crop tanpa orang.
