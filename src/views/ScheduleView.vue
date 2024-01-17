<template>
    <SectionTemplate title="Terminy zjazdów">
        <div class="flex flex-wrap space-y-8">
            <div v-for="item in zjazdy" class="md:w-2/3">
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Od {{
                            item.from.toLocaleDateString() }} do {{ item.to.toLocaleDateString()
    }}</h2>
                        <a :href="makeLink(item)" class="text-indigo-600">Dodaj do kalendarza</a>
                        <!-- <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p> -->
                        <!-- <a class="mt-3 text-indigo-500 flex items-center" :href="item.path">{{ getFileName(item.path) }}
                                <DocumentArrowDownIcon class="h-6 pl-2" />
                            </a> -->
                    </div>
                </div>
            </div>
        </div>
    </SectionTemplate>
</template>
  
<script setup lang="ts">
import SectionTemplate from '../components/SectionTemplate.vue';

type Meeting = { from: Date, to: Date }

const zjazdy: Meeting[] = [
    // {
    //     from: new Date('2023-11-09'),
    //     to: new Date('2023-11-11')
    // },
    {
        from: new Date('2024-02-22'),
        to: new Date('2024-02-24')
    },
    {
        from: new Date('2024-05-16'),
        to: new Date('2024-05-18')
    },
    {
        from: new Date('2024-08-29'),
        to: new Date('2024-08-31')
    },
    {
        from: new Date('2024-11-07'),
        to: new Date('2024-11-09')
    }
]

function nextDay(date: Date) {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate() + 1
    return new Date(year, month, day)
}

function getDateStr(date: Date) {
    var mm = date.getMonth() + 1
    var dd = date.getDate()

    return [date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('')
};

function makeLink(meeting: Meeting) {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${getDateStr(meeting.from)}%2F${getDateStr(nextDay(meeting.to))}&details=&location=Ustro%C5%84&text=Zjazd%20seminaryjny`
}
</script>