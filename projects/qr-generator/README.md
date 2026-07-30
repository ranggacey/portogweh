# QR Code Generator Lucu 🎀

QR code generator with cute, aesthetic design. Built with SvelteKit + MongoDB.

## Fitur
- Generate QR code dari teks/URL
- Pilih warna QR (pink, ungu, biru, dll)
- Pilih bentuk dot (rounded, square, circle)
- Tambah logo di tengah QR
- History tersimpan di MongoDB
- Download QR sebagai PNG
- UI lucu imut gemoy

## Cara jalanin

```bash
npm install
cp .env.example .env
# isi MONGO_URI
npm run dev
```

## Teknologi
- SvelteKit
- MongoDB + Mongoose
- qrcode npm package
- TailwindCSS + custom
