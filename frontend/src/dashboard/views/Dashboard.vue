<script setup>
import Sidebar from '../component/Sidebar.vue';
</script>

<template>
    <div class="flex">
        <Sidebar />
        <div class="flex-grow p-5 text-sub-font">
            <div class="flex justify-between">
                <p class="text-lg">Dashboard</p>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-2">
                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <hr class="mb-5 mt-5 border-b border-2">
            <div class="grid grid-cols-3 gap-4">
                <div class="p-5 flex flex-col justify-between bg-gradient-to-r from-primary-color to-primary-gradient-color rounded-xl">
                    <p class="text-[#104F32] font-thin">Jumlah Dokumen</p>
                    <p class="text-4xl mb-4 mt-4 text-white font-bold">18</p>
                    <p class="text-white font-bold">Dokumen</p>
                </div>
                <div class="p-5 bg-secondary-color flex flex-col justify-between rounded-xl">
                    <p class="font-thin">Jumlah Article</p>
                    <p class="text-4xl mb-4 mt-4  text-primary-color font-bold">25</p>
                    <p class="font-bold">Article</p>
                </div>
                <div class="p-5 flex flex-col justify-between border border-2 border-primary-color rounded-xl">
                    <p class="font-thin">Article Aktif</p>
                    <p class="text-4xl mb-4 mt-4  text-primary-color font-bold">19</p>
                    <p class="font-bold">Aktif</p>
                </div>
            </div>
        </div>
    </div>
</template>


