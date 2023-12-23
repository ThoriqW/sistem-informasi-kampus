<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Pagination, Navigation];

</script>

<template>
        <swiper
            :modules="modules"
            :loop="true"
            navigation
            :pagination="{ clickable: true }"
        >
        <swiper-slide>
            <div class="bg-[url('assets/images/news-1.jpg')] h-[600px] bg-cover bg-center">
                <div class="h-full bg-slate-900/60 flex items-end py-5 px-20">
                    <div class="text-white-color">
                        <h1 class="text-4xl w-4/5 font-bold leading-normal tracking-wide">SOSIALISASI KAMPUS STMIK BINA MULIA PALU PADA
                            SMKN 1 TOLITOLI
                        </h1>
                        <p class="font-semibold">21 SEP, 2023</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-[url('assets/images/news-1.jpg')] h-[600px] bg-cover bg-center">
                <div class="bg-slate-900/[0.4] h-full flex items-end p-5">
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-[url('assets/images/news-1.jpg')] h-[600px] bg-cover bg-center">
                <div class="bg-slate-900/[0.4] h-full flex items-end p-5">
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<style>
    .swiper-button-prev, .swiper-button-next {
        --swiper-theme-color: #EAEFF2;
    }
    .swiper-button-prev {
        margin-left: 80px;
    }
    .swiper-button-next {
        margin-right: 80px;
    }
    .swiper-pagination-bullet {
    opacity: .4;
    }
    .swiper-pagination-bullet-active {
        background: #EAEFF2;
    }
</style>