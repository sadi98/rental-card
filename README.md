Pastikan Anda memiliki Node.js dan NPM terinstal di komputer Anda. Jika belum, unduh dan instal Node.js dari situs web resminya di https://nodejs.org/en/download/.

Salin tautan GitHub repo ini ke clipboard Anda.

Buka terminal atau command prompt pada komputer Anda dan masukkan perintah berikut:



git clone https://github.com/sadi98/rental-card.git
Perintah ini akan mengunduh repository ini ke dalam direktori kerja lokal Anda.

Buka terminal (cmd, git bash, power shell) direktori repo ini dan jalankan perintah berikut untuk menginstal dependensi proyek:

npm install
Setelah dependensi terinstal, Buka package.json pada bagian scripts 
"scripts": {
        "dev": "react-scripts start",
        "build": "react-scripts build",
    },
kode di atas merupakan petunjuk, jika ingin menjalankan project di lokal maka jalankan perintah:

npm run dev

Proyek ReactJS akan dimulai dan dapat diakses di http://localhost:3000 pada browser.

Ruute List pada project ini
http://localhost:3000     //  halaman Index sesuai design yang di berikan oleh Binar
http://localhost:3000/search      // halaman search dan list data
http://localhost:3000/detail/{id}   // halaman detail car
