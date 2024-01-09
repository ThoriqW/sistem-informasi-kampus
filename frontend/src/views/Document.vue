<script setup>
    import { ref } from 'vue';
    
    import Footer from '../components/Footer.vue';
    import Header from '../components/Header.vue';

    const a1sop = ref("A-1-SOP-SPMI-Pelaksanaan-Pembelajaran-2020.pdf");
    const b1sop = ref("B 1 SOP SPMI Pelaksanaan Penelitian - 2020.pdf");

</script>
    
<template>
    <Header />
    
    <div class="bg-secondary-color px-20 flex justify-center items-center py-11 border-t-2 border-white-color">
        <h1 class="text-3xl font-semibold text-primary-color">Dokumen<span class="text-slate-900">.</span></h1>
    </div>

    <div class="px-20 mt-20 flex">
        <div class="pb-2 flex items-center">
            <h1 class="text-3xl font-semibold mr-4">Pedoman SPMI</h1>
            <hr class="w-64 h-1 my-8 bg-secondary-color border-0 rounded">
        </div>
    </div>

    <div class="px-20 mt-10">
        <h1 class="text-2xl mb-5 font-medium">A1 SOP SPMI</h1>
        <div class="w-full flex justify-center">
            <div class="flex flex-col w-full">
                <embed :src="a1sop" type="application/pdf" height="800px"/>
            </div>
        </div>
    </div>

    <div class="px-20 mt-10">
        <h1 class="text-2xl mb-5 font-medium">B1 SOP SPMI</h1>
        <div class="w-full flex justify-center">
            <div class="flex flex-col w-full">
                <embed :src="b1sop" type="application/pdf" height="800px"/>
            </div>
        </div>
    </div>

    <div class="px-20 mt-10">
        <h1 class="text-2xl mb-5 font-medium">B1 SOP SPMI</h1>
        <div class="w-full flex justify-center">
            <div class="flex flex-col w-full">
                <embed :src="b1sop" type="application/pdf" height="800px"/>
            </div>
        </div>
    </div>
    
    
    <Footer />
</template>