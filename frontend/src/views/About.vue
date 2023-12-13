<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <Header />

    <!-- Judul Halaman -->
    <div class="bg-secondary-color px-20 flex justify-center items-center py-11 border-t-2 border-white-color">
        <h1 class="text-3xl font-semibold text-primary-color">TENTANG STMIK BMP<span class="text-slate-900">.</span></h1>
    </div>

    <!-- Sejarah Section -->
    <div class="bg-cover flex justify-center mt-20 bg-[url('assets/images/bg-sejarah.jpg')] bg-fixed">
        <div class="flex flex-col items-center bg-slate-900/[0.4] px-20 py-40">
            <div class="border-b-2 border-primary-color pb-2 w-4/12 flex justify-center">
                <h1 class="text-3xl font-semibold text-white-color">Sejarah<span class="text-primary-color">.</span></h1>
            </div>
            <div class="mt-5">
                <p class="text-center text-white-color">Dalam menjalankan amanah berdasarkan peraturan pemerintah serta peraturan perundang-undangan bahwa setiap perguruan tinggi wajib memiliki unit penjaminan mutu, maka pada tahun 2008 STMIK Nusa Mandiri membentuk unit penjaminan mutu yang bernama Lembaga Penjamin Mutu Internal (LPMI) pada tanggal 5 Agustus 2008 dengan berdasarkan Surat Keputusan Ketua STMIK Nusa Mandiri Jakarta Nomor 314/A/1.01/STMIK-NM/VIII/2008.</p>
            </div>
            <div class="mt-5">
                <a class="bg-primary-color border border-primary-color text-white-color inline-block py-2 px-3 cursor-pointer hover:bg-transparent hover:border-white-color transition-colors">
                    <p class="text-xs">Read More</p>
                </a>
            </div>
        </div>
    </div>

    <!-- Visi Misi Section -->
    <div class="px-20 grid grid-cols-2 gap-5 mt-20">
        <div class="bg-primary-color flex flex-col items-center px-10 py-11">
            <h1 class="text-white-color text-3xl font-semibold mb-5">Visi<span class="text-slate-900">.</span></h1>
            <p class="text-center text-white-color">Menjadi pusat ilmu pengetahuan, teknologi, dan kebudayaan yang unggul dan berdaya saing, melalui upaya mencerdasakan kehidupan bangsa untuk meningkatkan kesejahteraan masyarakat, sehingga berkontribusi bagi pembangunan masyarakat Indonesia dan dunia</p>
        </div>
        <div class="bg-secondary-color flex flex-col px-10 py-11 items-center">
            <h1 class="text-3xl font-semibold mb-5">Misi<span class="text-primary-color">.</span></h1>
            <ol type="1" class="text-sub-font">
                <li>Menyediakan akses yang luas dan adil, serta pendidikan dan pengajaran yang berkualitas.</li>
                <li>Menyediakan akses yang luas dan adil, serta pendidikan dan pengajaran yang berkualitas.
                    Menyelenggarakan kegiatan Tridharma yang bermutu dan relevan dengan tantangan nasional serta global.
                </li>
            </ol>
        </div>
    </div>

    <!-- Sturktur Organisasi -->
    <div class="mt-20 px-20 flex justify-center">
        <div class="border-b-2 border-primary-color pb-2 w-4/12 flex justify-center">
            <h1 class="text-3xl font-semibold">Struktur Organisasi<span class="text-primary-color">.</span></h1>
        </div>
    </div>
    <div class="px-20 grid grid-cols-2 gap-5 mt-10">
        <img src="../assets/images/img-struktur-organisasi.jpg" alt="">
        <div class="flex flex-col justify-center">
            <p class="text-sub-font">Sebagai salah satu institusi pendidikan tinggi yang berorientasi pada sistem pendidikan berbasis penelitian, Universitas Indonesia selalu mengupayakan agar sistem pendidikan yang ada mampu mempersiapkan mahasiswa-mahasiswinya bersaing secara global dalam segala aspek, baik di bidang ilmu sains, sosial humaniora, dan kedokteran.</p>
            <div class="mt-5">
                <a class="bg-primary-color border border-primary-color text-white-color inline-block py-2 px-3 cursor-pointer hover:bg-transparent hover:text-primary-color transition-colors">
                    <p class="text-xs">Read More</p>
                </a>
            </div>
        </div>
    </div>

    <Footer />
</template>

<style scoped>
ol {
   list-style-type: decimal;
}
</style>