<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        {{ article?.title }}
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 items-stretch">
        <div class="flex min-w-0 gap-x-4 mt-4">
          <img v-if="author?.imageUrl()"
            class="h-12 w-12 flex-none rounded-full bg-gray-50"
            :src="author?.imageUrl()"
            alt=""
          />
          <UserCircleIcon v-else class="h-16 w-16 text-gray-200"/>
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ author?.name }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {{ author?.title }}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" class="text-gray-500">{{
            article?.date.toLocaleDateString()
          }}</time>
          <a v-for="tag in article?.tags"
            href="#"
            class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >{{ tag }}</a>
        </div>
      </div>
      <div
        class="mt-6 max-w-2xl space-y-2 list-disc article"
        v-html="articleContent"
      ></div>
      <div v-if="images" class="mt-6">
        <h1 class="my-2 text-2xl font-medium tracking-tight text-gray-900">
          Zdjęcia
        </h1>
        <div
          data-te-lightbox-init
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center"
        >
          <div v-for="image in images" class="h-full w-auto">
            <img
              :src="image"
              :data-te-img="image"
              class="h-48 w-64 object-cover cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.article ul {
  list-style-type: disc;
}

.article ol {
  list-style-type: decimal;
}

.article ul {
  margin-left: 1rem;
}

.article ol {
  margin-left: 1rem;
}

.article h2 {
  font-weight: 500;
  padding-top: 1.75rem;
}

.article h3 {
  font-weight: 400;
  padding-top: 1.5rem;
  padding-bottom: 0.25rem;
}

.article a {
  color: rgb(79, 70, 229);
}

.article a:hover {
  color: rgb(99, 102, 241);
}

.article hr {
  border-width: 2px;
}

.article blockquote {
  padding-left: 1rem;
  border-left-width: 2px;
}
</style>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { people } from "../data";
import { articles } from "../data";
import { marked } from "marked";
import {
  UserCircleIcon
} from '@heroicons/vue/24/solid'
import { onMounted } from "vue";

onMounted(async () => {
  const te = await import("tw-elements");
  const initTE = te.initTE;
  const Lightbox = te.Lightbox;
  initTE({ Lightbox });
});

const route = useRoute();

// const articles = [
//     {
//         articleId: '0',
//         authorId: 0,
//         title: 'Historia Seminarium Teologicznego w Ustroniu',
//         date: '18 października 2023',
//         content: 'Pojawiła się myśl i pragnienie u pastorów: Mariana Suskiego, Michała Hydzika, Edwarda Lorka i Kazimierza Sosulskiego o zorganizowaniu szkoły - Korespondencyjnego Kursu Biblijnego w ramach Zjednoczonego Kościoła Ewangelicznego.\nPastor Marian Suski na XXX-lecie Seminarium, wspomina „Kiedy postawiłem na Prezydium ZKE wniosek o utworzenie szkoły, patrzono na mnie z powątpiewaniem. Jednak udało się. Po tylu latach widzę olbrzymie Boże błogosławieństwo i inspirację Ducha Świętego, że mogliśmy wychować tak wielu duchownych i ludzi służby.”.\nKorespondencyjny Kurs Biblijny miał służyć dwóm ugrupowaniom w ramach ZKE o poglądach zielonoświątkowych, tj. „Stanowczym Chrześcijanom” oraz „Chrześcijanom Wiary Ewangelicznej”.\nZadaniem Kursu było przygotowanie sług Bożych do codziennej służby w zborach, a także kształcenie nowych liderów w znajomości Słowa Bożego i teologii. Adresowany był w pierwszej kolejności do czynnych pastorów i zastępców pastorów, w późniejszych latach do osób zaangażowanych w służbę w zborach. W tym czasie była wielka potrzeba kształcenia biblijno-teologicznego duchownych Kościoła, którego w latach osiemdziesiątych większość pastorów nie posiadała.\nW przygotowanie materiałów dla Kursu zaangażowani byli między innymi: Marian Suski, Edward Lorek, Kazimierz Sosulski, Tomasz Guńka, Marek Kominek, Jolanta Kominek, Andrzej Luber.\nW roku 1983 inicjatorzy Kursu zaproponowali jego prowadzenie Andrzejowi Luberowi, absolwentowi ChAT w Warszawie, który w listopadzie 1983 r. uzyskał tytuł magistra teologii ewangelickiej. Na prezbitera Zjednoczonego Kościoła Ewangelicznego ordynowany 6 marca 1988 r.\nKorespondencyjny Kurs Biblijny wspierali od strony dydaktycznej i materialnej pastorzy i liderzy Zborów Bożych z Anglii. Początkowo pod przewodnictwem Johna Willdriana - dyrektora Misji Zborów Bożych w Anglii, później Rona Hibberta. Ta współpraca trwała do przełomu 1991/92 roku.\nSeminarium do roku 1985 nie miało stałej siedziby. Zajęcia odbywały się w różnych regionach naszego kraju. Pierwsze zajęcia miały miejsce w Boguszowie-Gorcach, ośrodku rekreacyjnym naszego Kościoła. Następne w okolicach Warszawy i Wiśle Czarne u braterstwa Procnerów.\nW maju 1985 roku Andrzej Luber został powołany na drugiego pastora w Ustroniu. Od tego czasu siedzibą Seminarium jest budynek Zboru Kościoła Zielonoświątkowego w Ustroniu przy ulicy Daszyńskiego 75.\nKorespondencyjny Kurs Biblijny w roku 1987 zmienił nazwę na Korespondencyjne Seminarium Biblijne a od roku 1988 przyjęto nazwę Zaoczne Seminarium Teologiczne. Od 1995 roku funkcjonuje jako Seminarium Teologiczne w Ustroniu. Należy zaznaczyć, że w trakcie pracy Seminarium w latach 1991/1992 zaczęto kłaść większy nacisk na biblistykę i zagadnienia teologiczne.\nW Seminarium zaangażowani byli w prace organizacyjne i administracyjne: Jolanta i Marek Kominkowie, Adam Bogusz, Marian Proszyk i pastor Józef Hydzik. Od roku 1988 stałym współpracownikiem, obecnie dziekanem, został diakon Bogusław Helbin, absolwent ChAT w Warszawie. Do grona stałych pracowników w roku 1994 dołączył pastor Piotr Grzesiek, absolwent Warszawskiego Seminarium Teologicznego w Warszawie.\nPo odejściu z Seminarium pastora Józefa Hydzika w 1996 roku do grona stałych pracowników dołączyła diakonisa Grażyna Luber, która nadal zaangażowana jest w działalność Seminarium.\nOd września 2000 r. podjęto współpracę z Misją Pokoleń, która trwała do 2016 roku. Do tej chwili nadal współpracuje z nami mgr Agata Rysiewicz prowadząc zajęcia z Katechetyki.\nPoczątkowo w Seminarium, usługiwali zagraniczni wykładowcy, pastorzy, nauczyciele Słowa ze Zborów Bożych z Anglii tacy jak: Artur Hibbert, Peter Johnson, Paul Newbery, Andrew Perfitt, Ian Hicks, Ernst i Andrew Shermanowie i Stefan Sos z Kanady. Ron Hibbert był po Johnie Willdrianie dyrektorem Misji Zborów Bożych w Anglii, który organizował przyjazdy gości. Ich wykłady, znajomość i poznanie Słowa Bożego były dla uczestników niezwykle inspirujące i motywujące do służby na niwie Bożej. Tłumaczyli ich bracia: pastor Leszek Mocha i pastor Janusz Cieplik.\nWśród polskich wykładowców należy wymienić: Michała Hydzika, Mariana Suskiego, Edwarda Lorka, Kazimierza Sosulskiego, Edwarda Czajko, Mieczysława Czajko, Józefa Hydzika, Anatola Matiaszuka, Mieczysława Kwietnia, Wojciecha Gajewskiego (naszego absolwenta), Leszka Mochę, Edwarda Pawłowskiego, Pawła Sochackiego, Mariusza Muszczyńskiego, Agatę Rysiewicz, Emanuela Machnickiego, Piotra Borka, Andrzeja Michnika, Ryszarda Wołkiewicza, Stefana Tokarskiego, Pawła Kościukiewicza, Alfreda Richtera oraz braci prowadzących Seminarium: Bogusława Helbina, Piotra Grześka i Andrzeja Lubera.\nSeminarium administracyjnie i gospodarczo wspierali: Jan Śliwka, Grażyna Helbin, Rachela Luber, Tymoteusz Luber, Beniamin Luber, Aleksandra Luber, Krystyna Cieślar, Maria Legierska, Alicja Jończyk i inni.\nW latach 1993-1995 Seminarium otworzyło filie w Terespolu, w latach 2007-2009 w Słupsku, a w latach 2010-2012 w Żarach. Zaznaczyć należy, że w Seminarium studiowali również Polacy, mieszkający w Anglii, Niemczech, Austrii i Czechach.\nNauka w Seminarium trwa dwa lata. Studenci spotykają się dwa razy w semestrze. Każde spotkanie seminaryjne trwa trzy dni. Podczas zajęć odbywają się wykłady, ćwiczenia i egzaminy. Każdy z semestrów poświęcony jest odrębnemu zagadnieniu teologii: Teologii systematycznej; Teologii praktyczno-pastoralnej; Wstępowi do Starego Testamentu wraz z egzegezą wybranych ksiąg oraz Wstępowi do Nowego Testamentu wraz z egzegezą wybranych ksiąg.\nSzczególną troskę przywiązujemy do duchowego rozwoju studentów, budowania ich charakteru, by zdobywane przez nich umiejętności połączone były z duchowym wzrostem i przekładały się na praktyczne służenie Kościołowi. Realizujemy to przez wspólną modlitwę, społeczność, rozmowy i duszpasterstwo. Słuchacze to przeważnie ludzie już dojrzali, znający podstawowe zagadnienia biblijne. W Seminarium ich wiedza zostaje pogłębiona i usystematyzowana. W przerwach pomiędzy seminariami studenci piszą prace kontrolne. Zaliczone prace wraz z obecnością na zajęciach, stanowią podstawę do przystąpienia do egzaminów.\nSeminarium ukończyło 526 studentów. Jesteśmy wdzięczni Bogu, że absolwenci zaangażowani są w służbę w Kościele! Wielu z nich pełni służbę pastorską.'
//     },
//     {
//         articleId: '1',
//         authorId: 1,
//         title: 'Esej o Masoretach',
//         date: '18 października 2023',
//         content: 'Chlubimy się tysiącletnią tradycją chrześcijaństwa w Polsce. To niewiele na tle kilku tysięcy lat dziejów przymierza Boga z człowiekiem. Pan Bóg objawił się Abrahamowi i wybrał go na swego sługę. Właściwie Abraham był, można rzec, poganinem. O Bogu, który się mu objawił, nie mógł przeczytać w żadnej z książek, przynajmniej nam nic o tym nie wiadomo. Po prostu zaufał i powód tego zaufania musiał być oczywisty. To nie własne sumienie mówiło do niego, ale jakaś ponad naturalna osoba. Zanim Abraham doświadczył głosu prawdziwego Boga, żył w aramejskiej rodzinie i miało to wpływ na każdą dziedzinę życia, również na pobożność.\nSpotkanie Abrahama z Bogiem zmieniło losy rodziny. Później nadanie prawa zmieniło rodzinę w naród. Naród otrzymał tożsamość i mógł tę tożsamość zapisać w niezwykłym piśmie złożonym z dwudziestu dwóch spółgłosek.\nW ogóle pismo fonetyczne to jedno z największych osiągnięć ludzkości. Aby pismo stało się odzwierciedleniem mowy, rodzaj ludzki potrzebował całych wieków, a może tysiącleci. Jest jednak pewien pożytek z pisma obrazkowego - można je odczytać, chociaż języki zaniknęły. Obraz i pismo obrazkowe to swoisty język eperanto.\nKsięgi mówiące o przymierzu człowieka z Bogiem były pisane hebrajskim pismem spółgłoskowym. Nie przewidziano w nim ani samogłosek, ani przerw pomiędzy wyrazami. Wydaje się, że ten fakt prawie całkowicie ograniczył możliwość czytania Starego Testamentu przez przeciętnego człowieka. Powstała również potrzeba przekazywania treści Biblii z pokolenia w pokolenie. Praktycznie, bez nauczenia się tekstu Słowa Bożego na pamięć, nie można było odczytać hebrajskiego tekstu Starego Testamentu. Gdyby zawiodło choćby jedno pokolenie uczonych, nie poznalibyśmy treści przymierza.\nPewnym ratunkiem przed zaginięciem znajomości odczytania ksiąg Starego Testamentu były tłumaczenia na inne języki. Nie zmienia to jednak faktu, że zanim powstały uznane tłumaczenia, jak np.Septuaginta, mogło upłynąć ok. 1000 lat.\nMówimy o narodzie o dłuższej historii niż nasza, narodzie, który doświadczył wielu wieków wygnania i braku własnego państwa. Ich stolica była doszczętnie burzona ponad 17 razy.\nJako naród rozumiemy, że jest sacrum i profanum - to co święte i to co pospolite. Myślę o tym, jak wielkim sacrum musiał być dla Żydów hebrajski tekst Starego Testamentu. Zadziwia zgodność pokoleń poprzez ponad dwa tysiąclecia, aby zachować dla potomnych treść przymierza.\nDopiero około dziewiątego wieku naszej ery tekst Starego Testamentu został przygotowany do czytania przez prostego człowieka. Prace nad tym trwały przez około 800 lat.\nMyślę, więc o krótkim moim życiu. Czy mam taką pasję, którą ktoś będzie kontynuował?\nMoże nie o pasję tu chodzi, ale o Tego, kto stoi ponad moimi drogami.'
//     },
// ]

const articleId = route.params.id;
// const articleId = 0
const article = articles.find((x) => articleId === x.articleId);
const images = article?.images;
const author = people.find((x) => x.id === article?.authorId);

// const articleFile = await (
//   await fetch(`/public/articles-data/${article?.path}`)
// ).text();
// console.log(articleFile);
const articleContent = marked.parse(article?.content ?? "");
</script>
