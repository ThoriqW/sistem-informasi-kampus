<script setup>
import Sidebar from '../component/Sidebar.vue';
import { ref } from 'vue';

let resultPdf = ref(false);

</script>

<template>

<div class="flex">
        <Sidebar />
        <div class="flex-grow p-5 text-sub-font">
            <div class="flex justify-between">
                <p class="text-lg">Document</p>
                <div class="flex items-center">
                    <a class="bg-gradient-to-r from-primary-color to-primary-gradient-color hover:from-transparent hover:to-transparent hover:ring-1 hover:ring-primary-color hover:ring-inset text-white-color inline-block py-2 px-3 cursor-pointer hover:text-primary-color transition-colors rounded-xl">
                        <p class="text-xs">Edit Profil</p>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-2">
                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <hr class="mb-5 mt-5 border-b border-2">
            <div class="w-1/2">
                <form action="">
                    <div class="flex items-center mb-10">
                        <h1 class="text-lg mr-5">Upload Document</h1>
                        <hr class="w-64 h-1 bg-primary-color border-0 rounded">
                    </div>
                    <label class="font-medium text-lg" for="title">Title</label>
                    <textarea id="title" rows="4" class="block p-2.5 mt-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-primary-color" placeholder="Write your title here..."></textarea>
                </form>
                <div class="mt-10">
                    <div class="mb-10">
                        <div v-if="resultPdf">
                            <p>tes</p>
                        </div>
                        <div v-else>
                            <p>Upload Your Document..</p>
                        </div>
                    </div>
                    <a class="bg-gradient-to-r text-center from-primary-color to-primary-gradient-color hover:from-transparent hover:to-transparent hover:ring-1 hover:ring-primary-color hover:ring-inset text-white-color inline-block py-2 px-3 cursor-pointer hover:text-primary-color transition-colors">
                        <p class="text-xs">Choose Your PDF</p>
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>