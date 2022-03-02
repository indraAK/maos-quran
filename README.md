<h1 align="center">Maos Quran</h1>

Al-Qur'an online berbasis web yang dilengkapi dengan terjemahan, tafsir, dan audio ayat.

## Live Website

[https://maos-quran.vercel.app/](https://maos-quran.vercel.app/)

## Screenshoot

<div align="middle">
    <span>
    <h3>Light</h3>
    <img src="https://i.ibb.co/6mtV9nH/mobile-light.png" alt="Light Mode" width="300" />
</span>

<br>

<span>
    <h3>Dark</h3>
    <img src="https://i.ibb.co/0FZ4pt2/mobile-dark.png" alt="Dark Mode" width="300" />
</span>
</div>

## Fitur

1. Cari surah
2. Tandai surah favorit
3. Tandai ayat terakhir dibaca
4. Putar audio ayat
5. Paginasi surah (Sebelumnya | Berikutnya)
6. Tampilkan / sembunyikan terjemah
7. Tampilkan / sembunyikan tafsir
8. Mode gelap

## Instalasi

Untuk instal dan menjalankan aplikasi ini, pastikan bahwa [Git](https://git-scm.com) dan [Node.js](https://nodejs.org/en/download/) sudah terinstal di komputer anda, lalu jalankan command line berikut:

```bash
# Clone this repository
$ git clone https://github.com/indraAK/maos-quran.git

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Teknologi

- [Next.js](https://nextjs.org/) (React Framework for Production)
- [Chakra UI](https://chakra-ui.com/) (UI Component Library)
- [Zustand](https://github.com/pmndrs/zustand) (State management in React)

## Sumber

- Data Al-Quran beserta terjemahan, tafsir & audio ayat dari [@sutanlab](https://github.com/sutanlab/quran-api)
- Data Asmaul Husna dari [jagad.id](https://jagad.id/99-asmaul-husna-latin-arab-dan-terjemahan-indonesia-inggris/), versi JSON dari [@mazipan](https://github.com/mazipan/baca-quran.id/blob/master/data/asmaul-husna.json)
- Data Do'a harian dari [doaharianislami.com](https://www.doaharianislami.com/2017/06/kumpulan-doa-sehari-hari-lengkap-dalam-bahasa-arab-latin-dan-artinya.html), versi JSON dari [@mazipan](https://github.com/mazipan/baca-quran.id/blob/master/data/daily-doa.json)
- Data Wirid dari [islam.nu.or.id](https://islam.nu.or.id/post/read/79315/susunan-bacaan-wirid-sesudah-shalat-lima-waktu), versi JSON dari [@mazipan](https://github.com/mazipan/baca-quran.id/blob/master/data/wirid.json)
- Data Tahlil dari [islam.nu.or.id](https://islam.nu.or.id/post/read/79315/susunan-bacaan-wirid-sesudah-shalat-lima-waktu), versi JSON dari [@mazipan](https://github.com/mazipan/baca-quran.id/blob/master/data/tahlil.json)
- Inspirasi desain aplikasi dari [@mazipan](https://github.com/mazipan/baca-quran.id)
