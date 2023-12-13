<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <Header />
    
    <!-- Judul Halaman -->
    <div class="bg-secondary-color px-20 flex justify-center items-center py-11 border-t-2 border-white-color">
        <h1 class="text-3xl font-semibold text-primary-color">KONTAK<span class="text-slate-900">.</span></h1>
    </div>

    <!-- Google Maps STMIK -->
    <div class="px-20 flex justify-center mt-10">	
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.340505933597!2d119.87352531475359!3d-0.8867373993531257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bedd317bd70c7%3A0xe0e4269ff819d223!2sSTMIK%20Bina%20Mulia%20Palu!5e0!3m2!1sid!2sid!4v1618209550777!5m2!1sid!2sid" height="400" class="w-full" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
	</div>

    <!-- Email to campus -->
    <div class="grid grid-cols-2 gap-44 px-20 mt-10">
        <div class="flex flex-col">
            <div class="flex items-center mb-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-primary-color">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <div class="ml-5">
                    <p class="text-xl">Jl. Soeprapto No.38, Besusu Tengah</p>
                    <p class="text-sub-font text-xs">Kec. Palu Timur, Kota Palu, Sulteng</p>
                </div>
            </div>
            <div class="flex items-center mb-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-primary-color">
                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                </svg>
                <div class="ml-5">
                    <p class="text-xl">082296709235</p>
                    <p class="text-xs text-sub-font">Monday to Saturday, 10AM to 6PM</p>
                </div>
            </div>
            <div class="flex items-center mb-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-primary-color">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <div class="ml-5">
                    <p class="text-xl">thoriqwajedi88@gmail.com</p>
                    <p class="text-xs text-sub-font">Email us your query</p>
                </div>
            </div>
        </div>
        <form action="">
            <input type="text" class="w-full border-2 border-secondary-color focus:ring-0 focus:border-primary-color transition-colors text-sm py-3 mb-5" placeholder="Enter your name">
            <input type="text" class="w-full border-2 border-secondary-color focus:ring-0 focus:border-primary-color transition-colors text-sm py-3 mb-5" placeholder="Enter your email addres">
            <input type="text" class="w-full border-2 border-secondary-color focus:ring-0 focus:border-primary-color transition-colors text-sm py-3 mb-5" placeholder="Enter your subject">
            <textarea name="msg-contact" id="msg-conatact" cols="30" rows="10" class="w-full border-2 border-secondary-color focus:ring-0 focus:border-primary-color transition-colors text-sm mb-4" placeholder="Message"></textarea>
            <button class="bg-primary-color border border-primary-color text-white-color inline-block py-2 px-3 cursor-pointer hover:bg-transparent hover:text-primary-color transition-colors">
                <p class="text-xs">Read More</p>
            </button>
        </form>
    </div>

    <Footer />
</template>