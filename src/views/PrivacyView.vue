<template>
    <SectionTemplate title="Polityka prywatności">
        <p class="pb-4">
            W związku z wejściem w życie Rozporządzenia Parlamentu Europejskiego i Rady 2016/679 z dnia 27 kwietnia 2016
            r. o ochronie danych osobowych osób fizycznych, informuję, że dane osobowe przetwarzane na niniejszej
            stronie internetowej są prawnie chronione:
        </p>
        <ol class="list-decimal">
            <li v-for="item in paragraphs" :key="item" class="mx-4">{{ item }}</li>
        </ol>
    </SectionTemplate>
</template>
  
<script setup lang="ts">
import SectionTemplate from '@/components/SectionTemplate.vue';
const paragraphs: string[] = [
    'Administratorem danych jest rektor uczelni: Seminarium Teologiczne z siedzibą w Ustroniu.',
    'Dane przetwarzane są w celu informowania o działalności związanej z wydarzeniami w ramach działalności statutowej zgodnej z Prawem Wewnętrznym Kościoła Zielonoświątkowego w RP oraz Regulaminem Ochrony Danych Osobowych obowiązujących w Kościele Zielonoświątkowym z siedzibą w Warszawie ul. Sienna 68/70.',
    'W ramach obowiązującego Regulaminu przysługuje prawo do cofnięcia zgody na przetwarzanie danych w dowolnym momencie.',
    'Masz prawo do dostępu do treści swoich danych osobowych, do ich sprostowania, usunięcia, ograniczenia przetwarzania oraz przeniesienia danych do innego administratora.',
    'Masz prawo do wniesienia skargi do Komisji Ochrony Danych Osobowych której Przewodniczący pełni funkcję Inspektora Ochrony Danych.',
    'Wskazane dane nie są profilowane, nie są przekazywane innym podmiotom lub administratorom bez zgody osoby której dotyczą.',
    'Zgromadzone dane osobowe będą przechowywane do czasu zakończenia wskazanego celu lub przez okres jednego roku, licząc od początku roku następującego po dacie wyrażenia zgody (w zależności od tego, który z tych okresów jest dłuższy).'
]

</script>