# Frontend Assessment — Filter Wilayah Indonesia

Aplikasi web untuk menjelajahi dan memfilter data wilayah Indonesia (Provinsi, Kota/Kabupaten, dan Kecamatan) secara hierarkis.

## Tentang Aplikasi

Aplikasi ini menampilkan data wilayah Indonesia dengan fitur:

- **Filter bertingkat** — Pilih Provinsi → Kota/Kabupaten → Kecamatan secara berurutan melalui sidebar.
- **Breadcrumb navigasi** — Menunjukkan lokasi wilayah yang sedang dipilih.
- **Tampilan konten dinamis** — Menampilkan detail wilayah yang dipilih di area utama.
- **Reset filter** — Tombol untuk menghapus semua filter dan kembali ke tampilan awal (seluruh provinsi).

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — Build tool & dev server
- **React Router DOM** — Routing & data loader
- **Tailwind CSS 4** — Styling

## Menjalankan Aplikasi

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

## Struktur Proyek

```
src/
├── components/       # Komponen UI (FilterSidebar, Breadcrumb, Combobox, RegionContent)
├── data/             # Tipe data & interface (Province, Regency, District)
├── pages/            # Halaman utama (FilterPage)
├── router.tsx        # Konfigurasi routing & data loader
├── main.tsx          # Entry point
└── index.css         # Styling global
```
