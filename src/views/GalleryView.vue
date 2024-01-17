<template>
    <SectionTemplate title="Galeria">
        <div data-te-lightbox-init class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
            <div v-for="image in data" class="h-full w-auto">
                <img :src="image.imageSrc" :data-te-img="image.imageSrc" :alt="image.name"
                    class="h-48 w-64 object-cover cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
                <p class="relative text-white -top-6 left-2">{{ image.name }}</p>
            </div>
        </div>
    </SectionTemplate>
</template>
  
<script setup lang="ts">
import SectionTemplate from "@/components/SectionTemplate.vue";
import { onMounted } from "vue"

onMounted(async () => {
    const te = await import('tw-elements')
    const initTE = te.initTE
    const Lightbox = te.Lightbox
    initTE({ Lightbox })
})




const data = [
    {
        imageSrc: '/photos/2023.jpg',
        name: 'Zakończenie 2023'
    },
    {
        imageSrc: '/photos/2022.jpg',
        name: 'Zakończenie 2022'
    },
    {
        imageSrc: '/photos/2021.jpg',
        name: 'Zakończenie 2021'
    },
    {
        imageSrc: '/photos/2020.jpg',
        name: 'Zakończenie 2020'
    },
    {
        imageSrc: '/photos/2018.jpg',
        name: 'Zakończenie 2018'
    },
    {
        imageSrc: '/photos/2017.jpg',
        name: 'Zakończenie 2017'
    },
    {
        imageSrc: '/photos/2015.jpg',
        name: 'Zakończenie 2015'
    },
]
</script>