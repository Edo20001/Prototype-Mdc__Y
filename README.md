# Prototype MDC__Y

Website prototype untuk MDC__Y: jadwal youth, pembaca Alkitab, dan kolom komitmen pelayanan.

- **Jadwal**: Saturday Service (Sabtu 18.00), HOPE Klampis (Selasa 18.30), HOPE MDC Putat (Rabu 19.00)
- **Komitmen**: langkah mingguan, janji pribadi, minat pelayanan, dan perjalanan komitmen
- **Alkitab**: 66 kitab, pasal dibuka di Alkitab SABDA
- Responsif untuk handphone, tablet, dan laptop; mode gelap dan terang

Satu file HTML tanpa build. Buka `index.html` di browser, atau aktifkan GitHub Pages.

Login hanya gerbang sambutan di sisi klien (password: `GOD BLESS YOU`), bukan pengaman sungguhan. Data komitmen tersimpan di browser masing-masing.

## Prayer Service ke Google Sheet

1. Buka Google Sheet pokok doa, pilih **Extensions > Apps Script**, tempel isi `apps-script/Code.gs`.
2. **Deploy > New deployment > Web app**: Execute as **Me**, Who has access **Anyone**.
3. Salin URL yang berakhiran `/exec` ke `SHEET_URL` di `index.html`, lalu push.

Pokok doa yang gagal terkirim disimpan di handphone pengirim dan dicoba lagi saat online. Pengirim anonim hanya mengirim kategori dan pokok doa, tanpa nama.
