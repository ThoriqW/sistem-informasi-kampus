<script setup>
import { ref, computed } from "vue";

const items = ref ([
    {
        title: "SOSIALISASI KAMPUS STMIK BINA MULIA PALU PADA SMKN 1 TOLITOLI",
        subTitle: "Lorem ipsum dolor sit amet consectetur. Amet neque ut tempus feugiat diam. Arcu tellus pellentesque purus fermentum bibendum. ",
        image: "news-1.jpg"
    },
    {
        title: "SOSIALISASI KAMPUS STMIK BINA MULIA PALU PADA SMKN 1 TOLITOLI",
        subTitle: "Lorem ipsum dolor sit amet consectetur. Amet neque ut tempus feugiat diam. Arcu tellus pellentesque purus fermentum bibendum. ",
        image: "news-1.jpg"
    },
    {
        title: "SOSIALISASI KAMPUS STMIK BINA MULIA PALU PADA SMKN 1 TOLITOLI",
        subTitle: "Lorem ipsum dolor sit amet consectetur. Amet neque ut tempus feugiat diam. Arcu tellus pellentesque purus fermentum bibendum. ",
        image: "news-1.jpg"
    },
    {
        title: "SOSIALISASI KAMPUS STMIK BINA MULIA PALU PADA SMKN 1 TOLITOLI",
        subTitle: "Lorem ipsum dolor sit amet consectetur. Amet neque ut tempus feugiat diam. Arcu tellus pellentesque purus fermentum bibendum. ",
        image: "news-1.jpg"
    },
    {
        title: "SOSIALISASI KAMPUS STMIK BINA MULIA PALU PADA SMKN 1 TOLITOLI",
        subTitle: "Lorem ipsum dolor sit amet consectetur. Amet neque ut tempus feugiat diam. Arcu tellus pellentesque purus fermentum bibendum. ",
        image: "news-1.jpg"
    },
]);

let itemPerPage = ref(3);

const displayedItems = computed(() => {
    return items.value.slice(0, itemPerPage.value)
});

const showMoreItem = () => {
    if(itemPerPage.value <= items.value.length){
        itemPerPage.value++
    }
}

const getImageUrl = (path) => {
 return new URL(`../assets/images/${path}`, import.meta.url).href;
};
</script>

<template>
    <div class="flex justify-center">
        <TransitionGroup tag="ul" name="list" class="grid grid-cols-3 gap-3">
            <div v-for="item in displayedItems" :key="item">
                <div class="flex flex-col mb-5 items-center w-96">
                    <img :src="getImageUrl(item.image)" alt="news-pic">
                    <div class="py-5">
                        <a class="bg-gradient-to-r from-primary-color to-primary-gradient-color inline-block py-1 px-2 mb-3">
                            <p class="text-xs text-white-color">KEGIATAN SOSIALISASI</p>
                        </a>
                        <h1 class="text-xl font-semibold mb-3">{{ item.title }}</h1>
                        <p class="text-sub-font text-sm mb-3">{{ item.subTitle }}</p>
                        <a class="bg-gradient-to-r from-primary-color to-primary-gradient-color hover:from-transparent hover:to-transparent hover:ring-1 hover:ring-primary-color hover:ring-inset text-white-color inline-block py-2 px-3 cursor-pointer hover:text-primary-color transition-colors">
                            <p class="text-xs">Read More</p>
                        </a>
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </div>
    <div class="flex justify-center">
        <button class="text-primary-color" @click="showMoreItem">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-bounce">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
        </button>
    </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>