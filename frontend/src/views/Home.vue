<script setup>
import Header from "../components/Header.vue";
import SwiperNews from "../components/SwiperNews.vue";
import PaginationNews from "../components/PaginationNews.vue";
import Footer from "../components/Footer.vue";

</script>

<template>
    <Header />

    <SwiperNews />

    <div class="px-20 mt-20">
        <div class="flex items-center justify-center">
            <h1 class="text-2xl text-primary-color font-bold mr-2">BERITA TERBARU</h1>
            <hr class="w-64 h-1 my-8 bg-secondary-color border-0 rounded">
        </div>
        <PaginationNews />
    </div>
    <div class="px-20 mt-20 bg-secondary-color">
        <div class="flex items-center justify-center mt-10">
            <h1 class="text-2xl text-primary-color font-bold mr-2">VIDEO</h1>
            <hr class="w-64 h-1 my-8 bg-white-color border-0 rounded">
        </div>
    </div>
      
    <Footer />
</template>