<template>
    <SectionTemplate title="Program nauki">
        <div class="space-y-6">
            <div v-for="semester in semesters">
                <h2 class="font-bold">{{ semester.title }}</h2>
                <ul>
                    <li v-for="item in semester.items">{{ item }}</li>
                </ul>
            </div>
        </div>
    </SectionTemplate>
</template>
  
<script setup lang="ts">
import SectionTemplate from '@/components/SectionTemplate.vue';

const semesters: { title: string, items: string[] }[] = [
    {
        title: 'Nowy Testament (semestr wiosenny roku parzystego)',
        items: ['Świat Nowego Testamentu',
            'Historia kanonu Nowego Testamentu',
            'Przegląd ksiąg Nowego Testamentu',
            'Egzegeza wybranych ksiąg Nowego Testamentu']
    },
    {
        title: 'Stary Testament (semestr jesienny roku parzystego)',
        items: ['Historia narodu izraelskiego',
            'Historia przymierza',
            'Przegląd ksiąg Starego Testamentu',
            'Egzegeza wybranych ksiąg Starego Testamentu',]
    },
    {
        title: 'Teologia Systematyczna (semestr wiosenny rok nieparzystego)',
        items: ['Bibliologia - nauka o Biblii',
            'Chrystologia - nauka o Chrystusie',
            'Pneumatologia - nauka o Duchu Świętym',
            'Soteriologia - nauka o zbawieniu',
            'Eklezjologia - nauka o Kościele',
            'Antropologia Biblijna - nauka o człowieku w ujęciu biblijnym',
            'Eschatologia - nauka o czasach ostatecznych',]
    },
    {
        title: 'Teologia Praktyczna (semestr jesienny rok nieparzystego)',
        items: ['Katechetyka - nauczanie dzieci',
            'Homiletyka - przygotowywanie kazania',
            'Duszpasterstwo - prowadzenie w wierze',
            'Historia kościoła - wybrane zagadnienia protestantyzmu',
            'Hermeneutyka - objaśnianie i interpretacja Słowa Bożego',]
    },
]

</script>