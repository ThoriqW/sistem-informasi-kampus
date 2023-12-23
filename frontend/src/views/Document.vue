<script setup>
    import Footer from '../components/Footer.vue';
    import Header from '../components/Header.vue';
    import { VuePDF, usePDF } from '@tato30/vue-pdf'


    const { pdf, pages, info } = usePDF('A-1-SOP-SPMI-Pelaksanaan-Pembelajaran-2020.pdf')

    console.log(`Document has ${pages} pages`)
    console.log(`Document info: ${info}`);
    console.log(pdf)

    function onLoaded(value) {
       console.log(value)
    }

    // const a1sop = ref("A-1-SOP-SPMI-Pelaksanaan-Pembelajaran-2020.pdf")

</script>
    
<template>
    <Header />

    <!-- Judul Halaman -->
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
        <h1 class="text-2xl mb-5">A1 SOP SPMI</h1>
        <div class="w-full flex justify-center">
            <div class="flex flex-col">
                <VuePDF :pdf="pdf" @loaded="onLoaded" />
                <a class="bg-gradient-to-r text-center from-primary-color to-primary-gradient-color hover:from-transparent hover:to-transparent hover:ring-1 hover:ring-primary-color hover:ring-inset text-white-color inline-block py-2 px-3 cursor-pointer hover:text-primary-color transition-colors">
                    <p class="text-xs">Download PDF</p>
                </a>
            </div>
        </div>
    </div>
    
    <Footer />
</template>