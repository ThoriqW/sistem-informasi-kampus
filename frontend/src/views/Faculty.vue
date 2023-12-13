<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <Header />

    <!-- Judul Halaman -->
    <div class="bg-secondary-color px-20 flex justify-center items-center py-11 border-t-2 border-white-color">
        <h1 class="text-3xl font-semibold text-primary-color">FAKULTAS<span class="text-slate-900">.</span></h1>
    </div>

    <!-- Teknik Informatika -->
    <div class="px-20 mt-20 flex justify-center">
        <div class="border-b-2 border-primary-color pb-2 w-4/12 flex flex-col items-center">
            <h1 class="text-3xl font-semibold">Teknik Informatika<span class="text-primary-color">.</span></h1>
            <p class="text-sub-font">Program Sarjanan (S1)</p>
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

    <!-- Sistem Informasi -->
    <div class="px-20 mt-20 flex justify-center">
    <div class="border-b-2 border-primary-color pb-2 w-4/12 flex flex-col items-center">
        <h1 class="text-3xl font-semibold">Sistem Informasi<span class="text-primary-color">.</span></h1>
        <p class="text-sub-font">Program Sarjanan (S1)</p>
    </div>
    </div>
    <div class="px-20 grid grid-cols-2 gap-5 mt-10">
        <div class="flex flex-col justify-center text-right">
            <p class="text-sub-font">Sebagai salah satu institusi pendidikan tinggi yang berorientasi pada sistem pendidikan berbasis penelitian, Universitas Indonesia selalu mengupayakan agar sistem pendidikan yang ada mampu mempersiapkan mahasiswa-mahasiswinya bersaing secara global dalam segala aspek, baik di bidang ilmu sains, sosial humaniora, dan kedokteran.</p>
            <div class="mt-5">
                <a class="bg-primary-color border border-primary-color text-white-color inline-block py-2 px-3 cursor-pointer hover:bg-transparent hover:text-primary-color transition-colors">
                    <p class="text-xs">Read More</p>
                </a>
            </div>
        </div>
        <img src="../assets/images/img-struktur-organisasi.jpg" alt="">
    </div>

    <Footer />
</template>
