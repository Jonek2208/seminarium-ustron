<template>
    <SectionTemplate title="Materiały dydaktyczne">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div v-for="item in data" class="md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{{ item.name }}</h2>
                        <!-- <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p> -->
                        <a class="mt-3 text-indigo-500 flex items-center" :href="item.path">{{ getFileName(item.path) }}
                            <DocumentArrowDownIcon class="h-6 pl-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </SectionTemplate>
</template>
  
<script setup lang="ts">
import SectionTemplate from '@/components/SectionTemplate.vue';
import { DocumentArrowDownIcon } from '@heroicons/vue/24/outline'

const data = [
    {
        name: 'Poradnictwo chrześcijańskie - skrypt',
        path: '/study-resources/Poradnictwo_chrzescijanskie.pdf'
    },
    {
        name: 'Zbawienie - skrypt',
        path: '/study-resources/Zbawienie.pdf'
    },
    {
        name: 'Homiletyka - skrypt',
        path: '/study-resources/Homiletyka.pdf'
    },
    {
        name: 'Katechetyka - skrypt',
        path: '/study-resources/Katechetyka.pdf'
    },
    {
        name: 'Ogólny rozwój dziecka - prezentacja',
        path: '/study-resources/Ogolny_rozwoj_dziecka.ppt'
    },
    {
        name: 'Planowanie lekcji biblijnej - prezentacja',
        path: '/study-resources/PLANOWANIE LEKCJI BIBLIJNEJ.ppt'
    },
]

function getFileName(path: string) {
    const splitPath = path.split('/')
    const fileName = splitPath.pop()
    return fileName
}
</script>