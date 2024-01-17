<template>
    <SectionTemplate title="O seminarium">
        <div class="space-y-3">
            <p class="w-auto">
                Nauka w Seminarium trwa 2 lata i odbywa się w systemie zaocznym. Studenci spotykają się dwa razy w
                semestrze. Każde spotkanie
                seminaryjne
                trwa 3 dni. Podczas seminariów odbywają się wykłady, ćwiczenia i egzaminy. Szczególną troskę
                przywiązujemy do duchowego rozwoju studentów. Realizujemy to przez wspólną modlitwę, społeczność i
                duszpasterstwo.
                Jest to także czas budowania wiary i odbierania od Boga zachęty, jak i kierownictwa dla osobistego
                życia.
            </p>
            <p class="w-auto">
                Nasi studenci w przerwach pomiędzy seminariami otrzymują lektury oraz zadania do wykonania w domu.
                Wypracowania wysyłają do wykładowcy drogą elektroniczną.
                Nadesłanie prac jest wymagane do zaliczenia semestru. Każdy semestr kończy się egzaminem pisemnym.
            </p>
        </div>
    </SectionTemplate>
    <SectionTemplate title="W co wierzymy">
        <ul role="list" class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <li v-for="belief in beliefs">
                <div class="pl-9 relative">
                    <CheckCircleIcon class="text-lime-700 w-5 h-5 absolute top-1 left-1" />
                    <div>{{ belief }}</div>
                </div>
            </li>
        </ul>
    </SectionTemplate>
    <SectionTemplate title="Historia seminarium">
        <div class="">
            <div v-for="item in historia" class="flex relative py-6 sm:items-center md:w-2/3">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                    class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                </div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <!-- <div
                        class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div> -->
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{{ item.date }}</h2>
                        <p class="leading-relaxed">{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </SectionTemplate>
    <SectionTemplate title="Kadra">
        <ul role="list" class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <li v-for="person in getStaff()" :key="person.name">
                <div class="w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team"
                            class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            :src="person.imageUrl()">
                        <div class="flex-grow">
                            <p class="text-indigo-600">{{ person.title }}</p>
                            <h2 class="text-gray-900 title-font font-medium">{{ person.name }}</h2>
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    </SectionTemplate>
</template>
  
<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { getStaff } from '../data';
import SectionTemplate from '../components/SectionTemplate.vue'

const beliefs = [
    'Wierzymy, że Pismo Święte - Biblia - jest Słowem Bożym, nieomylnym i natchnionym przez Ducha Świętego, i stanowi jedyną normę wiary i życia.',
    'Wierzymy w Boga w Trójcy Świętej jedynego, w osobach Ojca i Syna, i Ducha Świętego.',
    'Wierzymy w Synostwo Boże Jezusa Chrystusa, poczętego z Ducha Świętego, narodzonego z Marii Dziewicy; w Jego śmierć na krzyżu za grzech świata i Jego zmartwychwstanie w ciele; w Jego wniebowstąpienie i powtórne przyjście w chwale.',
    'Wierzymy w pojednanie z Bogiem przez opamiętanie i wiarę w ewangelię, w chrzest i Wieczerzę Pańską.',
    'Wierzymy w chrzest Duchem Świętym, przeżywanie pełni Ducha i Jego darów.',
    'Wierzymy w jeden Kościół, święty, powszechny i apostolski.',
    'Wierzymy w uzdrowienie chorych jako znak łaski i mocy Bożej.',
    'Wierzymy w zmartwychwstanie i życie wieczne.']

const historia = [
    {
        date: '1983',
        title: 'Powstanie Seminarium i pierwsze zajęcia w Boguszowie-Gorcach'
    },
    {
        date: '1985',
        title: 'Przeniesienie siedziby Seminarium do Ustronia'
    },
    {
        date: '1993-1995',
        title: 'Filia Seminarium w Terespolu'
    },
    {
        date: '2007-2009',
        title: 'Filia Seminarium w Słupsku'
    },
    {
        date: '2010-2012',
        title: 'Filia Seminarium w Żarach'
    },
]

</script>