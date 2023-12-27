<script setup>
</script>

<template>
    <div class="w-full max-w-[250px] h-screen border-r border-r-2">
        <div class="flex justify-center items-center px-5 py-10 bg-primary-gradient-color">
            <p class="text-xl text-center font-medium text-white">STMIK BINA MULIA PALU</p>
        </div>
        <div class="flex justify-center items-center pt-10 pb-10 flex flex-col">
            <img src="../../assets/images/thoriq.jpg" alt="foto-profil" class="rounded-full border border-2 border-primary-color w-24">
            <p class="mt-2 text-sub-font">Moh Thoriq</p>
            <p class="text-sub-font text-xs">Admin</p>
        </div>

        <div class="flex flex-col items-center text-sub-font">
            <RouterLink to="/admin/dashboard" class="flex w-[200px] mb-3 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z" />
                    <path d="M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z" />
                </svg>
                <p class="ml-2">Dashboard</p>
            </RouterLink>
            <RouterLink to="/admin/document" class="flex w-[200px] mb-3 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <p class="ml-2">Dokumen</p>
            </RouterLink>
            <RouterLink to="/admin/article" class="flex w-[200px] mb-3 p-2 rounded-xl">
                <p class="ml-2">Article</p>
            </RouterLink>
        </div>
    </div>

</template>