<script setup>
import { computed, ref } from 'vue';

const currentDate = computed(() => {
  var today = new Date();
  var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  var formattedDate = today.toLocaleString('id-ID', options);
  return formattedDate
})

const isDropdownDokumenVisible = ref(false);
const isDropdownFacultyVisible = ref(false);

const isSubDropdownDokumenVisibleSOP = ref(false);

const showDropdown = (menu) => {
  console.log(menu)
  if(menu == "FAKULTAS"){
    isDropdownFacultyVisible.value = true;
  } else if (menu == "DOKUMEN") {
    isDropdownDokumenVisible.value = true;
  } else if (menu == "SOP"){
    isSubDropdownDokumenVisibleSOP.value = true;
  }
}

const hideDropdown = (menu) => {
  if(menu == "FAKULTAS"){
    isDropdownFacultyVisible.value = false;
  } else if (menu == 'DOKUMEN') {
    isDropdownDokumenVisible.value = false;
  } else if (menu == "SOP"){
    isSubDropdownDokumenVisibleSOP.value = false;
  }
}

</script>

<template>
  <div class="flex-column bg-secondary-color">
    <div class="px-20 py-2 flex justify-between items-center">
      <p>{{ currentDate }}</p>
      <router-link to="/login" class="flex items-center bg-gradient-to-r from-primary-color to-primary-gradient-color hover:from-transparent hover:to-transparent hover:ring-1 hover:ring-primary-color hover:ring-inset text-white-color inline-block py-1 px-2 cursor-pointer hover:text-primary-color transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
        <p class="ml-1 text-xs">
          Login
        </p>
      </router-link>
    </div>
    <div class="flex h-[250px]">
      <img loading="lazy" src="../assets/images/bg-header.jpg" alt="bg-header" class="w-full object-cover">
    </div>
    <div class="flex justify-between px-20 shadow-lg">
      <div class="flex font-semibold">
        <router-link class="py-3 px-5 hover:bg-primary-color hover:text-white-color active:bg-primary-color transition-colors" to="/">HOME</router-link>
        <router-link class="py-3 px-5 hover:bg-primary-color hover:text-white-color transition-colors" to="/about">TENTANG BMP</router-link>
        <div class="relative z-50" @mouseover="showDropdown('FAKULTAS')" @mouseleave="hideDropdown('FAKULTAS')">
          <router-link class="py-3 px-5 inline-block hover:bg-primary-color hover:text-white-color transition-colors" to="/faculty">FAKULTAS</router-link>
          <div v-if="isDropdownFacultyVisible" class="bg-secondary-color flex flex-col absolute w-60 shadow-lg">
            <a href="" class="px-4 py-3 hover:bg-primary-color hover:text-white-color text-sm">TEKNIK INFORMATIKA</a>
            <a href="" class="px-4 py-3 hover:bg-primary-color hover:text-white-color text-sm">SISTEM INFORMASI</a>
          </div>
        </div>
        <div class="relative z-50" @mouseover="showDropdown('DOKUMEN')" @mouseleave="hideDropdown('DOKUMEN')">
          <router-link class="py-3 px-5 inline-block hover:bg-primary-color hover:text-white-color transition-colors" to="/document">DOKUMEN</router-link>
          <div v-if="isDropdownDokumenVisible" class="bg-secondary-color flex flex-col absolute w-60 shadow-lg">
            <router-link to="/document/document-spmi" class="px-4 py-3 hover:bg-primary-color hover:text-white-color text-sm">KEBIJAKAN SPMI</router-link>
            <router-link to="/document/document-spmi" class="px-4 py-3 hover:bg-primary-color hover:text-white-color text-sm">PEDOMAN SPMI</router-link>
            <div @mouseover="showDropdown('SOP')" @mouseleave="hideDropdown('SOP')" class="relative px-4 py-3 hover:bg-primary-color hover:text-white-color text-sm">
              <p>SOP</p>
              <div class="absolute left-[100%] w-full top-0">
                <div class="flex flex-col">
                  <router-link v-if="isSubDropdownDokumenVisibleSOP" to="/document/document-spmi" class=" px-4 py-3 hover:bg-primary-color hover:text-white-color text-black text-sm bg-secondary-color">REKTORAT</router-link>
                  <router-link v-if="isSubDropdownDokumenVisibleSOP" to="/document/document-spmi" class=" px-4 py-3 hover:bg-primary-color hover:text-white-color text-black text-sm bg-secondary-color">WAKIL REKTOR I BIDANG AKADEMIK</router-link>
                  <router-link v-if="isSubDropdownDokumenVisibleSOP" to="/document/document-spmi" class=" px-4 py-3 hover:bg-primary-color hover:text-white-color text-black text-sm bg-secondary-color">WAKIL REKTOR II BIDANG AKADEMIK</router-link>
                  <router-link v-if="isSubDropdownDokumenVisibleSOP" to="/document/document-spmi" class=" px-4 py-3 hover:bg-primary-color hover:text-white-color text-black text-sm bg-secondary-color">FAKULTAS DAN PROGRAM STUDI</router-link>
                  <router-link v-if="isSubDropdownDokumenVisibleSOP" to="/document/document-spmi" class=" px-4 py-3 hover:bg-primary-color hover:text-white-color text-black text-sm bg-secondary-color">BADAN PENJAMINAN MUTU</router-link>
                  <router-link v-if="isSubDropdownDokumenVisibleSOP" to="/document/document-spmi" class=" px-4 py-3 hover:bg-primary-color hover:text-white-color text-black text-sm bg-secondary-color">BAAK</router-link>
                  <router-link v-if="isSubDropdownDokumenVisibleSOP" to="/document/document-spmi" class=" px-4 py-3 hover:bg-primary-color hover:text-white-color text-black text-sm bg-secondary-color">PERPUSTAKAAN</router-link>
                </div>
              </div>
            </div>
            <router-link to="/document/document-spmi" class="px-4 py-3 hover:bg-primary-color hover:text-white-color text-sm">MANUAL DAN STANDAR SPMI</router-link>
          </div>
        </div>
        <router-link class="py-3 px-5 hover:bg-primary-color hover:text-white-color transition-colors" to="/contact">KONTAK</router-link>
      </div>
      <div class="flex items-center">
        <input class="border border-2 py-1 focus:border-primary-color focus:ring-0 border-white-color bg-secondary-color transition-colors" placeholder="Search" type="text">
      </div>
    </div>
  </div>
</template>
